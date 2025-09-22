'use client'
import React from 'react'
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
            <p className='text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed'>
              Whether you&apos;re an entrepreneur, small firm, or a business
              advisor, Greenway&apos;s declaring Platform helps you navigate
              your network. Share your expertise, and become the agent for
              businesses who need. Get rewards from partners who joined through
              your network.
            </p>
          </div>

          <div className='max-w-6xl mx-auto mb-20'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {/* Commissions Card - Lower position */}
              <div className='bg-white rounded-2xl p-6 shadow-xl border border-orange-200 transform lg:translate-y-12 transition-all duration-300 hover:bg-gradient-to-br hover:bg-[linear-gradient(to_bottom_right,rgba(255,218,120,1),rgba(250,154,29,1))] hover:text-white group'>
                <div className='w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white transition-all duration-300'>
                  <DollarSign className='w-6 h-6 text-orange-600 group-hover:text-orange-600 transition-all duration-300' />
                </div>
                <h3 className='font-bold text-gray-800 text-lg mb-2 group-hover:text-white transition-all duration-300'>
                  Commissions
                </h3>
                <p className='text-gray-600 text-sm group-hover:text-white group-hover:opacity-90 transition-all duration-300'>
                  Get your commission on every referral that gets signed up with
                  us to expand the network.
                </p>
              </div>

              {/* Audit & Accounting Firms Card - Higher position */}
              <div className='bg-white rounded-2xl p-6 shadow-xl border border-orange-200 transition-all duration-300 hover:bg-gradient-to-br hover:bg-[linear-gradient(to_bottom_right,rgba(255,218,120,1),rgba(250,154,29,1))] hover:text-white group'>
                <div className='w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white transition-all duration-300'>
                  <FileText className='w-6 h-6 text-orange-600 group-hover:text-orange-600 transition-all duration-300' />
                </div>
                <h3 className='font-bold text-gray-800 text-lg mb-2 group-hover:text-white transition-all duration-300'>
                  Audit & Accounting Firms
                </h3>
                <p className='text-gray-600 text-sm group-hover:text-white group-hover:opacity-90 transition-all duration-300'>
                  Refer clients to our business entity formation and get rewards
                  and great monetary incentives.
                </p>
              </div>

              {/* Business Advisory Services Card - Lower position */}
              <div className='bg-white rounded-2xl p-6 shadow-xl border border-orange-200 transform lg:translate-y-12 transition-all duration-300 hover:bg-[linear-gradient(to_bottom_right,rgba(255,218,120,1),rgba(250,154,29,1))] hover:text-white group'>
                <div className='w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white transition-all duration-300'>
                  <Users className='w-6 h-6 text-orange-600 group-hover:text-orange-600 transition-all duration-300' />
                </div>
                <h3 className='font-bold text-gray-800 text-lg mb-2 group-hover:text-white transition-all duration-300'>
                  Advisory & Corporate Services
                </h3>
                <p className='text-gray-600 text-sm group-hover:text-white group-hover:opacity-90 transition-all duration-300'>
                  Join hands with us as business setup specialist and get great
                  income and investment earnings.
                </p>
              </div>

              {/* Freelancers Card - Higher position */}
              <div className='bg-white rounded-2xl p-6 shadow-xl border border-orange-200 transition-all duration-300 hover:bg-[linear-gradient(to_bottom_right,rgba(255,218,120,1),rgba(250,154,29,1))] hover:text-white group'>
  <div className='w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white transition-all duration-300'>
    <TrendingUp className='w-6 h-6 text-orange-600 group-hover:text-orange-600 transition-all duration-300' />
  </div>
  <h3 className='font-bold text-gray-800 text-lg mb-2 group-hover:text-white transition-all duration-300'>
    Freelancers & App Integrations
  </h3>
  <p className='text-gray-600 text-sm group-hover:text-white group-hover:opacity-90 transition-all duration-300'>
    Proper financial health of your app or business platform with
    flexible and secure payments.
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
