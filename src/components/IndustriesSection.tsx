
import { Link } from 'react-router-dom';
import { Building2, Activity, Scale, Briefcase, HardDrive, Rocket, Film, Landmark, Heart } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      icon: <Building2 className="w-8 h-8" />,
      name: "Financial Services",
      link: "/industries/financial-services"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      name: "Healthcare",
      link: "/industries/healthcare"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      name: "Law Firms",
      link: "/industries/law-firms"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      name: "Private Equity",
      link: "/industries/private-equity"
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      name: "Manufacturing",
      link: "/industries/manufacturing"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      name: "Technology & Startups",
      link: "/industries/technology-startups"
    },
    {
      icon: <Film className="w-8 h-8" />,
      name: "Entertainment",
      link: "/industries/entertainment"
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      name: "Professional Services",
      link: "/industries/professional-services"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      name: "Non-Profits",
      link: "/industries/non-profits"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gowith-dark-blue mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide specialized IT solutions for a wide range of industries, understanding the unique challenges and compliance requirements of each.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <Link 
              key={index} 
              to={industry.link}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:border-gowith-light-blue border border-transparent"
            >
              <div className="p-3 rounded-full bg-gowith-dark-blue bg-opacity-10 mb-4 text-gowith-dark-blue">
                {industry.icon}
              </div>
              <h3 className="text-center font-medium text-gray-800">{industry.name}</h3>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            No matter your industry, our team has the expertise to address your specific IT challenges and requirements.
          </p>
          <Link to="/industries" className="inline-flex items-center text-gowith-medium-blue hover:text-gowith-dark-blue font-medium">
            <span>Learn more about our industry expertise</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
