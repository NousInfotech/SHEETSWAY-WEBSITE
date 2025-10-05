import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Faq from "@/components/Nav-components/faq/Faq";

export default function FAQPage() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Faq />
      </div>
      <Footer />
    </div>
  );
} 