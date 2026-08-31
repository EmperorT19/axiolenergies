import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AxiolDataService } from '../../core/services/axiol-data.service';

@Component({
  selector: 'app-hseq-sustainability',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hseq-sustainability.component.html',
  styleUrls: ['./hseq-sustainability.component.scss']
})
export class HseqSustainabilityComponent {
  public dataService = inject(AxiolDataService);

  hseqPrinciples = [
    { title: 'SAFETY FIRST', desc: 'Risk assessment, method statements, toolbox talks, work permit controls, PPE and competent supervision.', icon: 'fa-shield-halved' },
    { title: 'ENVIRONMENTAL STEWARDSHIP', desc: 'Spill prevention, waste containment, noise control, biodiversity management and ESIA compliance.', icon: 'fa-leaf' },
    { title: 'QUALITY ASSURANCE', desc: 'Factory inspection, material verification, ITP inspection test plans and non conformance tracking.', icon: 'fa-circle-check' },
    { title: 'ESG INTEGRATION', desc: 'Governance, carbon reduction metrics, local employment, gender inclusion and community engagement.', icon: 'fa-earth-africa' }
  ];
}
