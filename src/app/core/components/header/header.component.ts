import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private router = inject(Router);

  mobileMenuOpen = false;
  megaMenuOpen = false;
  private megaCloseTimeout: any;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.updateBodyScroll();
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    this.updateBodyScroll();
  }

  toggleMegaMenu(event: Event): void {
    event.stopPropagation();
    if (this.megaCloseTimeout) {
      clearTimeout(this.megaCloseTimeout);
    }
    this.megaMenuOpen = !this.megaMenuOpen;
  }

  openMegaMenu(): void {
    if (this.megaCloseTimeout) {
      clearTimeout(this.megaCloseTimeout);
    }
    this.megaMenuOpen = true;
  }

  closeMegaMenu(): void {
    if (this.megaCloseTimeout) {
      clearTimeout(this.megaCloseTimeout);
    }
    this.megaMenuOpen = false;
  }

  onMegaMouseEnter(): void {
    if (this.megaCloseTimeout) {
      clearTimeout(this.megaCloseTimeout);
    }
    this.megaMenuOpen = true;
  }

  onMegaMouseLeave(): void {
    if (this.megaCloseTimeout) {
      clearTimeout(this.megaCloseTimeout);
    }
    // 250ms grace period so moving the cursor diagonally never drops the dropdown
    this.megaCloseTimeout = setTimeout(() => {
      this.megaMenuOpen = false;
    }, 250);
  }

  isPillarsActive(): boolean {
    const url = this.router.url;
    return ['/overview', '/oil-gas', '/renewable-energy', '/electrical-infra', '/training-capacity'].some(p => url.startsWith(p));
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-mega-item')) {
      this.closeMegaMenu();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMegaMenu();
    this.closeMobileMenu();
  }

  private updateBodyScroll(): void {
    if (typeof document !== 'undefined') {
      if (this.mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }
}

