
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import { Icons } from './components/Icons';

const agents = [
  {
    title: "1. Workflow Builder Agent",
    subtitle: "(Design)",
    description: "Import your SOPs or Support Documentation. The AI automatically generates conversation flows for Intake, Triage, or Feedback.",
    icon: <Icons.LayoutTemplate className="w-8 h-8 text-lime-500" />
  },
  {
    title: "2. Execution Agent",
    subtitle: "(Engage)",
    description: "Your 24/7 frontline. Handles complex queries, collects required documents, and routes critical issues to humans with context.",
    icon: <Icons.Bot className="w-8 h-8 text-lime-600" />
  },
  {
    title: "3. Insight Engine",
    subtitle: "(Structure)",
    description: "Converts unstructured chat logs into Data Structure, CRM records, or summary tickets. Identifies trends and sentiment instantly.",
    icon: <Icons.BarChart3 className="w-8 h-8 text-lime-500" />
  }
];

const platformFeatures = [
  {
    title: "Bring Your Own Model",
    description: "Connect with popular LLMs like OpenAI, Llama, Gemini, or custom fine-tuned models.",
    icon: <Icons.Cpu className="w-8 h-8 text-black" />
  },
  {
    title: "Workflow API",
    description: "Trigger chats from your app, upload contacts securely, and pipe structured data directly back into your systems.",
    icon: <Icons.Terminal className="w-8 h-8 text-black" />
  },
  {
    title: "Any Channel",
    description: "Deploy via Web SDK, WhatsApp Business API, Slack, or Email auto-responders.",
    icon: <Icons.Globe className="w-8 h-8 text-black" />
  }
];

const industries = [
  {
    name: "Customer Support",
    useCase: "L1 Deflection & Triage",
    description: "Resolve up to 70% of tickets automatically and route complex issues with full context summaries.",
    icon: <Icons.MessageSquare className="w-6 h-6 text-white" />,
    color: "bg-lime-500"
  },
  {
    name: "Healthcare",
    useCase: "Patient Intake",
    description: "Automate pre-visit forms, symptom checking triage, and appointment scheduling via chat.",
    icon: <Icons.Stethoscope className="w-6 h-6 text-white" />,
    color: "bg-lime-500"
  },
  {
    name: "FinTech",
    useCase: "KYC & Onboarding",
    description: "Collect documents and validate user information in a secure, conversational flow.",
    icon: <Icons.Wallet className="w-6 h-6 text-white" />,
    color: "bg-lime-500"
  },
  {
    name: "HR & Enterprise",
    useCase: "Internal Helpdesk",
    description: "Instant answers for benefits, IT support, and employee onboarding processes.",
    icon: <Icons.Building2 className="w-6 h-6 text-white" />,
    color: "bg-lime-500"
  },
  {
    name: "Consumer Research",
    useCase: "Deep Feedback",
    description: "Go beyond NPS scores with qualitative interviews that dig into the 'Why' behind the data.",
    icon: <Icons.FileSearch className="w-6 h-6 text-white" />,
    color: "bg-lime-500"
  }
];

