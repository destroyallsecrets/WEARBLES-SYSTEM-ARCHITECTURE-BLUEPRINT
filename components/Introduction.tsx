import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section className="glass-panel rounded-xl p-6 border-l-4 border-cyan-500">
      <h2 className="text-lg font-bold text-white mb-2">Architectural Objective</h2>
      <p className="text-slate-300 text-sm leading-relaxed">
        Design specifications for three distinct methodologies to bypass firmware constraints on proprietary optical wearable hardware. The following blueprints detail the implementation of <span className="text-cyan-400 font-mono">External Webhook Orchestration</span>, <span className="text-cyan-400 font-mono">RTMP Stream Analysis</span>, and <span className="text-cyan-400 font-mono">Native Mobile Bridge</span> via SDK.
      </p>
    </section>
  );
};

export default Introduction;
