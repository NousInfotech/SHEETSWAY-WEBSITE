'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import assets from '@/data/assets';

const OurWorkProcessSection = () => {
  const sectionRef = useRef(null);
  const mobileStepsRef = useRef(null);

  // Track scroll progress of the mobile steps section
  const { scrollYProgress } = useScroll({
    target: mobileStepsRef,
    offset: ['start 0.8', 'end 0.2'], // Adjusted for better coverage
  });

  // Adjusted path length to end at step 3
  const pathLength = 1000; // Reduced from 1200
  const dashOffset = useTransform(scrollYProgress, [0, 1], [pathLength, 0]);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 relative overflow-hidden bg-white"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="space-y-6 max-w-7xl mx-auto">
            <div className="inline-block">
              <span
                className="px-6 py-2 rounded-full text-white text-sm font-medium"
                style={{ backgroundColor: '#FFA955' }}
              >
                OUR WORK PROCESS
              </span>
            </div>
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We Designed a Better Way to Deliver Audits
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sheetsway connects clients and auditors in a smarter, faster, and
                more organized workflow. From proposals to signed engagements,
                and ease of work with our integrated management system and tools.
              </p>
            </div>
          </div>

          {/* Desktop Illustration */}
          <div className="hidden md:block">
            <div className="flex justify-center items-center -mt-30">
              <div className="relative w-full max-w-4xl">
                <Image
                  src={assets.AReferenceMarketplacePng}
                  alt="Work process illustration"
                  width={1200}
                  height={900}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Mobile Steps Section */}
          <div ref={mobileStepsRef} className="md:hidden relative">
            {/* Curved Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-24 z-0">
              {/* Gray base line - Ends at step 3 */}
              <svg
                width="96"
                height="100%"
                viewBox="0 0 96 1000"
                className="w-full h-full absolute"
                preserveAspectRatio="none"
              >
                <path
                  d="M 48 0 Q 72 100 48 200 Q 24 300 48 400 Q 72 500 48 600 Q 24 700 48 800 Q 72 900 48 1000"
                  stroke="#E5E7EB"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>

              {/* Animated orange progress line - Ends at step 3 */}
              <motion.svg
                width="96"
                height="100%"
                viewBox="0 0 96 1000"
                className="w-full h-full absolute"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M 48 0 Q 72 100 48 200 Q 24 300 48 400 Q 72 500 48 600 Q 24 700 48 800 Q 72 900 48 1000"
                  stroke="#E8840C"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={pathLength}
                  strokeDashoffset={dashOffset}
                />
              </motion.svg>
            </div>

            {/* Steps Content */}
            <div className="space-y-20 relative z-10"> {/* Increased spacing */}
              {/* Step 1 - Image from left, Text from right */}
              <div className="flex flex-col space-y-6">
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, x: -100, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image
                    src={assets.Rectangle10MarketplacePng}
                    alt="Step 1: Set Up Your Profile"
                    width={250}
                    height={150}
                    className="w-70 h-70 object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 100, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-center px-4"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">
                    Step 1: Set Up Your Profile
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Create your firm or solo auditor account, showcase your
                    services, and get ready to receive audit listings that match
                    your expertise.
                  </p>
                </motion.div>
              </div>

              {/* Step 2 - Image from right, Text from left */}
              <div className="flex flex-col space-y-6">
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, x: 100, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image
                    src={assets.Rectangle11MarketplacePng}
                    alt="Step 2: Send Proposals"
                    width={250}
                    height={150}
                    className="w-70 h-70 object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -100, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-center px-4"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">
                    Step 2: Send Proposals
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Browse live audit requests, review client details and
                    documents, and submit your fee and scope, all in a few
                    clicks.
                  </p>
                </motion.div>
              </div>

              {/* Step 3 - Image from left, Text from right */}
              <div className="flex flex-col space-y-6">
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, x: -100, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image
                    src={assets.Rectangle9MarketplacePng}
                    alt="Step 3: Sign & Start"
                    width={250}
                    height={150}
                    className="w-70 h-70 object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 100, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-center px-4"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">
                    Step 3: Sign & Start
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Once your proposal is accepted, sign the agreement and begin
                    the engagement directly on the platform with built-in tools
                    and chat.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkProcessSection;