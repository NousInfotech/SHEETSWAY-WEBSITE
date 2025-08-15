"use client";

import React, { useState } from "react";
import Image from "next/image";
import assets from "@/data/assets";

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 1,
      smallHeader: "Get Instant Leads",
      title: "Live Audit Requests",
      description:
        "Access a stream of audit requests from real clients. Review scope, budget & due dates.",
      image: assets.Rectangle3MarketplacePng,
      icon: assets.TwoAt4x1MarketplacePng,
    },
    {
      id: 2,
      smallHeader: "Brand It Your Way",
      title: "White-Labeled Portal",
      description:
        "Run audits under your own domain, colors, and logo. It's your brand, not ours.",
      image: assets.Rectangle4MarketplacePng,
      icon: assets.EightAt4x1MarketplacePng,
    },
    {
      id: 3,
      smallHeader: "Work How You Want",
      title: "Solo or Team Based Work",
      description:
        "Freelance, lead a team, or manage a firm, all with proper user permissions.",
      image: assets.Rectangle5MarketplacePng,
      icon: assets.FourAt4x1MarketplacePng,
    },
    {
      id: 4,
      smallHeader: "Secure & Compliant",
      title: "Advanced Security Features",
      description:
        "Bank-level security with encryption, audit trails, and compliance with industry standards.",
      image: assets.Rectangle3MarketplacePng,
      icon: assets.TwoAt4x1MarketplacePng,
    },
    {
      id: 5,
      smallHeader: "Seamless Integration",
      title: "Excel & Word Integration",
      description:
        "Direct integration with Excel and Word for seamless document management and reporting.",
      image: assets.Rectangle4MarketplacePng,
      icon: assets.EightAt4x1MarketplacePng,
    },
    {
      id: 6,
      smallHeader: "Real-time Collaboration",
      title: "Team Management Tools",
      description:
        "Collaborate with team members in real-time with role-based permissions and workflows.",
      image: assets.Rectangle5MarketplacePng,
      icon: assets.FourAt4x1MarketplacePng,
    },
    {
      id: 7,
      smallHeader: "Client Portal",
      title: "Professional Client Interface",
      description:
        "Provide clients with a professional portal to upload documents and track progress.",
      image: assets.Rectangle3MarketplacePng,
      icon: assets.TwoAt4x1MarketplacePng,
    },
    {
      id: 8,
      smallHeader: "Automated Workflows",
      title: "Streamlined Processes",
      description:
        "Automate repetitive tasks and create custom workflows to improve efficiency.",
      image: assets.Rectangle4MarketplacePng,
      icon: assets.EightAt4x1MarketplacePng,
    },
    {
      id: 9,
      smallHeader: "Analytics & Reporting",
      title: "Comprehensive Insights",
      description:
        "Get detailed analytics and reports to track performance and identify opportunities.",
      image: assets.Rectangle5MarketplacePng,
      icon: assets.FourAt4x1MarketplacePng,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

     return (
     <section className="py-16 lg:py-24 relative">
       {/* Background Map Image */}
       <div className="absolute inset-0">
         <Image
           src={assets.MapPng}
           alt="World Map Background"
           fill
           className="object-cover opacity-60"
           priority
         />
       </div>
       
       {/* Top Decorative Image */}
       <div className="absolute top-0 left-0 right-0 h-32">
         <Image
           src={assets.Rectangle2MarketplacePng}
           alt="Top Decorative Element"
           fill
           className="object-cover"
         />
       </div>

             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-white/80 backdrop-blur-sm rounded-lg">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
                     <div className="inline-flex items-center px-4 py-2 text-white text-sm font-medium rounded-full mb-6" style={{ backgroundColor: '#FFA955' }}>
            OUR SERVICES
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Designed for Audit Professionals Like You
          </h2>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-m text-gray-600 leading-relaxed">
            <p className="mb-4">
            Connect with clients looking for audits, submit tailored proposals, and deliver high-quality work through your own branded portal. From document collection to trial balance procedures, Sheetsway integrates directly with Excel, Word, and online banking to keep your audits efficient, secure, and professional.
            </p>
          </div>
        </div>
                 {/* Services Cards */}
         <div className="mb-12">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {services.slice(currentSlide, currentSlide + 3).map((service) => (
              <div key={service.id} className="relative h-96">
                {/* Background Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={400}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content Section - White curved background */}
                <div className="absolute -bottom-20 right-0 left-2 md:left-auto md:w-80 bg-white rounded-2xl shadow-lg p-6">
                  {/* Icon */}
                  <div className="absolute -top-4 right-6 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Image
                      src={service.icon}
                      alt="Service icon"
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  </div>

                  {/* Small Header */}
                  <p className="text-orange-400 text-sm font-medium mb-2">
                    {service.smallHeader}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Button */}
                  <button
                    className="w-auto text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
                    style={{ backgroundColor: "#FFA955" }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center space-x-4 mt-28">
          <button
            onClick={prevSlide}
            className="w-12 h-12 border border-gray-300 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 border border-gray-300 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
