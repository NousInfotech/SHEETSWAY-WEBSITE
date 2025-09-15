import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuditorCallToAction from "@/components/AuditorCallToAction";
import AuditProcessSection from "@/components/AuditProcessSection";
import SecuritySection from "@/components/SecuritySection";
import AuditNeedsSection from "@/components/AuditNeedsSection";
import RetailHospitalitySection from "@/components/RetailHospitalitySection";
import AccountingSoftwareIntegrationSection from "@/components/AccountingSoftwareIntegrationSection";
import OnlineBankingSection from "@/components/OnlineBankingSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import IndustryAwareAI from "@/components/IndustryAwareAI"
import NewsCarousel from "@/components/NewsCarousel"
import EmailPopup from "@/components/EmailPopup";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <HeroSection />
      <AuditorCallToAction />
      <AuditProcessSection />
      <SecuritySection />
      <AuditNeedsSection />
      {/* <RetailHospitalitySection />
      <AccountingSoftwareIntegrationSection/> 
      <OnlineBankingSection />
      <IndustryAwareAI/>
      <TestimonialSection />
      <NewsCarousel/>
      <CTASection />
      <FAQSection /> */}
      <Footer />
      {/* <EmailPopup /> */}
    </div>
  );
}
