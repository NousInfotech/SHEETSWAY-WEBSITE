'use client';

import React from 'react';
import Image from 'next/image';
import assets from '@/data/assets';

const AuditProcessSection = () => {
  return (
    <section className="py-8 md:py-16 px-4 bg-white relative" style={{
      borderBottomLeftRadius: '50px',
      borderBottomRightRadius: '50px'
    }}>
      <style jsx>{`
        @media (min-width: 1024px) {
          section {
            border-bottom-left-radius: 150px !important;
            border-bottom-right-radius: 150px !important;
          }
        }
      `}</style>
  
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-12 lg:mb-20">
          {/* Left Content */}
          <div className="flex-1 text-left w-full">
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold text-gray-800 mb-6 lg:mb-8 leading-tight">
              Get Your Financial Audit<br />
              Done Remotely. <span style={{color: 'rgba(232, 132, 12, 1)'}}>Fully Online.</span>
            </h1>
            
            {/* Steps List */}
            <div className="space-y-3 mb-6 lg:mb-8 max-w-xs mx-0">
              <div className="bg-gray-50 rounded-lg px-4 py-3 shadow-sm">
                <p className="text-base sm:text-lg text-gray-700 font-medium">Post your audit budget.</p>
              </div>
              <div className="bg-gray-50 rounded-lg px-4 py-3 shadow-sm">
                <p className="text-base sm:text-lg text-gray-700 font-medium">Receive quotes.</p>
              </div>
              <div className="bg-gray-50 rounded-lg px-4 py-3 shadow-sm">
                <p className="text-base sm:text-lg text-gray-700 font-medium">Compare live offers.</p>
              </div>
              <div className="bg-gray-50 rounded-lg px-4 py-3 shadow-sm">
                <p className="text-base sm:text-lg text-gray-700 font-medium">Choose your auditor.</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-4 lg:mb-6">
              <button 
                className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 shadow-lg w-full sm:w-auto"
                style={{backgroundColor: 'rgba(232, 132, 12, 1)'}}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(210, 120, 10, 1)'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(232, 132, 12, 1)'}
              >
                Sit Back - We Handle the Rest.
              </button>
            </div>

            {/* Learn How Button */}
            <div className="flex items-center justify-start">
              <button 
                className="bg-white text-gray-800 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-3xl flex items-center justify-center sm:justify-start transition-all duration-200 hover:scale-105 text-sm sm:text-base w-full sm:w-auto"
                style={{
                  boxShadow: '0px 0px 17.5px 0px rgba(255, 138, 0, 0.14)',
                  border: 'none'
                }}
              >
                Learn How 
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="flex-1 relative w-full">
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-3 lg:mb-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                <Image
                  src={assets.AuditOnlineHeartPng}
                  alt="Heart icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
              100<span style={{color: 'rgba(232, 132, 12, 1)'}}>+</span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              Certified Auditors ready to<br />
              take on your audit
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-3 lg:mb-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                <Image
                  src={assets.AuditOnlineStarPng}
                  alt="Star icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
              4.8<span style={{color: 'rgba(232, 132, 12, 1)'}}>+</span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              Auditors rated 4.8*<br />
              or higher by real clients
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-3 lg:mb-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                <Image
                  src={assets.AuditOnlineDiamondPng}
                  alt="Diamond icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
              2000<span style={{color: 'rgba(232, 132, 12, 1)'}}>+</span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
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