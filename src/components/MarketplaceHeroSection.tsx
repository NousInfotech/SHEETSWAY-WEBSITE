"use client";

import React from "react";
import Image from "next/image";
import assets from "@/data/assets";

const MarketplaceHeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[100vh] flex items-center pt-16 lg:pt-0">
      {/* Background Image - Desktop: frame.png, Mobile: market-place-hero.png */}
      <div className="absolute inset-0">
        {/* Desktop Background */}
        <Image
          src={assets.FrameMarketplacePng}
          alt="Hero Background Desktop"
          fill
          className="object-cover object-right hidden lg:block"
          style={{ objectPosition: "75% center" }}
          priority
        />
        {/* Mobile Background */}
        <Image
          src={assets.MarketPlaceHeroPng}
          alt="Hero Background Mobile"
          fill
          className="object-cover object-center lg:hidden"
          style={{ objectPosition: "75% -10%" }}
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div
              className="text-left relative -top-[75px] sm:-top-[40px] md:-top-[60px] lg:-top-[22px]"
            >
              {/* Welcome Text */}
              <p className="text-white/90 text-base sm:text-lg mb-3 sm:mb-4 mt-10">
                Welcome to the Audit Marketplace
              </p>

              {/* Main Heading */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Connecting Auditors <br /> & Clients. Building Careers
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8 max-w-lg leading-relaxed">
                Take your business to the next level with our new audit
                marketplace and audit tools. Sheetsway opens a new horizon of
                client acquisition.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  className="text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base hover:opacity-90"
                  style={{ backgroundColor: "#FFA955" }}
                >
                  Contact Sheetsway
                  <div className="bg-white bg-opacity-20 rounded p-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      style={{ stroke: "#FFA955" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </button>
                <button className="bg-white text-gray-800 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg text-sm sm:text-base">
                  Log In
                </button>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="relative h-64 sm:h-72 lg:h-[400px] flex justify-start -mr-4 sm:-mr-6 lg:-mr-32 mt-8 sm:mt-12 lg:mt-0">
              <Image
                src={assets.HeroSideMarketplacePng}
                alt="Professional Auditor"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceHeroSection;
