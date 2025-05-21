
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/edb9dbfe-335c-4145-a6a2-f0e188e64fbb.png" 
            alt="GowithSupport Logo" 
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gowith-dark-blue font-medium hover:text-gowith-medium-blue transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-gowith-dark-blue font-medium hover:text-gowith-medium-blue transition-colors">
            Services
          </Link>
          <Link to="/insights" className="text-gowith-dark-blue font-medium hover:text-gowith-medium-blue transition-colors">
            Insights
          </Link>
          <Link to="/industries" className="text-gowith-dark-blue font-medium hover:text-gowith-medium-blue transition-colors">
            Industries
          </Link>
          <Link to="/about" className="text-gowith-dark-blue font-medium hover:text-gowith-medium-blue transition-colors">
            About Us
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button 
            className="bg-gowith-orange hover:bg-gowith-orange-hover text-white transition-colors"
          >
            Free Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gowith-dark-blue"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gowith-dark-blue font-medium px-4 py-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/services" className="text-gowith-dark-blue font-medium px-4 py-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/insights" className="text-gowith-dark-blue font-medium px-4 py-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
              Insights
            </Link>
            <Link to="/industries" className="text-gowith-dark-blue font-medium px-4 py-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
              Industries
            </Link>
            <Link to="/about" className="text-gowith-dark-blue font-medium px-4 py-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Button 
              className="bg-gowith-orange hover:bg-gowith-orange-hover text-white w-full"
              onClick={() => setIsOpen(false)}
            >
              Free Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
