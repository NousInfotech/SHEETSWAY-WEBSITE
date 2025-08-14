'use client';

import React from 'react';
import Image from 'next/image';
import assets from '@/data/assets';

const AuditorCallToAction = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center">
        {/* Left Section - Orange */}
        <div className="w-full lg:w-[367px] h-[544px] p-8 lg:p-12 flex flex-col justify-center items-center text-center text-white relative overflow-hidden rounded-2xl shadow-lg">
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
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">
            Need an Audit?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Let Auditors Come to You
          </p>
          
          <div className="mb-8">
            <div className="text-6xl lg:text-7xl font-bold mb-2">
              10% off
            </div>
            <p className="text-lg opacity-90">
              with your initial sign up
            </p>
          </div>
          
          <button 
            className="text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 mb-8 shadow-lg"
            style={{backgroundColor: 'rgba(0, 70, 102, 1)'}}
            onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(0, 60, 90, 1)'}
            onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(0, 70, 102, 1)'}
          >
            Sign Up for Free
          </button>
          
          <div className="mb-4">
            <p className="text-sm opacity-80 mb-4">
              Follow our pages for occasional promo codes to sweeten the deal.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4">
              <div className="w-12 h-12 cursor-pointer hover:scale-110 transition-transform duration-200">
                <Image
                  src={assets.FacebookIconPng}
                  alt="Facebook"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-12 cursor-pointer hover:scale-110 transition-transform duration-200">
                <Image
                  src={assets.LinkedinIconPng}
                  alt="LinkedIn"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-12 cursor-pointer hover:scale-110 transition-transform duration-200">
                <Image
                  src={assets.InstagramIconPng}
                  alt="Instagram"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-12 cursor-pointer hover:scale-110 transition-transform duration-200">
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
        <div className="w-full lg:w-[881px] h-[544px] p-8 lg:p-12 flex items-center relative overflow-hidden rounded-2xl shadow-lg">
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
          <div className="flex items-center justify-start h-full w-full relative z-10 pl-0 pr-8">
            <div className="text-white text-center max-w-lg ml-0">
                             <p className="text-lg mb-4">
                 Pick from <span className="font-semibold" style={{color: 'rgba(232, 132, 12, 1)'}}>Verified</span> and <span className="font-semibold" style={{color: 'rgba(232, 132, 12, 1)'}}>Trusted</span>
               </p>
              <h2 className="text-4xl lg:text-4xl font-bold mb-2 leading-tight">
                CERTIFIED &
              </h2>
              <h2 className="text-4xl lg:text-4xl font-bold mb-6 leading-tight">
                REVIEWED AUDITORS
              </h2>
              <p className="text-lg mb-8 opacity-90">
                all in one place
              </p>
              
                             <button 
                 className="text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors duration-200 mb-6 shadow-xl"
                 style={{backgroundColor: 'rgba(232, 132, 12, 1)'}}
                 onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(210, 120, 10, 1)'}
                 onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(232, 132, 12, 1)'}
               >
                 Find Your Auditor
               </button>
              
              <p className="text-base opacity-80">
                Get 10% off your first listing
              </p>
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