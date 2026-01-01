import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

interface NavbarProps {
  onLogoClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
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

  const navLinks = [
    { label: 'Why Linno', href: '#why-linno' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Platform', href: '#platform' },
    { label: 'Solutions', href: '#solutions' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled || isMobileMenuOpen 
        ? 'bg-white/95 dark:bg-dark-950/95 backdrop-blur-md border-b border-gray-200 dark:border-white/5 h-16' 
        : 'bg-transparent h-20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        <button 
          onClick={onLogoClick}
          className="flex items-center space-x-2 md:space-x-3 group outline-none shrink-0"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-transform group-hover:scale-105">
            <Icons.SpeechBubbles className="w-7 h-7 md:w-9 md:h-9 text-brand-600" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter">
            <span className="text-black dark:text-white">Linno</span>
            <span className="text-brand-600">chat</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 hover:text-brand-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-1.5 md:p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Icons.Sun className="w-4 h-4 md:w-5 md:h-5 text-brand-400" /> : <Icons.Moon className="w-4 h-4 md:w-5 md:h-5 text-slate-500" />}
          </button>
          
          <div className="hidden sm:flex items-center space-x-2">
            <a href="https://app.linno.chat" className="text-xs font-bold text-gray-600 dark:text-gray-400 hover:text-brand-600 transition-colors">
              Login
            </a>
            <a 
              href="https://wa.me/972548032882" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 md:px-5 md:py-2 rounded-lg bg-brand-500 text-black text-[10px] md:text-xs font-bold hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/10 flex items-center space-x-1.5"
            >
              <Icons.WhatsApp className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>Contact Sales</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icons.LayoutTemplate className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white dark:bg-dark-950 border-b border-gray-200 dark:border-white/5 py-6 px-6 animate-fade-in shadow-xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex flex-col space-y-4">
              <a href="https://app.linno.chat" className="text-sm font-bold text-gray-600 dark:text-gray-400">Login</a>
              <a 
                href="https://wa.me/972548032882" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg bg-brand-500 text-black text-center text-sm font-bold flex items-center justify-center space-x-2"
              >
                <Icons.WhatsApp className="w-4 h-4" />
                <span>Contact Sales</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;