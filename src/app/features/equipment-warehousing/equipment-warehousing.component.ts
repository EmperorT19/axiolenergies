import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AxiolDataService } from '../../core/services/axiol-data.service';

@Component({
  selector: 'app-equipment-warehousing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './equipment-warehousing.component.html',
  styleUrls: ['./equipment-warehousing.component.scss']
})
export class EquipmentWarehousingComponent {
  public dataService = inject(AxiolDataService);

  warehousingSteps = [
    { step: '01', title: 'SOURCE', desc: 'Global procurement with bankable top tier manufacturers.', icon: 'fa-earth-americas' },
    { step: '02', title: 'STORE', desc: 'Regional warehouse staging and inventory management.', icon: 'fa-warehouse' },
    { step: '03', title: 'DELIVER', desc: 'Secure transit logistics, site drop and pre inspected customs clearance.', icon: 'fa-truck-fast' },
    { step: '04', title: 'SUPPORT', desc: 'Spares buffering, warranty administration and after sales technical support.', icon: 'fa-headset' }
  ];
}
