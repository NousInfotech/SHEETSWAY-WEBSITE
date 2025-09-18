'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import assets from '@/data/assets';

const HeroSection = () => {
  const [selectedBusiness, setSelectedBusiness] = useState('Startup or Solo Business (<10 staff)');
  const [selectedCountry, setSelectedCountry] = useState('MT');

  return (
    <section className="relative overflow-hidden h-screen flex items-center" style={{
      borderBottomLeftRadius: 'clamp(80px, 16vw, 180px)',
      borderBottomRightRadius: 'clamp(80px, 16vw, 180px)'
    }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={assets.HeroBgPng}
          alt="Hero Background"
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto py-4 sm:py-6 md:py-8 lg:py-6 xl:py-6 2xl:py-21">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 text-center">
        {/* Main Heading */}
        <div className="mt-4 mb-3 sm:mt-6 sm:mb-4 md:mt-8 md:mb-5 lg:mt-10 lg:mb-6 xl:mt-12 xl:mb-8 2xl:mt-16 2xl:mb-10">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-1 sm:mb-2 md:mb-1 leading-tight">
            Find Your Auditor Online
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#004666] mb-2 sm:mb-3 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6 leading-tight">
            Fast, Private, and Easy
          </h2>
          <p className="text-sm sm:text-base md:text-sm lg:text-md xl:text-lg 2xl:text-xl text-gray-800 mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 2xl:mb-10 mx-auto px-2 sm:px-4 md:px-6 lg:px-6 xl:px-8 2xl:px-10 max-w-5xl">
            Audit Firms Bid. Compare Quotes in Minutes. You Choose. It&apos;s That Simple.
          </p>
        </div>

        {/* Selection Area */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-4">
          {/* Business Type Dropdown */}
          <div className="relative w-full lg:flex-1 max-w-sm lg:max-w-md">
            <select 
              value={selectedBusiness}
              onChange={(e) => setSelectedBusiness(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg px-3 md:px-4 py-3 md:py-3 text-gray-700 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-10"
            >
              <option>Startup or Solo Business (&lt;10 staff)</option>
              <option>Small Company (&lt;50 employees)</option>
              <option>Mid-Sized Company (&lt;250 employees)</option>
              <option>Large or Corporate Business (250+ employees)</option>
            </select>

            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Country Selector */}
          <div className="relative w-full sm:w-36 md:w-20">
            <select 
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg px-3 md:px-4 py-3 md:py-3 text-gray-700 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-10 pl-16"
            >
              <option value="MT">MT</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
              <option value="EU">EU</option>
            </select>
            {/* Flag placeholder */}
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 md:hidden">
              <div className="w-5 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">{selectedCountry}</span>
              </div>
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none z-10">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* List Audit Button */}
          <button className="w-full sm:w-auto bg-[#004666] hover:bg-[#004666] text-white px-4 md:px-6 py-3 rounded-lg font-medium text-sm md:text-base transition-colors duration-200 whitespace-nowrap">
            List your Audit Now
          </button>
        </div>

        {/* Journey Text */}
        <p className="text-white text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 2xl:mb-20 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
          Start your Easy Online Audit journey here
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center max-w-md mx-auto px-4">
          <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 px-6 md:px-8 py-3 rounded-full font-medium text-sm md:text-base transition-colors duration-200 shadow-lg">
            I need an Audit
          </button>
          <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 px-6 md:px-8 py-3 rounded-full font-medium text-sm md:text-base transition-colors duration-200 shadow-lg">
            I&apos;m an Auditor
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;