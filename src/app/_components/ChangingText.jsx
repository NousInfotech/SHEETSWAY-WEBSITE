import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function ChangingText({
  headingText = "Sheetsway Portal",
  paraTextStart = "Reach more",
  paraTextEnd = "with Sheetsway Portal",
  className = "",
  speed = 3000,
  changingText = [],
  colorOftext = "text-orange-500",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, once: true }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 < changingText.length ? prevIndex + 1 : 0
      );
    }, speed);

    return () => clearInterval(interval);
  }, [changingText, speed, isVisible]);

  return (
    <div ref={containerRef} className="text-gray-800 text-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-6 sm:mb-8">
      {/* Heading with Simplified Animation */}
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-700 font-bodoni mb-6 sm:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ willChange: "transform, opacity" }}
      >
        {headingText}
      </motion.h1>

      {/* Description (Para Text) */}
      <p
        className={`text-gray-800 text-2xl sm:text-3xl text-left md:text-4xl lg:text-5xl font-medium font-nunito leading-none ${className}`}
      >
        {paraTextStart}{" "}
        <span className="inline-block relative h-[0.85em] w-[14%]">
          <motion.span
            key={changingText[currentIndex]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`absolute -left-1 top-0 w-full text-left ${colorOftext} font-bold`}
            style={{ willChange: "transform, opacity" }}
          >
            {changingText[currentIndex]}
          </motion.span>
        </span>
        <br />
        {paraTextEnd}
      </p>
    </div>
  );
}
