import React, { useState, useRef, useEffect } from 'react';
import { Icons } from './Icons';
import { ChatMessage, BotStatus } from '../types';

type FlowStep = 'GREETING' | 'ASK_NAME' | 'ASK_COMPANY' | 'ASK_EMAIL' | 'ASK_PHONE' | 'CONFIRMED';

interface LeadData {
  useCase: string;
  name: string;
  company: string;
  email: string;
  phone: string;
}

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfkRnti4BLeDSC3sbxo4mLKKQmDIcLvqa41Y34T16fbSdJhjA/formResponse";

// Corrected entry IDs mapped to your specific Google Form fields
const GOOGLE_FORM_ENTRIES = {
  name: "entry.2005620554",    
  company: "entry.1045791291", 
  email: "entry.1065046570",   
  phone: "entry.1166974658",   
  useCase: "entry.839337160"  
};

const ChatWidget: React.FC = () => {
  const [step, setStep] = useState<FlowStep>('GREETING');
  const [leadData, setLeadData] = useState<LeadData>({
    useCase: '',
    name: '',
    company: '',
    email: '',
    phone: '',
  });

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: "Hi! I'm Linno. I help businesses automate Support, Client Intake, and Feedback. Which process are you looking to streamline today?",
      timestamp: new Date(),
      options: [
        { label: 'Customer Support', targetId: 'flow_cs' },
        { label: 'Healthcare', targetId: 'flow_hc' },
        { label: 'FinTech', targetId: 'flow_ft' },
        { label: 'HR & Enterprise', targetId: 'flow_hr' },
        { label: 'Consumer Research', targetId: 'flow_cr' },
      ]
    }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<BotStatus>(BotStatus.IDLE);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      // Use direct assignment to avoid triggering browser-level window scroll behaviors
      const targetScroll = scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight;
      scrollContainerRef.current.scrollTop = targetScroll;
    }
  };

  // Immediate scroll on message change
  useEffect(() => {
    scrollToBottom();
  }, [messages, status]);

  const submitToGoogleForm = async (data: LeadData) => {
    const params = new URLSearchParams();
    params.append(GOOGLE_FORM_ENTRIES.name, data.name);
    params.append(GOOGLE_FORM_ENTRIES.company, data.company);
    params.append(GOOGLE_FORM_ENTRIES.email, data.email);
    params.append(GOOGLE_FORM_ENTRIES.phone, data.phone);
    params.append(GOOGLE_FORM_ENTRIES.useCase, data.useCase);

    try {
      // Using 'no-cors' for Google Form submissions
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      });
      console.log('Lead submitted to Google Form successfully');
    } catch (error) {
      console.error('Error submitting to Google Form:', error);
    }
  };

  const addBotMessage = (text: string, options?: { label: string; targetId: string }[]) => {
    setStatus(BotStatus.THINKING);
    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: Date.now().toString(),
        role: 'model',
        text,
        timestamp: new Date(),
        options
      };
      setMessages(prev => [...prev, botMsg]);
      setStatus(BotStatus.IDLE);
    }, 600);
  };

  const handleOptionClick = (label: string, targetId: string) => {
    if (step !== 'GREETING') return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: label,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setLeadData(prev => ({ ...prev, useCase: label }));
    setStep('ASK_NAME');
    addBotMessage("Great choice! To get started, what is your full name?");
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || status === BotStatus.THINKING || step === 'GREETING' || step === 'CONFIRMED') return;

    const text = inputValue.trim();
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    if (step === 'ASK_NAME') {
      const updatedData = { ...leadData, name: text };
      setLeadData(updatedData);
      setStep('ASK_COMPANY');
      addBotMessage(`Nice to meet you, ${text.split(' ')[0]}! What is your company name?`);
    } else if (step === 'ASK_COMPANY') {
      const updatedData = { ...leadData, company: text };
      setLeadData(updatedData);
      setStep('ASK_EMAIL');
      addBotMessage("Got it. And what is your work email address?");
    } else if (step === 'ASK_EMAIL') {
      const updatedData = { ...leadData, email: text };
      setLeadData(updatedData);
      setStep('ASK_PHONE');
      addBotMessage("Almost done! Finally, what is your phone number?");
    } else if (step === 'ASK_PHONE') {
      const finalData = { ...leadData, phone: text };
      setLeadData(finalData);
      setStep('CONFIRMED');
      
      setStatus(BotStatus.THINKING);
      
      // Perform the actual submission
      await submitToGoogleForm(finalData);

      setTimeout(() => {
        const finalMsg: ChatMessage = {
          id: Date.now().toString(),
          role: 'model',
          text: `Thank you, ${finalData.name.split(' ')[0]}! Your request for ${finalData.useCase} has been received. Our team will get back to you at ${finalData.email} very soon.`,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, finalMsg]);
        setStatus(BotStatus.IDLE);
      }, 800);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto glass-card rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 flex flex-col h-[550px] transition-colors duration-300 relative">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-white/5 bg-gray-50/80 dark:bg-white/5 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-lime-500 to-lime-600 flex items-center justify-center">
              <Icons.Bot className="w-6 h-6 text-white" />
            </div>
            <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-dark-900 rounded-full"></div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm">Linno AI Assistant</h3>
            <p className="text-[10px] text-lime-600 dark:text-lime-400 font-bold uppercase tracking-wider">Support & Intake Mode</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
           <Icons.Zap className="w-3.5 h-3.5 text-gray-300" />
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fcfdfa] dark:bg-dark-900/40"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user'
                  ? 'bg-brand-500 text-black font-medium rounded-br-none'
                  : 'bg-white dark:bg-dark-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-white/5 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
            
            {msg.options && (
              <div className="flex flex-col gap-2 mt-3 w-full max-w-[80%]">
                {msg.options.map((option, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleOptionClick(option.label, option.targetId)}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-white/10 hover:border-brand-500 hover:text-brand-600 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        {status === BotStatus.THINKING && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-dark-800 border border-gray-100 dark:border-white/5 p-3 rounded-2xl rounded-bl-none flex space-x-1 shadow-sm">
              <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce delay-75"></div>
              <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-dark-900 border-t border-gray-100 dark:border-white/5 shrink-0">
        <div className="relative flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={step === 'GREETING' ? "Select a use case above..." : "Type your answer..."}
            disabled={step === 'GREETING' || step === 'CONFIRMED' || status === BotStatus.THINKING}
            className="w-full bg-gray-50 dark:bg-dark-800/50 text-gray-900 dark:text-white placeholder-gray-400 rounded-full py-3.5 pl-5 pr-14 focus:outline-none focus:ring-2 focus:ring-brand-500 border border-gray-100 dark:border-white/5 transition-all text-sm"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || status === BotStatus.THINKING || step === 'GREETING' || step === 'CONFIRMED'}
            className="absolute right-2 p-2 bg-brand-500 rounded-full text-black hover:bg-brand-600 disabled:opacity-30 disabled:grayscale transition-all shadow-lg shadow-brand-500/10 focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <Icons.ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWidget;