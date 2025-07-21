import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Headset, Shield, Cloud, Briefcase, LineChart, MessageSquare, Scan, Code, Building, ShieldCheck, Stethoscope, Scale, Landmark, Factory, Laptop, Film, Building2, HeartHandshake } from 'lucide-react';
import { Button } from './ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
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
  return <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gradient-to-r from-gray-900 to-gray-800 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/1d30a686-016e-4cfb-8483-888ef042792d.png" alt="GowithSupport Logo" className="h-28 w-auto" />
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
            <DropdownMenuContent className="grid grid-cols-2 gap-1 p-3 w-[400px]">
              <DropdownMenuItem className="col-span-2 font-medium text-base border-b pb-2 mb-2 text-gowith-dark-blue">
                Our Services
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/managed-it" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <Headset className="h-5 w-5 text-gowith-medium-blue" />
                  <div>
                    <div>Managed IT Services</div>
                    <div className="text-xs text-gray-500">Complete IT support and management</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/cybersecurity" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <Shield className="h-5 w-5 text-gowith-medium-blue" />
                  <div>
                    <div>Cybersecurity Services</div>
                    <div className="text-xs text-gray-500">Protect your business data</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/cloud" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <Cloud className="h-5 w-5 text-gowith-medium-blue" />
                  <div>
                    <div>Managed Cloud Services</div>
                    <div className="text-xs text-gray-500">Cloud hosting and management</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/professional" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <Briefcase className="h-5 w-5 text-gowith-medium-blue" />
                  <div>
                    <div>Professional Services</div>
                    <div className="text-xs text-gray-500">Expert consulting and solutions</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/it-strategy" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <LineChart className="h-5 w-5 text-gowith-medium-blue" />
                  <div>
                    <div>IT Strategy</div>
                    <div className="text-xs text-gray-500">Strategic technology planning</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/business-comms" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <MessageSquare className="h-5 w-5 text-gowith-medium-blue" />
                  <div>
                    <div>Business Comms Platform</div>
                    <div className="text-xs text-gray-500">Unified communications solution</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/face-id-auth" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <Scan className="h-5 w-5 text-gowith-medium-blue" />
                  <div>
                    <div>Face ID Auth</div>
                    <div className="text-xs text-gray-500">Biometric authentication system</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/web-dev-automation" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <Code className="h-5 w-5 text-gowith-medium-blue" />
                  <div>
                    <div>Web Dev Automation</div>
                    <div className="text-xs text-gray-500">AI-powered development tools</div>
                  </div>
                </Link>
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
            <DropdownMenuContent className="p-3 min-w-[250px]">
              <DropdownMenuItem className="font-medium text-base border-b pb-2 mb-2 text-gowith-dark-blue">
                Insights & Resources
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/insights/case-studies" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <Briefcase className="h-5 w-5 text-gowith-medium-blue" />
                  <div>Case Studies</div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/insights/blog" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <MessageSquare className="h-5 w-5 text-gowith-medium-blue" />
                  <div>Blog</div>
                </Link>
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
            <DropdownMenuContent className="grid grid-cols-2 gap-1 p-3 w-[450px]">
              <DropdownMenuItem className="col-span-2 font-medium text-base border-b pb-2 mb-2 text-gowith-dark-blue">
                Industries We Serve
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/industries/financial-services" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <Landmark className="h-5 w-5 text-gowith-medium-blue" />
                  <div>Financial Services</div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/industries/healthcare" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <Stethoscope className="h-5 w-5 text-gowith-medium-blue" />
                  <div>Healthcare</div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/industries/legal" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <Scale className="h-5 w-5 text-gowith-medium-blue" />
                  <div>Law Firms</div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/industries/private-equity" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <Building className="h-5 w-5 text-gowith-medium-blue" />
                  <div>Private Equity</div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/industries/manufacturing" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <Factory className="h-5 w-5 text-gowith-medium-blue" />
                  <div>Manufacturing</div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/industries/technology" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <Laptop className="h-5 w-5 text-gowith-medium-blue" />
                  <div>Technology & Startups</div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/industries/entertainment" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <Film className="h-5 w-5 text-gowith-medium-blue" />
                  <div>Entertainment</div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/industries/professional-services" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <Building2 className="h-5 w-5 text-gowith-medium-blue" />
                  <div>Professional Services</div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/industries/non-profits" className="w-full flex items-center gap-2 text-gray-800 hover:text-gowith-dark-blue">
                  <HeartHandshake className="h-5 w-5 text-gowith-medium-blue" />
                  <div>Non-Profits</div>
                </Link>
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
          <Button className="bg-gowith-orange hover:bg-gowith-orange-hover text-white transition-colors">
            <a href="tel:9492885812" className="flex items-center">
              <span className="mr-2 text-lg text-right">Contact us</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden absolute top-full left-0 w-full bg-gowith-dark-blue shadow-md py-4 px-4 animate-fade-in">
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
                <Link to="/services/business-comms" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  Business Comms Platform
                </Link>
                <Link to="/services/face-id-auth" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  Face ID Auth
                </Link>
                <Link to="/services/web-dev-automation" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
                  Web Dev Automation
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
                <Link to="/industries/non-profits" className="text-gowith-light-blue hover:text-white" onClick={() => setIsOpen(false)}>
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
            
            <Button className="bg-gowith-orange hover:bg-gowith-orange-hover text-white w-full" onClick={() => setIsOpen(false)}>
              <a href="tel:9492885812" className="w-full flex items-center justify-center">
                <span>(949) 288-5812</span>
              </a>
            </Button>
          </div>
        </div>}
    </header>;
};
export default Navbar;