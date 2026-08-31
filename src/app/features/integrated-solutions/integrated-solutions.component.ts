import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AxiolDataService } from '../../core/services/axiol-data.service';

@Component({
  selector: 'app-integrated-solutions',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './integrated-solutions.component.html',
  styleUrls: ['./integrated-solutions.component.scss']
})
export class IntegratedSolutionsComponent {
  public dataService = inject(AxiolDataService);

  sectors = [
    { name: 'UTILITIES AND IPPS', desc: 'Generation, storage, substations, transmission and grid studies.', icon: 'fa-tower-cell' },
    { name: 'MINING AND INDUSTRIAL', desc: 'Fuel depots, heavy power generation, hybrid renewables and reliability.', icon: 'fa-industry' },
    { name: 'COMMERCIAL INFRASTRUCTURE', desc: 'Rooftop solar, energy cost optimisation, EV charging and backup storage.', icon: 'fa-building' },
    { name: 'REMOTE COMMUNITIES', desc: 'Mini grids, microhydro, solar pumping and hybrid power systems.', icon: 'fa-tree-city' }
  ];
}
