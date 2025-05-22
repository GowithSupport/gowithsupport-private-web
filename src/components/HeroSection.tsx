
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-white min-h-[80vh] flex items-center pt-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-3xl mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gowith-dark-blue mb-6 leading-tight">
              Transforming Business Through Strategic IT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gowith-medium-blue mb-8">
              Enterprise-level technology and security solutions tailored for growing businesses
            </p>
            <p className="text-lg text-gray-700 mb-10 max-w-2xl">
              Partner with GowithSupport to secure your data, optimize your infrastructure, and accelerate your growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gowith-orange hover:bg-gowith-orange-hover text-white px-8 py-6 text-lg">
                Schedule Your Free IT Consultation
              </Button>
              <Button variant="outline" className="border-gowith-dark-blue text-gowith-dark-blue hover:bg-gowith-dark-blue hover:text-white px-8 py-6 text-lg">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/lovable-uploads/330e0225-2310-4395-bbb5-72dddb56a591.png" 
              alt="IT Business Meeting" 
              className="w-auto h-auto max-h-96 rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
