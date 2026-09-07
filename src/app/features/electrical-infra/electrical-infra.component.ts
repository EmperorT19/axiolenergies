import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AxiolDataService } from '../../core/services/axiol-data.service';

@Component({
  selector: 'app-electrical-infra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './electrical-infra.component.html',
  styleUrls: ['./electrical-infra.component.scss']
})
export class ElectricalInfraComponent {
  public dataService = inject(AxiolDataService);

  networkCapabilities = [
    'LV / MV distribution networks',
    'High-voltage transmission lines',
    'Substations & switching stations',
    'Transformers and switchgear',
    'Underground cable networks',
    'Protection & control systems',
    'SCADA and telecommunications',
    'Metering and smart-grid infrastructure',
    'Industrial electrical systems',
    'Testing, commissioning & O&M'
  ];
}
