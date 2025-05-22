
import React from 'react';
import { Button } from "@/components/ui/button";

interface ContactFormProps {
  formTitle?: string;
  formDescription?: string;
  buttonText?: string;
  formType?: "demo" | "contact" | "trial";
}

const ContactForm: React.FC<ContactFormProps> = ({
  formTitle = "Get in Touch",
  formDescription = "Fill out the form below and our team will get back to you shortly.",
  buttonText = "Submit Request",
  formType = "contact"
}) => {
  
  // Dynamically render fields based on formType
  const renderSpecificFields = () => {
    switch (formType) {
      case "demo":
        return (
          <>
            <div className="mb-4">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gowith-medium-blue"
                placeholder="Your company name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-1">
                Number of Employees
              </label>
              <select
                id="employeeCount"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gowith-medium-blue"
              >
                <option value="">Select</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="501+">501+</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Demo Date
              </label>
              <input
                type="date"
                id="preferredDate"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gowith-medium-blue"
              />
            </div>
          </>
        );
      case "trial":
        return (
          <>
            <div className="mb-4">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gowith-medium-blue"
                placeholder="Your company name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                Industry
              </label>
              <select
                id="industry"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gowith-medium-blue"
              >
                <option value="">Select your industry</option>
                <option value="Financial Services">Financial Services</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Legal">Legal</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Technology">Technology</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </>
        );
      default:
        return (
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gowith-medium-blue"
              placeholder="How can we help you?"
              required
            />
          </div>
        );
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gowith-dark-blue mb-2">{formTitle}</h3>
      <p className="text-gray-600 mb-6">{formDescription}</p>
      
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gowith-medium-blue"
              placeholder="Your first name"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gowith-medium-blue"
              placeholder="Your last name"
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gowith-medium-blue"
            placeholder="your.email@example.com"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gowith-medium-blue"
            placeholder="(123) 456-7890"
          />
        </div>
        
        {renderSpecificFields()}
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gowith-medium-blue"
            placeholder="Tell us more about your needs..."
            required
          ></textarea>
        </div>
        
        <div className="mb-6">
          <div className="flex items-start">
            <input
              id="privacy"
              type="checkbox"
              className="h-4 w-4 mt-1 border-gray-300 rounded text-gowith-medium-blue focus:ring-gowith-medium-blue"
              required
            />
            <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
              I agree to the <a href="/privacy-policy" className="text-gowith-medium-blue hover:underline">privacy policy</a> and consent to be contacted regarding my request.
            </label>
          </div>
        </div>
        
        <Button
          type="submit"
          className="w-full bg-gowith-orange hover:bg-gowith-orange-hover text-white py-3 px-6 rounded-md font-medium transition-colors text-lg"
        >
          {buttonText}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
