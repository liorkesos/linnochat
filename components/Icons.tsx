import React from 'react';
import { 
  Cpu, 
  Zap, 
  MessageSquare, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  ArrowRight,
  Bot,
  Terminal,
  Code2,
  CheckCircle2,
  Sun,
  Moon,
  BrainCircuit,
  Mic,
  Globe,
  Gamepad2,
  Stethoscope,
  Building2,
  Wallet,
  Plane,
  FileSearch,
  LayoutTemplate,
  Activity,
  Cloud,
  MapPin,
  Mail,
  FileText,
  UploadCloud
} from 'lucide-react';

export const Icons = {
  Cpu, 
  Zap, 
  MessageSquare, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  ArrowRight,
  Bot,
  Terminal,
  Code2,
  CheckCircle2,
  Sun,
  Moon,
  BrainCircuit,
  Mic,
  Globe,
  Gamepad2,
  Stethoscope,
  Building2,
  Wallet,
  Plane,
  FileSearch,
  LayoutTemplate,
  Activity,
  Cloud,
  MapPin,
  Mail,
  FileText,
  UploadCloud,
  WhatsApp: (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M12.031 0c-6.627 0-12 5.373-12 12 0 2.159.57 4.186 1.565 5.941l-1.596 5.825 5.955-1.562c1.713.935 3.676 1.468 5.76 1.468 6.627 0 12-5.373 12-12s-5.373-12-12-12zm6.39 17.1c-.26.735-1.51 1.47-2.07 1.62-.505.135-1.165.24-4.395-.945-3.135-1.155-5.175-4.32-5.325-4.53-.15-.21-1.23-1.635-1.23-3.12 0-1.485.78-2.22 1.05-2.52.27-.3.585-.375.78-.375.195 0 .39 0 .555.015.18.015.42-.045.66.525.255.615.87 2.115.945 2.265.075.15.12.33.015.525-.105.195-.165.315-.33.51-.165.195-.345.435-.15.765.195.33.87 1.425 1.86 2.31 1.275 1.14 2.34 1.485 2.67 1.62.33.135.525.12.72-.105.195-.225.84-.975 1.065-1.305.225-.33.45-.27.765-.15.315.12 2.01 1.05 2.1 1.14.09.09.15.135.21.24.06.09-.045.825-.3 1.56z"/>
    </svg>
  ),
  SpeechBubbles: (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
      viewBox="0 0 100 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* Right Bubble (Outline) */}
      <path 
        d="M45 45C45 31.1929 56.1929 20 70 20C83.8071 20 95 31.1929 95 45C95 58.8071 83.8071 70 70 70C65.5 70 61.5 68.8 58 66.8L45 75V60.5C45 60.5 45 60.5 45 45Z" 
        stroke="currentColor" 
        strokeWidth="5"
        strokeLinejoin="round"
      />
      {/* Left Bubble (Solid) */}
      <path 
        d="M5 30C5 13.4315 18.4315 0 35 0C51.5685 0 65 13.4315 65 30C65 46.5685 51.5685 60 35 60C30.5 60 26.5 58.8 23 56.8L10 65V50.5C7 46 5 41 5 35V30Z" 
        fill="currentColor" 
      />
    </svg>
  )
};