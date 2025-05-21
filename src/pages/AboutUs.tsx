
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import OurStory from "../components/OurStory";
import MissionValues from "../components/MissionValues";
import Leadership from "../components/Leadership";
import Certifications from "../components/Certifications";
import CtaSection from "../components/CtaSection";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <OurStory />
        <MissionValues />
        <Leadership />
        <Certifications />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
