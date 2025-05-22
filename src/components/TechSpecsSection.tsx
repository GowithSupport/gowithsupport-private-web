
import React from 'react';

interface TechSpecGroup {
  title: string;
  items: string[];
}

interface TechSpecsSectionProps {
  title?: string;
  subtitle?: string;
  specGroups: TechSpecGroup[];
}

const TechSpecsSection: React.FC<TechSpecsSectionProps> = ({
  title = "Technical Specifications",
  subtitle = "Enterprise-grade technology you can trust",
  specGroups
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gowith-dark-blue mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {specGroups.map((group, index) => (
            <div 
              key={index} 
              className={`p-6 ${index !== specGroups.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <h3 className="text-xl font-bold text-gowith-dark-blue mb-4">{group.title}:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                {group.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecsSection;
