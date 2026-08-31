export interface BusinessPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  colorTheme: 'sprout' | 'forest' | 'mint' | 'emerald' | 'azure' | 'amber' | 'cyan';
  highlights: string[];
}

export interface ValueChainStage {
  step: string;
  title: string;
  action: string;
  description: string;
  icon: string;
}

export interface OperatingPrinciple {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FuelArchitectureStep {
  stepNumber: number;
  stage: string;
  description: string;
  icon: string;
}

export interface EngineeringScopeItem {
  category: string;
  details: string;
  icon: string;
}

export interface RenewableTechCategory {
  title: string;
  description: string;
  icon: string;
  badge: string;
}

export interface EngineeringStudy {
  name: string;
  type: 'DESIGN' | 'STUDY' | 'ASSURANCE';
  description: string;
}

export interface OEMPartner {
  name: string;
  role: string;
  icon: string;
}

export interface CommercialModel {
  title: string;
  description: string;
  tag: string;
}

export interface IntegratedClientSolution {
  title: string;
  description: string;
  icon: string;
}

export interface CapacityBuildingProgram {
  title: string;
  description: string;
  targetAudience: string[];
  icon: string;
}

export interface HSEQControlLoopStep {
  code: string;
  action: string;
  target: string;
}

export interface ProjectSnapshot {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  imageIcon: string;
}
