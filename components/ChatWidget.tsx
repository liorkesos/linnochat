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

    // Simulate a brief delay for a more natural feel
    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "Hello! Welcome to LinnoChat. Would you like to book a demo?...",
        timestamp: new Date(),
        options: [
          { label: 'YES', targetId: 'try-now' },
          { label: 'LEARN MORE', targetId: 'why-linno' }
        ]
      };
      
      setMessages(prev => [...prev, botMsg]);
      setStatus(BotStatus.IDLE);
    }, 800);
  };

  return (
    <div className="w-full max-w-sm mx-auto glass-card rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 flex flex-col h-[500px] transition-colors duration-300">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-white/5 bg-gray-50/80 dark:bg-white/5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-lime-500 to-lime-600 flex items-center justify-center">
              <Icons.Bot className="w-6 h-6 text-white" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-dark-900 rounded-full"></div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm">Linno AI Assistant</h3>
            <p className="text-xs text-lime-600 dark:text-lime-400 font-semibold">Support & Intake Mode</p>
          </div>
        </div>
        <button 
          onClick={() => setMessages([messages[0]])}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
          title="Reset Conversation"
        >
          <Icons.Zap className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/50 dark:bg-dark-800/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user'
                  ? 'bg-lime-600 text-white rounded-br-none'
                  : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-white/10 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
            
            {msg.options && (
              <div className="flex flex-wrap gap-2 mt-2">
                {msg.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option.targetId)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm ${
                      option.label === 'YES' 
                        ? 'bg-lime-600 text-white hover:bg-lime-500' 
                        : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-white/10 hover:bg-gray-50'
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
            <div className="bg-white dark:bg-dark-700 border border-gray-100 dark:border-white/10 p-3 rounded-2xl rounded-bl-none flex space-x-1 shadow-sm">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-white/5">
        <div className="relative flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask anything..."
            className="w-full bg-gray-100 dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-lime-500 border border-transparent dark:border-white/10 transition-colors"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || status === BotStatus.THINKING}
            className="absolute right-2 p-1.5 bg-lime-600 rounded-full text-white hover:bg-lime-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
          >
            <Icons.ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWidget;