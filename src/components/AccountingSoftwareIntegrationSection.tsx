'use client';

import Image from 'next/image';
import { useState } from 'react';
import assets from '@/data/assets';

const AccountingSoftwareIntegrationSection = () => {
  const [showAllCards, setShowAllCards] = useState(false);
  // Software data for the grid
  const softwareList = [
    { name: 'Acumatica', placeholder: true },
    { name: 'banqUP', placeholder: true },
    { name: 'Clear Books', placeholder: true },
    { name: 'Exact Online', placeholder: true },
    { name: 'Exact Onlin...', placeholder: true },
    { name: 'Zoho Books', placeholder: true },
    { name: 'FreeAgent', placeholder: true },
    { name: 'Acumatica', placeholder: true },
    { name: 'banqUP', placeholder: true },
    { name: 'Clear Books', placeholder: true },
    { name: 'Exact Online', placeholder: true },
    { name: 'Exact Onlin...', placeholder: true },
    { name: 'Zoho Books', placeholder: true },
    { name: 'FreeAgent', placeholder: true },
    { name: 'Acumatica', placeholder: true },
    { name: 'banqUP', placeholder: true },
    { name: 'Clear Books', placeholder: true },
    { name: 'Exact Online', placeholder: true },
    { name: 'Exact Onlin...', placeholder: true },
    { name: 'Zoho Books', placeholder: true },
    { name: 'FreeAgent', placeholder: true },
  ];

  // Show only first 4 cards on mobile initially, all cards on desktop
  const displayedCards = showAllCards ? softwareList : softwareList.slice(0, 4);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-left lg:text-center mb-16">
          <h2 className="text-[22px] lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-6">
            Your Accountant Will Love Us !
          </h2>
          <div className="mb-4">
            <span className="text-md font-bold text-gray-600">We integrate with </span>
            <span className="text-md font-bold" style={{ color: '#E8840C' }}>Over 20</span>
            <span className="text-md font-bold text-gray-600"> accounting software.</span>
          </div>
          <p className="text-lg text-gray-600">
            Sharing your accounts with your auditor is easier than ever!
          </p>
        </div>

        {/* Software Grid */}
        <div className="mb-16">
          {/* Mobile Grid (2x2) - Hidden on desktop */}
          <div className="grid grid-cols-2 gap-4 justify-center mb-8 lg:hidden">
            {displayedCards.map((software, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Software Card */}
                <div className="relative bg-white rounded-lg border shadow-sm hover:shadow-lg transition-all duration-300 p-4 w-full max-w-[160px] h-[180px] flex flex-col items-center justify-center" style={{ borderColor: '#E6E6E6' }}>
                  {/* Live Badge */}
                  <div
                    className="absolute top-3 right-3 text-white text-xs px-2 py-1 rounded-3xl font-medium"
                    style={{ backgroundColor: '#00B83733', color: '#00B837' }}
                  >
                    Live
                  </div>
                  
                  {/* Circular Checker Pattern Background */}
                  <div className="flex-1 flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <Image
                        src={assets.CheckerPng}
                        alt="Software placeholder"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover opacity-30"
                      />
                    </div>
                  </div>
                  
                  {/* Software Name */}
                  <div className="text-center">
                    <span 
                      className="text-base font-normal leading-6 tracking-normal"
                      style={{ 
                        fontFamily: 'var(--font-nunito)',
                        color: '#1F2937',
                        opacity: 0.7,
                        fontSize: '16px',
                        lineHeight: '24px'
                      }}
                    >
                      {software.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Grid - Hidden on mobile */}
          <div className="hidden lg:grid grid-cols-5 xl:grid-cols-7 gap-4 justify-center mb-8">
            {softwareList.map((software, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Software Card */}
                <div className="relative bg-white rounded-lg border shadow-sm hover:shadow-lg transition-all duration-300 p-4 w-[130px] h-[166px] flex flex-col items-center justify-center" style={{ borderColor: '#E6E6E6' }}>
                  {/* Live Badge */}
                  <div
                    className="absolute top-3 right-3 text-white text-xs px-2 py-1 rounded-3xl font-medium"
                    style={{ backgroundColor: '#00B83733', color: '#00B837' }}
                  >
                    Live
                  </div>
                  
                  {/* Circular Checker Pattern Background */}
                  <div className="flex-1 flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <Image
                        src={assets.CheckerPng}
                        alt="Software placeholder"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover opacity-30"
                      />
                    </div>
                  </div>
                  
                  {/* Software Name */}
                  <div className="text-center">
                    <span 
                      className="text-base font-normal leading-6 tracking-normal"
                      style={{ 
                        fontFamily: 'var(--font-nunito)',
                        color: '#1F2937',
                        opacity: 0.7,
                        fontSize: '16px',
                        lineHeight: '24px'
                      }}
                    >
                      {software.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button - Only visible on mobile */}
          {!showAllCards && softwareList.length > 4 && (
            <div className="flex justify-center lg:hidden mb-8">
              <button
                onClick={() => setShowAllCards(true)}
                className="bg-white text-orange-500 px-6 py-3 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 font-medium"
                style={{ color: '#E8840C' }}
              >
                View More
              </button>
            </div>
          )}
        </div>

        {/* Bottom Text */}
        <div className="text-left lg:text-center">
          <p className="text-lg lg:text-3xl font-normal text-gray-700 mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Not using a listed software? No problem.
          </p>
          <p className="text-lg lg:text-3xl font-normal text-gray-700 mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
            You can upload your accounts manually and we&apos;ll take care of the rest.
          </p>
          <p className="text-base lg:text-lg font-normal text-gray-700" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Feel free to suggest us the software on{' '}
            <a 
              href="mailto:info@sheetsway.com" 
              className="hover:underline"
              style={{ color: '#E8840C' }}
            >
              info@sheetsway.com
            </a>
            {' '}and we&apos;ll include it in our future updates
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccountingSoftwareIntegrationSection;