
import React, { ReactNode } from 'react';

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
  items?: string[];
}

interface FeatureGridProps {
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
  className?: string;
  itemClassName?: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ 
  features,
  columns = 3,
  className = "",
  itemClassName = ""
}) => {
  const getColumnsClass = () => {
    switch(columns) {
      case 2: return 'md:grid-cols-2';
      case 3: return 'md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'md:grid-cols-2 lg:grid-cols-4';
      default: return 'md:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <div className={`grid grid-cols-1 ${getColumnsClass()} gap-8 ${className}`}>
      {features.map((feature, index) => (
        <div 
          key={index} 
          className={`bg-white p-6 rounded-lg shadow-md transition-transform hover:shadow-lg ${itemClassName}`}
        >
          <div className="flex items-center mb-4">
            <div className="h-12 w-12 rounded-full bg-gowith-medium-blue flex items-center justify-center mr-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gowith-dark-blue">
              {feature.title}
            </h3>
          </div>
          
          <p className="text-gray-600 mb-4">
            {feature.description}
          </p>
          
          {feature.items && feature.items.length > 0 && (
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {feature.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
