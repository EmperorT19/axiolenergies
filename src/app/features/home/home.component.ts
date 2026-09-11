import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AxiolDataService } from '../../core/services/axiol-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public dataService = inject(AxiolDataService);

  activeGrowthIndex = 0;
  activeStageIndex = 0;

  setActiveGrowth(index: number): void {
    this.activeGrowthIndex = index;
  }

  setActiveStage(index: number): void {
    this.activeStageIndex = index;
  }

  nextStage(): void {
    this.activeStageIndex = (this.activeStageIndex + 1) % this.dataService.valueChainStages.length;
  }

  prevStage(): void {
    this.activeStageIndex = (this.activeStageIndex - 1 + this.dataService.valueChainStages.length) % this.dataService.valueChainStages.length;
  }

  getStageAngle(index: number): number {
    // Position 6 nodes evenly around a 360deg circle starting from top (-90deg)
    return -90 + (index * 60);
  }
}
