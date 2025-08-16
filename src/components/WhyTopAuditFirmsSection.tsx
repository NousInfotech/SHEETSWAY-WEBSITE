'use client';

import React from 'react';
import Image from 'next/image';
import assets from '@/data/assets';

const WhyTopAuditFirmsSection = () => {
  const features = [
    {
      title: "Work From Anywhere",
      description: "Manage clients, documents, and communication from a fully remote, centralized audit portal."
    },
    {
      title: "Build Your Online Team",
      description: "Manage clients, documents, and communication from a fully remote, centralized audit portal."
    },
    {
      title: "Stay Structured & In Control",
      description: "Track every file, task, and deadline with our modern, organized dashboard designed for stress-free audits."
    }
  ];

  return (
         <section className="py-8 sm:py-12 lg:py-24 relative overflow-hidden bg-white">
       <div className="w-full px-4 sm:px-6 lg:px-8">
                  <div className="space-y-8 sm:space-y-12">
           
           {/* Full Width: Tag, Heading, and Paragraph */}
           <div className="space-y-4 sm:space-y-6">
             {/* "Why Join Us" Tag */}
             <div className="inline-block">
               <span 
                 className="px-4 sm:px-6 py-2 rounded-full text-white text-xs sm:text-sm font-medium"
                 style={{ backgroundColor: '#FFA955' }}
               >
                 WHY JOIN US
               </span>
             </div>
             
             {/* Mobile: Stack vertically, Desktop: Horizontal Layout */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
               {/* Main Heading */}
               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
                 Why Top Audit Firms<br />
                 Choose Sheetsway
               </h2>
               
               {/* Introductory Paragraph */}
               <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                 Whether you&apos;re a solo practitioner or part of a growing firm, Sheetsway helps you simplify audit work, grow your reach, and collaborate with ease. All done from one secure online platform.
               </p>
             </div>
           </div>
           
           {/* Second Row: Mobile: Stack vertically, Desktop: Image and Features side by side */}
           <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
             {/* Left Side - Laptop Image */}
             <div className="relative w-full lg:w-auto">
               <Image
                 src={assets.Year2006MarketplacePng}
                 alt="Laptops showing audit work"
                 width={900}
                 height={800}
                 className="object-contain w-full max-w-md mx-auto lg:max-w-none"
               />
             </div>
             
             {/* Right Side - Features */}
             <div className="space-y-6 sm:space-y-8 w-full lg:w-auto">
               
                                {/* Features List */}
                 <div className="relative">
                   {/* Features - Mobile: Stack vertically, Desktop: Keep original positioning */}
                   <div className="space-y-8 sm:space-y-12 lg:space-y-16">
                     {features.map((feature, index) => (
                       <div key={index} className={index === 0 ? "relative lg:mt-15" : index === 1 ? "relative lg:mt-5" : "relative lg:-mt-6"}>
                         
                         {/* Feature Content - Mobile: Full width, Desktop: Keep original positioning */}
                         <div className={index === 0 ? "lg:pr-8 lg:-ml-38" : index === 1 ? "lg:pr-8 lg:-ml-20" : "pr-8 lg:-ml-15"}>
                           <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                             {feature.title}
                           </h3>
                           <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                             {feature.description}
                           </p>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
             </div>
           </div>
         </div>
         
         {/* CTA Card - Mobile: Full width and height, Desktop: Keep original dimensions */}
         <div className="mt-8 lg:-mt-30 flex justify-center">
           <div 
             className="relative rounded-2xl overflow-hidden w-full max-w-6xl lg:w-[1200px] h-auto min-h-[400px] lg:h-[302px]"
             style={{ 
               backgroundColor: '#FF8A52'
             }}
           >
             <div className="relative h-full p-6 sm:p-8 lg:p-12">
               {/* Inner Border Container */}
               <div className="absolute inset-4 border border-dashed border-white/80 rounded-xl pointer-events-none z-10"></div>
               
               {/* Mobile: Stack content vertically, Desktop: Keep side-by-side layout */}
               <div className="flex flex-col lg:flex-row h-full items-center justify-between lg:justify-between relative z-20">
                 {/* Left Side - Content */}
                 <div className="text-center lg:text-left lg:w-1/2 space-y-4 lg:space-y-6 mb-6 lg:mb-0">
                   <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                     We power remote audits with structure & scale
                   </h3>
                   <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                     From solo auditors to full firms, Sheetsway gives you the tools to manage clients, proposals, and workflows
                   </p>
                 </div>
                 
                 {/* Right Side - Image and Button */}
                 <div className="flex flex-col items-center lg:items-end space-y-4 lg:space-y-0 relative">
                   {/* Professional Man Image */}
                   <div className="relative w-80 h-80 sm:w-64 sm:h-64 lg:w-80 lg:h-80 order-3 lg:order-none lg:absolute lg:right-20 lg:top-1/2 lg:transform lg:-translate-y-1/2 -mb-15 lg:mb-0 -ml-8 lg:ml-0">
                     <Image
                       src={assets.Rectangle7MarketplacePng}
                       alt="Professional man working on laptop"
                       fill
                       className="object-contain rounded-lg"
                     />
                   </div>
                   
                                                             {/* Sign Up Button - Mobile: Overlay on image, Desktop: Keep original positioning */}
                     <div className="absolute bottom-8 right-0 z-30 order-2 lg:order-none lg:absolute lg:right-8 lg:top-1/2 lg:transform lg:-translate-y-1/2">
                                                <button className="bg-white text-black px-6 sm:px-8 py-3 lg:px-5 lg:w-auto rounded-md font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base whitespace-nowrap">
                         Sign Up - Free
                       </button>
                     </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
  );
};

export default WhyTopAuditFirmsSection; 