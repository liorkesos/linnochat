import React from 'react';
import { Icons } from './Icons';

const ChatWidget: React.FC = () => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-white/5 flex flex-col h-[420px] transition-all duration-300 relative bg-white dark:bg-dark-900">
      {/* Header - Mirroring the reference image exactly */}
      <div className="p-6 border-b border-gray-100 dark:border-white/5 bg-white dark:bg-dark-800 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-[#84cc16] flex items-center justify-center shadow-inner">
              <Icons.Bot className="w-8 h-8 text-white" />
            </div>
            {/* Presence Indicator */}
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#4ade80] border-[3px] border-white dark:border-dark-800 rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-[#1e293b] dark:text-white text-lg leading-tight tracking-tight">Linno AI Assistant</h3>
            <p className="text-[11px] text-[#84cc16] font-extrabold uppercase tracking-[0.1em] mt-0.5">SUPPORT & INTAKE MODE</p>
          </div>
        </div>
        <div className="opacity-20">
          <Icons.Zap className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Messages Area - Static "Image" Look */}
      <div className="flex-1 p-6 space-y-6 bg-gradient-to-b from-[#fcfdfa] to-white dark:from-dark-900 dark:to-dark-950">
        <div className="flex flex-col items-start animate-fade-in">
          <div className="max-w-[90%] p-5 bg-white dark:bg-dark-800 text-[#334155] dark:text-gray-100 rounded-[24px] rounded-bl-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 dark:border-white/5 text-[15px] leading-relaxed">
            Hi! I'm Linno. I help businesses automate Support, Client Intake, and Feedback. Which process are you looking to streamline today?
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;