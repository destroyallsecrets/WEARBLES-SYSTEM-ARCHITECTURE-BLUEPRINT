import React from 'react';
import { ExplanationPanelProps } from '../types';

const ExplanationPanel: React.FC<ExplanationPanelProps> = ({ title, explanation, onClose }) => {
  return (
    <div className="glass-panel rounded-xl p-6 border-l-4 border-cyan-500 mb-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-cyan-400">{title}</h3>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors duration-200"
          aria-label="Close explanation"
        >
          <i className="fa-solid fa-times-circle text-xl"></i>
        </button>
      </div>
      <p className="text-slate-300 text-sm leading-relaxed">
        {explanation}
      </p>
    </div>
  );
};

export default ExplanationPanel;
