
import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ITStrategy = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-r from-gowith-dark-blue to-gowith-medium-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Strategic IT Planning for Business Growth
              </h1>
              <p className="text-xl text-gowith-light-blue mb-8">
                Align technology with your business goals to drive innovation and competitive advantage
              </p>
              <p className="text-lg text-white mb-10 max-w-2xl mx-auto">
                Develop a clear vision for your IT infrastructure that supports your long-term objectives.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gowith-dark-blue mb-8">Coming Soon</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're currently updating our IT strategy services page with the latest information. Please check back soon or contact us for immediate assistance.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gowith-orange hover:bg-gowith-orange-hover text-white px-8 py-3 rounded-md transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ITStrategy;
