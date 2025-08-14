'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import assets from '@/data/assets';

const HeroSection = () => {
  const [selectedBusiness, setSelectedBusiness] = useState('Startup or Solo Business');
  const [selectedCountry, setSelectedCountry] = useState('MT');

  return (
    <section className="relative overflow-hidden" style={{height: '700px'}}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={assets.HeroBgPng}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Find Your Auditor Online
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
            Fast, Private, and Easy
          </h2>
          <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Audit Firms Bid. Compare Quotes in Minutes. You Choose. It&apos;s That Simple.
          </p>
        </div>

        {/* Selection Area */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 max-w-2xl mx-auto">
          {/* Business Type Dropdown */}
          <div className="relative flex-1 min-w-[280px]">
            <select 
              value={selectedBusiness}
              onChange={(e) => setSelectedBusiness(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-12"
            >
              <option>Startup or Solo Business</option>
              <option>Small Business</option>
              <option>Medium Business</option>
              <option>Large Enterprise</option>
            </select>
            <span className="absolute right-12 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
              (&lt;10 staff)
            </span>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Country Selector */}
          <div className="relative">
            <select 
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-10 pl-12"
            >
              <option value="MT">MT</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
              <option value="EU">EU</option>
            </select>
            {/* Flag placeholder */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <div className="w-5 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">{selectedCountry}</span>
              </div>
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* List Audit Button */}
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-200 whitespace-nowrap">
            List your Audit Now
          </button>
        </div>

        {/* Journey Text */}
        <p className="text-white text-lg mb-8">
          Start your Easy Online Audit journey here
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <button className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-3 rounded-full font-medium text-sm transition-colors duration-200 shadow-lg w-full sm:w-auto">
            I need an Audit
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-3 rounded-full font-medium text-sm transition-colors duration-200 shadow-lg w-full sm:w-auto">
            I&apos;m an Auditor
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;