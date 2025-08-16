'use client';

import React from 'react';
import Image from 'next/image';
import assets from '@/data/assets';

const AuditorCallToAction = () => {
  return (
    <section className="py-6 sm:py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center">
        {/* Left Section - Orange */}
        <div className="w-full lg:w-[367px] h-[400px] sm:h-[500px] lg:h-[544px] p-6 sm:p-8 lg:p-12 flex flex-col justify-center items-center text-center text-white relative overflow-hidden rounded-2xl shadow-lg">
          {/* Background Image */}
          <div className="absolute inset-0 rounded-2xl">
            <Image
              src={assets.CtaBg2Png}
              alt="CTA Background 2"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
                  {/* Overlay for consistent styling */}
        <div className="absolute inset-0 rounded-2xl" style={{backgroundColor: 'rgba(232, 132, 12, 0.2)'}}></div>
        <div className="max-w-md relative z-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
            Need an Audit?
          </h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90">
            Let Auditors Come to You
          </p>
          
          <div className="mb-6 sm:mb-8">
            <div className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-2">
              10% off
            </div>
            <p className="text-sm sm:text-lg opacity-90">
              with your initial sign up
            </p>
          </div>
          
          <button 
            className="text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 mb-6 sm:mb-8 shadow-lg"
            style={{backgroundColor: 'rgba(0, 70, 102, 1)'}}
            onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(0, 60, 90, 1)'}
            onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(0, 70, 102, 1)'}
          >
            Sign Up for Free
          </button>
          
          <div className="mb-4">
            <p className="text-xs sm:text-sm opacity-80 mb-3 sm:mb-4">
              Follow our pages for occasional promo codes to sweeten the deal.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer hover:scale-110 transition-transform duration-200">
                <Image
                  src={assets.FacebookIconPng}
                  alt="Facebook"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer hover:scale-110 transition-transform duration-200">
                <Image
                  src={assets.LinkedinIconPng}
                  alt="LinkedIn"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer hover:scale-110 transition-transform duration-200">
                <Image
                  src={assets.InstagramIconPng}
                  alt="Instagram"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer hover:scale-110 transition-transform duration-200">
                <Image
                  src={assets.TwitterIconPng}
                  alt="Twitter"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
        
        {/* Right Section - Blue */}
        <div className="w-full lg:w-[881px] h-[600px] sm:h-[700px] lg:h-[544px] p-6 sm:p-8 lg:p-12 flex items-center relative overflow-hidden rounded-2xl shadow-lg">
          {/* Background Image */}
          <div className="absolute inset-0 rounded-2xl">
            <Image
              src={assets.CtaBgPng}
              alt="CTA Background"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-slate-900/60 rounded-2xl"></div>
          <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-start h-full w-full relative z-10 text-center lg:text-left">
            <div className="text-white max-w-lg lg:ml-0 mb-6 lg:mb-0">
              <p className="text-base sm:text-lg mb-3 sm:mb-4">
                Pick from <span className="font-semibold" style={{color: 'rgba(232, 132, 12, 1)'}}>Verified</span> and <span className="font-semibold" style={{color: 'rgba(232, 132, 12, 1)'}}>Trusted</span>
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
                CERTIFIED &
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                REVIEWED AUDITORS
              </h2>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
                all in one place
              </p>
              
              <button 
                className="text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-colors duration-200 mb-4 sm:mb-6 shadow-xl"
                style={{backgroundColor: 'rgba(232, 132, 12, 1)'}}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(210, 120, 10, 1)'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(232, 132, 12, 1)'}
              >
                Find Your Auditor
              </button>
              
              <p className="text-sm sm:text-base opacity-80">
                Get 10% off your first listing
              </p>
            </div>
          </div>
          
          {/* Businessman Image - Mobile responsive positioning */}
          <div className="lg:hidden absolute bottom-0 right-0 z-10">
            <div className="w-80 h-80 sm:w-96 sm:h-96 relative">
              <Image
                src={assets.BlondBusinessmanHappyExpressionPng}
                alt="Professional Auditor"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        {/* Businessman Image - Positioned at bottom */}
        <div className="hidden lg:block absolute bottom-0 right-15 z-10">
          <div className="w-80 h-[500px] relative">
            <Image
              src={assets.BlondBusinessmanHappyExpressionPng}
              alt="Professional Auditor"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default AuditorCallToAction;