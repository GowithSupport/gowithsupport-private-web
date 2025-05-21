
const IndustriesHero = ({ 
  industry, 
  headline = "Specialized IT Solutions for Every Industry", 
  subheadline = "We understand the unique technology challenges across diverse sectors" 
}) => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-gowith-dark-blue to-gowith-medium-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {industry ? `IT Solutions for ${industry}` : headline}
          </h1>
          <p className="text-xl text-gowith-light-blue mb-8">
            {subheadline}
          </p>
          <p className="text-lg text-white mb-10 max-w-2xl mx-auto">
            From regulatory compliance to specialized software, we deliver technology solutions tailored to your industry's unique requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;
