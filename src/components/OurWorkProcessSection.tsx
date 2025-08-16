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
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We Designed a Better Way to
                Deliver Audits
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sheetsway connects clients and auditors in a smarter, faster, and more organized workflow. 
                From proposals to signed engagements, and ease of work with our integrated management system and tools.
              </p>
            </div>
          </div>

          {/* Centered Image Section */}
          <div className="hidden md:block">
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

          {/* Mobile Steps Section */}
          <div className="md:hidden relative">
            {/* Curved Vertical Line Background */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-24 z-0">
              <svg
                width="96"
                height="100%"
                viewBox="0 0 96 1000"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 48 0 Q 72 80 48 160 Q 24 240 48 320 Q 72 400 48 480 Q 24 560 48 640 Q 72 720 48 800"
                  stroke="#E8840C"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            
            <div className="space-y-8 relative z-10">
              {/* Step 1 */}
              <div className="space-y-4">
                <div className="relative flex justify-center">
                  <Image
                    src={assets.Rectangle10MarketplacePng}
                    alt="Step 1: Set Up Your Profile"
                    width={250}
                    height={150}
                    className="w-70 h-70 object-cover rounded-lg"
                  />
                  {/* Step Number Overlay - Bottom Left, extending beyond image corner */}
                  <div className="absolute -bottom-6 left-6 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-10">
                    Step 1: Set Up Your Profile
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Create your firm or solo auditor account, showcase your services, and get ready to receive audit listings that match your expertise.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-4">
                <div className="relative flex justify-center">
                  <Image
                    src={assets.Rectangle11MarketplacePng}
                    alt="Step 2: Send Proposals"
                    width={250}
                    height={150}
                    className="w-70 h-70 object-cover rounded-lg"
                  />
                  {/* Step Number Overlay - Bottom Left, extending beyond image corner */}
                  <div className="absolute -bottom-6 left-6 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-10">
                    Step 2: Send Proposals
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Browse live audit requests, review client details and documents, and submit your fee and scope, all in a few clicks.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-4">
                <div className="relative flex justify-center">
                  <Image
                    src={assets.Rectangle9MarketplacePng}
                    alt="Step 3: Sign & Start"
                    width={250}
                    height={150}
                    className="w-70 h-70 object-cover rounded-lg"
                  />
                  {/* Step Number Overlay - Bottom Left, extending beyond image corner */}
                  <div className="absolute -bottom-6 left-6 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-10">
                    Step 3: Sign & Start
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Once your proposal is accepted, sign the agreement and begin the engagement directly on the platform with built-in tools and chat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkProcessSection; 