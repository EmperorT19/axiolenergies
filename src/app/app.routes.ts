import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Axiol Energies | Integrated Energy & Infrastructure'
  },
  {
    path: 'overview',
    loadComponent: () => import('./features/overview/overview.component').then(m => m.OverviewComponent),
    title: 'Corporate Overview | Axiol Energies'
  },
  {
    path: 'oil-gas',
    loadComponent: () => import('./features/oil-gas/oil-gas.component').then(m => m.OilGasComponent),
    title: 'Oil & Gas Solutions | Axiol Energies'
  },
  {
    path: 'renewable-energy',
    loadComponent: () => import('./features/renewable-energy/renewable-energy.component').then(m => m.RenewableEnergyComponent),
    title: 'Renewable Energy Portfolio | Axiol Energies'
  },
  {
    path: 'electrical-infra',
    loadComponent: () => import('./features/electrical-infra/electrical-infra.component').then(m => m.ElectricalInfraComponent),
    title: 'Electrical Infrastructure | Axiol Energies'
  },
  {
    path: 'epc-projects',
    loadComponent: () => import('./features/epc-projects/epc-projects.component').then(m => m.EpcProjectsComponent),
    title: 'Project Development & EPC | Axiol Energies'
  },
  {
    path: 'engineering-consulting',
    loadComponent: () => import('./features/engineering-consulting/engineering-consulting.component').then(m => m.EngineeringConsultingComponent),
    title: 'Engineering Design & Consulting | Axiol Energies'
  },
  {
    path: 'equipment-warehousing',
    loadComponent: () => import('./features/equipment-warehousing/equipment-warehousing.component').then(m => m.EquipmentWarehousingComponent),
    title: 'Equipment Distribution & Warehousing | Axiol Energies'
  },
  {
    path: 'training-capacity',
    loadComponent: () => import('./features/training-capacity/training-capacity.component').then(m => m.TrainingCapacityComponent),
    title: 'Training & Capacity Building | Axiol Energies'
  },
  {
    path: 'integrated-solutions',
    loadComponent: () => import('./features/integrated-solutions/integrated-solutions.component').then(m => m.IntegratedSolutionsComponent),
    title: 'Integrated Client Solutions | Axiol Energies'
  },
  {
    path: 'hseq-sustainability',
    loadComponent: () => import('./features/hseq-sustainability/hseq-sustainability.component').then(m => m.HseqSustainabilityComponent),
    title: 'HSEQ, Sustainability & ESG | Axiol Energies'
  },
  {
    path: 'commercial-models',
    loadComponent: () => import('./features/commercial-models/commercial-models.component').then(m => m.CommercialModelsComponent),
    title: 'Technology Ecosystem & Commercial Models | Axiol Energies'
  },
  {
    path: 'portfolio-contact',
    loadComponent: () => import('./features/portfolio-contact/portfolio-contact.component').then(m => m.PortfolioContactComponent),
    title: 'Portfolio & Contact | Axiol Energies'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
