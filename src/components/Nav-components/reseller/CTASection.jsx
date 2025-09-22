'use client'
import React from 'react'

const CTASection = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section with Custom Gradient */}
      <div
        className="relative overflow-hidden text-white py-12 lg:py-16"
        style={{
          background: "linear-gradient(to right, rgba(30, 132, 178, 1), rgba(0, 70, 102, 1))"
        }}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="space-y-8 lg:space-y-10">
            {/* First Section */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-xl lg:text-2xl font-bold leading-tight mb-3">
                  Earn with Every Referral
                </h1>
                <p className="text-base lg:text-lg opacity-90 leading-relaxed">
                  Share your unique link, refer businesses needing audits, and earn commission once their first audit is completed.
                </p>
              </div>
              <div className="flex-shrink-0">
                <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-sm">
                  Join Now
                </button>
              </div>
            </div>

            {/* Second Section */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-xl lg:text-2xl font-bold leading-tight mb-3">
                  Already Know Firms or Businesses?
                </h2>
                <div className="text-base lg:text-lg opacity-90 leading-relaxed">
                  <p>Turn your network into income by connecting them to Sheetway.</p>
                  <p className="mt-1">No audit work required, just referrals.</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-sm">
                  How It Works
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