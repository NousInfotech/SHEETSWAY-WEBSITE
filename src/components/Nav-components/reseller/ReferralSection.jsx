'use client'
import React from 'react'
import Image from 'next/image'
import { TrendingUp, DollarSign } from 'lucide-react'

const ReferralSection = () => {
  return (
    <div className='p-6 top-20'>
      {/* Header Section */}
      <div className='max-w-6xl mx-auto h-full flex items-center'>
        <div className='flex flex-col lg:flex-row items-center gap-12 mb-16 w-full'>
          {/* Left side - Hero Image */}
          <div className='flex-1 w-full'>
            <div className='relative w-full max-w-7xl mx-auto'>
              <Image
                src='/images/blog/image circle.png'
                alt='Two men shaking hands'
                width={3840} // 4K width
                height={2160} // 4K height
                className='w-full h-auto object-contain'
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className='flex-1 space-y-6'>
            <div className='relative'>
              {/* Speech bubble */}
              <div className='p-8 relative max-w-lg'>
                <h2 className='text-3xl font-bold text-gray-800 mb-4'>
                  Helping you earn through referrals.
                </h2>
                <p className='text-gray-600 text-base mb-6 leading-relaxed'>
                  Whether you&apos;re an entrepreneur or individual or dealing
                  with promotional offers, you can still earn commissions and
                  cash from the profits.
                </p>

                {/* Features list */}
                <div className='space-y-4'>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1'>
                      <TrendingUp className='w-5 h-5 text-orange-600' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-800 text-base mb-1'>
                        Referral Dashboard
                      </h4>
                      <p className='text-sm text-gray-600 leading-relaxed'>
                        Track your referrals performance with digital tools, and
                        get complete control over all the details.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1'>
                      <DollarSign className='w-5 h-5 text-orange-600' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-800 text-base mb-1'>
                        Monthly Payouts
                      </h4>
                      <p className='text-sm text-gray-600 leading-relaxed'>
                        Get paid monthly after your commission payment with
                        fully transparent data every time.
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
