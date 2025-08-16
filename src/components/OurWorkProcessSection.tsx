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
          <div className="md:hidden">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <Image
                      src={assets.Rectangle10MarketplacePng}
                      alt="Step 1: Set Up Your Profile"
                      width={300}
                      height={200}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Step 1: Set Up Your Profile
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Create your firm or solo auditor account, showcase your services, and get ready to receive audit listings that match your expertise.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <Image
                      src={assets.Rectangle11MarketplacePng}
                      alt="Step 2: Send Proposals"
                      width={300}
                      height={200}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Step 2: Send Proposals
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Browse live audit requests, review client details and documents, and submit your fee and scope, all in a few clicks.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <Image
                      src={assets.Rectangle9MarketplacePng}
                      alt="Step 3: Sign & Start"
                      width={300}
                      height={200}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
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