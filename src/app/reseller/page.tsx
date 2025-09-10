import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResellerHero from "@/components/Nav-components/reseller/ResellerHero";

export default function ResellerPage() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ResellerHero />
      </div>
      <Footer />
    </div>
  );
}