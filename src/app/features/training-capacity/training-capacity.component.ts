import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AxiolDataService } from '../../core/services/axiol-data.service';

@Component({
  selector: 'app-training-capacity',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './training-capacity.component.html',
  styleUrls: ['./training-capacity.component.scss']
})
export class TrainingCapacityComponent {
  public dataService = inject(AxiolDataService);

  targetAudiences = [
    { title: 'CLIENT OPERATORS', desc: 'Operating teams responsible for daily plant performance.', icon: 'fa-user-gear' },
    { title: 'UTILITY ENGINEERS', desc: 'Engineers managing grid integration and power distribution.', icon: 'fa-user-shield' },
    { title: 'CONTRACTORS AND TECHNICIANS', desc: 'Field teams executing installation and maintenance tasks.', icon: 'fa-users-gear' },
    { title: 'INSTITUTIONAL TEAMS', desc: 'Regulators, asset managers and public sector infrastructure leads.', icon: 'fa-building-user' }
  ];
}
