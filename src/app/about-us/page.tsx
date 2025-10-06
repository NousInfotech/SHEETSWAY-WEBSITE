import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUs from "@/components/Nav-components/about-us/About";

export default function FAQPage() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <div className="pt-16">
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
} 