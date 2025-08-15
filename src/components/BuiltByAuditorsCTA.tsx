'use client';

import React from 'react';
import Image from 'next/image';
import assets from '@/data/assets';

const BuiltByAuditorsCTA = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={assets.CtaPng}
          alt="CTA Background"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center lg:text-left">
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
      </div>
    </section>
  );
};

export default BuiltByAuditorsCTA; 