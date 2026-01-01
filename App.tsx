import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import ComingSoonPage from './components/ComingSoonPage';
import { Icons } from './components/Icons';

const agents = [
  {
    title: "1. Workflow Builder Agent",
    subtitle: "(Design)",
    description: "Import your SOPs or Support Documentation. The AI automatically generates conversation flows for Intake, Triage, or Feedback.",
    icon: <Icons.LayoutTemplate className="w-6 h-6 text-lime-500" />
  },
  {
    title: "2. Execution Agent",
    subtitle: "(Engage)",
    description: "Your 24/7 frontline. Handles complex queries, collects required documents, and routes critical issues to humans with context.",
    icon: <Icons.Bot className="w-6 h-6 text-lime-600" />
  },
  {
    title: "3. Insight Engine",
    subtitle: "(Structure)",
    description: "Converts unstructured chat logs into Data Structure, CRM records, or summary tickets. Identifies trends and sentiment instantly.",
    icon: <Icons.BarChart3 className="w-6 h-6 text-lime-500" />
  }
];

const platformFeatures = [
  {
    title: "Bring Your Own Model",
    description: "Connect with popular LLMs like OpenAI, Llama, Gemini, or custom fine-tuned models.",
    icon: <Icons.Cpu className="w-6 h-6 text-black" />
  },
  {
    title: "Workflow API",
    description: "Trigger chats from your app, upload contacts securely, and pipe structured data directly back into your systems.",
    icon: <Icons.Terminal className="w-6 h-6 text-black" />
  },
  {
    title: "Any Channel",
    description: "Deploy via Web SDK, WhatsApp Business API, Slack, or Email auto-responders.",
    icon: <Icons.Globe className="w-6 h-6 text-black" />
  }
];

const industries = [
  {
    name: "Customer Support",
    useCase: "L1 Deflection & Triage",
    description: "Resolve up to 70% of tickets automatically and route complex issues with full context summaries.",
    icon: <Icons.MessageSquare className="w-5 h-5 text-white" />,
    color: "bg-lime-500"
  },
  {
    name: "Healthcare",
    useCase: "Patient Intake",
    description: "Automate pre-visit forms, symptom checking triage, and appointment scheduling via chat.",
    icon: <Icons.Stethoscope className="w-5 h-5 text-white" />,
    color: "bg-lime-500"
  },
  {
    name: "FinTech",
    useCase: "KYC & Onboarding",
    description: "Collect documents and validate user information in a secure, conversational flow.",
    icon: <Icons.Wallet className="w-5 h-5 text-white" />,
    color: "bg-lime-500"
  },
  {
    name: "HR & Enterprise",
    useCase: "Internal Helpdesk",
    description: "Instant answers for benefits, IT support, and employee onboarding processes.",
    icon: <Icons.Building2 className="w-5 h-5 text-white" />,
    color: "bg-lime-500"
  },
  {
    name: "Consumer Research",
    useCase: "Deep Feedback",
    description: "Go beyond NPS scores with qualitative interviews that dig into the 'Why' behind the data.",
    icon: <Icons.FileSearch className="w-5 h-5 text-white" />,
    color: "bg-lime-500"
  }
];

