import { Injectable } from '@angular/core';
import { 
  BusinessPillar, 
  ValueChainStage, 
  OperatingPrinciple, 
  FuelArchitectureStep,
  EngineeringScopeItem,
  RenewableTechCategory,
  EngineeringStudy,
  OEMPartner,
  CommercialModel,
  IntegratedClientSolution,
  CapacityBuildingProgram,
  HSEQControlLoopStep,
  ProjectSnapshot
} from '../models/axiol-data.model';

@Injectable({
  providedIn: 'root'
})
export class AxiolDataService {

  readonly corporateOverview = {
    tagline: "INTEGRATED ENERGY. ENGINEERED FOR THE FUTURE.",
    companyName: "Axiol Energies Limited",
    headOffice: "KMA Centre Block B, Upperhill, Nairobi, Kenya",
    phone: "+254 715 296 278",
    email: "contact@axiolenergies.com",
    summary: "Axiol Energies Limited is an integrated energy and infrastructure company delivering conventional energy, renewable power, electrical infrastructure and human capacity solutions across Africa.",
    vision: "To be a trusted African energy and infrastructure partner enabling reliable, affordable and sustainable growth.",
    mission: "To develop, engineer and deliver safe, bankable and technology driven energy solutions.",
    purpose: "To connect energy demand with practical infrastructure: from fuel systems and power networks to renewable generation, storage and skills.",
    philosophy: "Safety first. Engineering discipline. Commercial clarity. Technology quality. Local capability. Lasting asset performance."
  };

  readonly growthPhases = [
    {
      step: '01',
      stage: 'SOIL AND ROOTED FOUNDATION',
      title: 'Rooting Baseload Energy Security',
      metric: '+150 MW Stable Baseload',
      capacityGrowth: '35%',
      decarbonization: '15% Baseline Reduction',
      description: 'Nurturing deep engineering foundations by securing fuel supply chains, building leakproof storage, and fortifying electrical transmission grids.',
      icon: 'fa-seedling',
      color: 'sprout',
      badge: 'Stage 1: Groundwork & Stability',
      highlights: ['Secure Petroleum Depots', 'Grid Substation Reinforcement', 'Root Level HSEQ Protocols']
    },
    {
      step: '02',
      stage: 'SPROUT AND HYBRID TRANSITION',
      title: 'Sprouting Solar and BESS Hybridization',
      metric: '+450 MWh Energy Storage',
      capacityGrowth: '70%',
      decarbonization: '60% Hybrid Decarbonization',
      description: 'Transitioning energy architecture by sprouting utility scale solar PV arrays, battery storage, and smart microgrids alongside existing infrastructure.',
      icon: 'fa-leaf',
      color: 'sprout',
      badge: 'Stage 2: Hybrid Sprout & Scaling',
      highlights: ['Utility Solar PV Farms', 'BESS Battery Load Shifting', 'Grid Interconnection Telemetry']
    },
    {
      step: '03',
      stage: 'CANOPY AND ECOLOGICAL FLOURISH',
      title: 'Flourishing Zero Carbon Ecosystems',
      metric: '100% Sustainable Microgrids',
      capacityGrowth: '100%',
      decarbonization: '95%+ Clean Energy Canopy',
      description: 'Establishing fully mature, zero carbon energy canopies that power industries, train local engineers, and sustain green community ecosystems.',
      icon: 'fa-tree',
      color: 'forest',
      badge: 'Stage 3: Full Ecosystem Canopy',
      highlights: ['Self Sustaining Mini Grids', 'Green Hydrogen Integration', 'Local Human Capacity Transfer']
    }
  ];

