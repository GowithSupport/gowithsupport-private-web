
import React from 'react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  title?: string;
  subtitle?: string;
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ 
  steps,
  title = "Implementation Process",
  subtitle = "Our proven approach to ensure successful implementation"
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gowith-dark-blue mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gowith-light-blue"></div>
            
            {/* Timeline Steps */}
            <div className="space-y-12 md:space-y-0">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } md:gap-8`}
                >
                  {/* Step Number for mobile */}
                  <div className="md:hidden flex items-center justify-center h-12 w-12 rounded-full bg-gowith-medium-blue text-white font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className="w-full md:w-5/12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-gowith-dark-blue mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Circle in middle */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center h-12 w-12 rounded-full bg-gowith-medium-blue text-white font-bold text-lg border-4 border-white">
                    {step.number}
                  </div>
                  
                  {/* Empty space for alternate side */}
                  <div className="hidden md:block w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
