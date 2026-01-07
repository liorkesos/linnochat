
import React from 'react';
import { Icons } from './Icons';

const ChatWidget: React.FC = () => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col h-[600px] transition-all duration-300 relative select-none pointer-events-none">
      {/* Header */}
      <div className="p-6 border-b border-gray-100 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-[#84cc16] flex items-center justify-center">
              {/* Custom Bot Icon to match screenshot */}
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" y1="16" x2="8" y2="16" />
                <line x1="16" y1="16" x2="16" y2="16" />
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#22c55e] border-[3px] border-white rounded-full"></div>
          </div>
          <div>
            <h3 className="font-extrabold text-[#111827] text-base leading-tight">Linno AI Assistant</h3>
            <p className="text-[10px] text-[#84cc16] font-black uppercase tracking-wider">SUPPORT & INTAKE MODE</p>
          </div>
        </div>
        <div className="flex items-center">
           <Icons.Zap className="w-4 h-4 text-gray-200" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-hidden p-6 space-y-6 bg-white">
        {/* Bot Message Bubble */}
        <div className="flex flex-col items-start max-w-[90%]">
          <div className="p-5 rounded-[1.5rem] rounded-tl-sm text-[#374151] text-[0.95rem] leading-relaxed shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 bg-white">
            Hi! I'm Linno. I help businesses automate Support, Client Intake, and Feedback. Which process are you looking to streamline today?
          </div>
        </div>
      </div>

      {/* Static Footer Input Area */}
      <div className="p-6 bg-white border-t border-gray-50 shrink-0">
        <div className="relative flex items-center">
          <div className="w-full bg-[#f9fafb] text-[#9ca3af] rounded-full py-4 pl-6 pr-14 border border-gray-100 text-[0.95rem]">
            Type a message...
          </div>
          <div className="absolute right-2 p-2.5 bg-[#e5e7eb] rounded-full text-white shadow-sm">
            <Icons.ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
      
      {/* Visual Overlay to simulate "still image" feel */}
      <div className="absolute inset-0 bg-transparent pointer-events-auto"></div>
    </div>
  );
};

export default ChatWidget;
