"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ResellerHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Resseller/Rectangle 1.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-16">
          
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-8 text-center lg:text-left"
          >
            {/* Program Tag */}
            <motion.div variants={itemVariants}>
              <span className="inline-block text-white px-6 py-2 rounded-full text-sm font-semibold" style={{background: 'linear-gradient(to right, #FFD8A9, #FFB45B)'}}>
                Audit Referral Program
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
                Connecting Auditors & Clients.
                <br />
                Building Careers
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0">
                Take your business to the next level with our new audit marketplace and audit tools. 
                Sheetsway opens a new horizon of client acquisition.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-lg transition-all duration-300 hover:scale-105" style={{background: 'linear-gradient(to right, #FFD8A9, #FFB45B)'}}>
                <span>Contact Sheetsway</span>
                <div className="bg-white p-1 rounded">
                  <Check size={16} className="text-orange-600" />
                </div>
              </button>
              
              <button className="bg-white text-orange-500 px-8 py-4 rounded-xl font-bold text-lg border border-orange-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                Log in
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main Container for Guy and Cards - Fixed positioning */}
            <div className="relative w-full max-w-lg h-[500px] sm:h-[600px] lg:h-[700px]">
              {/* Guy Image Container */}
              <motion.div variants={itemVariants} className="absolute inset-0 z-0 flex justify-center items-center">
                <Image
                  src="/Resseller/guy.png"
                  alt="Professional with laptop"
                  width={500}
                  height={600}
                  className="object-contain w-full h-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]"
                  priority
                />
              </motion.div>

              {/* Left Side Cards Container */}
              <div className="absolute inset-0 z-20">
                {/* Card 1 - Refer Clients */}
                <motion.div
                  variants={cardVariants}
                  className="absolute top-[8%] left-[2%] sm:left-[5%] lg:top-[8%] lg:left-[-5%] bg-white rounded-2xl p-3 sm:p-4 lg:p-4 shadow-xl max-w-[180px] sm:max-w-[200px] lg:max-w-xs"
                >
                  <div className="flex items-center gap-2 sm:gap-3 lg:gap-3">
                    <Image
                      src="/Resseller/icons/euro_3032033.png"
                      alt="Euro icon"
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-xs sm:text-sm lg:text-sm">Refer Clients, <br /> Make Commission</p>
                      <p className="text-green-600 font-bold text-sm sm:text-lg lg:text-lg">▲ €4,500</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Side Cards Container */}
              <div className="absolute inset-0 z-20">
                {/* Card 2 - Referred Clients */}
                <motion.div
                  variants={cardVariants}
                  className="absolute top-[8%] right-[2%] sm:right-[5%] lg:top-[8%] lg:-right-[2%] bg-white rounded-2xl p-3 sm:p-4 lg:p-4 shadow-xl max-w-[180px] sm:max-w-[200px] lg:max-w-xs"
                >
                  <div className="flex items-center gap-2 sm:gap-3 lg:gap-3">
                    <Image
                      src="/Resseller/icons/Vector Smart Object.png"
                      alt="Growth arrow"
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10"
                    />
                    <div>
                      <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">30+</p>
                      <p className="text-gray-600 text-xs sm:text-sm lg:text-sm">Referred <br /> Clients</p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 3 - Bottom Right Graph */}
                <motion.div
                  variants={cardVariants}
                  className="absolute bottom-[20%] right-[5%] sm:right-[8%] lg:bottom-[16%] lg:-right-[4%] bg-white rounded-2xl p-3 sm:p-4 lg:p-6 shadow-xl"
                >
                  <Image
                    src="/Resseller/icons/diagram_858699.png"
                    alt="Growth chart"
                    width={80}
                    height={80}
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}