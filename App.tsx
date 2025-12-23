
import React from 'react';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';
import { Icons } from './components/Icons';

const agents = [
  {
    title: "1. Workflow Builder Agent",
    subtitle: "(Design)",
    description: "Import your SOPs or Support Documentation. The AI automatically generates conversation flows for Intake, Triage, or Feedback.",
    icon: <Icons.LayoutTemplate className="w-8 h-8 text-indigo-500" />
  },
  {
    title: "2. Execution Agent",
    subtitle: "(Engage)",
    description: "Your 24/7 frontline. Handles complex queries, collects required documents, and routes critical issues to humans with context.",
    icon: <Icons.Bot className="w-8 h-8 text-purple-500" />
  },
  {
    title: "3. Insight Engine",
    subtitle: "(Structure)",
    description: "Converts unstructured chat logs into JSON, CRM records, or summary tickets. Identifies trends and sentiment instantly.",
    icon: <Icons.BarChart3 className="w-8 h-8 text-pink-500" />
  }
];

const industries = [
  {
    name: "Customer Support",
    useCase: "L1 Deflection & Triage",
    description: "Resolve 40% of tickets automatically and route complex issues with full context summaries.",
    icon: <Icons.MessageSquare className="w-6 h-6 text-white" />,
    color: "bg-purple-600"
  },
  {
    name: "Healthcare",
    useCase: "Patient Intake",
    description: "Automate pre-visit forms, symptom checking triage, and appointment scheduling via chat.",
    icon: <Icons.Stethoscope className="w-6 h-6 text-white" />,
    color: "bg-blue-600"
  },
  {
    name: "FinTech",
    useCase: "KYC & Onboarding",
    description: "Collect documents and validate user information in a secure, conversational flow.",
    icon: <Icons.Wallet className="w-6 h-6 text-white" />,
    color: "bg-green-600"
  },
  {
    name: "HR & Enterprise",
    useCase: "Internal Helpdesk",
    description: "Instant answers for benefits, IT support, and employee onboarding processes.",
    icon: <Icons.Building2 className="w-6 h-6 text-white" />,
    color: "bg-orange-600"
  },
  {
    name: "User Research",
    useCase: "Deep Feedback",
    description: "Go beyond NPS scores with qualitative interviews that dig into the 'Why' behind the data.",
    icon: <Icons.FileSearch className="w-6 h-6 text-white" />,
    color: "bg-teal-600"
  }
];

