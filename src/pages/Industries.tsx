import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IndustriesHero from "../components/IndustriesHero";
import IndustryDetail from "../components/IndustryDetail";
import CtaSection from "../components/CtaSection";
import { useParams } from "react-router-dom";
import { industryData } from "../data/industryData";

const Industries = () => {
  const { industrySlug } = useParams();
  
  // If we have an industry slug, show the specific industry details
  // Otherwise, show all industries overview
  const selectedIndustry = industrySlug 
    ? industryData.find(ind => ind.slug === industrySlug) 
    : null;

  return (
    <>
      <Navbar />
      <main>
        <IndustriesHero 
          industry={selectedIndustry?.name} 
          headline={selectedIndustry?.headline || "Specialized IT Solutions for Every Industry"}
          subheadline={selectedIndustry?.subheadline || "We understand the unique technology challenges across diverse sectors"}
        />
        
        {selectedIndustry ? (
          <IndustryDetail industry={selectedIndustry} />
        ) : (
          // If no specific industry is selected, show the industries overview
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gowith-dark-blue mb-4">
                  Industries We Serve
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We provide specialized IT solutions for a wide range of industries, understanding the unique challenges and compliance requirements of each.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industryData.map((industry, index) => (
                  <IndustryPreview key={index} industry={industry} />
                ))}
              </div>
            </div>
          </section>
        )}
        
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

const IndustryPreview = ({ industry }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
      <div className="h-48 bg-gowith-dark-blue bg-opacity-10 flex items-center justify-center">
        <span className="text-gowith-dark-blue">
          {industry.icon}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gowith-dark-blue mb-2">{industry.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{industry.brief}</p>
        <a 
          href={`/industries/${industry.slug}`} 
          className="inline-flex items-center text-gowith-medium-blue hover:text-gowith-dark-blue font-medium"
        >
          <span>Learn more</span>
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Industries;
