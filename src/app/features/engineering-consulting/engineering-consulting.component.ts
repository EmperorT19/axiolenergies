import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AxiolDataService } from '../../core/services/axiol-data.service';

@Component({
  selector: 'app-engineering-consulting',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './engineering-consulting.component.html',
  styleUrls: ['./engineering-consulting.component.scss']
})
export class EngineeringConsultingComponent {
  public dataService = inject(AxiolDataService);

  consultingServices = [
    { title: 'CONCEPT AND PRELIMINARY DESIGN', desc: 'Options analysis, design basis, layouts and preliminary sizing.' },
    { title: 'DETAILED ENGINEERING', desc: 'Civil, mechanical, electrical and protection drawings and specs.' },
    { title: 'GRID INTERCONNECTION', desc: 'Compliance studies, power quality and interconnection documentation.' },
    { title: 'OWNER ENGINEERING', desc: 'Independent review, design checks, factory testing and site oversight.' }
  ];
}
