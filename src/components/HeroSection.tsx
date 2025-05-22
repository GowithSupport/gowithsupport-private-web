
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-gowith-dark-blue to-gowith-medium-blue min-h-[80vh] flex items-center pt-24">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/f818970a-e819-4219-98ea-d966e36387e3.png')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transforming Business Through Strategic IT Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gowith-light-blue mb-8">
            Enterprise-level technology and security solutions tailored for growing businesses
          </p>
          <p className="text-lg text-white mb-10 max-w-2xl">
            Partner with GowithSupport to secure your data, optimize your infrastructure, and accelerate your growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gowith-orange hover:bg-gowith-orange-hover text-white px-8 py-6 text-lg">
              Schedule Your Free IT Consultation
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gowith-dark-blue px-8 py-6 text-lg">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
