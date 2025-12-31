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