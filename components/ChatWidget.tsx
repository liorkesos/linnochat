import React from 'react';
import { Icons } from './Icons';

const ChatWidget: React.FC = () => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-[32px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.15)] border border-gray-100 dark:border-white/5 flex flex-col h-[700px] transition-all duration-300 relative bg-white dark:bg-dark-900 pointer-events-none">
      {/* Header - LinnoChat */}
      <div className="p-6 border-b border-gray-100 dark:border-white/5 bg-white dark:bg-dark-800 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/20">
              <Icons.Bot className="w-9 h-9 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-[3px] border-white dark:border-dark-800 rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-brand-navy dark:text-white text-xl leading-tight tracking-tight">LinnoChat</h3>
            <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">System Online</span>
          </div>
        </div>
        <div className="opacity-30">
          <Icons.Zap className="w-5 h-5 text-brand-navy dark:text-white" />
        </div>
      </div>

      {/* Messages Area - Mid-onboarding flow */}
      <div className="flex-1 p-6 space-y-6 bg-gradient-to-b from-[#fcfdfa] to-white dark:from-dark-900 dark:to-dark-950 overflow-y-auto custom-scrollbar">
        
        {/* 1. Progress acknowledgement */}
        <div className="flex flex-col items-start animate-fade-in">
          <div className="max-w-[85%] p-4 bg-white dark:bg-dark-800 text-brand-navy dark:text-gray-100 rounded-[22px] rounded-bl-none shadow-sm border border-gray-100 dark:border-white/5 text-[14px] leading-relaxed">
            Great! You've almost completed your onboarding to the Linnovate family. 🚀
          </div>
        </div>

        {/* 2. Intake Question */}
        <div className="flex flex-col items-start animate-fade-in delay-75">
          <div className="max-w-[85%] p-4 bg-white dark:bg-dark-800 text-brand-navy dark:text-gray-100 rounded-[22px] rounded-bl-none shadow-sm border border-gray-100 dark:border-white/5 text-[14px] leading-relaxed">
            Next, could you confirm your preferred display name for your corporate email?
          </div>
        </div>

        {/* 3. User Response */}
        <div className="flex flex-col items-end animate-fade-in delay-150">
          <div className="max-w-[85%] p-4 bg-brand-navy text-white rounded-[22px] rounded-br-none shadow-md text-[14px] leading-relaxed">
            Lyron.W or just Lyron if possible
          </div>
        </div>

        {/* 4. ID Request */}
        <div className="flex flex-col items-start animate-fade-in delay-300">
          <div className="max-w-[85%] p-4 bg-white dark:bg-dark-800 text-brand-navy dark:text-gray-100 rounded-[22px] rounded-bl-none shadow-sm border border-gray-100 dark:border-white/5 text-[14px] leading-relaxed">
            Understood, Lyron! We'll set it up as "Lyron". Next, I'll need a quick photo of your ID to finalize your security clearance.
          </div>
        </div>

        {/* 5. User Upload */}
        <div className="flex flex-col items-end animate-fade-in delay-500">
          <div className="max-w-[85%] p-3 bg-gray-50 dark:bg-white/5 text-brand-navy dark:text-white rounded-2xl border border-dashed border-gray-300 dark:border-white/20 flex items-center space-x-3 text-[13px] shadow-sm">
            <Icons.FileText className="w-5 h-5 text-brand-500" />
            <span className="font-medium italic">identity_verif.png</span>
            <Icons.CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
        </div>

        {/* 6. Success */}
        <div className="flex flex-col items-start animate-fade-in delay-700">
          <div className="max-w-[85%] p-4 bg-white dark:bg-dark-800 text-brand-navy dark:text-gray-100 rounded-[22px] rounded-bl-none shadow-sm border border-gray-100 dark:border-white/5 text-[14px] leading-relaxed">
            Verification complete! Your accounts are now active. 
            <br/><br/>
            I've sent your first-day calendar and team invite to your new inbox. Anything else you need to know?
          </div>
        </div>

        {/* 7. Final User Note */}
        <div className="flex flex-col items-end animate-fade-in delay-1000 pb-8">
          <div className="max-w-[85%] p-4 bg-brand-navy text-white rounded-[22px] rounded-br-none shadow-md text-[14px]">
            That's all for now. Thanks for the quick setup!
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChatWidget;