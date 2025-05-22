import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Contact = () => {
  return <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-r from-gowith-dark-blue to-gowith-medium-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-white mb-6 md:text-2xl">
                Get in Touch
              </h1>
              <p className="text-xl text-gowith-light-blue mb-8">
                We're here to help with your technology challenges
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gowith-dark-blue mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                      <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gowith-medium-blue focus:border-gowith-medium-blue" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                      <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gowith-medium-blue focus:border-gowith-medium-blue" required />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name*</label>
                    <input type="text" id="company" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gowith-medium-blue focus:border-gowith-medium-blue" required />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gowith-medium-blue focus:border-gowith-medium-blue" required />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gowith-medium-blue focus:border-gowith-medium-blue" />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                    <select id="service" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gowith-medium-blue focus:border-gowith-medium-blue">
                      <option value="">Select a service</option>
                      <option value="managed-it">Managed IT Services</option>
                      <option value="cybersecurity">Cybersecurity Services</option>
                      <option value="cloud">Managed Cloud Services</option>
                      <option value="professional">Professional Services</option>
                      <option value="it-strategy">IT Strategy</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gowith-medium-blue focus:border-gowith-medium-blue"></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                    <input type="text" id="source" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gowith-medium-blue focus:border-gowith-medium-blue" />
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" id="newsletter" className="h-4 w-4 text-gowith-medium-blue focus:ring-gowith-medium-blue border-gray-300 rounded" />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                      Subscribe to our newsletter
                    </label>
                  </div>
                  
                  <button type="submit" className="w-full py-3 bg-gowith-orange hover:bg-gowith-orange-hover text-white rounded-md transition-colors">
                    Submit
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gowith-dark-blue mb-6">Contact Information</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gowith-medium-blue mb-2">Phone</h3>
                    <p className="text-gray-600">Main: <a href="tel:9492885812" className="text-gowith-medium-blue hover:underline">(949) 288-5812</a></p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gowith-medium-blue mb-2">Email</h3>
                    <p className="text-gray-600">General Inquiries: <a href="mailto:info@gowithsupport.com" className="text-gowith-medium-blue hover:underline">info@gowithsupport.com</a></p>
                    <p className="text-gray-600">Support: <a href="mailto:help@gowithsupport.com" className="text-gowith-medium-blue hover:underline">help@gowithsupport.com</a></p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gowith-medium-blue mb-2">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM (PST)</p>
                    <p className="text-gray-600">After-hours support available for clients</p>
                  </div>
                  
                  <div className="bg-gowith-dark-blue text-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Support Options</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-gowith-light-blue">Standard Support</h4>
                        <p className="text-sm">Our standard support is available during business hours for all clients. Contact us by phone, email, or through our client portal.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gowith-light-blue">Priority Support</h4>
                        <p className="text-sm">Clients with priority support agreements receive expedited response times and extended support hours.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gowith-light-blue">Emergency Support</h4>
                        <p className="text-sm">For critical issues outside business hours, our emergency support line is available 24/7 for clients with eligible support plans.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default Contact;