'use client';

import React from 'react';
import Image from 'next/image';
import assets from '@/data/assets';

const BuiltByAuditorsCTA = () => {
  return (
    <section className="relative py-5 lg:py-20 py-10 overflow-hidden">
      {/* Background Image - Both Desktop and Mobile */}
      <div className="absolute inset-0 z-0">
        <Image
          src={assets.CtaPng}
          alt="CTA Background"
          fill
          className="object-contain lg:object-contain object-cover"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Desktop Layout - Preserved */}
        <div className="hidden lg:block text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6">
            {/* Main Text */}
            <div className="text-white space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight">
                <span style={{ color: '#FFA955' }}>Build by Auditors,</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 text-lg md:text-xl">
                <span className="text-white">Backed by</span>
                <div className="flex items-center gap-2">
                  <Image
                    src={assets.SheetSwayFinalLogoWhite2Svg}
                    alt="SheetSway Logo"
                    width={120}
                    height={28}
                    className="h-7 w-auto"
                  />
                  <span className="text-white text-lg">Audit Automation Software</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Layout - New responsive design */}
        <div className="lg:hidden text-left px-6 -py-2">
          <div className="space-y-6">
            {/* Main Text */}
            <div className="text-white space-y-4">
              <h2 className="text-2xl font-bold leading-tight">
                <span style={{ color: '#FFA955' }}>Build by Auditors,</span>
              </h2>
              <div className="flex items-center gap-4 text-base">
                <span className="text-white text-[10px]">Backed by</span>
                <Image
                  src={assets.SheetSwayFinalLogoWhite2Svg}
                  alt="SheetSway Logo"
                  width={104}
                  height={24}
                  className="h-6 w-auto"
                />
                <span className="text-white text-[10px]">Audit Automation Software</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltByAuditorsCTA; 