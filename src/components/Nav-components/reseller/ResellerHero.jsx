'use client'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative bg-gradient-to-bl from-orange-100 via-orange to-white '>
      <div className='max-w-7xl mx-auto px-6 py-12 lg:py-6'>
        <div className='grid lg:grid-cols-2 gap-18 items-center'>
          {/* Left Content */}
          <div className='space-y-4 mb-12'>
            <div className='inline-flex items-center bg-gradient-to-r from-[rgba(255,218,120,1)] via-[rgba(250,154,29,1)] to-[rgba(250,154,29,1)] text-white px-4 py-2 rounded-[30px] text-sm mt-[10px] w-fit h-[44px] font-[600]'>
              Audit Referral Programs
            </div>

            <div>
              <h1 className='text-[30px] lg:text-[35px] font-bold text-gray-900 leading-tight'>
                Connecting <br /> Referrals & Audits.
                <br />
                Building Income.
              </h1>
            </div>
            <p className='text-[16px] text-gray-600 leading-relaxed max-w-lg'>
              Turn your network into revenue with our Reseller Program. Share
              leads, refer clients, and earn commissions while we handle the
              audits.
            </p>
            <div className='flex gap-4 mt-6'>
              <button className='bg-[#F59E0B] text-white px-6 h-[48px] rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center'>
                Contact Sheetsway
              </button>
              <button className='bg-white border border-gray-200 px-6 h-[48px] rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm'>
                Log In
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className='relative'>
            <div className='relative'>
              <img
                src='/images/blog/guy.png'
                alt='Professional with laptop'
                width={350}
                height={300}
                className='w-auto  max-w-md mx-auto h-[400px]'
              />
            </div>

            {/* Floating Elements */}
            <div className='absolute top-6 right-2 lg:right-8 bg-white rounded-lg shadow-lg p-2 lg:p-3 flex items-center space-x-3 animate-bounce hover:animate-pulse hover:shadow-[0_10px_30px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105'>
              <div className='bg-yellow-100 rounded-lg p-2 flex items-center justify-center'>
                <img
                  src='/images/blog/Vector.png'
                  alt='Folder Icon'
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <div className='text-2xl lg:text-3xl font-extrabold text-black'>
                  30+
                </div>
                <div className='text-xs lg:text-sm text-gray-600'>
                  Referred Clients
                </div>
              </div>
            </div>

            <div
              className='absolute top-24 lg:top-32 left-0 bg-white rounded-lg shadow-lg p-3 lg:p-4 flex items-center space-x-2 lg:space-x-3 animate-bounce hover:animate-pulse hover:shadow-[0_15px_35px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105'
              style={{ animationDelay: '1s' }}
            >
              <div className='bg-yellow-100 rounded-lg p-2'>
                <img
                  src='/images/blog/euro.png'
                  alt='Folder Icon'
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <div className='text-xs lg:text-sm text-gray-600'>
                  New Clients
                </div>
                <div className='text-lg lg:text-xl font-bold text-black'>
                  ₹ 64,500
                </div>
              </div>
            </div>

            <div
              className='absolute bottom-6 lg:bottom-8 right-2 lg:right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce hover:animate-pulse hover:shadow-[0_12px_25px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-105'
              style={{ animationDelay: '2s' }}
            >
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
        <div className='relative mt-16 lg:mt-[-20px]'>
          <div className='bg-white py-2 px-6 rounded-2xl shadow-xl  max-w-8xl mx-auto'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='text-center mb-8'>
                <h2 className='text-[24px] lg:text-[20px] font-bold text-gray-900'>
                  Join our Ongrowing Partner List
                </h2>
                <p className='text-[15px] text-gray-600'>
                  Let's Build a Revenue Stream Around Your Network
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-10'>
                {/* Stat 1 - Active Partners */}
                <div className='text-center'>
                  <div className='bg-orange-100 w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:bg-orange-200 hover:scale-110 hover:shadow-[0_8px_25px_rgba(251,146,60,0.8)] group'>
                    <img
                      src='/images/blog/Hands.png'
                      alt='Users Icon'
                      className='w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 icon-yellow'
                    />
                  </div>
                  <div className='text-1xl sm:text-2xl font-bold text-black mb-1'>
                    200+
                  </div>
                  <div className='text-xs sm:text-sm text-black'>
                    Partners Onboarded
                  </div>
                </div>

                {/* Stat 2 - Years Experience */}
                <div className='text-center'>
                  <div className='bg-orange-100 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:bg-orange-200 hover:scale-110 hover:shadow-[0_8px_25px_rgba(251,146,60,0.8)] group'>
                    <img
                      src='/images/blog/World.png'
                      alt='Globe Icon'
                      className='w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12'
                    />
                  </div>
                  <div className='text-1xl sm:text-2xl font-bold text-black mb-1'>
                    15+
                  </div>
                  <div className='text-xs sm:text-sm text-black'>
                    Countries Covered
                  </div>
                </div>

                {/* Stat 3 - User Rating */}
                <div className='text-center'>
                  <div className='bg-orange-100 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:bg-orange-200 hover:scale-110 hover:shadow-[0_8px_25px_rgba(251,146,60,0.8)] group'>
                    <img
                      src='/images/blog/mobile.png'
                      alt='Mobile Icon'
                      className='w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6'
                    />
                  </div>
                  <div className='text-1xl sm:text-2xl font-bold text-black mb-1'>
                    4.9
                  </div>
                  <div className='text-xs sm:text-sm text-gray-600'>
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