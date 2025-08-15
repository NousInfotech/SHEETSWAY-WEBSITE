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
         <section className="py-16 lg:py-24 relative overflow-hidden bg-white">
       <div className="w-full px-4 sm:px-6 lg:px-8">
                  <div className="space-y-12">
           
           {/* Full Width: Tag, Heading, and Paragraph */}
           <div className="space-y-6">
             {/* "Why Join Us" Tag */}
             <div className="inline-block">
               <span 
                 className="px-6 py-2 rounded-full text-white text-sm font-medium"
                 style={{ backgroundColor: '#FFA955' }}
               >
                 WHY JOIN US
               </span>
             </div>
             
             {/* Horizontal Layout: Heading and Paragraph */}
             <div className="grid lg:grid-cols-2 gap-8 items-start">
               {/* Main Heading */}
               <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
                 Why Top Audit Firms<br />
                 Choose Sheetsway
               </h2>
               
               {/* Introductory Paragraph */}
               <p className="text-gray-600 text-lg leading-relaxed">
                 Whether you&apos;re a solo practitioner or part of a growing firm, Sheetsway helps you simplify audit work, grow your reach, and collaborate with ease. All done from one secure online platform.
               </p>
             </div>
           </div>
           
           {/* Second Row: Image and Features */}
           <div className="flex flex-col lg:flex-row gap-12 items-start">
             {/* Left Side - Laptop Image */}
             <div className="relative">
               <Image
                 src={assets.Year2006MarketplacePng}
                 alt="Laptops showing audit work"
                 width={900}
                 height={800}
                 className="object-contain"
               />
             </div>
             
             {/* Right Side - Features */}
             <div className="space-y-8">
               
               {/* Features List */}
               <div className="relative">
                 {/* Features */}
                 <div className="space-y-16">
                   {features.map((feature, index) => (
                     <div key={index} className={index === 0 ? "relative mt-15" : index === 1 ? "relative mt-5" : "relative -mt-6"}>
                       
                       {/* Feature Content */}
                       <div className={index === 0 ? "pr-8 -ml-38" : index === 1 ? "pr-8 -ml-20" : "pr-8 -ml-15"}>
                         <h3 className="text-xl font-bold text-gray-900 mb-2">
                           {feature.title}
                         </h3>
                         <p className="text-gray-600 leading-relaxed">
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
         
         {/* CTA Card */}
         <div className="-mt-30 flex justify-center">
           <div 
             className="relative rounded-2xl overflow-hidden"
             style={{ 
               backgroundColor: '#FF8A52',
               width: '1200px',
               height: '302px',
               maxWidth: '100%'
             }}
           >
             <div className="relative h-full p-8 lg:p-12">
               {/* Inner Border Container */}
               <div className="absolute inset-4 border border-dashed border-white/80 rounded-xl pointer-events-none z-10"></div>
               
               {/* Left Side - Content */}
               <div className="absolute left-8 lg:left-12 top-1/2 transform -translate-y-1/2 w-1/2 space-y-6 text-center">
                 <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                   We power remote audits with structure & scale
                 </h3>
                 <p className="text-white/90 text-lg leading-relaxed">
                   From solo auditors to full firms, Sheetsway gives you the tools to manage clients, proposals, and workflows
                 </p>
               </div>
               
               {/* Right Side - Image */}
               <div className="absolute right-20 lg:right-30 top-1/2 transform -translate-y-1/2">
                 {/* Professional Man Image */}
                 <div className="relative w-64 h-64 lg:w-100 lg:h-100">
                   <Image
                     src={assets.Rectangle7MarketplacePng}
                     alt="Professional man working on laptop"
                     fill
                     className="object-contain rounded-lg"
                   />
                 </div>
               </div>
               
               {/* Sign Up Button - Positioned at Right Center */}
               <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                 <button className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                   Sign Up - Free
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
  );
};

export default WhyTopAuditFirmsSection; 