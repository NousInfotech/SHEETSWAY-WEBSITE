'use client'
import React from 'react'
import Image from 'next/image'
import { TrendingUp, DollarSign } from 'lucide-react'

const ReferralSection = () => {
  return (
    <div className='py-8 lg:py-12 px-4 sm:px-6 lg:px-8'>
      {/* Header Section */}
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-12'>
          {/* Left side - Hero Image */}
          <div className='flex-1 w-full max-w-lg lg:max-w-none'>
            <div className='relative w-full'>
              <Image
                src='/images/blog/image circle.png'
                alt='Two men shaking hands'
                width={600}
                height={400}
                className='w-full h-auto object-contain'
                priority
              />
            </div>
          </div>

          {/* Arrow - match style from design */}
           <div className='hidden lg:flex justify-center items-center flex-shrink-0 relative -mt-18 left-10
'>
            <Image
              src='/images/blog/Arrow.png'
              alt='Arrow pointing to content'
              width={60}
              height={16}
              className='object-contain'
            />
          </div>

          {/* Right side - Content */}
          <div className='flex-1 w-full max-w-lg lg:max-w-none'>
            <div className='relative'>
              {/* WHAT TO EXPECT label */}
              <div className='mb-3 lg:mb-4'>
                <span className='text-orange-500 text-xs sm:text-sm font-medium tracking-wider uppercase'>
                  WHAT TO EXPECT
                </span>
              </div>

              {/* Speech bubble content */}
              <div className='space-y-4 lg:space-y-6'>
                <div>
                  <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 lg:mb-4 leading-tight'>
                    Helping you earn through referrals.
                  </h2>
                  <p className='text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 lg:mb-8'>
                    Whether you&apos;re an influencer, an auditor with overflow,
                    or dealing with international clients, you can still earn
                    commissions while we handle the audits.
                  </p>
                </div>

                {/* Features list */}
                <div className='space-y-4 lg:space-y-5'>
                  <div className='flex items-start gap-3 lg:gap-4'>
                    <div className='w-10 h-10 lg:w-12 lg:h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <TrendingUp className='w-5 h-5 lg:w-6 lg:h-6 text-orange-600' />
                    </div>
                    <div className='flex-1'>
                      <h4 className='font-semibold text-gray-800 text-base lg:text-lg mb-1 lg:mb-2'>
                        Referral Dashboard
                      </h4>
                      <p className='text-gray-600 text-sm lg:text-base leading-relaxed'>
                        Track every referral in real time with clicks, leads,
                        and successful conversions all in one simple panel.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-3 lg:gap-4'>
                    <div className='w-10 h-10 lg:w-12 lg:h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <DollarSign className='w-5 h-5 lg:w-6 lg:h-6 text-orange-600' />
                    </div>
                    <div className='flex-1'>
                      <h4 className='font-semibold text-gray-800 text-base lg:text-lg mb-1 lg:mb-2'>
                        Monthly Payouts
                      </h4>
                      <p className='text-gray-600 text-sm lg:text-base leading-relaxed'>
                        Enjoy transparent, on-time commission payouts with full
                        statements every month.
                      </p>
                    </div>
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

export default ReferralSection