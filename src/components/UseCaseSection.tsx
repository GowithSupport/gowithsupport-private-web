
import React, { ReactNode } from 'react';

interface UseCase {
  icon: ReactNode;
  title: string;
  description: string;
  items?: string[];
}

interface UseCaseSectionProps {
  title?: string;
  subtitle?: string;
  useCases: UseCase[];
  backgroundClass?: string;
}

const UseCaseSection: React.FC<UseCaseSectionProps> = ({ 
  title = "Industry Applications",
  subtitle = "How our solution delivers value across different sectors",
  useCases,
  backgroundClass = "bg-gray-50"
}) => {
  return (
    <section className={`py-16 ${backgroundClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gowith-dark-blue mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg">
              <div className="h-12 w-12 rounded-full bg-gowith-medium-blue flex items-center justify-center mb-4 text-white">
                {useCase.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gowith-dark-blue mb-3">{useCase.title}</h3>
              <p className="text-gray-600 mb-4">{useCase.description}</p>
              
              {useCase.items && useCase.items.length > 0 && (
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {useCase.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
