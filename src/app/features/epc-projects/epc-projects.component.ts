import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AxiolDataService } from '../../core/services/axiol-data.service';

@Component({
  selector: 'app-epc-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './epc-projects.component.html',
  styleUrls: ['./epc-projects.component.scss']
})
export class EpcProjectsComponent {
  public dataService = inject(AxiolDataService);

  epcDetails = [
    { title: 'PROJECT ORIGINATION', desc: 'Opportunity screening, development strategy, land and site control and project rights coordination.' },
    { title: 'FEASIBILITY AND BANKABILITY', desc: 'Resource assessment, technical studies, financial inputs, ESIA and grid interconnection.' },
    { title: 'ENGINEERING', desc: 'Design basis, FEED, detailed design, specifications, bills of quantities and construction documentation.' },
    { title: 'PROCUREMENT', desc: 'OEM engagement, bid evaluation, logistics, inspections, warranty and supply chain management.' },
    { title: 'CONSTRUCTION AND COMMISSIONING', desc: 'Site management, HSEQ, QA/QC, testing, energisation, performance verification and handover.' },
    { title: 'OPERATIONS AND MAINTENANCE', desc: 'Preventive maintenance, spares, monitoring, performance optimisation and lifecycle support.' }
  ];
}
