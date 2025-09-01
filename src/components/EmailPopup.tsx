"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const EmailPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show popup when user scrolls halfway through the page
      const scrollPosition = window.scrollY;
      const halfwayPoint = document.body.scrollHeight / 2;
      
      if (scrollPosition > halfwayPoint && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      // Trigger PDF download
      const pdfUrl = '/Popup/Do You Need an Audit and are You Prepared.pdf';
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Audit_Guide_Checklist.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Close popup after download starts
      setTimeout(() => {
        setIsSubmitting(false);
        setIsVisible(false);
      }, 1000);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85">
      <div className="relative w-full max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl h-auto max-h-[95vh] rounded-lg overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Popup/Popup.png"
            alt="Background"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0"></div>
        </div>
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-xl sm:text-2xl font-bold z-20 text-white"
          aria-label="Close popup"
        >
          &#x2715;
        </button>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center sm:items-center md:items-end p-2 sm:p-4 md:p-6 md:min-h-[380px]">
          <div className="w-[98%] sm:w-4/5 md:w-3/5 lg:w-1/2 p-2 sm:p-4 md:p-6 rounded-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-bold mb-4 sm:mb-5 md:mb-7 text-blue-800 sm:text-blue-800">
              Download your free<br />
              Audit Guide + Checklist
            </h2>
            
            <div className="bg-white w-full sm:w-[90%] md:w-[85%] shadow-xl mx-auto rounded-lg p-3 sm:p-3 mb-4 sm:mb-5 md:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-center mb-0.5 sm:mb-1">
                Not sure if your business<br className="hidden xs:inline" /> needs an audit?
              </h3>
              <p className="text-sm text-center">
                Discover what an audit really means for<br />
                your business and whether you're ready.<br />
                Get our <span className="font-bold text-blue-800">FREE PDF CHECKLIST</span> below:
              </p>
            </div>
            
            <p className="text-xs sm:text-sm mb-3 sm:mb-4 text-center">Enter your email below and get instant access.</p>
            
            <form onSubmit={handleSubmit} className="w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full p-2 mb-3 sm:mb-4 rounded-3xl bg-white text-sm text-center"
              />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-[90%] sm:w-[75%] md:w-[65%] mx-auto block bg-white text-blue-800 font-bold py-3 sm:py-3.5 px-2 sm:px-4 rounded-lg hover:bg-blue-800 hover:text-white transition-colors text-[10px] sm:text-sm whitespace-nowrap"
              >
                {isSubmitting ? 'Processing...' : 'Get My Free Audit Checklist'}
              </button>
            </form>
            
            <p className="text-xs mt-1 text-white sm:text-white text-center">
              Instant download. No spam - just practical insights for your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPopup;