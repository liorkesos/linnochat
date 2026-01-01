import React, { useState, useRef, useEffect } from 'react';
import { Icons } from './Icons';
import { ChatMessage, BotStatus } from '../types';

const ChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: "Hi! I'm Linno. I help businesses automate Support, Client Intake, and Feedback. What process are you looking to streamline today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<BotStatus>(BotStatus.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || status === BotStatus.THINKING) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setStatus(BotStatus.THINKING);

    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "That sounds like a perfect workflow for LinnoChat! Would you like to schedule a deep-dive demo with our team?",
        timestamp: new Date(),
        options: [
          { label: 'YES, DEMO', targetId: 'automate' },
          { label: 'LEARN MORE', targetId: 'platform' }
        ]
      };
      
      setMessages(prev => [...prev, botMsg]);
      setStatus(BotStatus.IDLE);
    }, 800);
  };

  return (
    <div className="w-full mx-auto bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/5 flex flex-col h-[380px] md:h-[450px] transition-all">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-lime-500 to-lime-600 flex items-center justify-center">
              <Icons.Bot className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-500 border-2 border-white dark:border-dark-900 rounded-full"></div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-[11px]">Linno AI</h3>
            <p className="text-[9px] text-lime-600 dark:text-lime-400 font-bold uppercase tracking-tight">Support Agent</p>
          </div>
        </div>
        <button 
          onClick={() => setMessages([messages[0]])}
          className="text-gray-400 hover:text-lime-600 transition-colors"
        >
          <Icons.Zap className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white/30 dark:bg-dark-800/10">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] p-2.5 rounded-xl text-[11px] leading-relaxed shadow-sm ${
                msg.role === 'user'
                  ? 'bg-lime-600 text-white rounded-br-none'
                  : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-white/5 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
            
            {msg.options && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {msg.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option.targetId)}
                    className={`px-3 py-1 rounded-md text-[9px] font-bold transition-all shadow-sm ${
                      option.label.includes('YES') 
                        ? 'bg-lime-600 text-white hover:bg-lime-500' 
                        : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-white/5'
                    }`}
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
            <div className="bg-white dark:bg-dark-700 border border-gray-100 dark:border-white/5 p-2 rounded-lg flex space-x-1">
              <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce delay-75"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-white/5">
        <div className="relative flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="w-full bg-gray-100 dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 rounded-lg py-2 pl-3 pr-10 text-[11px] focus:outline-none focus:ring-1 focus:ring-lime-500 border border-transparent dark:border-white/5"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || status === BotStatus.THINKING}
            className="absolute right-1.5 p-1 bg-lime-600 rounded-md text-white hover:bg-lime-500 disabled:opacity-50 transition-all"
          >
            <Icons.ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWidget;