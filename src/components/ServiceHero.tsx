import React from 'react';
interface ServiceHeroProps {
  title: string;
  subtitle: string;
  backgroundClass?: string;
}
const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  subtitle,
  backgroundClass = "from-gowith-dark-blue to-gowith-medium-blue"
}) => {
  return <section className={`pt-32 pb-20 bg-gradient-to-r ${backgroundClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-6 md:text-2xl">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gowith-light-blue mb-8">
            {subtitle}
          </p>
        </div>
      </div>
    </section>;
};
export default ServiceHero;