import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuditorCallToAction from "@/components/AuditorCallToAction";
import AuditProcessSection from "@/components/AuditProcessSection";
import SecuritySection from "@/components/SecuritySection";
import AuditNeedsSection from "@/components/AuditNeedsSection";
import RetailHospitalitySection from "@/components/RetailHospitalitySection";
import AccountingSoftwareIntegrationSection from "@/components/AccountingSoftwareIntegrationSection";
import OnlineBankingSection from "@/components/OnlineBankingSection";
import BuiltByAuditorsSection from "@/components/BuiltByAuditorsSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <HeroSection />
      <AuditorCallToAction />
      <AuditProcessSection />
      <SecuritySection />
      <AuditNeedsSection />
      <RetailHospitalitySection />
      <AccountingSoftwareIntegrationSection />
      <OnlineBankingSection />
      <BuiltByAuditorsSection />
      <TestimonialSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}
