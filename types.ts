export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum BotStatus {
  IDLE = 'IDLE',
  THINKING = 'THINKING',
  TYPING = 'TYPING',
  ERROR = 'ERROR'
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