const integrations = [
  { name: "Lite-LLM", icon: <Icons.Cpu className="w-5 h-5 text-indigo-500" /> },
  { name: "Priority", icon: <Icons.Activity className="w-5 h-5 text-red-500" /> },
  { name: "WhatsApp", icon: <Icons.MessageSquare className="w-5 h-5 text-green-500" /> },
  { name: "Messenger", icon: <Icons.MessageSquare className="w-5 h-5 text-blue-600" /> },
  { name: "Google Cloud", icon: <Icons.Cloud className="w-5 h-5 text-blue-400" /> },
  { name: "Azure", icon: <Icons.ShieldCheck className="w-5 h-5 text-blue-700" /> },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-slate-200 selection:bg-indigo-500/30 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-300/30 dark:bg-indigo-500/20 rounded-full blur-[100px] animate-blob"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-slide-up">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
              Conversational AI Agents for <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">Data Collection and Analysis</span>
            </h1>
            <p className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Turn complex workflows into natural, actionable conversations.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
              LinnoChat is the enterprise AI platform that deploys intelligent agents to handle customer support triage, complex client intake, and qualitative research—all without code.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-indigo-900/20 dark:shadow-indigo-900/50 flex items-center justify-center space-x-2">
                <span>Build Your Agent</span>
                <Icons.ArrowRight className="w-4 h-4" />
              </a>
              <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-lg font-semibold transition-all backdrop-blur-sm shadow-sm dark:shadow-none">
                View Integrations
              </button>
            </div>

            {/* Integrations List with Icons */}
            <div className="animate-fade-in delay-500">
              <p className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">Native Integrations</p>
              <div className="flex flex-wrap gap-x-8 gap-y-6 items-center">
                {integrations.map((item) => (
                  <div key={item.name} className="flex items-center space-x-2 group cursor-default">
                    <div className="p-2 bg-white dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform shadow-sm">
                      {item.icon}
                    </div>
                    <span className="text-base font-bold text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in delay-200" id="demo">
             <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-20 transform rotate-2"></div>
            <ChatWidget />
          </div>
        </div>
      </section>

      {/* Value Proposition Bar */}
      <section className="bg-white dark:bg-white/5 border-y border-gray-200 dark:border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg">
                <Icons.Activity className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Full Lifecycle</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Design, Deploy, Analyze</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-purple-50 dark:bg-purple-500/10 rounded-lg">
                <Icons.Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Deployment</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">SaaS & On-prem</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-pink-50 dark:bg-pink-500/10 rounded-lg">
                <Icons.ShieldCheck className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Enterprise Grade</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Security & Control</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-50 dark:bg-blue-500/10 rounded-lg">
                <Icons.Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Omnichannel</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Web, Mobile, WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works: The 3-Agent Power */}
      <section id="how-it-works" className="py-24 relative bg-gray-50 dark:bg-black/20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">The Power of Intelligent Automation</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              LinnoChat combines three distinct AI layers to handle the entire interaction lifecycle—from defining the workflow to extracting structured data.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {agents.map((agent, idx) => (
              <div key={idx} className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-white/5 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors">
                <div className="mb-6">{agent.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{agent.title}</h3>
                <p className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 mb-4">{agent.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {agent.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why LinnoChat? Comparison */}
      <section id="why-linno" className="py-24 bg-white dark:bg-dark-900 relative overflow-hidden scroll-mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-50 dark:bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Upgrade from Static Forms?
              </h2>
              <p className="text-xl text-indigo-600 dark:text-indigo-400 mb-6 font-medium">
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
                    <p className="text-gray-600 dark:text-gray-400">Turn conversational chaos into clean JSON. We populate your CRM or ticketing system automatically.</p>
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
            
            <div className="relative">
              <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 shadow-2xl border border-gray-800 dark:border-white/10">
                <h3 className="text-white font-bold mb-6 border-b border-gray-800 pb-4">Efficiency Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Automated Resolution Rate</span>
                      <span className="text-green-400">65%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full w-[65%] bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Intake Completion Time</span>
                      <span className="text-blue-400">-40% faster</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full w-[40%] bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>CSAT Score Increase</span>
                      <span className="text-purple-400">+18 points</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full w-[88%] bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section id="solutions" className="py-24 bg-gray-50 dark:bg-dark-800/30 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Tailored Solutions for Every Sector</h2>
            <p className="text-gray-600 dark:text-gray-400">From patient intake to SaaS support, we have a pre-built agent for you.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-dark-900 p-6 rounded-2xl border border-gray-200 dark:border-white/5 hover:shadow-lg transition-all group">
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.name}</h3>
                <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-white/10 text-xs font-semibold text-gray-600 dark:text-gray-300 rounded mb-4">
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

      {/* Platform & Technology */}
      <section id="platform" className="py-24 bg-black text-white relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-Grade Open Architecture</h2>
            <p className="text-gray-400 text-lg">
              Fully self-hosted deployment for absolute data sovereignty. Secure, controlled, and open.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex items-start">
              <Icons.Cpu className="w-8 h-8 text-indigo-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Bring Your Own Model</h3>
                <p className="text-gray-400">Connect with popular LLMs like OpenAI, Llama, Gemini, or custom fine-tuned models.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Icons.Terminal className="w-8 h-8 text-indigo-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Workflow API</h3>
                <p className="text-gray-400">Trigger chats from your app, upload contacts securely, and pipe structured data directly back into your systems.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Icons.Globe className="w-8 h-8 text-indigo-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Any Channel</h3>
                <p className="text-gray-400">Deploy via Web SDK, WhatsApp Business API, Slack, or Email auto-responders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-dark-900 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Start Automating Today</h2>
            <p className="text-xl text-indigo-600 dark:text-indigo-400 font-medium mb-4">Reduce costs. Improve satisfaction.</p>
            <p className="text-gray-600 dark:text-gray-400">Deploy an intelligent agent for support or intake in minutes.</p>
          </div>

          <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-8 border border-gray-200 dark:border-white/10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-800 border border-gray-300 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-800 border border-gray-300 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Workflow Type</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-800 border border-gray-300 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white">
                  <option>Customer Support (L1)</option>
                  <option>Client Intake / Onboarding</option>
                  <option>Qualitative Research</option>
                  <option>Internal Helpdesk</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload SOP or Form (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 dark:border-white/20 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors cursor-pointer">
                  <Icons.FileSearch className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Let our AI build your agent instantly from your existing documents.</p>
                </div>
              </div>
              <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg shadow-lg shadow-indigo-500/30 transition-all">
                Generate My Agent
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-dark-950 pt-16 pb-8 border-t border-gray-200 dark:border-white/5 text-gray-900 dark:text-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icons.BrainCircuit className="text-indigo-500 w-6 h-6" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">LinnoChat</span>
              </div>
              <p className="text-gray-600 dark:text-gray-500 text-sm max-w-xs mb-4">
                The enterprise platform for intelligent intake, support, and data collection.
              </p>
              <div className="text-sm text-gray-500">
                <p>📍 Tel Aviv, Israel (Powered by Linnovate)</p>
                <p>📧 sales@linnochat.com</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-500">
                <li><a href="#" className="hover:text-indigo-500">Support Automation</a></li>
                <li><a href="#" className="hover:text-indigo-500">Intake Forms</a></li>
                <li><a href="#" className="hover:text-indigo-500">Research & Insights</a></li>
                <li><a href="#" className="hover:text-indigo-500">API Documentation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all">
                   <span className="sr-only">LinkedIn</span>
                   <Icons.Users className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all">
                   <span className="sr-only">Twitter</span>
                   <Icons.MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2024 LinnoChat. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-indigo-500">Privacy Policy</a>
               <a href="#" className="hover:text-indigo-500">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
