
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Industries from "./pages/Industries";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";

// Service Pages
import ManagedIT from "./pages/services/ManagedIT";
import Cybersecurity from "./pages/services/Cybersecurity";
import CloudServices from "./pages/services/CloudServices";
import ProfessionalServices from "./pages/services/ProfessionalServices";
import ITStrategy from "./pages/services/ITStrategy";
import BusinessComms from "./pages/services/BusinessComms";
import FaceIDAuth from "./pages/services/FaceIDAuth";
import WebDevAutomation from "./pages/services/WebDevAutomation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/managed-it" element={<ManagedIT />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/cloud" element={<CloudServices />} />
          <Route path="/services/professional" element={<ProfessionalServices />} />
          <Route path="/services/it-strategy" element={<ITStrategy />} />
          <Route path="/services/business-comms" element={<BusinessComms />} />
          <Route path="/services/face-id-auth" element={<FaceIDAuth />} />
          <Route path="/services/web-dev-automation" element={<WebDevAutomation />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:industrySlug" element={<Industries />} />
          <Route path="/insights/case-studies" element={<CaseStudies />} />
          <Route path="/insights/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
