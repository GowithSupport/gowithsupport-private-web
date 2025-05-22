
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./ui/dropdown-menu";

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
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-gray-900 to-gray-800 shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo - increased size slightly more */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/edb9dbfe-335c-4145-a6a2-f0e188e64fbb.png" 
            alt="GowithSupport Logo" 
            className="h-28 w-auto" // Increased from h-24 to h-28 for slightly larger size
          />
        </Link>

        {/* Desktop Navigation with enhanced dropdown menus */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-gowith-light-blue transition-colors font-medium">
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white font-medium hover:text-gowith-light-blue transition-colors bg-transparent border-none cursor-pointer flex items-center">
              Services
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-md border border-gray-200 py-2">
              <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2">
                <Link to="/services/managed-it" className="w-full text-gray-800 hover:text-gowith-dark-blue">Managed IT Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2">
                <Link to="/services/cybersecurity" className="w-full text-gray-800 hover:text-gowith-dark-blue">Cybersecurity Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2">
                <Link to="/services/cloud" className="w-full text-gray-800 hover:text-gowith-dark-blue">Managed Cloud Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2">
                <Link to="/services/professional" className="w-full text-gray-800 hover:text-gowith-dark-blue">Professional Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2">
                <Link to="/services/it-strategy" className="w-full text-gray-800 hover:text-gowith-dark-blue">IT Strategy</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white font-medium hover:text-gowith-light-blue transition-colors bg-transparent border-none cursor-pointer flex items-center">
              Insights
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-md border border-gray-200 py-2">
              <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2">
                <Link to="/insights/case-studies" className="w-full text-gray-800 hover:text-gowith-dark-blue">Case Studies</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2">
                <Link to="/insights/blog" className="w-full text-gray-800 hover:text-gowith-dark-blue">Blog</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white font-medium hover:text-gowith-light-blue transition-colors bg-transparent border-none cursor-pointer flex items-center">
              Industries
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-md border border-gray-200 py-2">
              <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2">
                <Link to="/industries/financial-services" className="w-full text-gray-800 hover:text-gowith-dark-blue">Financial Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2">
                <Link to="/industries/healthcare" className="w-full text-gray-800 hover:text-gowith-dark-blue">Healthcare</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2">
                <Link to="/industries/legal" className="w-full text-gray-800 hover:text-gowith-dark-blue">Law Firms</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2">
                <Link to="/industries/private-equity" className="w-full text-gray-800 hover:text-gowith-dark-blue">Private Equity</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2">
                <Link to="/industries/manufacturing" className="w-full text-gray-800 hover:text-gowith-dark-blue">Manufacturing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2">
                <Link to="/industries/technology" className="w-full text-gray-800 hover:text-gowith-dark-blue">Technology & Startups</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2">
                <Link to="/industries/entertainment" className="w-full text-gray-800 hover:text-gowith-dark-blue">Entertainment</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2">
                <Link to="/industries/professional-services" className="w-full text-gray-800 hover:text-gowith-dark-blue">Professional Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2">
                <Link to="/industries/non-profit" className="w-full text-gray-800 hover:text-gowith-dark-blue">Non-Profits</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/about" className="text-white hover:text-gowith-light-blue transition-colors font-medium">
            About Us
          </Link>

          <Link to="/contact" className="text-white hover:text-gowith-light-blue transition-colors font-medium">
            Contact
          </Link>
        </nav>

        {/* CTA Button with updated phone number */}
        <div className="hidden md:block">
          <Button 
            className="bg-gowith-orange hover:bg-gowith-orange-hover text-white transition-colors"
          >
            <a href="tel:9492885312" className="flex items-center">
              <span className="mr-2">(949) 288-5312</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gowith-dark-blue shadow-md py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-white font-medium px-4 py-2 hover:bg-gowith-medium-blue rounded-md" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            
            <div className="px-4 py-2">
              <div className="text-white font-medium mb-2">Services</div>
              <div className="ml-4 flex flex-col space-y-2">
                <Link to="/services/managed-it" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  Managed IT Services
                </Link>
                <Link to="/services/cybersecurity" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  Cybersecurity Services
                </Link>
                <Link to="/services/cloud" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  Managed Cloud Services
                </Link>
                <Link to="/services/professional" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  Professional Services
                </Link>
                <Link to="/services/it-strategy" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  IT Strategy
                </Link>
              </div>
            </div>
            
            <div className="px-4 py-2">
              <div className="text-white font-medium mb-2">Insights</div>
              <div className="ml-4 flex flex-col space-y-2">
                <Link to="/insights/case-studies" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  Case Studies
                </Link>
                <Link to="/insights/blog" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
              </div>
            </div>
            
            <div className="px-4 py-2">
              <div className="text-white font-medium mb-2">Industries</div>
              <div className="ml-4 flex flex-col space-y-2">
                <Link to="/industries/financial-services" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  Financial Services
                </Link>
                <Link to="/industries/healthcare" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  Healthcare
                </Link>
                <Link to="/industries/legal" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  Law Firms
                </Link>
                <Link to="/industries/private-equity" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  Private Equity
                </Link>
                <Link to="/industries/manufacturing" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  Manufacturing
                </Link>
                <Link to="/industries/technology" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  Technology & Startups
                </Link>
                <Link to="/industries/entertainment" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  Entertainment
                </Link>
                <Link to="/industries/professional-services" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  Professional Services
                </Link>
                <Link to="/industries/non-profit" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  Non-Profits
                </Link>
              </div>
            </div>
            
            <Link to="/about" className="text-white font-medium px-4 py-2 hover:bg-gowith-medium-blue rounded-md" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            
            <Link to="/contact" className="text-white font-medium px-4 py-2 hover:bg-gowith-medium-blue rounded-md" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            
            <Button 
              className="bg-gowith-orange hover:bg-gowith-orange-hover text-white w-full"
              onClick={() => setIsOpen(false)}
            >
              <a href="tel:9492885312" className="w-full flex items-center justify-center">
                <span>(949) 288-5312</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
