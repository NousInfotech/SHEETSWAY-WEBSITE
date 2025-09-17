import Navbar from "@/components/Nav-components/reseller/Navbar";
import Footer from "@/components/Nav-components/reseller/Footer";
import ResellerHero from "@/components/Nav-components/reseller/ResellerHero";
import CTASection from "@/components/Nav-components/reseller/CTASection";
import FAQSection from "@/components/Nav-components/reseller/FAQSection";
import ReferralSection from "@/components/Nav-components/reseller/ReferralSection";
import ServicesSection from "@/components/Nav-components/reseller/ServicesSection";

export default function ResellerPage() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ResellerHero />
        <ServicesSection />
        <ReferralSection />
        <CTASection />
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
