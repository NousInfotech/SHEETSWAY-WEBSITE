'use client';

import React from 'react';
import Image from 'next/image';
import assets from '@/data/assets';

const OurWorkProcessSection = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="space-y-6">
            {/* "OUR WORK PROCESS" Tag */}
            <div className="inline-block">
              <span 
                className="px-6 py-2 rounded-full text-white text-sm font-medium"
                style={{ backgroundColor: '#FFA955' }}
              >
                OUR WORK PROCESS
              </span>
            </div>
            
            {/* Main Heading and Description */}
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We Designed a Better Way to<br />
                Deliver Audits
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sheetsway connects clients and auditors in a smarter, faster, and more organized workflow. 
                From proposals to signed engagements, and ease of work with our integrated management system and tools.
              </p>
            </div>
          </div>

          {/* Centered Image Section */}
          <div className="flex justify-center items-center -mt-30">
            <div className="relative w-full max-w-4xl">
              <Image
                src={assets.AReferenceMarketplacePng}
                alt="Work process illustration"
                width={1200}
                height={900}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkProcessSection; 