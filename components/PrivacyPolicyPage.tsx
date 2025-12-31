import React from 'react';
import { Icons } from './Icons';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBack }) => {
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">Privacy Policy</h1>
            <p className="text-slate-500 dark:text-gray-400 font-medium">Last updated and effective as of April 24, 2025</p>
          </div>

          <section className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Commitment to Privacy</h2>
              <p>
                Your privacy is important to us. For better protecting your privacy we, "Linnovate-AI" by Linnovate Technologies Ltd. 514840156, a registered Israeli Company, provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. To make this notice easy to find, we make it available on our homepage and every other page of our websites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Data We Collect</h2>
              <p className="mb-4">
                In order to provide services to you and for additional purposes as provide below in this Privacy Policy, we may collect and process the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Data you provide about yourself and your business</strong> - For example, when you register for our services, contact us, or use other features on our services that require input, we will store and save the information you provide. This information may include individual personally identifiable information such as your name, postal address, email address, etc.
                </li>
                <li>
                  <strong>Data you provide about your customers</strong> - This information may include individual personally identifiable information such as names of those customers, their phone numbers, their address, their emails, etc. (Both types of information shall be referred to as "Personal Data").
                </li>
                <li>
                  <strong>Data we collect by ourselves</strong> - <em>Log Data</em>: All information sent by your web browser and computer when you visit our services may be stored by servers we use. This information may include your IP address, browser type, URL accessed, cookie information, the date and time of your request, and other information that may uniquely identify you and may also be considered as part of your Personal Data.
                </li>
              </ul>
              <p className="mt-4">
                You are responsible for ensuring the accuracy of the Personal Data you submit to us (whether it is submitted by yourself or by your customer). Inaccurate information will affect the information you receive when we provide you with services and our ability to contact you as contemplated in this Privacy Policy as well as to provide you the services at the best manner possible.
              </p>
              <p className="mt-4">
                You are the sole responsible for all consents required to be collected and obtained, according to the applicable law, from the data subjects (your contact persons and your customers). It is your responsibility to not provide the Company's services to your customer which is not providing you the required consents, or he is objecting the process of his Personal Data. For further information in this respect please see the relevant provisions in the DPA.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Special Categories of Data</h2>
              <p>
                There are special categories of personal data, data which reveals or contains: racial or ethnic origin, political opinions, religious and philosophical beliefs, trade union membership, genetic data, biometric data, health data, sex life or sexual orientation (hereinafter: "Special Categories of Personal Data") and therefore is more sensitive.
              </p>
              <p className="mt-4">
                We request that you do not provide us any Special Category of Personal Data via our services or in any other way, but it is important that you understand that part of the Personal Data which we may collect from your customers for you, may be considered as Special Category of Personal Data, and this kind of Personal Data will be collected and be used or processed otherwise only according to an appropriate lawful basis, as further specified below, and according to the DPA which will be executed between us, and for the purpose of providing you the relevant services of the Company.
              </p>
              <p className="mt-4 font-bold uppercase">
                Without derogating from the above, you acknowledge and understand that such Special Categories of Data may be processed by us for you as part of the services we provide to you, hence it is your sole and full responsibility to obtain all EXPLICIT CONSENTS TO THE PROCESSING OF THOSE PERSONAL DATA FROM YOUR CUSTOMERS.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Automated individual decision-making - Profiling</h2>
              <p>
                The data subject (your customer) must have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning him or her or similarly significantly affects him or her. For that, you as our customer, must obtain explicit consent for such profiling.
              </p>
              <p className="mt-4">
                Our platform uses the conversations' content of your customers as well as meta-data and analytics collected during these conversations and may be used to perform personality and cognitive profiling of your customers. The data is used for personalizing the dialogues and offers to your customers as part of your services to your customers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Use of Personal Data</h2>
              <p>
                We use the Personal Data to make our services available to you, to conduct statistical analysis, provide customer support, to undertake necessary security and identify verification checks, to meet certain business requirements, in order for us to improve the services and/or customer service and to create profiles and behavioral targeting. We may also use the Personal Data to track your use of the services and/or for other internal purposes, such as evaluating, providing, and improving the services and for any other purpose related to the operation of the services we provide you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Lawful Bases for Processing</h2>
              <p className="mb-4">
                We will only collect and process Personal Data about you where we have one of the following lawful bases, unless specifically stated otherwise in this Privacy Policy:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consent</strong> (where you have given consent)</li>
                <li><strong>Contract</strong> (where processing is necessary for the performance of a contract with you)</li>
                <li><strong>Legal Obligation</strong> (to comply with a common law or statutory obligation)</li>
                <li><strong>Vital Interest</strong> (to protect someone's life)</li>
                <li><strong>Public Task</strong> (to perform a specific task in the public interest)</li>
                <li><strong>Legitimate Interests</strong></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">DPA and Security</h2>
              <p>
                For the services provided by us, we are a Processor (as defined in the General Data Protection Regulation (EU) 2016/679 ("GDPR"), acting on your behalf (registered user of our services), while you are acting as a Controller (as defined in the GDPR). As data processor, we will only act upon your instructions, and according to Data Processing Agreement that you can find at <a href="https://linnovate.net/ai-products-lcb-dpa/" target="_blank" className="text-lime-600 hover:underline">https://linnovate.net/ai-products-lcb-dpa/</a> (the "DPA").
              </p>
              <p className="mt-4">
                It is hereby clarify that the services provided to you are subject to your full execution and compliance with the DPA.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-200 dark:border-white/10">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Contact Us</h2>
              <p>
                Should you have other questions or concerns about these privacy policies and if you believe that we are not adhering to our privacy or security commitments, please send us an email at: 
                <a href="mailto:lyron@linnovate.net" className="ml-2 text-lime-600 dark:text-lime-400 font-bold hover:underline">lyron@linnovate.net</a>
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;