import React from 'react';
import { TechnicalSpecsProps } from '../types';

const TechnicalSpecs: React.FC<TechnicalSpecsProps> = ({ title, items }) => {
  return (
    <div>
      <h4 className="text-sm font-bold text-white mb-3 border-b border-slate-700 pb-1">{title}</h4>
      <ul className="space-y-2 text-sm text-slate-400 font-mono">
        {items.map((item, index) => (
          <li key={index}>
            <span className={item.prefixColorClass}>{item.prefix}</span> {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnicalSpecs;
