import React from 'react';
import { Icons } from './Icons';

interface ComingSoonPageProps {
  onBack: () => void;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 flex items-center justify-center relative overflow-hidden px-6">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-300/20 dark:bg-lime-500/10 rounded-full blur-[100px] animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-400/20 dark:bg-lime-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-lime-100 dark:bg-lime-500/20 rounded-3xl flex items-center justify-center animate-bounce">
            <Icons.Zap className="w-12 h-12 text-lime-600 dark:text-lime-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-12 tracking-tighter">
          COMING <span className="text-lime-600">SOON!</span>
        </h1>

        <div className="flex justify-center">
          <button 
            onClick={onBack}
            className="px-10 py-4 bg-slate-900 dark:bg-white dark:text-black text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center justify-center space-x-2"
          >
            <Icons.ArrowRight className="w-5 h-5 rotate-180" />
            <span>Go Back Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;