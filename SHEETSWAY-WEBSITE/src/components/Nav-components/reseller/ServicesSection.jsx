'use client'
import React from 'react'
import Image from 'next/image'
import { Users, DollarSign, TrendingUp, FileText } from 'lucide-react'

const ServicesSection = () => {
  return (
    <div
      className='mb-0 bg-blue-900'
      style={{
        background:
          'linear-gradient(to right, rgba(30, 132, 178, 1), rgba(0, 70, 102, 1))'
      }}
    >
      {' '}
      {/* Blue background wrapper */}
      <div className='bg-white rounded-b-[150px]'>
        <div className='max-w-6xl mx-auto px-6 py-16'>
          {/* Main Content Section */}
          <div className='text-center mb-16'>
            <p className='text-orange-500 text-sm font-medium mb-3 uppercase tracking-wide'>
              WHAT WE DO FOR YOU
            </p>
            <h1 className='text-5xl lg:text-6xl font-bold text-gray-800 mb-2'>
              Earn More. Help Clients.
            </h1>
            <h1 className='text-5xl lg:text-6xl font-bold text-gray-800 mb-6'>
              No Extra Work.
            </h1>
            <p className='text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Whether you&apos;re an influencer, an audit firm, or a business
              advisor, Sheetsway&apos;s Reseller <br />
              Program lets you monetize your network. Share your referral link,
              we handle the audit, <br />
              you earn a commission when it completes.
            </p>
          </div>

          <div className='max-w-6xl mx-auto mb-20'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {/* Commissions Card - Lower position */}
              <div className='bg-white rounded-2xl p-6 shadow-xl border border-orange-200 transition-all duration-300 hover:bg-gradient-to-br hover:bg-[linear-gradient(to_bottom_right,rgba(255,218,120,1),rgba(250,154,29,1))] hover:text-white group'>
                <div className='w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white transition-all duration-300'>
                  <Image
                    src='/images/blog/2@4x.png'
                    alt='Arrow pointing to content'
                    width={30}
                    height={16}
                    className='object-contain brightness-0 invert group-hover:[filter:brightness(0)_saturate(100%)_invert(55%)_sepia(89%)_saturate(2664%)_hue-rotate(360deg)_brightness(98%)_contrast(101%)] transition-all duration-300'
                  />
                </div>
                <h3 className='font-bold text-gray-800 text-lg mb-2 group-hover:text-white transition-all duration-300'>
                  Influencers <br />& Communities
                </h3>
                <p className='text-gray-600 text-sm group-hover:text-white group-hover:opacity-90 transition-all duration-300'>
                  Turn your audience into revenue: share a trusted audit route,
                  no client handling required.
                </p>
              </div>

              {/* Audit & Accounting Firms Card - Higher position */}
              <div className='bg-white rounded-2xl p-6 shadow-xl border border-orange-200 transform lg:translate-y-12 transition-all duration-300 hover:bg-gradient-to-br hover:bg-[linear-gradient(to_bottom_right,rgba(255,218,120,1),rgba(250,154,29,1))] hover:text-white group'>
                <div className='w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white transition-all duration-300'>
                  <Image
                    src='/images/blog/4@4x.png'
                    alt='Arrow pointing to content'
                    width={30}
                    height={16}
                    className='object-contain group-hover:[filter:brightness(0)_saturate(100%)_invert(55%)_sepia(89%)_saturate(2664%)_hue-rotate(360deg)_brightness(98%)_contrast(101%)] transition-all duration-300'
                  />
                </div>

                <h3 className='font-bold text-gray-800 text-lg mb-2 group-hover:text-white transition-all duration-300'>
                  Audit & Accounting Firms <br />
                  <span className='font-bold text-sm'>
                    (Overflow / Cross-Border)
                  </span>
                </h3>
                <p className='text-gray-600 text-sm group-hover:text-white group-hover:opacity-90 transition-all duration-300'>
                  Refer overflow or cross-border audits, keep client trust, and
                  earn commissions on finalized work.
                </p>
              </div>

              {/* Business Advisory Services Card - Lower position */}
              <div className='bg-white rounded-2xl p-6 shadow-xl border border-orange-200 transition-all duration-300 hover:bg-gradient-to-br hover:bg-[linear-gradient(to_bottom_right,rgba(255,218,120,1),rgba(250,154,29,1))] hover:text-white group'>
                <div className='w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white transition-all duration-300'>
                  <Image
                    src='/images/blog/@4x.png'
                    alt='Arrow pointing to content'
                    width={30}
                    height={16}
                    className='object-contain group-hover:[filter:brightness(0)_saturate(100%)_invert(55%)_sepia(89%)_saturate(2664%)_hue-rotate(360deg)_brightness(98%)_contrast(101%)] transition-all duration-300'
                  />
                </div>
                <h3 className='font-bold text-gray-800 text-lg mb-2 group-hover:text-white transition-all duration-300'>
                  Advisory & Corporate Services
                </h3>
                <p className='text-gray-600 text-sm group-hover:text-white group-hover:opacity-90 transition-all duration-300'>
                  Offer clients an easy, compliant audit path while
                  strengthening your advisory role across industries.
                </p>
              </div>

              {/* Freelancers Card - Higher position */}
              <div className='bg-white rounded-2xl p-6 shadow-xl border border-orange-200 transform lg:translate-y-12 transition-all duration-300 hover:bg-gradient-to-br hover:bg-[linear-gradient(to_bottom_right,rgba(255,218,120,1),rgba(250,154,29,1))] hover:text-white group'>
                <div className='w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white transition-all duration-300'>
                  <Image
                    src='/images/blog/3@4x.png'
                    alt='Arrow pointing to content'
                    width={30}
                    height={16}
                    className='object-contain group-hover:[filter:brightness(0)_saturate(100%)_invert(55%)_sepia(89%)_saturate(2664%)_hue-rotate(360deg)_brightness(98%)_contrast(101%)] transition-all duration-300'
                  />
                </div>
                <h3 className='font-bold text-gray-800 text-lg mb-2 group-hover:text-white transition-all duration-300'>
                  Freelancers & App Integrations
                </h3>
                <p className='text-gray-600 text-sm group-hover:text-white group-hover:opacity-90 transition-all duration-300'>
                  Embed “Request Audit” in your app to deliver instant audit
                  access and earn commissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
