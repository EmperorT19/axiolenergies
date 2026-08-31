import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AxiolDataService } from '../../core/services/axiol-data.service';

@Component({
  selector: 'app-portfolio-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio-contact.component.html',
  styleUrls: ['./portfolio-contact.component.scss']
})
export class PortfolioContactComponent {
  public dataService = inject(AxiolDataService);

  formData = {
    fullName: '',
    email: '',
    organization: '',
    pillar: '',
    message: ''
  };

  formSubmitted = false;

  axiolAdvantages = [
    { title: 'ONE ENERGY PARTNER', desc: 'Fuel, renewables, storage, networks and technical support through one platform.', icon: 'fa-solid fa-layer-group' },
    { title: 'COMPLETE TURNKEY DELIVERY', desc: 'Development, engineering, procurement, construction, commissioning and lifecycle support.', icon: 'fa-solid fa-arrows-spin' },
    { title: 'MULTITECHNOLOGY', desc: 'Conventional energy, solar, wind, hydro, geothermal, BESS and green molecules.', icon: 'fa-solid fa-cubes' },
    { title: 'AFRICA FOCUS', desc: 'Solutions designed around local conditions, skills, logistics and lasting support.', icon: 'fa-solid fa-earth-africa' }
  ];

  onSubmit(): void {
    if (this.formData.fullName && this.formData.email && this.formData.message) {
      this.formSubmitted = true;
    }
  }
}
