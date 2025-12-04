import React from 'react';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';
import { Icons } from './components/Icons';

const agents = [
  {
    title: "1. AI Script Builder Agent",
    subtitle: "(Build)",
    description: "Create bespoke discussion guides in minutes. Simply input your business questions or choose from our Template Library.",
    icon: <Icons.LayoutTemplate className="w-8 h-8 text-indigo-500" />
  },
  {
    title: "2. Conversation AI Agent",
    subtitle: "(Execute)",
    description: "The Virtual Interviewer that never sleeps. Uses active listening, mirroring, and probing techniques to collect deep data.",
    icon: <Icons.MessageSquare className="w-8 h-8 text-purple-500" />
  },
  {
    title: "3. Emotional AI Agent",
    subtitle: "(Analyze)",
    description: "Go beyond keywords. Processes 'soft measures'—emotional drivers and psychological motivations—to predict behavior.",
    icon: <Icons.BrainCircuit className="w-8 h-8 text-pink-500" />
  }
];

const industries = [
  {
    name: "Gaming",
    useCase: "Player Motivation & LTV",
    description: "Identified correlation between 'Sense of Progression' and high involvement in 682 gamers.",
    icon: <Icons.Gamepad2 className="w-6 h-6 text-white" />,
    color: "bg-purple-600"
  },
  {
    name: "Hospitality",
    useCase: "Unmet Guest Needs",
    description: "Replace static feedback with dynamic chat to identify 'Silent Promoters' or 'Adversaries'.",
    icon: <Icons.Plane className="w-6 h-6 text-white" />,
    color: "bg-blue-600"
  },
  {
    name: "Healthcare",
    useCase: "Patient Experience",
    description: "Probe for details on patient care and facility conditions, turning unstructured complaints into data.",
    icon: <Icons.Stethoscope className="w-6 h-6 text-white" />,
    color: "bg-green-600"
  },
  {
    name: "HR & Enterprise",
    useCase: "Employee Wellness",
    description: "Emotional AI detects burnout signals and deeper needs that standard checkboxes miss.",
    icon: <Icons.Building2 className="w-6 h-6 text-white" />,
    color: "bg-orange-600"
  },
  {
    name: "FinTech",
    useCase: "Customer Relations",
    description: "Achieved 81% completion in AML feedback, revealing gaps between scores and sentiment.",
    icon: <Icons.Wallet className="w-6 h-6 text-white" />,
    color: "bg-teal-600"
  }
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
              Sense Your Customers with <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">Conversational AI</span>
            </h1>
            <p className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Turn Passive Surveys into Active, Insightful Conversations.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
              LinnoChat is the no-code enterprise platform that uses GenAI to build "Virtual Interviewers." We automate the collection of deep qualitative data to uncover actionable business insights.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-indigo-900/20 dark:shadow-indigo-900/50 flex items-center justify-center space-x-2">
                <span>Create Your Virtual Interviewer</span>
                <Icons.ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-lg font-semibold transition-all backdrop-blur-sm shadow-sm dark:shadow-none">
                See the Data
              </button>
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
                <h3 className="font-semibold text-gray-900 dark:text-white">3-Step Lifecycle</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Build, Execute, Analyze</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-purple-50 dark:bg-purple-500/10 rounded-lg">
                <Icons.Mic className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Voice & Text</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Enable natural speech</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-pink-50 dark:bg-pink-500/10 rounded-lg">
                <Icons.BrainCircuit className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Psychology-Based</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Detects emotion & behavior</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-50 dark:bg-blue-500/10 rounded-lg">
                <Icons.Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Omnichannel</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Web, WhatsApp, CRM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works: The 3-Agent Power */}
      <section id="how-it-works" className="py-24 relative bg-gray-50 dark:bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">The Power of Three AI Agents</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              LinnoChat leverages three distinct AI agents to handle the entire project lifecycle—from creation to analysis.
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
      <section id="why-linno" className="py-24 bg-white dark:bg-dark-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-50 dark:bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Replace Surveys with LinnoChat?
              </h2>
              <p className="text-xl text-indigo-600 dark:text-indigo-400 mb-6 font-medium">
                Traditional surveys are boring. LinnoChat is engaging.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                    <Icons.CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Unmatched Engagement</h4>
                    <p className="text-gray-600 dark:text-gray-400">~87% completion rates with users chatting for over 19 minutes on average.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                    <Icons.CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Rich Qualitative Data</h4>
                    <p className="text-gray-600 dark:text-gray-400">Users share detailed stories—exceeding 100-200 words per answer—because the AI makes them feel heard.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                    <Icons.CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Human-Like Interaction</h4>
                    <p className="text-gray-600 dark:text-gray-400">Our bots use empathy ("So sorry to hear that") and validation to build trust.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 shadow-2xl border border-gray-800 dark:border-white/10">
                <h3 className="text-white font-bold mb-6 border-b border-gray-800 pb-4">Live Engagement Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Completion Rate</span>
                      <span className="text-green-400">87%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full w-[87%] bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Avg. Time Spent</span>
                      <span className="text-blue-400">19m 23s</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Word Count / Answer</span>
                      <span className="text-purple-400">150+ words</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full w-[80%] bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section id="solutions" className="py-24 bg-gray-50 dark:bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Tailored Solutions for Every Sector</h2>
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
      <section id="platform" className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-Grade Open Architecture</h2>
            <p className="text-gray-400 text-lg">
              Fully self-hosted deployment for absolute data sovereignty. Secure, controlled, and open.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <Icons.Cpu className="w-8 h-8 text-indigo-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Bring Your Own Model</h3>
                  <p className="text-gray-400">Connect with popular LLMs like OpenAI, Llama, or custom fine-tuned models.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Icons.Terminal className="w-8 h-8 text-indigo-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Open API</h3>
                  <p className="text-gray-400">Trigger chats from your app, upload contacts securely, and pipe analyzed data directly back into your systems.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Icons.Globe className="w-8 h-8 text-indigo-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Omnichannel Deployment</h3>
                  <p className="text-gray-400">Web App, Messaging apps (WhatsApp), and QR Codes for physical locations.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 font-mono text-sm">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-300 space-y-2">
                <p><span className="text-purple-400">const</span> <span className="text-yellow-200">config</span> = {'{'}</p>
                <p className="pl-4"><span className="text-blue-300">mode:</span> <span className="text-green-300">'enterprise_self_host'</span>,</p>
                <p className="pl-4"><span className="text-blue-300">model:</span> <span className="text-green-300">'llama-3-70b'</span>,</p>
                <p className="pl-4"><span className="text-blue-300">channels:</span> ['web', 'whatsapp', 'crm'],</p>
                <p className="pl-4"><span className="text-blue-300">security:</span> {'{'}</p>
                <p className="pl-8"><span className="text-blue-300">pii_redaction:</span> <span className="text-purple-400">true</span>,</p>
                <p className="pl-8"><span className="text-blue-300">data_residency:</span> <span className="text-green-300">'on-prem'</span></p>
                <p className="pl-4">{'}'}</p>
                <p>{'};'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-dark-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Start Sensing Your Customers Today</h2>
            <p className="text-xl text-indigo-600 dark:text-indigo-400 font-medium mb-4">Stop guessing. Start asking.</p>
            <p className="text-gray-600 dark:text-gray-400">Deploy a Virtual Interviewer today and turn every interaction into a business advantage.</p>
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
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Use Case</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-800 border border-gray-300 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white">
                  <option>Market Research</option>
                  <option>Customer Experience (CX)</option>
                  <option>HR & Employee Experience</option>
                  <option>Lead Generation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload Your Script (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 dark:border-white/20 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors cursor-pointer">
                  <Icons.FileSearch className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Let our AI build your bot instantly. Drag & drop or click to upload.</p>
                </div>
              </div>
              <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg shadow-lg shadow-indigo-500/30 transition-all">
                Create My Virtual Interviewer
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
                The no-code enterprise platform that uses GenAI to build "Virtual Interviewers."
              </p>
              <div className="text-sm text-gray-500">
                <p>📍 Tel Aviv, Israel (Powered by Linnovate)</p>
                <p>📧 info@linnochat.com</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-500">
                <li><a href="#" className="hover:text-indigo-500">How It Works</a></li>
                <li><a href="#" className="hover:text-indigo-500">Emotional AI</a></li>
                <li><a href="#" className="hover:text-indigo-500">Enterprise Security</a></li>
                <li><a href="#" className="hover:text-indigo-500">Integrations</a></li>
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