const BrandLogos = {
  LiteLLM: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-lime-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
      <line x1="10" y1="22" x2="14" y2="2"></line>
    </svg>
  ),
  Priority: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-lime-500">
      <path d="M19.34 7.66C18.66 4.34 15.68 2 12 2C8.32 2 5.34 4.34 4.66 7.66C4.26 9.61 4.26 11.64 4.66 13.59C5.16 16.03 6.64 18.06 8.71 19.14L12 22L15.29 19.14C17.36 18.06 18.84 16.03 19.34 13.59C19.74 11.64 19.74 9.61 19.34 7.66ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z"/>
    </svg>
  ),
  WhatsApp: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-lime-500">
      <path d="M12.031 0c-6.627 0-12 5.373-12 12 0 2.159.57 4.186 1.565 5.941l-1.596 5.825 5.955-1.562c1.713.935 3.676 1.468 5.76 1.468 6.627 0 12-5.373 12-12s-5.373-12-12-12zm6.39 17.1c-.26.735-1.51 1.47-2.07 1.62-.505.135-1.165.24-4.395-.945-3.135-1.155-5.175-4.32-5.325-4.53-.15-.21-1.23-1.635-1.23-3.12 0-1.485.78-2.22 1.05-2.52.27-.3.585-.375.78-.375.195 0 .39 0 .555.015.18.015.42-.045.66.525.255.615.87 2.115.945 2.265.075.15.12.33.015.525-.105.195-.165.315-.33.51-.165.195-.345.435-.15.765.195.33.87 1.425 1.86 2.31 1.275 1.14 2.34 1.485 2.67 1.62.33.135.525.12.72-.105.195-.225.84-.975 1.065-1.305.225-.33.45-.27.765-.15.315.12 2.01 1.05 2.1 1.14.09.09.15.135.21.24.06.09-.045.825-.3 1.56z"/>
    </svg>
  ),
  Messenger: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-lime-500">
      <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.304 2.251.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.291 14.194l-3.075-3.282-6.001 3.282 6.601-7.017 3.15 3.282 5.925-3.282-6.6 7.017z"/>
    </svg>
  ),
  GoogleCloud: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-lime-500">
      <path d="M17.75 19H8.25C5.9 19 4 17.1 4 14.75C4 12.56 5.67 10.74 7.82 10.53C8.42 7.39 11.16 5 14.5 5C17.39 5 19.82 6.8 20.69 9.38C22.6 9.8 24 11.49 24 13.5C24 15.71 22.21 17.5 20 17.5V17.5C19.34 17.5 18.72 17.34 18.17 17.06C18.41 17.53 18.5 18.04 18.5 18.5C18.5 18.67 18.49 18.84 18.47 19H17.75ZM8.25 17.5H17.25C17.39 17.5 17.53 17.52 17.66 17.56C17.16 16.32 15.93 15.5 14.5 15.5C13.62 15.5 12.82 15.82 12.21 16.35C11.36 15.22 10 14.5 8.5 14.5C7.26 14.5 6.16 15.01 5.42 15.83C5.15 15.49 5 15.06 5 14.6V14.6C5 12.89 6.39 11.5 8.1 11.5C8.42 11.5 8.73 11.55 9.01 11.64C9.53 9.27 11.65 7.5 14.17 7.5C16.36 7.5 18.23 8.79 19 10.65C19.31 10.55 19.65 10.5 20 10.5C21.38 10.5 22.5 11.62 22.5 13C22.5 14.38 21.38 15.5 20 15.5H19.75V15.5C19.06 15.5 18.44 15.22 17.98 14.77C18.3 15.35 18.5 16 18.5 16.7C18.5 17 18.42 17.28 18.28 17.54C18.11 17.51 17.93 17.5 17.75 17.5H8.25Z"/>
    </svg>
  ),
  Azure: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-lime-500">
      <path d="M11.444 2.7H19.5L11.444 21.3H3.389L11.444 21.3H3.389Z" opacity="0.4"/>
      <path d="M3.389 21.3L10.457 8.01L14.417 16.7L10.05 21.3H3.389Z"/>
    </svg>
  )
};

