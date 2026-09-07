import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AxiolDataService } from '../../core/services/axiol-data.service';

@Component({
  selector: 'app-renewable-energy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './renewable-energy.component.html',
  styleUrls: ['./renewable-energy.component.scss']
})
export class RenewableEnergyComponent {
  public dataService = inject(AxiolDataService);
}