const integrationItems = [
  { name: "Lite-LLM", icon: <Icons.Cpu className="w-5 h-5 text-lime-500" />, desc: "Connect any foundation model with standardized APIs." },
  { name: "Priority", icon: <Icons.Building2 className="w-5 h-5 text-lime-500" />, desc: "Direct ERP integration for complex enterprise workflows." },
  { name: "WhatsApp", icon: <Icons.WhatsApp className="w-5 h-5 text-lime-500" />, desc: "Automate conversations on the world's favorite chat app." },
  { name: "Messenger", icon: <Icons.MessageSquare className="w-5 h-5 text-lime-500" />, desc: "Support customers directly via Meta's platform." },
  { name: "Google Cloud", icon: <Icons.Cloud className="w-5 h-5 text-lime-500" />, desc: "Enterprise hosting and secure data residency." },
  { name: "Azure", icon: <Icons.Terminal className="w-5 h-5 text-lime-500" />, desc: "Microsoft ecosystem integration for Fortune 500s." },
];

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'terms' | 'coming-soon'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigateTo = (view: 'home' | 'privacy' | 'terms' | 'coming-soon') => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-slate-200 selection:bg-lime-500/30 transition-colors duration-300 overflow-x-hidden">
      <Navbar onLogoClick={() => navigateTo('home')} />

      {currentView === 'privacy' && <PrivacyPolicyPage onBack={() => navigateTo('home')} />}
      {currentView === 'terms' && <TermsOfServicePage onBack={() => navigateTo('home')} />}
      {currentView === 'coming-soon' && <ComingSoonPage onBack={() => navigateTo('home')} />}
      
      {currentView === 'home' && (
        <>
          {/* Hero Section */}
          <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-24 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
              <div className="absolute top-0 left-1/4 w-64 h-64 md:w-80 md:h-80 bg-lime-300/10 dark:bg-lime-500/10 rounded-full blur-[100px] animate-blob"></div>
              <div className="absolute top-20 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-lime-400/10 dark:bg-lime-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="text-left animate-slide-up order-2 lg:order-1">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
                    <span className="glass-heading-main inline-block py-1 text-black dark:text-white">Conversational AI <br className="hidden md:block" /> Agents for</span>
                    <br />
                    <span className="glass-heading-accent inline-block py-1">Data Collection <br className="hidden md:block" /> and Analysis</span>
                  </h1>
                  <p className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4 max-w-md">
                    Turn complex workflows into natural, actionable conversations.
                  </p>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
                    LinnoChat is the enterprise AI platform that deploys intelligent agents to handle customer support triage, complex data collection, and qualitative research—without writing a single line of code.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <a 
                      href="https://wa.me/972548032882" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-3 bg-brand-500 hover:bg-brand-600 text-black rounded-lg font-bold text-sm transition-all shadow-xl shadow-brand-500/10 flex items-center justify-center space-x-2"
                    >
                      <Icons.WhatsApp className="w-4 h-4" />
                      <span>Contact Sales</span>
                    </a>
                    <a href="#integrations-section" className="w-full sm:w-auto px-8 py-3 bg-white hover:bg-gray-50 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-lg font-bold text-sm transition-all shadow-sm flex items-center justify-center">
                      Explore Platform
                    </a>
                  </div>
                </div>

                <div className="relative animate-fade-in delay-200 order-1 lg:order-2 flex justify-center lg:justify-end" id="demo">
                  <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl blur-xl opacity-5 transform rotate-2"></div>
                  <div className="w-full max-w-[340px] sm:max-w-sm">
                    <ChatWidget />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Value Prop Bar */}
          <section className="bg-white dark:bg-white/5 border-y border-gray-200 dark:border-white/5 py-8">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {[
                  { icon: <Icons.Activity />, title: 'Full Lifecycle', desc: 'Design to Deploy' },
                  { icon: <Icons.Zap />, title: 'Deployment', desc: 'SaaS & On-prem' },
                  { icon: <Icons.ShieldCheck />, title: 'Enterprise', desc: 'Secure & Robust' },
                  { icon: <Icons.Globe />, title: 'Channels', desc: 'WhatsApp & Web' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 md:space-x-3">
                    <div className="p-1.5 bg-lime-50 dark:bg-lime-500/10 rounded-lg shrink-0">
                      {/* Fixed: Use React.ReactElement<any> to ensure cloneElement accepts the className prop correctly across all mapped icons */}
                      {React.cloneElement(item.icon as React.ReactElement<any>, { className: 'w-4 h-4 text-lime-600' })}
                    </div>
                    <div className="overflow-hidden">
                      <h3 className="font-bold text-gray-900 dark:text-white text-[11px] md:text-sm whitespace-nowrap">{item.title}</h3>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section id="how-it-works" className="py-16 md:py-24 relative bg-gray-50 dark:bg-black/10 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Intelligent Interaction Architecture</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                  Our agents work across three specialized layers to handle everything from initial engagement to deep data structuring.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {agents.map((agent, idx) => (
                  <div key={idx} className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-white/5 hover:border-lime-500 transition-colors">
                    <div className="mb-4">{agent.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{agent.title}</h3>
                    <p className="text-[10px] font-bold text-lime-600 dark:text-lime-400 mb-3 uppercase tracking-widest">{agent.subtitle}</p>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {agent.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Linno? */}
          <section id="why-linno" className="py-16 md:py-24 bg-white dark:bg-dark-900 scroll-mt-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Beyond Static Forms
                  </h2>
                  <p className="text-base text-lime-700 dark:text-lime-400 mb-8 font-medium">
                    Automate discovery and support with dynamic logic that adapts in real-time.
                  </p>
                  <div className="space-y-6">
                    {[
                      { title: 'Dynamic Triage', desc: 'Logic that skips irrelevant questions based on context.' },
                      { title: 'Data Structuring', desc: 'Automated extraction of JSON data directly into your CRM.' },
                      { title: 'Omnichannel Reach', desc: 'Deploy on Web, Mobile, and WhatsApp with one click.' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start group">
                        <div className="mt-1 mr-4 p-1.5 bg-green-50 dark:bg-green-900/10 rounded-lg shrink-0 transition-transform group-hover:scale-110">
                          <Icons.CheckCircle2 className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-sm md:text-base mb-1">{item.title}</h4>
                          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center lg:justify-end">
                  <div className="bg-slate-900 dark:bg-black rounded-2xl p-6 shadow-2xl border border-white/5 w-full max-w-sm">
                    <h3 className="text-white font-bold mb-6 border-b border-white/5 pb-3 text-xs uppercase tracking-widest">Platform Benchmarks</h3>
                    <div className="space-y-6">
                      {[
                        { label: 'Resolution Rate', val: '65%', color: 'bg-lime-500' },
                        { label: 'Intake Speed', val: '+40% faster', color: 'bg-indigo-500' },
                        { label: 'CSAT Lift', val: '+18 pts', color: 'bg-purple-500' },
                      ].map((bar, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-[10px] text-slate-400 mb-2 font-bold uppercase tracking-wider">
                            <span>{bar.label}</span>
                            <span className="text-white">{bar.val}</span>
                          </div>
                          <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                            <div className={`h-full ${bar.color} rounded-full`} style={{ width: bar.val.includes('+') ? '80%' : bar.val }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Strip */}
          <section id="platform" className="py-16 md:py-20 bg-lime-500 text-lime-950 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Enterprise Infrastructure</h2>
              <p className="text-lg md:text-xl text-lime-950/80 mb-12 font-medium max-w-2xl mx-auto lg:mx-0">
                Self-hosted or managed cloud. Absolute data sovereignty. Secure, controlled, and open.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {platformFeatures.map((feature, idx) => (
                  <div key={idx} className="p-6 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all">
                    <div className="mb-4 p-2 bg-white w-fit rounded-lg shadow-sm">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-lime-950/90 text-xs md:text-sm font-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Integrations */}
          <section id="integrations-section" className="py-16 md:py-24 bg-black text-white scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Ecosystem Integrations</h2>
                <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
                  Seamlessly connect LinnoChat with the tools your team already uses every day.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {integrationItems.map((item) => (
                  <div key={item.name} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-lime-500/30 transition-all group">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-lime-500/10 transition-colors">
                        {item.icon}
                      </div>
                      <h3 className="text-base font-bold text-white">{item.name}</h3>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="automate" className="py-20 md:py-32 bg-gray-50 dark:bg-dark-950 scroll-mt-20 border-t border-gray-100 dark:border-white/5 text-center px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Ready to Automate?</h2>
              <p className="text-lg md:text-2xl text-lime-600 font-bold mb-10">Reduce costs. Improve satisfaction. Scale effortlessly.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/972548032882" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-4 bg-brand-500 hover:bg-brand-600 text-black font-bold text-lg rounded-xl shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center space-x-3"
                >
                  <Icons.WhatsApp className="w-5 h-5" />
                  <span>Chat with Sales</span>
                </a>
                <a 
                  href="https://calendar.app.google/lyron-linnovate-net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-4 bg-slate-900 dark:bg-dark-800 text-white font-bold text-lg rounded-xl shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center space-x-3"
                >
                  <Icons.ArrowRight className="w-5 h-5" />
                  <span>Book a Demo</span>
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-white dark:bg-dark-950 pt-16 pb-8 border-t border-gray-100 dark:border-white/5 text-gray-900 dark:text-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div 
                className="flex items-center space-x-2 mb-6 cursor-pointer"
                onClick={() => navigateTo('home')}
              >
                <Icons.SpeechBubbles className="w-8 h-8 text-brand-600" />
                <span className="text-2xl font-black tracking-tighter">
                  <span className="text-black dark:text-white">Linno</span>
                  <span className="text-brand-600">chat</span>
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mb-8 leading-relaxed">
                The enterprise standard for high-performance AI agents and intelligent discovery workflows.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-slate-500 text-xs">
                  <Icons.MapPin className="w-4 h-4 text-red-500" />
                  <span>Bnei Brak, Israel (Powered by Linnovate)</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-500 text-xs">
                  <Icons.Mail className="w-4 h-4 text-brand-500" />
                  <span className="underline decoration-brand-200 underline-offset-8">contact@linnovate.net</span>
                </div>
              </div>
            </div>

            <div className="md:text-right">
              <h4 className="text-slate-900 dark:text-white font-bold text-xs mb-6 uppercase tracking-widest">Connect</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-medium">
                <li><a href="https://webchat.linno.chat/swagger/index.html" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">Developer Portal</a></li>
                <li><a href="https://wa.me/972548032882" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors inline-flex items-center space-x-2">
                  <Icons.WhatsApp className="w-4 h-4" />
                  <span>Sales Support</span>
                </a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <p className="mb-4 md:mb-0">© 2026 Linnovate Technologies Ltd.</p>
            <div className="flex space-x-8">
              <button onClick={() => navigateTo('privacy')} className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy</button>
              <button onClick={() => navigateTo('terms')} className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;