import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarketplaceHeroSection from "@/components/MarketplaceHeroSection";
import AboutSheetsway from "@/components/AboutSheetsway";
import ImageSection from "@/components/ImageSection";
import ServicesSection from "@/components/ServicesSection";
import WhyTopAuditFirmsSection from "@/components/WhyTopAuditFirmsSection";
import OurWorkProcessSection from "@/components/OurWorkProcessSection";
import BuiltByAuditorsCTA from "@/components/BuiltByAuditorsCTA";
import IntegrationToolsSection from "@/components/IntegrationToolsSection";
import ProcedureGenerationSection from "@/components/ProcedureGenerationSection";
import MarketplaceCTASection from "@/components/MarketplaceCTASection";
import FAQSection from "@/components/FAQSection";

export default function MarketplaceAuditor() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <MarketplaceHeroSection />
      <AboutSheetsway />
      <ImageSection />
      <ServicesSection />
      <WhyTopAuditFirmsSection />
      <OurWorkProcessSection />
      <BuiltByAuditorsCTA />
      <IntegrationToolsSection />
      <ProcedureGenerationSection />
      <MarketplaceCTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}