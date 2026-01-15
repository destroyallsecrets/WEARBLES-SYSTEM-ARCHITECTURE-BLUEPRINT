import React from 'react';
import { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = ({ title, version, target, accessStatus }) => {
  return (
    <header className="border-b border-purple-800 bg-purple-950/90 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-microchip text-purple-400 text-2xl"></i>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">{title}</h1>
            <p className="text-xs text-purple-400 font-mono">{version} // {target}</p>
          </div>
        </div>
        <div className="hidden md:block">
          <span className="px-2 py-1 rounded bg-purple-900 border border-purple-700 text-xs font-mono text-purple-300">{accessStatus}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;