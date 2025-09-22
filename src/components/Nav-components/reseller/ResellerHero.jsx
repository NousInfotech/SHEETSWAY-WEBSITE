'use client'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative bg-gradient-to-bl from-orange-100 via-orange-50 to-white overflow-x-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-14 lg:py-10'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-18 items-center'>
          {/* Left Content */}
          <div className='space-y-4 mb-8 lg:mb-12 text-center lg:text-left'>
            <div className='inline-flex items-center bg-gradient-to-r from-[rgba(255,218,120,1)] via-[rgba(250,154,29,1)] to-[rgba(250,154,29,1)] text-white px-3 sm:px-4 py-2 rounded-[30px] text-xs sm:text-sm mt-[10px] w-fit h-[36px] sm:h-[44px] font-[600] mx-auto lg:mx-0'>
              Audit Referral Programs
            </div>

            <div>
              <h1 className='text-[24px] sm:text-[30px] lg:text-[35px] font-bold text-gray-900 leading-tight'>
                Connecting <br /> Referrals & Audits.
                <br />
                Building Income.
              </h1>
            </div>
            <p className='text-[14px] sm:text-[16px] text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0'>
              Turn your network into revenue with our Reseller Program. Share
              leads, refer clients, and earn commissions while we handle the
              audits.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 items-center lg:items-start'>
              <button className='bg-[#F59E0B] text-white px-6 h-[44px] sm:h-[48px] rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center w-full sm:w-auto gap-2 lg:gap-3'>
                Contact Sheetsway
                <div className='bg-white rounded p-1 sm:p-1.5 lg:p-2 flex items-center justify-center'>
                  <svg
                    className='w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='#F59E0B'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
              </button>
              <button className='bg-white border border-gray-200 px-6 h-[44px] sm:h-[48px] rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm w-full sm:w-auto'>
                Log In
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className='relative order-first lg:order-last'>
            <div className='relative'>
              <img
                src='/images/blog/guy.png'
                alt='Professional with laptop'
                width={350}
                height={300}
                className='w-full max-w-[280px] sm:max-w-sm lg:max-w-md mx-auto h-[300px] sm:h-[350px] lg:h-[400px] object-contain'
              />
            </div>

            {/* Floating Elements */}
            <div className='absolute top-4 sm:top-6 right-2 sm:right-2 lg:right-8 bg-white rounded-lg shadow-lg p-2 lg:p-3 flex items-center space-x-2 lg:space-x-3'>
              <div className='bg-yellow-100 rounded-lg p-1.5 lg:p-2 flex items-center justify-center'>
                <img
                  src='/images/blog/Vector.png'
                  alt='Folder Icon'
                  width={28}
                  height={28}
                  className='w-7 h-7 lg:w-7 lg:h-7'
                />
              </div>
              <div>
                <div className='text-xl sm:text-2xl lg:text-3xl font-extrabold text-black'>
                  30+
                </div>
                <div className='text-[10px] sm:text-xs lg:text-sm text-gray-600'>
                  Referred Clients
                </div>
              </div>
            </div>

            <div className='absolute top-16 sm:top-24 lg:top-32 left-0 bg-white rounded-lg shadow-lg p-2 sm:p-3 lg:p-4 flex items-center space-x-2 lg:space-x-3'>
              <div className='bg-yellow-100 rounded-lg p-1.5 lg:p-2'>
                <img
                  src='/images/blog/euro.png'
                  alt='Folder Icon'
                  width={20}
                  height={20}
                  className='w-5 h-5 lg:w-5 lg:h-5'
                />
              </div>
              <div>
                <div className='text-[10px] sm:text-xs lg:text-sm text-gray-600'>
                  New Clients
                </div>
                <div className='text-sm sm:text-lg lg:text-xl font-bold text-black'>
                  $ 64,500
                </div>
              </div>
            </div>

            <div className='absolute bottom-6 lg:bottom-8 right-2 lg:right-4 bg-white rounded-lg shadow-lg p-3'>
              <img
                src='/images/blog/diagram.png'
                alt='Growth Chart'
                width={90}
                height={55}
              />
            </div>
          </div>
        </div>

        {/* Stats Section - Integrated into Hero */}
        <div className='relative mt-8 sm:mt-12 lg:mt-[-20px]'>
          <div className='bg-white py-4 sm:py-6 lg:py-2 px-4 sm:px-6 rounded-2xl shadow-xl max-w-8xl mx-auto'>
            <div className='max-w-6xl mx-auto px-2 sm:px-4 lg:px-8'>
              <div className='text-center mb-6 lg:mb-8'>
                <h2 className='text-[18px] sm:text-[24px] lg:text-[20px] font-bold text-gray-900'>
                  Join our Ongrowing Partner List
                </h2>
                <p className='text-[13px] sm:text-[15px] text-gray-600'>
                  Let's Build a Revenue Stream Around Your Network
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-10'>
                {/* Stat 1 - Active Partners */}
                <div className='text-center'>
                  <div className='bg-orange-100 w-12 h-12 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:bg-orange-200'>
                    <img
                      src='/images/blog/Hands.png'
                      alt='Users Icon'
                      className='w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform duration-300 icon-yellow'
                    />
                  </div>
                  <div className='text-xl sm:text-1xl lg:text-2xl font-bold text-black mb-1'>
                    200+
                  </div>
                  <div className='text-xs sm:text-xs lg:text-sm text-black'>
                    Partners Onboarded
                  </div>
                </div>

                {/* Stat 2 - Years Experience */}
                <div className='text-center'>
                  <div className='bg-orange-100 w-12 h-12 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:bg-orange-200'>
                    <img
                      src='/images/blog/World.png'
                      alt='Globe Icon'
                      className='w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform duration-300'
                    />
                  </div>
                  <div className='text-xl sm:text-1xl lg:text-2xl font-bold text-black mb-1'>
                    15+
                  </div>
                  <div className='text-xs sm:text-xs lg:text-sm text-black'>
                    Countries Covered
                  </div>
                </div>

                {/* Stat 3 - User Rating */}
                <div className='text-center'>
                  <div className='bg-orange-100 w-12 h-12 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:bg-orange-200'>
                    <img
                      src='/images/blog/mobile.png'
                      alt='Mobile Icon'
                      className='w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform duration-300'
                    />
                  </div>
                  <div className='text-xl sm:text-1xl lg:text-2xl font-bold text-black mb-1'>
                    4.9
                  </div>
                  <div className='text-xs sm:text-xs lg:text-sm text-gray-600'>
                    Avg. Payout Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
