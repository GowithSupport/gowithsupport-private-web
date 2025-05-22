
import React, { ReactNode } from 'react';

interface Benefit {
  icon: ReactNode;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  title?: string;
  subtitle?: string;
  benefits: Benefit[];
  backgroundClass?: string;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title = "Platform Benefits", 
  subtitle = "How our solution delivers value to your business",
  benefits,
  backgroundClass = "bg-white"
}) => {
  return (
    <section className={`py-16 ${backgroundClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gowith-dark-blue mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-16 w-16 rounded-full bg-gowith-light-blue bg-opacity-20 flex items-center justify-center mb-6 mx-auto">
                {React.cloneElement(benefit.icon as React.ReactElement, {
                  className: "w-8 h-8 text-gowith-medium-blue"
                })}
              </div>
              
              <h3 className="text-xl font-bold text-gowith-dark-blue mb-3 text-center">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