const integrationItems = [
  { name: "Lite-LLM", icon: <BrandLogos.LiteLLM />, desc: "Connect any foundation model with standardized APIs." },
  { name: "Priority", icon: <BrandLogos.Priority />, desc: "Direct ERP integration for complex enterprise workflows." },
  { name: "WhatsApp", icon: <BrandLogos.WhatsApp />, desc: "Automate conversations on the world's favorite chat app." },
  { name: "Messenger", icon: <BrandLogos.Messenger />, desc: "Support customers directly via Meta's platform." },
  { name: "Google Cloud", icon: <BrandLogos.GoogleCloud />, desc: "Enterprise hosting and secure data residency." },
  { name: "Azure", icon: <BrandLogos.Azure />, desc: "Microsoft ecosystem integration for Fortune 500s." },
];

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'terms'>('home');
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '' });
  const [automateData, setAutomateData] = useState({ name: '', company: '', workEmail: '', phone: '', workflowType: 'Customer Support (L1)', script: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigateTo = (view: 'home' | 'privacy' | 'terms') => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-slate-200 selection:bg-lime-500/30 transition-colors duration-300">
      <Navbar onLogoClick={() => navigateTo('home')} />

      {currentView === 'privacy' && <PrivacyPolicyPage onBack={() => navigateTo('home')} />}
      {currentView === 'terms' && <TermsOfServicePage onBack={() => navigateTo('home')} />}
      
      {currentView === 'home' && (
        <>
          {/* Hero Section */}
          <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-300/30 dark:bg-lime-500/20 rounded-full blur-[100px] animate-blob"></div>
              <div className="absolute top-20 right-1/4 w-96 h-96 bg-lime-400/30 dark:bg-lime-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left animate-slide-up">
                <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter mb-8 leading-none">
                  <span className="glass-heading-main inline-block py-2 px-1 text-black">Conversational AI <br /> Agents for</span>
                  <br />
                  <span className="glass-heading-accent inline-block py-2 px-1">Data Collection <br /> and Analysis</span>
                </h1>
                <p className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                  Turn complex workflows into natural, actionable conversations.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
                  LinnoChat is the enterprise AI platform that deploys intelligent agents to handle customer support triage, Complex Data Collection, and qualitative research—all without code.
                </p>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="#automate" className="w-full sm:w-auto px-10 py-4 bg-brand-500 hover:bg-brand-600 text-black rounded-lg font-bold text-lg transition-all shadow-xl shadow-brand-500/20 flex items-center justify-center space-x-2">
                    <span>Try Now</span>
                    <Icons.Zap className="w-5 h-5 fill-black" />
                  </a>
                  <a href="#integrations-section" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-lg font-semibold transition-all backdrop-blur-sm shadow-sm dark:shadow-none flex items-center justify-center">
                    View Integrations
                  </a>
                </div>
              </div>

              <div className="relative animate-fade-in delay-200" id="demo">
                 <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl blur-xl opacity-20 transform rotate-2"></div>
                <ChatWidget />
              </div>
            </div>
          </section>

          {/* Value Proposition Bar */}
          <section className="bg-white dark:bg-white/5 border-y border-gray-200 dark:border-white/5 py-10">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-lime-50 dark:bg-lime-500/10 rounded-lg">
                    <Icons.Activity className="w-5 h-5 text-lime-600 dark:text-lime-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Full Lifecycle</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Design, Deploy, Analyze</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-lime-50 dark:bg-lime-500/10 rounded-lg">
                    <Icons.Zap className="w-5 h-5 text-lime-600 dark:text-lime-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Deployment</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">SaaS & On-prem</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-lime-50 dark:bg-lime-500/10 rounded-lg">
                    <Icons.ShieldCheck className="w-5 h-5 text-lime-600 dark:text-lime-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Enterprise Grade</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Security & Control</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-lime-50 dark:bg-lime-500/10 rounded-lg">
                    <Icons.Globe className="w-5 h-5 text-lime-600 dark:text-lime-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Omnichannel</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Web, Mobile, WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section id="how-it-works" className="py-24 relative bg-gray-50 dark:bg-black/20 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">The Power of Intelligent Automation</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  LinnoChat combines three distinct AI layers to handle the entire interaction lifecycle.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {agents.map((agent, idx) => (
                  <div key={idx} className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-white/5 hover:border-lime-500 dark:hover:border-lime-500 transition-colors">
                    <div className="mb-6">{agent.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{agent.title}</h3>
                    <p className="text-sm font-semibold text-lime-500 dark:text-lime-400 mb-4">{agent.subtitle}</p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {agent.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Linno? Section */}
          <section id="why-linno" className="py-24 bg-white dark:bg-dark-900 relative overflow-hidden scroll-mt-24">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-lime-50 dark:bg-white/5 skew-x-12 transform translate-x-20"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Why Upgrade from Static Forms?
                  </h2>
                  <p className="text-xl text-lime-600 dark:text-lime-400 mb-6 font-medium">
                    Forms are rigid. LinnoChat is dynamic, resolving issues as they happen.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                        <Icons.CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">Dynamic Triage</h4>
                        <p className="text-gray-600 dark:text-gray-400">The AI adapts questions based on user answers, skipping irrelevant steps and digging deeper when needed.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                        <Icons.CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">Structured Data Extraction</h4>
                        <p className="text-gray-600 dark:text-gray-400">Turn conversational chaos into clean Data Structure. We populate your CRM or ticketing system automatically.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                        <Icons.CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">24/7 Resolution</h4>
                        <p className="text-gray-600 dark:text-gray-400">Don't just queue tickets—solve them. Our agents can handle FAQs, scheduling, and basic troubleshooting.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex justify-center lg:justify-end">
                  <div className="bg-gray-900 dark:bg-black rounded-2xl p-6 shadow-2xl border border-gray-800 dark:border-white/10 w-full max-sm:max-w-sm">
                    <h3 className="text-white font-bold mb-6 border-b border-gray-800 pb-4">Efficiency Metrics</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between text-xs text-gray-400 mb-2 font-medium tracking-wide uppercase">
                          <span>Resolution Rate</span>
                          <span className="text-amber-400 font-bold">65%</span>
                        </div>
                        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full w-[65%] bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.3)]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs text-gray-400 mb-2 font-medium tracking-wide uppercase">
                          <span>Intake Speed</span>
                          <span className="text-indigo-400 font-bold">40% faster</span>
                        </div>
                        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full w-[40%] bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.3)]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs text-gray-400 mb-2 font-medium tracking-wide uppercase">
                          <span>CSAT Increase</span>
                          <span className="text-purple-400 font-bold">+18 pts</span>
                        </div>
                        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full w-[88%] bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.3)]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Section: Vibrant Green Strip */}
          <section id="platform" className="py-24 bg-lime-500 text-lime-950 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-full mb-16 overflow-hidden">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight whitespace-nowrap">
                  Enterprise-Grade Open Architecture
                </h2>
                <p className="text-xl md:text-2xl text-lime-950/90 leading-tight font-medium whitespace-nowrap overflow-hidden">
                  Fully self-hosted deployment for absolute data sovereignty. Secure, controlled, and open.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                {platformFeatures.map((feature, idx) => (
                  <div key={idx} className="group">
                    <div className="mb-6 p-4 bg-white w-fit rounded-xl border border-lime-600/20 group-hover:border-lime-600/40 transition-all">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-lime-900 leading-relaxed text-sm lg:text-base font-medium">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Integrations Section Strip */}
          <section id="integrations-section" className="py-24 bg-black text-white scroll-mt-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Native Integrations</h2>
                <p className="text-gray-400 text-lg md:whitespace-nowrap">
                  LinnoChat fits perfectly into your existing tech stack. Connect your favorite tools and start automating in minutes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {integrationItems.map((item) => (
                  <div key={item.name} className="p-6 rounded-2xl bg-white border border-white/10 hover:border-lime-500/50 transition-all group shadow-sm">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-slate-50 rounded-xl group-hover:scale-110 transition-transform flex items-center justify-center">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Solutions Section */}
          <section id="solutions" className="py-24 bg-gray-50 dark:bg-dark-800/30 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Procurement Process Automation</h2>
                <p className="text-gray-600 dark:text-gray-400">Save time & money - Streamline procurement processes to improve experience and compliance</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                {industries.map((item, idx) => (
                  <div key={idx} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white dark:bg-dark-900 p-6 rounded-2xl border border-gray-200 dark:border-white/5 hover:shadow-lg transition-all group">
                    <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.name}</h3>
                    <span className="inline-block px-2 py-1 bg-lime-50 dark:bg-lime-900/20 text-xs font-semibold text-lime-700 dark:text-lime-400 rounded mb-4 border border-lime-100 dark:border-lime-800">
                      {item.useCase}
                    </span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Start Automating Today Section */}
          <section id="automate" className="py-24 bg-gray-50 dark:bg-dark-950 scroll-mt-24 border-t border-gray-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Start Automating Today</h2>
                <p className="text-brand-600 dark:text-lime-500 text-2xl font-bold mb-4">Reduce costs. Improve satisfaction.</p>
                <p className="text-slate-600 dark:text-gray-400 text-lg font-medium">Inject your scripts and our team can create a custom agent per your specifications</p>
              </div>

              <div className="max-w-4xl mx-auto bg-white dark:bg-dark-900 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-200 dark:border-white/5">
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2 text-left">
                      <label className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-dark-800 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white" 
                        placeholder="Your name"
                        value={automateData.name}
                        onChange={(e) => setAutomateData({...automateData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider">Company</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-dark-800 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white" 
                        placeholder="Company name"
                        value={automateData.company}
                        onChange={(e) => setAutomateData({...automateData, company: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2 text-left">
                      <label className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider">Work Email</label>
                      <input 
                        type="email" 
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-dark-800 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white" 
                        placeholder="email@company.com"
                        value={automateData.workEmail}
                        onChange={(e) => setAutomateData({...automateData, workEmail: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-dark-800 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white" 
                        placeholder="+1 (555) 000-0000"
                        value={automateData.phone}
                        onChange={(e) => setAutomateData({...automateData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider">Workflow Type</label>
                    <div className="relative group">
                      <select 
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-dark-800 border-2 border-slate-200 dark:border-white/10 focus:border-brand-500 focus:ring-0 outline-none transition-all dark:text-white appearance-none cursor-pointer"
                        value={automateData.workflowType}
                        onChange={(e) => setAutomateData({...automateData, workflowType: e.target.value})}
                      >
                        <option>Customer Support (L1)</option>
                        <option>Client Intake / Onboarding</option>
                        <option>Qualitative Research (Upload Description or Script)</option>
                        <option>Internal Helpdesk</option>
                        <option>Other Use case</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                         <Icons.ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider">Send us a script / Document</label>
                    <div className="relative group">
                      <textarea 
                        className="w-full h-40 px-5 py-6 rounded-2xl bg-slate-50 dark:bg-dark-800 border-2 border-dashed border-slate-200 dark:border-white/10 focus:border-brand-500 focus:ring-0 outline-none transition-all dark:text-white resize-none"
                        placeholder="Paste your script, SOP, or training data here. Our AI will design your agent instantly from your existing documents..."
                        value={automateData.script}
                        onChange={(e) => setAutomateData({...automateData, script: e.target.value})}
                      ></textarea>
                      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center opacity-0 group-hover:opacity-10 bg-black/5 dark:bg-white/5 rounded-2xl transition-opacity">
                        <Icons.UploadCloud className="w-12 h-12 text-slate-400" />
                        <p className="text-sm font-bold text-slate-500 mt-2">Drop files or paste here</p>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="button"
                    className="w-full py-5 bg-brand-500 hover:bg-brand-600 text-black font-bold text-xl rounded-2xl shadow-xl transition-all hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center space-x-3"
                  >
                    <span>Generate My Agent</span>
                    <Icons.Zap className="w-5 h-5 fill-black" />
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Book a Demo Section */}
          <section id="try-now" className="py-24 bg-white dark:bg-dark-950 scroll-mt-24 border-t border-gray-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-7xl font-extrabold text-[#111827] dark:text-white mb-6 tracking-tight">Book a Demo</h2>
                <p className="text-brand-600 dark:text-lime-500 text-2xl font-bold mb-4">Reduce costs. Improve satisfaction.</p>
                <p className="text-[#6b7280] dark:text-gray-400 text-xl">Speak to our team about deploying your first intelligent agent.</p>
              </div>

              <div className="max-w-4xl mx-auto bg-white dark:bg-dark-900/50 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 dark:border-white/5 relative overflow-hidden">
                <form className="space-y-10 relative z-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3 text-left">
                      <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-4 rounded-xl bg-[#f9fafb] dark:bg-dark-800 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white text-lg placeholder-gray-400" 
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3 text-left">
                      <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">Company Name</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-4 rounded-xl bg-[#f9fafb] dark:bg-dark-800 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white text-lg placeholder-gray-400" 
                        placeholder="Company name"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3 text-left">
                      <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">Work Email</label>
                      <input 
                        type="email" 
                        className="w-full px-5 py-4 rounded-xl bg-[#f9fafb] dark:bg-dark-800 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white text-lg placeholder-gray-400" 
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3 text-left">
                      <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full px-5 py-4 rounded-xl bg-[#f9fafb] dark:bg-dark-800 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white text-lg placeholder-gray-400" 
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <button 
                    type="button"
                    className="w-full py-6 bg-brand-500 hover:bg-brand-600 text-black font-bold text-2xl rounded-2xl shadow-[0_10px_30px_rgba(132,204,22,0.2)] transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-4"
                  >
                    <span>Book My Demo</span>
                    <Icons.ArrowRight className="w-8 h-8" />
                  </button>
                </form>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer Section */}
      <footer className="bg-white dark:bg-dark-950 pt-20 pb-10 border-t border-gray-100 dark:border-white/5 text-gray-900 dark:text-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand & Info */}
            <div className="md:col-span-2">
              <div 
                className="flex items-center space-x-3 mb-6 cursor-pointer"
                onClick={() => navigateTo('home')}
              >
                <div className="w-12 h-10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Icons.SpeechBubbles className="w-10 h-10 text-brand-600" />
                </div>
                <span className="text-3xl font-extrabold tracking-tighter transition-colors">
                  <span className="text-black dark:text-white">Linno</span>
                  <span className="text-brand-600">chat</span>
                </span>
              </div>
              <p className="text-slate-600 dark:text-gray-400 text-base max-w-sm mb-8 leading-relaxed">
                The enterprise platform for intelligent intake, support, and data collection.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-slate-500 dark:text-gray-400">
                  <Icons.MapPin className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium">Bnei Brak, Israel (Powered by Linnovate)</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-500 dark:text-gray-400">
                  <Icons.Mail className="w-4 h-4 text-brand-500" />
                  <span className="text-sm font-medium underline decoration-brand-200 underline-offset-4">contact@linnovate.net</span>
                </div>
              </div>
            </div>

            {/* Column 2: Platform Links */}
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-8 tracking-tight">Platform</h4>
              <ul className="space-y-4 text-slate-600 dark:text-gray-400">
                <li><a href="https://webchat.linno.chat/swagger/index.html" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors font-medium">API Documentation</a></li>
              </ul>
            </div>

            {/* Column 3: Connect / Social */}
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-8 tracking-tight">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all shadow-sm">
                  <Icons.Users className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all shadow-sm">
                  <Icons.MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-slate-500 dark:text-gray-500">
            <p>© 2026 Linnovate Technologies Ltd. All Rights Reserved.</p>
            <div className="flex space-x-10 mt-6 md:mt-0">
              <button 
                onClick={() => navigateTo('privacy')}
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => navigateTo('terms')}
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Terms of Service (SaaS Agreement)
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
