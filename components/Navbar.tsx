
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-dark-950/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={onLogoClick}
          className="flex items-center space-x-3 group outline-none"
        >
          <div className="w-12 h-10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Icons.SpeechBubbles className="w-10 h-10 text-brand-600" />
          </div>
          <span className="text-3xl font-extrabold tracking-tighter transition-colors">
            <span className="text-black dark:text-white">Linno</span>
            <span className="text-brand-600">chat</span>
          </span>
        </button>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#why-linno" className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Why Linno</a>
          <a href="#how-it-works" className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">How It Works</a>
          <a href="#platform" className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Platform</a>
          <a href="#solutions" className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Solutions</a>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Icons.Sun className="w-5 h-5 text-brand-400" /> : <Icons.Moon className="w-5 h-5 text-slate-500" />}
          </button>
          <div className="flex items-center space-x-2">
            <a href="https://app.linno.chat" className="hidden sm:inline-block px-4 py-2 text-gray-600 dark:text-gray-400 text-sm font-bold hover:text-brand-600 transition-colors">
              Login
            </a>
            <a href="#try-now" className="px-6 py-2 rounded-xl bg-brand-500 text-black text-sm font-bold hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
