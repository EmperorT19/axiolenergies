import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AxiolDataService } from '../../core/services/axiol-data.service';

@Component({
  selector: 'app-oil-gas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oil-gas.component.html',
  styleUrls: ['./oil-gas.component.scss']
})
export class OilGasComponent {
  public dataService = inject(AxiolDataService);
}
