
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-r from-gowith-dark-blue to-gowith-medium-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gowith-light-blue mb-8">
                How we collect, use, and protect your information
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <p>
                This Privacy Policy explains how GowithSupport collects, uses, and protects your personal information. This policy was last updated on May 21, 2025.
              </p>
              
              <h2>Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, such as when you fill out a form on our website, subscribe to our newsletter, or contact us for support. This information may include:
              </p>
              <ul>
                <li>Name and contact information</li>
                <li>Company name and position</li>
                <li>Service interests and requirements</li>
                <li>Technical information about your IT environment</li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Communicate with you about services, promotions, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Prevent fraudulent transactions and enhance security</li>
              </ul>
              
              <h2>Information Sharing</h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul>
                <li>Service providers who perform services on our behalf</li>
                <li>Professional advisors, such as lawyers and accountants</li>
                <li>Regulatory authorities, as required by law</li>
              </ul>
              
              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h2>Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
                <li>Object to processing of your information</li>
              </ul>
              
              <h2>Cookies and Tracking Technologies</h2>
              <p>
                Our website uses cookies and similar technologies to enhance your experience, analyze usage patterns, and deliver personalized content. You can control cookie settings through your browser preferences.
              </p>
              
              <h2>Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@gowithsupport.com">privacy@gowithsupport.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
