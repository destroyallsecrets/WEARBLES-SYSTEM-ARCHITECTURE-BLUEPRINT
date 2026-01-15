export interface HeaderProps {
  title: string;
  version: string;
  target: string;
  accessStatus: string;
}

export interface DiagramNode {
  text: string;
  className?: string;
  subNodes?: DiagramNode[][];
  explanation?: string; // Added explanation property
}

export interface DiagramProps {
  iconClass: string;
  iconColorClass: string;
  title: string;
  nodes: DiagramNode[];
  archIndex: number; // Added for identifying the parent architecture section
  onNodeClick: (archIndex: number, nodeIndex: number) => void;
  selectedNodeInfo: { archIndex: number; nodeIndex: number; } | null;
}

export interface SpecItem {
  prefix: string;
  prefixColorClass: string;
  content: string;
}

export interface TechnicalSpecsProps {
  title: string;
  items: SpecItem[];
}

export interface ArchitectureData {
  id: string; // Added for scrolling
  methodTag: string;
  methodTagColorClass: string;
  title: string;
  diagram: Omit<DiagramProps, 'archIndex' | 'onNodeClick' | 'selectedNodeInfo'>; // Modified to remove interaction props
  ingestionProtocol: TechnicalSpecsProps;
  computeStack: TechnicalSpecsProps;
}

export interface ExplanationPanelProps {
  title: string;
  explanation: string;
  onClose: () => void;
}
