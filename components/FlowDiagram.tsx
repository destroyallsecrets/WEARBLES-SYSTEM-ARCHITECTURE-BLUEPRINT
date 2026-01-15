import React from 'react';
import { DiagramProps, DiagramNode } from '../types';

const FlowDiagram: React.FC<DiagramProps> = ({ iconClass, iconColorClass, title, nodes, archIndex, onNodeClick, selectedNodeInfo }) => {

  const renderNode = (node: DiagramNode, nodeIndex: number) => {
    const isSelected = selectedNodeInfo && selectedNodeInfo.archIndex === archIndex && selectedNodeInfo.nodeIndex === nodeIndex;
    const nodeClasses = `diagram-node w-full md:w-2/3 ${node.className || ''} ${isSelected ? 'selected-diagram-node' : ''}`;

    return (
      <React.Fragment key={nodeIndex}>
        {node.subNodes ? (
          <div
            className={`p-4 border border-dashed ${node.className || 'border-slate-500/50'} rounded w-full md:w-2/3 bg-slate-800/30 ${isSelected ? 'selected-diagram-node' : ''}`}
            onClick={() => onNodeClick(archIndex, nodeIndex)}
          >
            <p className="text-cyan-400 mb-2 font-bold">{node.text}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {node.subNodes.map((row, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                      {row.map((subNode, subIndex) => (
                          <div key={`${rowIndex}-${subIndex}`} className={`diagram-node bg-slate-900 ${subNode.className || ''}`}>{subNode.text}</div>
                      ))}
                  </React.Fragment>
              ))}
            </div>
          </div>
        ) : (
          <div
            className={nodeClasses}
            onClick={() => onNodeClick(archIndex, nodeIndex)}
          >
            {node.text}
          </div>
        )}
      </React.Fragment>
    );
  };

  return (
    <div className="glass-panel rounded-xl overflow-hidden">
      <div className="bg-slate-800/50 p-4 border-b border-slate-700 flex justify-between items-center">
        <h3 className={`font-mono text-sm ${iconColorClass.replace('text-', 'text-')}`}>{title}</h3>
        <i className={`${iconClass} ${iconColorClass}`}></i>
      </div>
      <div className="p-6">
        <div className="flex flex-col items-center space-y-2 mb-8 font-mono text-xs text-slate-300">
          {nodes.map((node, index) => (
            <React.Fragment key={index}>
              {renderNode(node, index)}
              {index < nodes.length - 1 && <div className="arrow-down"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowDiagram;
