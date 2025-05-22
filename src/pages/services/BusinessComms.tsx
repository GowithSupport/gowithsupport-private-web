
import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import FeatureGrid from "../../components/FeatureGrid";
import BenefitsSection from "../../components/BenefitsSection";
import ProcessTimeline from "../../components/ProcessTimeline";
import UseCaseSection from "../../components/UseCaseSection";
import FinalCTA from "../../components/FinalCTA";
import ContactForm from "../../components/ContactForm";
import { Headphones, MessageSquare, Video, Users, Mic } from 'lucide-react';

const BusinessComms = () => {
  const features = [
    {
      icon: <Headphones className="h-6 w-6 text-white" />,
      title: "Unified Communications",
      description: "Integrate all your communication channels into one seamless platform.",
      items: [
        "Voice calling with enterprise-grade VoIP functionality",
        "Text messaging (SMS/MMS) from business phone numbers",
        "Video conferencing and screen sharing capabilities",
        "Team messaging and collaboration tools",
        "All accessible from desktop, mobile, or web platforms"
      ]
    },
    {
      icon: <Mic className="h-6 w-6 text-white" />,
      title: "Advanced Call Center Features",
      description: "Enhance customer service with professional call management tools.",
      items: [
        "Intelligent call routing and distribution",
        "Real-time coaching and agent scripting",
        "Dynamic caller ID based on customer location",
        "Call recording and analytics for quality improvement",
        "Interactive voice response (IVR) systems"
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Customer Relationship Management",
      description: "Track and manage customer interactions across all channels.",
      items: [
        "Integrated CRM with communication history",
        "Lead management and distribution capabilities",
        "Automated workflows for customer follow-up",
        "Performance analytics and reporting",
        "Customer interaction tracking across all channels"
      ]
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: "Business Productivity Tools",
      description: "Streamline operations with integrated business tools.",
      items: [
        "Document sharing and collaboration features",
        "Calendar integration and appointment scheduling",
        "Contact management and directory services",
        "Mobile apps for on-the-go communication",
        "Third-party software integrations"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Enhanced Productivity",
      description: "Reduce time spent switching between communication tools and improve team collaboration with a unified platform that connects all your business communications."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Improved Customer Experience",
      description: "Deliver consistent, professional communication across all channels while maintaining complete visibility into customer interactions and history."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Cost Optimization",
      description: "Eliminate multiple vendor relationships and reduce communication costs while gaining access to enterprise-grade features typically available only to large corporations."
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Scalability",
      description: "Easily add users, features, and capabilities as your business grows, with flexible pricing that scales with your needs."
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Security and Reliability",
      description: "Enterprise-grade security features, 99.9% uptime guarantee, and compliance with industry regulations ensure your communications are always secure and available."
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Assessment",
      description: "We evaluate your current communication tools and requirements to understand your unique business needs."
    },
    {
      number: 2,
      title: "Design",
      description: "Our team creates a customized solution that meets your specific needs and business goals."
    },
    {
      number: 3,
      title: "Migration",
      description: "We seamlessly transition from your existing systems with minimal disruption to your business operations."
    },
    {
      number: 4,
      title: "Training",
      description: "Comprehensive training for all users ensures quick adoption of new features and capabilities."
    },
    {
      number: 5,
      title: "Optimization",
      description: "Ongoing monitoring and optimization maximize the value of your communication platform."
    }
  ];

  const useCases = [
    {
      icon: <Headphones className="h-6 w-6 text-white" />,
      title: "Call Centers",
      description: "Optimize customer service operations with advanced call management and routing."
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Sales Teams",
      description: "Enhance lead management and follow-up with integrated communication tools."
    },
    {
      icon: <Video className="h-6 w-6 text-white" />,
      title: "Remote Teams",
      description: "Connect distributed teams with powerful collaboration and video conferencing."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: "Professional Services",
      description: "Manage client communications efficiently with integrated messaging and tracking."
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <ServiceHero 
          title="Unified Business Communications Platform" 
          subtitle="Streamline your team collaboration and customer communications with an all-in-one solution" 
        />
        
        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gowith-dark-blue mb-6">Platform Overview</h2>
              <p className="text-lg text-gray-600 mb-8">
                GowithSupport's Business Communications Platform integrates voice, messaging, video, and collaboration tools into a single, secure environment. Designed for modern businesses, our solution eliminates the complexity of managing multiple communication systems while enhancing productivity, improving customer relationships, and reducing operational costs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Key Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gowith-dark-blue mb-4">Key Features</h2>
              <p className="text-lg text-gray-600">Comprehensive tools to transform your business communications</p>
            </div>
            
            <FeatureGrid features={features} />
          </div>
        </section>
        
        {/* Benefits */}
        <BenefitsSection benefits={benefits} />
        
        {/* Implementation Process */}
        <ProcessTimeline steps={processSteps} />
        
        {/* Industry Applications */}
        <UseCaseSection useCases={useCases} />
        
        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gowith-dark-blue mb-6">Ready to Transform Your Business Communications?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our Business Communications Platform is designed to help your business communicate more effectively, both internally and with customers. Schedule a personalized demo to see how our solution can work for your specific needs.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h3 className="text-xl font-bold text-gowith-dark-blue mb-4">What to Expect in Your Demo</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gowith-light-blue flex items-center justify-center text-white font-bold mr-3">1</div>
                      <span>Personalized walkthrough of platform features relevant to your business</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gowith-light-blue flex items-center justify-center text-white font-bold mr-3">2</div>
                      <span>Live Q&A session with our communications specialists</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gowith-light-blue flex items-center justify-center text-white font-bold mr-3">3</div>
                      <span>Custom pricing and implementation timeline</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gowith-light-blue flex items-center justify-center text-white font-bold mr-3">4</div>
                      <span>Clear next steps for getting started</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <ContactForm 
                formTitle="Schedule a Platform Demo" 
                formDescription="Fill out the form below to schedule a personalized demonstration of our Business Communications Platform."
                buttonText="Schedule Demo" 
                formType="demo"
              />
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <FinalCTA 
          headline="Transform Your Business Communications Today" 
          buttonText="Schedule a Platform Demo" 
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </>
  );
};

export default BusinessComms;
