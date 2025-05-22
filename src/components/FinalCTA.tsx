
import React from 'react';
import { Link } from 'react-router-dom';

interface FinalCTAProps {
  headline: string;
  buttonText: string;
  buttonLink: string;
  backgroundClass?: string;
}

const FinalCTA: React.FC<FinalCTAProps> = ({
  headline,
  buttonText,
  buttonLink,
  backgroundClass = "bg-gowith-dark-blue"
}) => {
  return (
    <section className={`py-16 ${backgroundClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{headline}</h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to={buttonLink} 
              className="bg-gowith-orange hover:bg-gowith-orange-hover text-white px-8 py-3 rounded-md transition-colors text-lg font-medium inline-block min-w-[200px] text-center"
            >
              {buttonText}
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gowith-dark-blue px-8 py-3 rounded-md transition-colors text-lg font-medium inline-block min-w-[200px] text-center"
            >
              Schedule Your Free IT Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
