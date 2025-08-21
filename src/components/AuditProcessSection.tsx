'use client';

import React from 'react';
import Image from 'next/image';
import assets from '@/data/assets';

const AuditProcessSection = () => {
  return (
    <section className="py-8 md:py-16 px-4 bg-white relative mb-8 md:mb-35" style={{
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
        
        /* Mobile S - 320px */
        @media (min-width: 320px) and (max-width: 374px) {
          .illustration-image {
            transform: scale(0.8) !important;
            right: 0% !important;
          }
        }
        
        /* Mobile M - 375px */
        @media (min-width: 375px) and (max-width: 424px) {
          .illustration-image {
            transform: scale(0.85) !important;
            right: 0% !important;
          }
        }
        
        /* Mobile L - 425px */
        @media (min-width: 425px) and (max-width: 767px) {
          .illustration-image {
            transform: scale(0.9) !important;
            right: 0% !important;
          }
        }
        
        /* Tablet - 768px */
        @media (min-width: 768px) and (max-width: 1023px) {
          .illustration-image {
            transform: scale(1.1) !important;
            right: 10% !important;
          }
        }
        
        /* Laptop - 1024px and above (unchanged) */
        @media (min-width: 1024px) {
          .illustration-image {
            transform: scale(1.35) !important;
            right: 30% !important;
          }
        }
      `}</style>
  
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-12 lg:mb-20">
          {/* Left Content */}
          <div className="flex-1 text-left w-full relative z-10">
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold text-gray-800 mb-6 lg:mb-8 leading-tight">
              Get Your Financial Audit<br />
              Done Remotely. <span style={{color: 'rgba(232, 132, 12, 1)'}}>Fully Online.</span>
            </h1>
            
            {/* Steps List */}
            <div className="space-y-8 mb-6 lg:mb-8 max-w-sm sm:max-w-xs mx-0 mb-10">
              <div className="bg-white rounded-lg px-4 py-3 shadow-lg">
                <p className="text-base sm:text-2xl text-gray-700 font-medium">Post your audit budget.</p>
              </div>
              <div className="bg-white rounded-lg px-4 py-3 shadow-lg">
                <p className="text-base sm:text-2xl text-gray-700 font-medium">Receive quotes.</p>
              </div>
              <div className="bg-white rounded-lg px-4 py-3 shadow-lg">
                <p className="text-base sm:text-2xl text-gray-700 font-medium">Compare live offers.</p>
              </div>
              <div className="bg-white rounded-lg px-4 py-3 shadow-lg">
                <p className="text-base sm:text-2xl text-gray-700 font-medium">Choose your auditor.</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-4 lg:mb-6">
              <button 
                className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-xl transition-colors duration-200 shadow-lg w-full sm:w-auto"
                style={{backgroundColor: 'rgb(100, 198, 58)'}}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'rgb(81, 193, 32)'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'rgb(81, 193, 32)'}
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
          <div className="lg:flex-1 relative w-full">
            <div className="relative w-full">
              <Image
                src={assets.CardsAndBg4Png}
                alt="Online Audit Process Illustration"
                width={1500}
                height={1200}
                className="object-contain w-full h-auto relative z-0 illustration-image"
                priority
                style={{
                  transform: 'scale(1.0)',
                  transformOrigin: 'left center',
                  position: 'relative',
                  right: '0%',
                  zIndex: 0
                }}
              />
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Stat 1 */}
          <div className="text-center relative">
            <div className="relative inline-block">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 relative z-10 inline-block">
                100+
              </div>
              <div className="pointer-events-none absolute -top-5 sm:-top-12 md:-top-12 lg:-top-16 xl:-top-10 2xl:-top-24 -right-4 sm:-right-6 md:-right-8 lg:-right-10 xl:-right-12 2xl:-right-16 w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-14 lg:h-14 xl:w-28 xl:h-18 2xl:w-12 2xl:h-12 z-0">
                <Image
                  src={assets.AuditOnlineHeartPng}
                  alt="Heart icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              Certified Auditors ready to<br />
              take on your audit
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center relative">
            <div className="relative inline-block">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 relative z-10 inline-block">
                4.8
              </div>
              <div className="pointer-events-none absolute -top-5 sm:-top-10 md:-top-12 lg:-top-16 xl:-top-10 2xl:-top-24 -right-6 sm:-right-8 md:-right-10 lg:-right-12 xl:-right-16 2xl:-right-20 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-20 xl:h-20 2xl:w-12 2xl:h-12 z-0">
                <Image
                  src={assets.AuditOnlineStarPng}
                  alt="Star icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm sm:text-base lg:text-lg">
              Auditors rated 4.8*<br />
              or higher by real clients
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center relative">
            <div className="relative inline-block">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 relative z-10 inline-block">
                2000+
              </div>
              <div className="pointer-events-none absolute -top-5 sm:-top-10 md:-top-12 lg:-top-16 xl:-top-10 2xl:-top-24 -right-4 sm:-right-6 md:-right-8 lg:-right-5 xl:-right-10 2xl:-right-16 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-20 xl:h-20 2xl:w-22 2xl:h-22 z-0">
                <Image
                  src={assets.AuditOnlineDiamondPng}
                  alt="Diamond icon"
                  fill
                  className="object-contain"
                />
              </div>
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