
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-r from-gowith-dark-blue to-gowith-medium-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gowith-light-blue mb-8">
                The terms and conditions governing our relationship
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <p>
                These Terms of Service govern your use of the GowithSupport website and services. By accessing our website or using our services, you agree to these terms. This document was last updated on May 21, 2025.
              </p>
              
              <h2>Use of Website</h2>
              <p>
                You may use our website for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul>
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to interfere with the proper functioning of the website</li>
                <li>Access or attempt to access areas of the website not intended for public use</li>
                <li>Use the website to transmit malware or other harmful code</li>
                <li>Scrape, data mine, or otherwise collect information from the website</li>
              </ul>
              
              <h2>Intellectual Property</h2>
              <p>
                The GowithSupport website and its content, including logos, text, images, and software, are owned by GowithSupport and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any portion of the website without our express written permission.
              </p>
              
              <h2>Service Agreements</h2>
              <p>
                Our IT services are governed by separate service agreements. If you engage our services, the terms of those agreements will apply to our relationship. In case of any conflict between these Terms of Service and a service agreement, the service agreement will prevail.
              </p>
              
              <h2>Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, GowithSupport shall not be liable for any indirect, incidental, special, consequential, or punitive damages, arising out of or relating to your use of, or inability to use, the website.
              </p>
              
              <h2>Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless GowithSupport and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms of Service.
              </p>
              
              <h2>Modifications</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We will post the revised terms on this page and update the "last updated" date. Your continued use of the website after any such changes constitutes your acceptance of the new Terms of Service.
              </p>
              
              <h2>Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without giving effect to any principles of conflicts of law.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at <a href="mailto:legal@gowithsupport.com">legal@gowithsupport.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfService;
