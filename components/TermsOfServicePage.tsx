import React from 'react';
import { Icons } from './Icons';

interface TermsOfServicePageProps {
  onBack: () => void;
}

const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-lime-600 dark:text-lime-400 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
        >
          <Icons.ArrowRight className="w-5 h-5 rotate-180" />
          <span>Back to Home</span>
        </button>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Linnovate AI Chatbot - SaaS Agreement</h1>
            <p className="text-slate-500 dark:text-gray-400 font-medium">Last updated and effective as of April 24, 2025</p>
          </div>

          <section className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/10 italic text-sm">
              <p className="mb-4">
                This Software As A Service Agreement (“Agreement”) was signed and entered between the Customer and Linnovate Technologies Ltd., an Israeli Corporation Reg. Number 514840156 whose principal place of business is 9 Jabotinsky St., Bnei Brak, Israel (hereinafter: “Linnovate”).
              </p>
              <p className="mb-4">
                WHEREAS Linnovate is the owner and/or licensor and operator of the Chatbot Software as a Service platform, which services which allows the Customer to create artificial intelligence chatbots with its clients (the “Platform”); and
              </p>
              <p className="mb-4">
                WHEREAS Customer wishes to receive access to the Platform and to purchase support services during the term of this Agreement; and
              </p>
              <p>
                WHEREAS Linnovate wishes to provision access to the Platform to the Customer;
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1 Definitions:</h2>
              <div className="pl-4 space-y-4">
                <p><strong>1.1 “Confidential Information”</strong> means any and all information, including but not limited to documentation, scientific, designs, software and software code, prototypes, product descriptions, technical or business information, ideas, discoveries, inventions, specifications, formulas, processes, programs, plans, drawings, models, network configuration and rights-of-way, requirements, standards, financial and non-financial data, marketing, trade secrets, know-how, customer lists, prices, as well as any and all intellectual and industrial property rights contained therein and/or in relation thereto.</p>
                <p><strong>1.2 “Customer Data”</strong> shall mean any data, information, files, or methods relating to the Customer which are stored or passed through Linnovate’s services, excluding Personal Data, as defined under applicable laws. Including the contents of chats made via the Platform and the Customer’s dialog data.</p>
                <p><strong>1.3 “Platform”</strong> as defined in the preamble.</p>
                <p><strong>1.4 “Server”</strong> shall mean the Linnovate’s Server running the Platform.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2 Provision of Web-Based Access</h2>
              <p className="mb-4">Commencing on the Effective Date, Linnovate shall provision and host on behalf of the Customer the Platform. The access to the Platform shall be provided via secure web channels and via an API (application programming interface) and using the credentials supplied via the specified method.</p>
              <div className="pl-4 space-y-4">
                <p><strong>2.1 Limited Access.</strong> The Customer shall ensure that only its employees or subcontractors under specific and direct confidentiality obligations access the Platform and obtain a copy of the credentials.</p>
                <p><strong>2.2 Right to Store Customer Data.</strong> During the term of this Agreement, Linnovate hereby provides the Customer with the right to store the Customer Data on the Platform all according to the stipulations of this Agreement.</p>
                <p><strong>2.3 Right to use Output.</strong> The Customer may include the output of the web-based service by embedding it in its user-facing service or include the output of the API in reports and services it provides its end-users.</p>
                <p><strong>2.3.1 Security.</strong> The Customer shall take all steps to secure the access of its employees, staff and subcontractors to the Platform and shall notify Linnovate in any case where the confidentiality, integrity or authenticity of such credentials was compromised.</p>
                <p><strong>2.4 Bona Fide Use.</strong> Linnovate operates a strict acceptable use policy, which a violation of may cause termination of the Customer account. The policy limits: (a) the use of the services to a reasonable level; (b) a limit on using the service with harmful content; (c) use of the services to compete with Linnovate; (d) reselling or relicensing; (e) use to commit a crime; (f) unauthorized material access; (g) exceeding permitted users.</p>
                <p><strong>2.5 Further Restrictions.</strong> The Customer shall not: (i) copy, distribute or modify the service; (ii) create derivative works; (iii) disrupt servers; (iv) use launch automated systems (robots/spiders); and/or (v) circumvent security-related features.</p>
                <p><strong>2.6 Licenses.</strong> The Customer is responsible for obtaining all required authorizations, licenses or permits under applicable laws to use the Platform.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3 Support Services</h2>
              <p>The Customer shall receive support services in respect to the Platform, meaning providing it with services to integrate, correct or repair the Platform as well as general consulting. The services shall be provided during regular business hours and based on availability. The services shall be capped at 15 monthly hours.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4 Payment</h2>
              <p>The payment for the services shall be as stated in the price quote provided to the Customer and the payment terms stipulated therein.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5 Acknowledgment of Beta and Pricing</h2>
              <p>The Customer understands that Linnovate has provisioned the Platform to the Customer based on its consent to use it when it is in a beta and trial stage. Limitation of liability is capped at a certain threshold. Future renewals or extensions may require price changes.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6 The Customer Is a Design Partner</h2>
              <p>The Customer is considered a design partner in the Platform and Linnovate may use its name and logo to present it as a design partner for potential customers and investors. The Customer provides consent for such use and may notify of withdrawal at any time.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7 Service Levels and Availability</h2>
              <p className="mb-4">Linnovate shall make best efforts to achieve a service level which is equal to 99.0%, calculated on a monthly basis. This ensures no more than 223 minutes of downtime per month, excluding scheduled maintenance or external infrastructure errors.</p>
              <div className="pl-4 space-y-4 text-sm">
                <p><strong>7.1 Reporting.</strong> Report downtime directly via ticketing system or phone.</p>
                <p><strong>7.2 Critical Errors.</strong> Total unavailability shall be reported 24/7 via email or phone.</p>
                <p><strong>7.3 Repairs.</strong> Linnovate shall commence repair of a critical error promptly, no later than one business day after reporting.</p>
                <p><strong>7.4 Non-critical Errors.</strong> Reported via ticketing system and handled during regular business hours.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8 Updates and Upgrades</h2>
              <p>Linnovate may provision updates (minor changes) and upgrades (major changes). All updates may be applied immediately.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9 Intellectual Property Rights</h2>
              <p>Linnovate remains the owner of all intellectual property rights in the services and Platform. Nothing in this Agreement shall convey title or ownership. The Customer remains the owner of any Customer Data stored on the Platform.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">10 Privacy and Data Protection</h2>
              <p>Where Linnovate processes Personal Data, parties shall execute required Data Protection Addenda (DPA) as defined in GDPR. It is the Customer's responsibility to ensure its end-users agree to relevant privacy policies.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">11 Use for AI Models</h2>
              <p>The Customer acknowledges that Linnovate uses third party large language models (LLMs), including OpenAI. While configured not to train on Customer Data, Linnovate cannot warrant complete confidentiality of data submitted to these third-party models. The Platform must not be used for critical infrastructure with a specific duty of confidentiality.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">12 Warranty and Liability</h2>
              <div className="pl-4 space-y-4">
                <p><strong>12.1 Third Party Data.</strong> Data provided is based on third party machine learning models. Linnovate cannot ensure accuracy and the Customer is solely responsible for contents submitted.</p>
                <p><strong>12.2 Disclaimer.</strong> THE WARRANTIES SET FORTH ARE IN LIEU OF ALL OTHER REPRESENTATIONS AND WARRANTIES, EXPRESS OR IMPLIED.</p>
                <p><strong>12.3 Limitation of Liability.</strong> IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR INDIRECT, SPECIAL, OR CONSEQUENTIAL DAMAGES.</p>
                <p><strong>12.4 Liability Cap.</strong> Total liability resulting from performance of services is limited to total fees actually paid by the Customer to Linnovate for the services giving rise to the claim during the one (1) year period immediately preceding the event.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">13 Indemnification</h2>
              <p>Each party shall indemnify and hold the other party harmless against losses resulting from willful or negligent acts or material breach of this Agreement. Notification and cooperation requirements apply.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">14 Confidentiality</h2>
              <p>Each party shall use Confidential Information solely for providing or receiving services. Upon termination, information must be returned or destroyed, subject to legal retention requirements.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">15 Termination</h2>
              <div className="pl-4 space-y-4">
                <p><strong>15.1 Term.</strong> Indefinite term. Termination without cause requires 30 days prior written notice. No refunds provided.</p>
                <p><strong>15.2 Breach.</strong> Termination for breach allowed if not cured within 30 days.</p>
                <p><strong>15.3 Immediate Termination.</strong> Allowed for bankruptcy, insolvency, or assignment for benefit of creditors.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">16 General</h2>
              <p>This Agreement is governed by the laws of the State of Israel. Disputes shall be exclusively brought to the Tel-Aviv courts. Severability, notice, and non-assignment clauses apply as standard.</p>
            </div>

            <div className="pt-12 border-t border-slate-200 dark:border-white/10 text-center">
              <p className="text-slate-500 dark:text-gray-400">
                IN WITNESS WHEREOF, the parties, by authority duly given, have executed this Agreement as of the day and year first above written.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-8 font-bold text-slate-900 dark:text-white">
                <div>Customer</div>
                <div>Linnovate</div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default TermsOfServicePage;