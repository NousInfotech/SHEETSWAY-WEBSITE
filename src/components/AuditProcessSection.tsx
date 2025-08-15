'use client';

import React from 'react';
import Image from 'next/image';
import assets from '@/data/assets';

const AuditProcessSection = () => {
  return (
    <section className="py-16 px-4 bg-white relative">
      {/* Curved bottom edge - transparent to show background */}
      <div className="absolute bottom-0 left-0 right-0 h-20" style={{
        background: 'linear-gradient(to bottom, white 0%, white 50%, transparent 50%, transparent 100%)',
        borderRadius: '50% 50% 0 0 / 100px 100px 0 0',
        transform: 'translateY(50%)'
      }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-8 leading-tight">
              Get Your Financial Audit<br />
              Done Remotely. <span style={{color: 'rgba(232, 132, 12, 1)'}}>Fully Online.</span>
            </h1>
            
            {/* Steps List */}
            <div className="space-y-3 mb-8 max-w-xs mx-auto lg:mx-0">
              <div className="bg-gray-50 rounded-lg px-4 py-3 shadow-sm">
                <p className="text-lg text-gray-700 font-medium">Post your audit budget.</p>
              </div>
              <div className="bg-gray-50 rounded-lg px-4 py-3 shadow-sm">
                <p className="text-lg text-gray-700 font-medium">Receive quotes.</p>
              </div>
              <div className="bg-gray-50 rounded-lg px-4 py-3 shadow-sm">
                <p className="text-lg text-gray-700 font-medium">Compare live offers.</p>
              </div>
              <div className="bg-gray-50 rounded-lg px-4 py-3 shadow-sm">
                <p className="text-lg text-gray-700 font-medium">Choose your auditor.</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-6">
              <button 
                className="text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg"
                style={{backgroundColor: 'rgba(232, 132, 12, 1)'}}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(210, 120, 10, 1)'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(232, 132, 12, 1)'}
              >
                Sit Back - We Handle the Rest.
              </button>
            </div>

            {/* Learn How Button */}
            <div className="flex items-center justify-center lg:justify-start">
              <button 
                className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-3xl flex items-center transition-all duration-200 hover:scale-105"
                style={{
                  boxShadow: '0px 0px 17.5px 0px rgba(255, 138, 0, 0.14)',
                  border: 'none'
                }}
              >
                Learn How 
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <Image
                src={assets.CardsAndBg4Png}
                alt="Online Audit Process Illustration"
                width={600}
                height={400}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src={assets.AuditOnlineHeartPng}
                  alt="Heart icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
              100<span style={{color: 'rgba(232, 132, 12, 1)'}}>+</span>
            </div>
            <p className="text-gray-600 text-lg">
              Certified Auditors ready to<br />
              take on your audit
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src={assets.AuditOnlineStarPng}
                  alt="Star icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
              4.8<span style={{color: 'rgba(232, 132, 12, 1)'}}>+</span>
            </div>
            <p className="text-gray-600 text-lg">
              Auditors rated 4.8*<br />
              or higher by real clients
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src={assets.AuditOnlineDiamondPng}
                  alt="Diamond icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
              2000<span style={{color: 'rgba(232, 132, 12, 1)'}}>+</span>
            </div>
            <p className="text-gray-600 text-lg">
              Audit Requests<br />
              Completed Fully Online
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditProcessSection;