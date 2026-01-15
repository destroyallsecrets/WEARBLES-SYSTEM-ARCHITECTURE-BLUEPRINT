import React, { useRef } from 'react';
import { ArchitectureData } from '../types';
import FlowDiagram from './FlowDiagram';
import TechnicalSpecs from './TechnicalSpecs';
import ExplanationPanel from './ExplanationPanel';

interface ArchitectureSectionProps {
  data: ArchitectureData;
  archIndex: number;
  onNodeClick: (archIndex: number, nodeIndex: number) => void;
  selectedNodeInfo: { archIndex: number; nodeIndex: number; } | null;
  explanationPanelRef: React.RefObject<HTMLDivElement>;
}

const ArchitectureSection: React.FC<ArchitectureSectionProps> = ({ data, archIndex, onNodeClick, selectedNodeInfo, explanationPanelRef }) => {
  const { methodTag, methodTagColorClass, title, diagram, ingestionProtocol, computeStack } = data;

  const isNodeSelectedInThisSection = selectedNodeInfo && selectedNodeInfo.archIndex === archIndex;
  const selectedNode = isNodeSelectedInThisSection ? diagram.nodes[selectedNodeInfo.nodeIndex] : null;

  const handleCloseExplanation = () => {
    onNodeClick(-1, -1); // Deselects any node
  };

  return (
    <section id={data.id} className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <span className={`${methodTagColorClass} text-white text-xs font-bold px-2 py-1 rounded`}>{methodTag}</span>
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>

      <FlowDiagram
        {...diagram}
        archIndex={archIndex}
        onNodeClick={onNodeClick}
        selectedNodeInfo={selectedNodeInfo}
      />

      {selectedNode && selectedNode.explanation && (
        <div ref={isNodeSelectedInThisSection ? explanationPanelRef : null} className="mt-4">
          <ExplanationPanel
            title={selectedNode.text}
            explanation={selectedNode.explanation}
            onClose={handleCloseExplanation}
          />
        </div>
      )}

      <div className="glass-panel rounded-xl p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <TechnicalSpecs {...ingestionProtocol} />
          <TechnicalSpecs {...computeStack} />
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
