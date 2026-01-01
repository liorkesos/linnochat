
import React from 'react';
import { Icons } from './Icons';

interface MaintenancePageProps {
  onBack: () => void;
}

const MaintenancePage: React.FC<MaintenancePageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 flex items-center justify-center relative overflow-hidden px-6">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <div className="mb-10 flex justify-center">
          <div className="w-24 h-24 bg-brand-50 dark:bg-brand-500/10 rounded-[2rem] flex items-center justify-center shadow-xl shadow-brand-500/10">
            <Icons.Activity className="w-12 h-12 text-brand-600 animate-pulse" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
          System <span className="text-brand-600">Maintenance</span>
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
          Our demo booking system is currently under maintenance as we upgrade our infrastructure to serve you better. 
          <br /><br />
          <span className="text-slate-900 dark:text-white font-bold">Please contact sales via the "Contact Sales" button</span> for immediate assistance or to schedule a demo manually.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={onBack}
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white dark:text-black text-white rounded-2xl font-bold text-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center space-x-2 group"
          >
            <Icons.ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span>Go Back Home</span>
          </button>
          
          <a 
            href="https://wa.me/972548032882"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-brand-500 text-black rounded-2xl font-bold text-lg hover:bg-brand-600 transition-all shadow-xl flex items-center justify-center space-x-2"
          >
            <Icons.WhatsApp className="w-5 h-5" />
            <span>Chat with Sales</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