  readonly pillars: BusinessPillar[] = [
    {
      id: 'oil-gas',
      title: 'OIL AND GAS',
      subtitle: 'Petroleum Infrastructure and Fuel Management',
      description: 'Bulk supply, tanks, pumps, metering and petroleum infrastructure.',
      icon: 'fa-oil-well',
      colorTheme: 'sprout',
      highlights: ['Bulk Fuel Supply and Storage', 'Smart Metering and Reconciliation', 'Fuel Depots and Distribution', 'Lifecycle Support and Maintenance']
    },
    {
      id: 'renewable',
      title: 'RENEWABLE ENERGY',
      subtitle: 'Clean Generation and Storage Portfolio',
      description: 'Solar, wind, BESS, hydro, geothermal and green molecules.',
      icon: 'fa-solar-panel',
      colorTheme: 'sprout',
      highlights: ['Utility Grid Scale and Commercial Solar PV', 'Battery Energy Storage Systems BESS', 'Wind and Hydro Infrastructure', 'Green Hydrogen and Ammonia Solutions']
    },
    {
      id: 'electrical',
      title: 'ELECTRICAL INFRASTRUCTURE',
      subtitle: 'Transmission, Distribution and Grid Protection',
      description: 'Distribution, transmission, substations, protection and controls.',
      icon: 'fa-bolt',
      colorTheme: 'forest',
      highlights: ['Power Lines and Substations', 'SCADA and Smart Grid Telecommunications', 'Industrial Power Distribution and Protection', 'Grid Interconnection and Compliance']
    },
    {
      id: 'training',
      title: 'TRAINING AND CAPACITY',
      subtitle: 'Human Capital and OEM Certification',
      description: 'Technical, safety, OEM, commissioning and institutional learning.',
      icon: 'fa-graduation-cap',
      colorTheme: 'mint',
      highlights: ['Solar PV and BESS Commissioning', 'Petroleum Safety and Elevated Work', 'OEM Technical Certification', 'Utilities and Institutional Training']
    }
  ];

  readonly valueChainStages: ValueChainStage[] = [
    { step: '01', title: 'DEVELOP', action: 'Originate', description: 'Feasibility, site screening, land control, permits, stakeholder coordination and bankability.', icon: 'fa-compass-drafting' },
    { step: '02', title: 'ENGINEER', action: 'Engineer', description: 'FEED, detailed design, load flow, short circuit, protection and construction specs.', icon: 'fa-microchip' },
    { step: '03', title: 'PROCURE', action: 'Source', description: 'Bankable technology, top tier OEMs, quality assurance, global supply chain and logistics.', icon: 'fa-boxes-packing' },
    { step: '04', title: 'CONSTRUCT', action: 'Build', description: 'Civil, mechanical and electrical execution, site HSEQ, quality control and field management.', icon: 'fa-screwdriver-wrench' },
    { step: '05', title: 'COMMISSION', action: 'Test and Handover', description: 'Testing, energisation, grid compliance, performance verification and asset handover.', icon: 'fa-square-check' },
    { step: '06', title: 'OPERATE', action: 'Optimise', description: 'Preventive operation maintenance, continuous monitoring, spare parts inventory and lasting asset optimization.', icon: 'fa-chart-line' }
  ];

  readonly operatingPrinciples: OperatingPrinciple[] = [
    { id: 'safety', title: 'SAFETY FIRST', description: 'Design and execute around people, assets and operating risk.', icon: 'fa-shield-halved' },
    { id: 'tech', title: 'TECHNOLOGY QUALITY', description: 'Select purpose built equipment with bankable warranties and support.', icon: 'fa-award' },
    { id: 'commercial', title: 'COMMERCIAL CLARITY', description: 'Define scope, interfaces, performance and lifecycle responsibilities.', icon: 'fa-file-signature' },
    { id: 'local', title: 'LOCAL CAPABILITY', description: 'Build local supplier, technician and client capability into delivery.', icon: 'fa-users' }
  ];

  readonly fuelArchitecture: FuelArchitectureStep[] = [
    { stepNumber: 1, stage: 'STORE', description: 'Sized and compliant tanks', icon: 'fa-database' },
    { stepNumber: 2, stage: 'TRANSFER', description: 'Pumps and piping lines', icon: 'fa-network-wired' },
    { stepNumber: 3, stage: 'DISPENSE', description: 'Safe controlled issue', icon: 'fa-gas-pump' },
    { stepNumber: 4, stage: 'MEASURE', description: 'Metering and reconciliation records', icon: 'fa-gauge-high' },
    { stepNumber: 5, stage: 'REORDER', description: 'Planned replenishment and stock management', icon: 'fa-truck-droplet' }
  ];

  get fuelSteps(): FuelArchitectureStep[] {
    return this.fuelArchitecture;
  }

  readonly engineeringScope: EngineeringScopeItem[] = [
    { category: 'Tank Systems', details: 'Sizing, foundations, bunding, vents and level controls.', icon: 'fa-cubes' },
    { category: 'Pumps and Piping', details: 'Duty selection, filters, valves, hoses and transfer lines.', icon: 'fa-code-branch' },
    { category: 'Metering', details: 'Dispensing meters, reconciliation and fuel management controls.', icon: 'fa-tachograph-digital' },
    { category: 'Safety Controls', details: 'Spill containment, earthing, fire safety and operating procedures.', icon: 'fa-fire-extinguisher' },
    { category: 'Automation', details: 'Access control, monitoring, alerts and consumption visibility.', icon: 'fa-network-wired' },
    { category: 'Lifecycle Support', details: 'Inspection, servicing, spares and maintenance planning.', icon: 'fa-wrench' }
  ];

  readonly renewableCategories: RenewableTechCategory[] = [
    { title: 'SOLAR PV', description: 'Utility grid scale, rooftop, ground mount, carports, mini grids and solar pumping.', icon: 'fa-sun', badge: 'Top Tier Modules' },
    { title: 'WIND ENERGY', description: 'Wind resource assessment, farm design, grid integration and hybrid systems.', icon: 'fa-wind', badge: 'Clean Generation' },
    { title: 'BESS', description: 'Resilience, peak shaving, load shifting, smoothing, grid support and grid forming.', icon: 'fa-battery-full', badge: 'Storage Tech' },
    { title: 'HYDROPOWER', description: 'Run of river, reservoir, mini hydro, pumped storage and multipurpose schemes.', icon: 'fa-water', badge: 'Base Power' },
    { title: 'GEOTHERMAL', description: 'Resource to power development, steamfield interfaces, plant integration and grid connection.', icon: 'fa-volcano', badge: 'Firm Power' },
    { title: 'GREEN HYDROGEN AND AMMONIA', description: 'Renewable power, electrolysis, hydrogen handling, ammonia synthesis and storage.', icon: 'fa-flask-vial', badge: 'Green Molecules' },
    { title: 'HYBRID SYSTEMS', description: 'Solar plus wind plus BESS and grid plus renewable plus storage architectures.', icon: 'fa-diagram-project', badge: 'Integrated' },
    { title: 'COMMERCIAL ENERGY', description: 'Rooftop and ground mount systems integrated with storage and energy management.', icon: 'fa-industry', badge: 'Commercial' }
  ];

  readonly engineeringStudies: EngineeringStudy[] = [
    { name: 'LOAD FLOW', type: 'STUDY', description: 'Voltage profiles, system capacity and power losses.' },
    { name: 'SHORT CIRCUIT', type: 'STUDY', description: 'Fault currents, equipment ratings and thermal limits.' },
    { name: 'PROTECTION', type: 'STUDY', description: 'Relay coordination, selectivity and trip settings.' },
    { name: 'GRID CODE', type: 'ASSURANCE', description: 'Compliance, dynamic stability and power quality.' },
    { name: 'ENERGY MODELLING', type: 'DESIGN', description: 'Yield calculation, degradation and financial dispatch.' },
    { name: 'DESIGN REVIEW', type: 'ASSURANCE', description: 'FEED verification, BoQ audit and risk mitigation.' }
  ];

  readonly oemPartners: OEMPartner[] = [
    { name: 'TRINA SOLAR', role: 'PV Modules and Solar Technology', icon: 'fa-solar-panel' },
    { name: 'LONGI SOLAR', role: 'PV Modules and Solar Technology', icon: 'fa-sun' },
    { name: 'HUAWEI', role: 'Digital Power, Inverters, BESS and Controls', icon: 'fa-microchip' },
    { name: 'SUNGROW', role: 'Inverters, PCS and Energy Storage', icon: 'fa-plug-circle-bolt' },
    { name: 'JINKO SOLAR', role: 'PV Modules and Solar Technology', icon: 'fa-solar-panel' }
  ];

  readonly commercialModels: CommercialModel[] = [
    { title: 'EPC', description: 'Engineering, procurement and construction under defined scope, programme and performance requirements.', tag: 'Turnkey' },
    { title: 'EPC AND FINANCE SUPPORT', description: 'Coordination with lenders, investors, OEM financing and climate finance channels where appropriate.', tag: 'Structured' },
    { title: 'BUILD OPERATE TRANSFER', description: 'Construction, operating period and eventual transfer for suitable infrastructure.', tag: 'BOT' },
    { title: 'INDEPENDENT POWER PRODUCER', description: 'Renewable generation under lasting offtake, wheeling or captive power arrangements.', tag: 'IPP' },
    { title: 'ENERGY AS A SERVICE', description: 'Eligible commercial systems structured around service payments linked to availability or delivered energy.', tag: 'EaaS' },
    { title: 'SUPPLY AND OPERATION MAINTENANCE', description: 'Equipment supply combined with installation, commissioning, spares, warranty and maintenance support.', tag: 'Lifecycle' }
  ];

  readonly integratedSolutions: IntegratedClientSolution[] = [
    { title: 'SOLAR AND BESS', description: 'Daytime generation, resilience and load shifting for grid autonomy.', icon: 'fa-sun' },
    { title: 'WIND AND BESS', description: 'Hybrid generation with smoothing and dispatch support for power stability.', icon: 'fa-wind' },
    { title: 'GRID SOLAR BESS', description: 'Lower cost energy with backup and intelligent dispatch control.', icon: 'fa-bolt' },
    { title: 'FUEL AND POWER', description: 'Petroleum supply integrated with onsite generation and microgrid controls.', icon: 'fa-gas-pump' },
    { title: 'ELECTRIC VEHICLE AND GRID', description: 'Charging, metering, distribution upgrades and fleet energy management.', icon: 'fa-charging-station' }
  ];

  readonly capacityPrograms: CapacityBuildingProgram[] = [
    { title: 'Technical Training', description: 'Solar PV, BESS, electrical systems, petroleum infrastructure, commissioning and maintenance.', targetAudience: ['Engineers', 'Technicians'], icon: 'fa-gears' },
    { title: 'Safety Training', description: 'Electrical safety, petroleum safety, elevated work awareness, emergency response and HSEQ.', targetAudience: ['Operators', 'Contractors'], icon: 'fa-shield-heart' },
    { title: 'OEM and Product Training', description: 'Product architecture, installation, commissioning, monitoring, diagnostics and warranty practices.', targetAudience: ['Field Engineers'], icon: 'fa-certificate' },
    { title: 'Project Development', description: 'Feasibility, permitting, grid interconnection, commercial structuring and project finance concepts.', targetAudience: ['Government', 'Utilities'], icon: 'fa-chart-pie' },
    { title: 'Institutional Capacity', description: 'Tailored programmes for utilities, government, corporations, contractors and education institutions.', targetAudience: ['Utilities', 'IPPs'], icon: 'fa-building-columns' },
    { title: 'Knowledge Transfer', description: 'Train the trainer, practical demonstrations, project handover training and structured skills transfer.', targetAudience: ['Client Staff', 'Graduates'], icon: 'fa-user-graduate' }
  ];

  readonly hseqLoop: HSEQControlLoopStep[] = [
    { code: 'H', action: 'IDENTIFY', target: 'Hazards' },
    { code: 'R', action: 'ASSESS', target: 'Risks' },
    { code: 'C', action: 'CONTROL', target: 'Mitigation' },
    { code: 'V', action: 'VERIFY', target: 'Inspect' },
    { code: 'L', action: 'LEARN', target: 'Improve' },
    { code: 'D', action: 'DOCUMENT', target: 'Record' }
  ];

  readonly projectSnapshots: ProjectSnapshot[] = [
    { id: 'p1', title: '50MW Utility Solar and 100MWh BESS', category: 'RENEWABLE ENERGY', location: 'East Africa', description: 'Grid connected solar generation with fast response battery storage for grid frequency stability.', imageIcon: 'fa-solar-panel' },
    { id: 'p2', title: 'Integrated Mining Fuel Depot and Microgrid', category: 'OIL AND GAS HYBRID', location: 'Sub Saharan Africa', description: '4,000,000L engineered fuel storage bunded tanks with integrated automated dispensing and 5MW solar microgrid.', imageIcon: 'fa-oil-well' },
    { id: 'p3', title: '132kV Substation and High Voltage Line', category: 'ELECTRICAL INFRASTRUCTURE', location: 'West Africa', description: 'Primary switching station, line bays, digital protection relays, and SCADA telecommunications link.', imageIcon: 'fa-bolt' },
    { id: 'p4', title: '12MW Industrial Rooftop and Storage', category: 'COMMERCIAL ENERGY', location: 'Southern Africa', description: 'Facility localized solar PV installation for industrial manufacturing facility reducing peak tariff costs by 40%.', imageIcon: 'fa-industry' }
  ];
}
