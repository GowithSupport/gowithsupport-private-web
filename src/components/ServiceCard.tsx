
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, link, features }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl hover:border-gowith-light-blue">
      <div className="bg-gradient-to-r from-gowith-dark-blue to-gowith-medium-blue p-6 text-white">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white bg-opacity-20 mb-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gowith-light-blue">{description}</p>
      </div>
      
      <div className="p-6">
        <ul className="mb-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-gowith-orange mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          to={link}
          className="inline-block w-full text-center bg-gowith-orange hover:bg-gowith-orange-hover text-white font-bold py-3 px-4 rounded transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
