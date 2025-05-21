
import HeroSection from "../components/HeroSection";
import ValueProposition from "../components/ValueProposition";
import ServicesOverview from "../components/ServicesOverview";
import WhyChooseUs from "../components/WhyChooseUs";
import IndustriesSection from "../components/IndustriesSection";
import CtaSection from "../components/CtaSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ValueProposition />
        <ServicesOverview />
        <WhyChooseUs />
        <IndustriesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
