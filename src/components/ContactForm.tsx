
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ContactFormProps {
  formTitle?: string;
  formDescription?: string;
  buttonText?: string;
  formType?: "demo" | "contact" | "trial";
  showConsultationCheckbox?: boolean;
  initialSubject?: string;
  onSubmitSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formTitle = "Get in Touch",
  formDescription = "Fill out the form below and our team will get back to you shortly.",
  buttonText = "Submit Request",
  formType = "contact",
  showConsultationCheckbox = false,
  initialSubject = "",
  onSubmitSuccess,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: initialSubject,
    message: "",
    preferredDate: "",
    employeeCount: "",
    industry: "",
    requestConsultation: false,
    privacyAgreed: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: checked
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacyAgreed) {
      toast.error("Please agree to the privacy policy before submitting.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      toast.success("Thank you for contacting us! We'll be in touch soon.");
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        preferredDate: "",
        employeeCount: "",
        industry: "",
        requestConsultation: false,
        privacyAgreed: false
      });
      
      // Call success callback if provided
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
      
    }, 1500);
  };
  
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
                value={formData.company}
                onChange={handleChange}
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
                value={formData.employeeCount}
                onChange={handleChange}
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
                value={formData.preferredDate}
                onChange={handleChange}
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
                value={formData.company}
                onChange={handleChange}
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
                value={formData.industry}
                onChange={handleChange}
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
              value={formData.subject}
              onChange={handleChange}
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
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
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
              value={formData.lastName}
              onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.phone}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gowith-medium-blue"
            placeholder="Tell us more about your needs..."
            required
          ></textarea>
        </div>
        
        {showConsultationCheckbox && (
          <div className="mb-4">
            <div className="flex items-start">
              <input
                id="requestConsultation"
                type="checkbox"
                checked={formData.requestConsultation}
                onChange={handleCheckboxChange}
                className="h-4 w-4 mt-1 border-gray-300 rounded text-gowith-medium-blue focus:ring-gowith-medium-blue"
              />
              <label htmlFor="requestConsultation" className="ml-2 block text-sm text-gray-600">
                I'd like to schedule a free IT consultation
              </label>
            </div>
          </div>
        )}
        
        <div className="mb-6">
          <div className="flex items-start">
            <input
              id="privacyAgreed"
              type="checkbox"
              checked={formData.privacyAgreed}
              onChange={handleCheckboxChange}
              className="h-4 w-4 mt-1 border-gray-300 rounded text-gowith-medium-blue focus:ring-gowith-medium-blue"
              required
            />
            <label htmlFor="privacyAgreed" className="ml-2 block text-sm text-gray-600">
              I agree to the <a href="/privacy-policy" className="text-gowith-medium-blue hover:underline">privacy policy</a> and consent to be contacted regarding my request.
            </label>
          </div>
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gowith-orange hover:bg-gowith-orange-hover text-white py-3 px-6 rounded-md font-medium transition-colors text-lg"
        >
          {isSubmitting ? "Submitting..." : buttonText}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
