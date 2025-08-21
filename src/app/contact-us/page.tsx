import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Nav-components/contact-us/Contact";

export default function FAQPage() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </div>
  );
} 