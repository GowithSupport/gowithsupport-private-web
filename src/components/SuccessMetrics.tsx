
import React from 'react';

interface Metric {
  value: string;
  label: string;
}

interface SuccessMetricsProps {
  title?: string;
  subtitle?: string;
  metrics: Metric[];
}

const SuccessMetrics: React.FC<SuccessMetricsProps> = ({
  title = "Success Metrics",
  subtitle = "Measurable results our clients typically achieve",
  metrics
}) => {
  return (
    <section className="py-16 bg-gowith-dark-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gowith-light-blue">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gowith-orange mb-2">
                {metric.value}
              </div>
              <p className="text-lg">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;
