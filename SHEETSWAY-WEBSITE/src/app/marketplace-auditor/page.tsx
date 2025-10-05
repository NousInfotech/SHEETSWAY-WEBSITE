import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarketplaceHeroSection from "@/components/MarketplaceHeroSection";
import AboutSheetsway from "@/components/AboutSheetsway";
import ImageSection from "@/components/ImageSection";
import ServicesSection from "@/components/ServicesSection";
import WhyTopAuditFirmsSection from "@/components/WhyTopAuditFirmsSection";
import OurWorkProcessSection from "@/components/OurWorkProcessSection";
import MarketplaceCTASection from "@/components/MarketplaceCTASection";
import FAQSection from "@/components/marketplace/FAQSection";
import IntegrationPage from "@/components/IntegrationPage"
import IntegrationAwareAI from "@/components/marketplace/IndustryAwareAI"
import BuiltByAuditorsCTA from "@/components/BuiltByAuditorsCTA";



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
      <BuiltByAuditorsCTA/>
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: "url('/Marketplace auditor page/SVG/Background pattern.svg')" }}
        />
        <div className="relative z-10">
          <IntegrationPage/>
          <IntegrationAwareAI/>
        </div>
      </div>
      <MarketplaceCTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}