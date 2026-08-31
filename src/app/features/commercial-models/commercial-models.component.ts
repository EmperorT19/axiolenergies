import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AxiolDataService } from '../../core/services/axiol-data.service';

@Component({
  selector: 'app-commercial-models',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './commercial-models.component.html',
  styleUrls: ['./commercial-models.component.scss']
})
export class CommercialModelsComponent {
  public dataService = inject(AxiolDataService);

  decisionCriteria = [
    { title: 'BANKABLE TECHNOLOGY', desc: 'Established OEMs, warranties, performance data and financing acceptance.' },
    { title: 'INTERFACE CLARITY', desc: 'Clear battery limits, grid access points and commercial handoffs.' },
    { title: 'RISK ALLOCATION', desc: 'Performance guarantees, liquidated damages and force majeure provisions.' },
    { title: 'LIFECYCLE COST', desc: 'Optimising Capex versus Opex for lowest levelised cost of energy.' }
  ];
}
