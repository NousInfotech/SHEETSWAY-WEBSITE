'use client';

import React from 'react';
import Image from 'next/image';
import assets from '@/data/assets';

const MarketplaceHeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image - frame.png */}
      <div className="absolute inset-0">
        <Image
          src={assets.FrameMarketplacePng}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="text-left">
              {/* Welcome Text */}
              <p className="text-white/90 text-lg mb-4">
                Welcome to the Audit Marketplace
              </p>
              
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Connecting<br />
                Auditors & Clients.<br />
                Building Careers
              </h1>
              
              {/* Description */}
              <p className="text-sm text-white/90 mb-8 max-w-lg leading-relaxed">
                Take your business to the next level with our new audit marketplace and audit tools. Sheetsway opens a new horizon of client acquisition.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#FFA955' }}
                >
                  Contact Sheetsway
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </button>
                <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg">
                  Log In
                </button>
              </div>
            </div>
            
            {/* Right Side - Hero Image */}
            <div className="relative h-96 lg:h-[500px] flex justify-end -mr-10 lg:-mr-69">
              <Image
                src={assets.HeroSideMarketplacePng}
                alt="Professional Auditor"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default MarketplaceHeroSection;