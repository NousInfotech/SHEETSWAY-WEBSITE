'use client'
import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { faqData } from '../../../data/faq'

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null)
  const [showMore, setShowMore] = useState(false)

  const toggleFaq = index => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className='max-w-4xl mx-auto px-4 py-16'>
      <div className='p-8'>
        <h2 className='text-2xl font-bold text-gray-900 mb-8'>
          General Information
        </h2>

        <div className='space-y-4'>
          {faqData.slice(0, showMore ? faqData.length : 3).map((faq, index) => (
            <div
              key={index}
              className='border-b border-gray-200 last:border-b-0'
            >
              <button
                onClick={() => toggleFaq(index)}
                className='w-full flex justify-between items-center py-4 text-left hover:bg-gray-50 transition-colors'
              >
                <span className='font-medium text-gray-900'>
                  {index + 1}. {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className='pb-4 pl-6 pr-4'>
                  <p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='mt-8'>
          <button className='bg-white hover:bg-gray-50 text-lg text-black-900 font-bold px-6 py-3 rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition-all duration-200 flex items-center'>
            <h3 className="text-lg font-semibold  text-gray-900">View More</h3>
            <svg
              className='w-4 h-4 ml-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FAQSection
