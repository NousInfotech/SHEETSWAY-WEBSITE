'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import assets from '@/data/assets'

const HeroSection = () => {
  const [selectedBusiness, setSelectedBusiness] = useState(
    'Startup or Solo Business (<10 staff)'
  )
  const [selectedCountry, setSelectedCountry] = useState('MT')

  return (
    <section
      className='relative overflow-hidden h-screen flex items-center bg-gradient-to-t from-orange-400/80 via-orange-400/95 to-orange-400'
      style={{
        boxShadow: 'inset 0 -20px 40px rgba(0,0,0,0.1)',
        borderBottomLeftRadius: 'clamp(100px, 20vw, 280px)',
        borderBottomRightRadius: 'clamp(100px, 20vw, 280px)'
      }}
    >
      <div className="absolute inset-0 z-0">
          <Image
            src={assets.At4x1MarketplacePng}
            alt="Background Pattern"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>

      <div className='relative z-10 w-full max-w-none mx-auto py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16'>
        <div className='max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 text-center'>
          {/* Main Heading */}
          <div className='mt-4 mb-6 sm:mt-6 sm:mb-8 md:mt-8 md:mb-8 lg:mt-10 lg:mb-10 xl:mt-12 xl:mb-12 2xl:mt-14 2xl:mb-14'>
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-1 sm:mb-2 md:mb-2 lg:mb-3 xl:mb-4 2xl:mb-5 leading-tight'>
              Find Your Auditor Online
            </h1>
            <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#004666] mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8 leading-tight'>
              Fast, Private, and Easy
            </h2>
            <p className='text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-800 mb-6 sm:mb-7 md:mb-8 lg:mb-9 xl:mb-10 2xl:mb-12 mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl leading-relaxed'>
              Audit Firms Bid. Compare Quotes in Minutes. You Choose. It&apos;s
              That Simple.
            </p>
          </div>

          {/* Selection Area */}
          <div className='flex flex-col lg:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-6 mb-6 sm:mb-8 md:mb-9 lg:mb-10 xl:mb-12 2xl:mb-14 max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4'>
            {/* Business Type Dropdown */}
            <div className='relative w-full lg:flex-1 max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
              <select
                value={selectedBusiness}
                onChange={e => setSelectedBusiness(e.target.value)}
                className='w-full bg-white border border-gray-200 rounded-lg px-3 sm:px-4 md:px-4 lg:px-5 xl:px-6 py-3 sm:py-3 md:py-4 lg:py-4 xl:py-4 text-gray-700 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-10 sm:pr-11 md:pr-12 lg:pr-13'
              >
                <option>Startup or Solo Business (&lt;10 staff)</option>
                <option>Small Company (&lt;50 employees)</option>
                <option>Mid-Sized Company (&lt;250 employees)</option>
                <option>Large or Corporate Business (250+ employees)</option>
              </select>

              <div className='absolute right-4 sm:right-4 md:right-4 lg:right-5 top-1/2 transform -translate-y-1/2 pointer-events-none'>
                <svg
                  className='w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </div>
            </div>

            {/* Country Selector */}
            <div className='relative w-full sm:w-24 md:w-28 lg:w-32 xl:w-36'>
              <select
                value={selectedCountry}
                onChange={e => setSelectedCountry(e.target.value)}
                className='w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-3 md:px-4 lg:px-4 xl:px-5 py-3 sm:py-3 md:py-3 lg:py-4 xl:py-4 text-gray-700 text-sm sm:text-sm md:text-base lg:text-base xl:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8 sm:pr-9 md:pr-10 lg:pr-11 xl:pr-12 pl-10 sm:pl-11 md:pl-12 lg:pl-13 xl:pl-14'
              >
                <option value='MT'>MT</option>
                <option value='US'>US</option>
                <option value='UK'>UK</option>
                <option value='EU'>EU</option>
              </select>
              {/* Flag placeholder */}
              <div className='absolute left-2 sm:left-2 md:left-3 lg:left-3 xl:left-4 top-1/2 transform -translate-y-1/2 z-10'>
                <div className='w-6 h-4 sm:w-6 sm:h-4 md:w-6 md:h-4 lg:w-7 lg:h-5 xl:w-7 xl:h-5 bg-red-500 rounded-sm flex items-center justify-center'>
                  <span className='text-white text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-bold'>
                    {selectedCountry}
                  </span>
                </div>
              </div>
              <div className='absolute right-2 sm:right-2 md:right-3 lg:right-3 xl:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none z-10'>
                <svg
                  className='w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-5 xl:h-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </div>
            </div>

            {/* List Audit Button */}
            <button className='w-full sm:w-auto bg-[#004666] hover:bg-[#004666] text-white px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10 py-3 sm:py-3 md:py-4 lg:py-4 xl:py-4 rounded-lg font-medium text-sm sm:text-base md:text-base lg:text-lg xl:text-lg transition-colors duration-200 whitespace-nowrap'>
              List your Audit Now
            </button>
          </div>

          {/* Journey Text */}
          <p className='text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-9 lg:mb-10 xl:mb-12 2xl:mb-14 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 leading-relaxed'>
            Start your Easy Online Audit journey here
          </p>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 justify-center items-center max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-4'>
            <button className='w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-3 sm:py-3 md:py-4 lg:py-4 xl:py-4 rounded-full font-medium text-sm sm:text-base md:text-base lg:text-lg xl:text-xl transition-colors duration-200 shadow-lg'>
              I need an Audit
            </button>
            <button className='w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-3 sm:py-3 md:py-4 lg:py-4 xl:py-4 rounded-full font-medium text-sm sm:text-base md:text-base lg:text-lg xl:text-xl transition-colors duration-200 shadow-lg'>
              I&apos;m an Auditor
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
