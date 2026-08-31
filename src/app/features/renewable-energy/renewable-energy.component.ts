import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AxiolDataService } from '../../core/services/axiol-data.service';

@Component({
  selector: 'app-renewable-energy',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './renewable-energy.component.html',
  styleUrls: ['./renewable-energy.component.scss']
})
export class RenewableEnergyComponent {
  public dataService = inject(AxiolDataService);
}
