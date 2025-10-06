'use client';

import React from 'react';
import Image from 'next/image';
import assets from '@/data/assets';

const AboutSheetsway = () => {
  const features = [
    "Find Audit Listings",
    "Set Fees & Propose",
    "Solo or Team Access",
    "Excel & Word Tools",
    "Secure Messaging",
    "Bank & Accounting Sync"
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Map Image */}
      <div className="absolute inset-0">
        <Image
          src={assets.MapPng}
          alt="World Map Background"
          fill
          className="object-cover opacity-80"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span
                className="px-6 py-2 rounded-full text-white text-sm font-medium"
                style={{ backgroundColor: '#FFA955' }}
              >
                ABOUT SHEETSWAY
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Join the Marketplace<br />
              Built for Auditors
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Sheetsway connects licensed audit professionals with real, ready-to-go
              clients across Europe and beyond. From small startups to international
              companies, you&apos;ll find jobs that match your expertise.
            </p>

            {/* Features List */}
            <div className="relative bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              {/* Orange vertical bar on the left */}
              <div
                className="absolute left-0 top-0 bottom-0 w-2.5 rounded-l-lg"
                style={{ backgroundColor: '#FFA955' }}
              ></div>

              {/* Content with left padding to account for the orange bar */}
              <div className="pl-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 relative">
                        <Image
                          src={assets.NineAt4x2MarketplacePng}
                          alt="Arrow icon"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - All Content in One Container */}
          <div className="flex flex-col items-center space-y-8">

            {/* Top Row - Cards and Frame 89 Image */}
            <div className="flex items-center gap-8">

              {/* Left side - Cards and Video */}
              <div className="relative flex flex-col items-center">

                {/* Country Operation Card */}
                <div className="relative mb-16 sm:mb-16 md:mb-16 lg:mb-16">
                  <div
                    className="rounded-3xl p-6 w-40 h-44 shadow-lg relative overflow-hidden sm:w-48 sm:h-52 md:w-48 md:h-52 lg:w-48 lg:h-52"
                    style={{ backgroundColor: '#FFA955' }}
                  >
                    {/* Country Flags Image */}
                    <div className="mb-8">
                      <Image
                        src={assets.FourAt4x1DupeMarketplacePng}
                        alt="Country Flags"
                        width={90}
                        height={30}
                        className="object-contain"
                      />
                    </div>

                    {/* White vertical line */}
                    <div className="absolute left-6 top-16 bottom-16 w-0.5 bg-white/30"></div>

                    {/* Statistics */}
                    <div className="absolute bottom-4 right-4 text-right text-white">
                      <div className="text-2xl font-bold mb-2">40+</div>
                      <div className="text-sm font-medium leading-tight">Country<br />Operation</div>
                    </div>
                  </div>
                </div>

                {/* Video Play Button - Positioned on top of cards */}
                <div className="absolute top-35 -left-5 z-20 sm:top-45 sm:-left-8 md:top-45 md:-left-8 lg:top-45 lg:-left-8">
                  <Image
                    src={assets.TwoAt4x1DupeMarketplacePng}
                    alt="View our video to learn more"
                    width={75}
                    height={75}
                    className="object-contain"
                  />
                </div>

                {/* Complete Audits Card */}
                <div className="relative -mt-10 w-40 h-16 sm:-mt-10 md:-mt-10 lg:-mt-8 lg:ml-8">
                  <div
                    className="rounded-3xl p-4 w-40 h-16 shadow-lg text-white absolute bottom-0 right-0 flex flex-col items-end justify-end sm:w-48 sm:h-20 md:w-48 md:h-20 lg:w-48 lg:h-20"
                    style={{ backgroundColor: '#FFA955' }}
                  >
                    <div className="text-xl font-bold mb-1 text-right">Over 15K</div>
                    <div className="text-xs font-medium tracking-wider text-right">COMPLETE AUDITS</div>
                  </div>
                </div>

              </div>

              {/* Right side - Frame 89 Image */}
              <div className="relative">
                <Image
                  src={assets.Frame89MarketplacePng}
                  alt="Business Professional"
                  width={200}
                  height={220}
                  className="object-contain w-80 h-96 sm:w-72 sm:h-80 md:w-64 md:h-72 lg:w-56 lg:h-78"
                />
              </div>

              {/* All Statistic Cards Group - Separate div */}
              <div className="absolute top-228   right-1 z-10 flex flex-col space-y-3 sm:top-53 md:top-153 md:right-4 lg:top-53 lg:right-6">
                {/* Satisfaction Rate Card 1 */}
                <div
                  className="rounded-lg px-3 py-2 shadow-lg"
                  style={{ backgroundColor: '#013341' }}
                >
                  <div className="text-white text-xs font-medium">Satisfaction Rate</div>
                  <div className="text-lg font-bold" style={{ color: '#FFA955' }}>98%</div>
                </div>

                {/* Successful Audits Card */}
                <div
                  className="rounded-lg px-3 py-2 shadow-lg"
                  style={{ backgroundColor: '#013341' }}
                >
                  <div className="text-white text-xs font-medium">Successful Audits</div>
                  <div className="text-lg font-bold" style={{ color: '#FFA955' }}>15k+</div>
                </div>

                {/* Satisfaction Rate Card 2 */}
                <div
                  className="rounded-lg px-3 py-2 shadow-lg"
                  style={{ backgroundColor: '#013341' }}
                >
                  <div className="text-white text-xs font-medium">Satisfaction Rate</div>
                  <div className="text-lg font-bold" style={{ color: '#FFA955' }}>8,4k</div>
                </div>
              </div>

            </div>

            {/* Bottom Row - Frame 139 Image */}
            <div className="flex justify-center -mt-18 sm:mt-0 md:mt-0 lg:mt-0">
              <Image
                src={assets.Frame139MarketplacePng}
                alt="Team Collaboration"
                width={400}
                height={150}
                className="object-contain"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSheetsway;