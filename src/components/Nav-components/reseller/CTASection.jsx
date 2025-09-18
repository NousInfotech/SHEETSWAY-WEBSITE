'use client'
import React from 'react'

const CTASection = () => {
  return (
    <div className="bg-gray-50 ">
      {/* Hero Section with Custom Gradient */}
      <div
        className="relative overflow-hidden text-white h-96 sm:h-76 flex items-center"
        style={{
          background: "linear-gradient(to right, rgba(30, 132, 178, 1), rgba(0, 70, 102, 1))"
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="space-y-8">
            {/* First Section */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3">
                  Providing you with a one stop shop for financial audits
                </h1>
                <p className="text-xs sm:text-sm md:text-base opacity-90 leading-relaxed">
                  Have your business audited the way you like it, with many
                  options and from home.
                </p>
              </div>
              <div className="flex-shrink-0">
                <button className="bg-white border border-white text-amber-400 px-6 py-2 rounded-md font-medium hover:bg-white hover:text-blue-800 transition-all text-xs sm:text-sm w-auto min-w-[100px] sm:w-35 h-10 whitespace-nowrap">
                  Sign up
                </button>
              </div>
            </div>

            {/* Second Section */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">
                  Know someone else that needs a financial audit?
                </h2>
                <p className="text-xs sm:text-sm md:text-base opacity-90 leading-relaxed">
                  Refer him with your personal link and get payed for his
                  first complete audit.
                </p>
              </div>
              <div className="flex-shrink-0">
                <button className="bg-white border border-white text-blue-800 px-6 py-2 rounded-md font-medium hover:bg-white hover:text-blue-800 transition-all text-xs sm:text-sm w-auto min-w-[100px] sm:w-35 h-10 whitespace-nowrap">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTASection