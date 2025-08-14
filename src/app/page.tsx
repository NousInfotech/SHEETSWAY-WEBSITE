import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuditorCallToAction from "@/components/AuditorCallToAction";
import AuditProcessSection from "@/components/AuditProcessSection";
import SecuritySection from "@/components/SecuritySection";
import AuditNeedsSection from "@/components/AuditNeedsSection";
import RetailHospitalitySection from "@/components/RetailHospitalitySection";
import AccountingSoftwareIntegrationSection from "@/components/AccountingSoftwareIntegrationSection";

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
    </div>
  );
}
