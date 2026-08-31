import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AxiolDataService } from '../../core/services/axiol-data.service';

@Component({
  selector: 'app-oil-gas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './oil-gas.component.html',
  styleUrls: ['./oil-gas.component.scss']
})
export class OilGasComponent {
  public dataService = inject(AxiolDataService);
}
