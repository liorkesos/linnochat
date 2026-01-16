
import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

interface NavbarProps {
  onLogoClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Sync theme with document class
    const isDarkInitial = document.documentElement.classList.contains('dark');
    setIsDark(isDarkInitial);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-dark-950/90 backdrop-blur-md border-b border-gray-200 dark:border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={onLogoClick}
          className="flex items-center space-x-3 group outline-none shrink-0"
        >
          <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Icons.SpeechBubbles className="w-8 h-8 text-brand-600" />
          </div>
          <span className="text-2xl font-extrabold tracking-tighter transition-colors">
            <span className="text-navy-900 dark:text-white">Linno</span>
            <span className="text-brand-600">chat</span>
          </span>
        </button>

        {/* Center Navigation Links - Styled to match screenshot */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#why-linno" className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#71717a] dark:text-slate-400 hover:text-navy-900 dark:hover:text-white transition-colors">Why Linno</a>
          <a href="#how-it-works" className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#71717a] dark:text-slate-400 hover:text-navy-900 dark:hover:text-white transition-colors">How It Works</a>
          <a href="#platform" className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#71717a] dark:text-slate-400 hover:text-navy-900 dark:hover:text-white transition-colors">Platform</a>
          <a href="#solutions" className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#71717a] dark:text-slate-400 hover:text-navy-900 dark:hover:text-white transition-colors">Solutions</a>
          
          {/* Linnovate Pill Button - Styled to match screenshot */}
          <a 
            href="https://linnovate.net/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2.5 px-6 py-2 border border-[#84cc16]/30 bg-[#84cc16]/5 rounded-full text-[13px] font-extrabold uppercase tracking-widest text-[#65a30d] hover:bg-[#84cc16] hover:text-white transition-all shadow-sm"
          >
            <Icons.Globe className="w-4 h-4" />
            <span>Linnovate</span>
          </a>
        </div>

        <div className="flex items-center space-x-4 shrink-0">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Icons.Sun className="w-5 h-5 text-brand-400" /> : <Icons.Moon className="w-5 h-5 text-navy-900/50" />}
          </button>
          <div className="hidden sm:flex items-center">
            <a href="https://app.linno.chat" className="px-4 py-2 text-navy-900 dark:text-gray-400 text-sm font-bold hover:text-brand-600 transition-colors">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
