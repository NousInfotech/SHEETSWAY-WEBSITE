'use client'
import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { faqData } from '../data/faq'

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const [showMore, setShowMore] = useState(false)

  const toggleFaq = (index: number) => {
  setOpenFaq(openFaq === index ? null : index)
}

  return (
    <div className='max-w-4xl mx-auto px-4 py-16'>
      <div className='p-8'>
        <h2 className='text-2xl font-bold text-gray-900 mb-8'>
          General Information
        </h2>

        <div className='space-y-4'>
          {faqData
            .slice(0, showMore ? faqData.length : 3)
            .map((faq, index) => (
              <div key={index} className='border-b border-gray-200 last:border-b-0'>
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
                    <p className='text-gray-600 leading-relaxed'>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>

        <button
          onClick={() => setShowMore(!showMore)}
          className='flex items-center mt-6 text-blue-600 hover:text-blue-800 font-medium'
        >
          {showMore ? 'View Less' : 'View More'}
          <ChevronRight
            className={`w-4 h-4 ml-1 transition-transform ${
              showMore ? 'rotate-90' : ''
            }`}
          />
        </button>
      </div>
    </div>
  )
}

export default FAQSection