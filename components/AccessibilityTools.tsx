import React, { useState, useEffect } from 'react';
import { 
  Type, 
  MinusCircle, 
  PlusCircle, 
  Eye, 
  Contrast, 
  Sun, 
  Underline, 
  RotateCcw,
  Accessibility
} from 'lucide-react';

const AccessibilityTools: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isNegativeContrast, setIsNegativeContrast] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isReadableFont, setIsReadableFont] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    
    // Apply Font Size
    html.style.fontSize = `${fontSize}%`;
    
    // Apply Filters
    let filters = [];
    if (isGrayscale) filters.push('grayscale(100%)');
    if (isHighContrast) filters.push('contrast(150%) brightness(110%)');
    if (isNegativeContrast) filters.push('invert(100%) hue-rotate(180deg)');
    html.style.filter = filters.join(' ');

    // Apply Classes
    if (isLightBackground) html.classList.add('force-light-bg');
    else html.classList.remove('force-light-bg');

    if (isUnderline) html.classList.add('force-underline');
    else html.classList.remove('force-underline');

    if (isReadableFont) html.classList.add('force-readable-font');
    else html.classList.remove('force-readable-font');

  }, [fontSize, isGrayscale, isHighContrast, isNegativeContrast, isLightBackground, isUnderline, isReadableFont]);

  const reset = () => {
    setFontSize(100);
    setIsGrayscale(false);
    setIsHighContrast(false);
    setIsNegativeContrast(false);
    setIsLightBackground(false);
    setIsUnderline(false);
    setIsReadableFont(false);
  };

  return (
    <div className="fixed bottom-32 right-0 z-[70]">
      {/* Trigger Button stuck to the right wall */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#5c6ac4] text-white rounded-l-lg rounded-r-none flex items-center justify-center shadow-2xl hover:bg-[#4a56a0] transition-all transform active:scale-95 border-y-2 border-l-2 border-white/20"
        aria-label="Accessibility Tools"
      >
        <Accessibility className="w-8 h-8" />
      </button>

      {/* Menu aligned to the right wall */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-64 bg-white dark:bg-white rounded-tl-lg rounded-bl-lg shadow-[0_10px_50px_rgba(0,0,0,0.3)] border border-gray-200 overflow-hidden animate-slide-up text-gray-800">
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <h3 className="text-xl font-bold">Accessibility Tools</h3>
          </div>
          
          <div className="flex flex-col">
            <ToolButton icon={<PlusCircle className="w-5 h-5" />} label="Increase Text" onClick={() => setFontSize(f => Math.min(f + 10, 150))} />
            <ToolButton icon={<MinusCircle className="w-5 h-5" />} label="Decrease Text" onClick={() => setFontSize(f => Math.max(f - 10, 80))} />
            <ToolButton icon={<Eye className="w-5 h-5" />} label="Grayscale" active={isGrayscale} onClick={() => setIsGrayscale(!isGrayscale)} />
            <ToolButton icon={<Contrast className="w-5 h-5" />} label="High Contrast" active={isHighContrast} onClick={() => setIsHighContrast(!isHighContrast)} />
            <ToolButton icon={<Contrast className="w-5 h-5 rotate-180" />} label="Negative Contrast" active={isNegativeContrast} onClick={() => setIsNegativeContrast(!isNegativeContrast)} />
            <ToolButton icon={<Sun className="w-5 h-5" />} label="Light Background" active={isLightBackground} onClick={() => setIsLightBackground(!isLightBackground)} />
            <ToolButton icon={<Underline className="w-5 h-5" />} label="Links Underline" active={isUnderline} onClick={() => setIsUnderline(!isUnderline)} />
            <ToolButton icon={<Type className="w-5 h-5" />} label="Readable Font" active={isReadableFont} onClick={() => setIsReadableFont(!isReadableFont)} />
            <ToolButton icon={<RotateCcw className="w-5 h-5" />} label="Reset" onClick={reset} className="text-red-600 hover:bg-red-50" />
          </div>
        </div>
      )}
    </div>
  );
};

interface ToolButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
  className?: string;
}

const ToolButton: React.FC<ToolButtonProps> = ({ icon, label, onClick, active, className }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-3 px-4 py-3.5 text-left hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 w-full ${active ? 'bg-blue-50 font-bold text-[#5c6ac4]' : ''} ${className || ''}`}
  >
    <span className={active ? 'text-[#5c6ac4]' : 'text-gray-500'}>{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default AccessibilityTools;