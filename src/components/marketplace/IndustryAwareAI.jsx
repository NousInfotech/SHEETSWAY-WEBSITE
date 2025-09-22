"use client";

import { useEffect, useState } from "react";

// Mock data - replace with your actual data import
const industryAwareData = [
  {
    title: "Automatic FS Mapping",
    tag: "Beta",
    description: "Automatically map financial statements to audit areas. Streamline your audit process with intelligent document recognition and categorization.",
    tags: ["AI-Powered", "Document Analysis", "Time-Saving"],
    images: {
      primarySrc: "https://via.placeholder.com/600x400/1E84B2/white?text=FS+Mapping+Demo",
      alt: "Financial Statement Mapping Demo"
    },
    duration: 8
  },
  {
    title: "Procedures Generation",
    tag: "New",
    description: "Generate audit procedures automatically based on risk assessment. Create comprehensive audit programs tailored to your client's industry.",
    tags: ["Risk-Based", "Customizable", "Compliance"],
    images: {
      primarySrc: "https://via.placeholder.com/600x400/004666/white?text=Procedure+Generation",
      alt: "Procedure Generation Demo"
    },
    duration: 10
  },
  {
    title: "AI Driven Answers",
    tag: "",
    description: "Get instant answers to complex audit questions. Leverage AI to provide insights and recommendations throughout your audit process.",
    tags: ["Natural Language", "Expert Knowledge", "Real-time"],
    images: {
      primarySrc: "https://via.placeholder.com/600x400/0066CC/white?text=AI+Answers",
      alt: "AI Driven Answers Demo"
    },
    duration: 12
  }
];

// Mock FadeUpAnimation component
const FadeUpAnimation = ({ children, className = "", amount = 0.3 }) => (
  <div className={`transition-all duration-700 ${className}`}>
    {children}
  </div>
);

// Mock useMobile hook
const useMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);
  
  return [isMobile];
};

export default function IndustryAwareAI() {
  const [active, setActive] = useState(0);
  const [isMobile] = useMobile(700);
  const [mediaDurations, setMediaDurations] = useState({});

  // Auto-rotation effect
  useEffect(() => {
    if (!industryAwareData[active]) return;

    const primarySrc = industryAwareData[active]?.images?.primarySrc?.toLowerCase?.() || "";
    const isVideo = primarySrc.endsWith(".webm");
    const configuredDuration = industryAwareData[active]?.duration;
    
    const durationSec = (Number.isFinite(configuredDuration) && configuredDuration > 0)
      ? configuredDuration
      : (isVideo && mediaDurations[active] ? mediaDurations[active] : 10);
    
    const timeoutMs = Math.max(700, Math.round(durationSec * 700));

    const id = setTimeout(() => {
      setActive((prev) => (prev === industryAwareData.length - 1 ? 0 : prev + 1));
    }, timeoutMs);

    return () => clearTimeout(id);
  }, [active, mediaDurations]);

  const handleMediaLoad = (index, duration) => {
    if (Number.isFinite(duration) && duration > 0) {
      setMediaDurations((prev) => ({ ...prev, [index]: duration }));
    }
  };

  const renderMedia = (item, index, className) => {
    const isVideo = item.images.primarySrc?.toLowerCase().endsWith(".webm");
    
    if (isVideo) {
      return (
        <video
          src={item.images.primarySrc}
          className={className}
          autoPlay
          loop
          muted
          playsInline
          onLoadedMetadata={(e) => handleMediaLoad(index, e.currentTarget.duration)}
        />
      );
    }
    
    return (
      <img
        src={item.images.primarySrc}
        alt={item.images.alt || item.title}
        className={className}
      />
    );
  };

  // Mobile Layout
  if (isMobile) {
    return (
      <div className="text-gray-900 px-6 py-10 relative overflow-hidden">
        {industryAwareData.map((item, i) => (
          <div key={i} className="relative mb-8">
            <div className={`${active === i ? "border-l-4 border-blue-600 -mx-6 px-6" : ""}`}>
              <h1
                className={`${
                  active === i ? "text-blue-600" : "text-gray-400 mb-4"
                } text-2xl font-extrabold cursor-pointer transition-colors`}
                onClick={() => setActive(i)}
              >
                {item.title}
                {item.tag && (
                  <span className="text-base font-semibold ml-2">
                    ({item.tag})
                  </span>
                )}
              </h1>
              
              {active === i && (
                <>
                  <p className="text-sm font-semibold text-gray-800 mt-1 max-w-xs">
                    {item.description.split(".")[0]}.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white text-gray-600 rounded-md text-xs border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="my-4">
                    {renderMedia(
                      item, 
                      i, 
                      "rounded-xl shadow-lg w-full h-full object-contain mx-auto block"
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Desktop Layout
  return (
    <div className="relative bg-gradient-to-r from-[#1E84B2] to-[#004666]  pt-10 pb-0">
      <div className="relative -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40 xl:-mt-48 px-4 lg:px-6 xl:px-8 py-6 sm:py-20 lg:py-12 bg-white rounded-b-[50px] sm:rounded-b-[80px] md:rounded-b-[120px] lg:rounded-b-[160px] xl:rounded-b-[200px] 2xl:rounded-b-[250px] shadow-lg">
        
        {/* Header */}
        <FadeUpAnimation className="pt-16 sm:pt-20 mb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold font-bodoni text-gray-900">
            Built by Auditors,
          </h1>
          <div className="mt-3 flex items-center gap-2 text-gray-600 font-montserrat">
            <span className="text-sm sm:text-base">Backed by</span>
            <img src="/SVG/Logo.svg" alt="SheetSway" className="h-5 w-auto" />
            <span className="text-sm sm:text-base">Audit Automation Software</span>
          </div>
        </div>
      </FadeUpAnimation>

      {/* Automatic FS Mapping Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 md:gap-16 lg:gap-20">
        {/* Text Section */}
        <FadeUpAnimation
          className="w-full lg:w-[450px] flex flex-col"
          amount={0.6}
        >
          {industryAwareData.map((el, index) => (
            // Wrap the whole item in a relative container
            <div key={index} className="relative mb-5">
              {/* Loader placed absolutely on the left side */}
              {active === index && (
                <div className="absolute left-0 top-2 bottom-0 flex">
                  <div className="w-1 bg-primary rounded">
                    <div
                      className="h-full w-1 bg-[#FFA954] loader-vertical-animation"
                      style={{
                        animationDuration: `${(Number.isFinite(industryAwareData[index]?.duration) && industryAwareData[index]?.duration > 0)
                          ? industryAwareData[index]?.duration
                          : (industryAwareData[index].images.primarySrc?.toLowerCase().endsWith(".webm") && mediaDurations[index]
                            ? mediaDurations[index]
                            : 10)}s`,
                      }}
                    ></div>
                  </div>
                </div>
              )}
              {/* Content container with left padding to avoid overlap */}
              <div className="pl-3 flex flex-col justify-between">
                <h2
                  className={`text-lg sm:text-xl md:text-2xl font-extrabold cursor-pointer font-montserrat hover:text-primary ${active === index ? "text-primary" : "text-[#A8A8A8]"
                    }`}
                  onClick={() => setActive(index)}
                >
                  {el.title}{"  "}
                  {
                    el.tag && (
                      <span className="text-base font-semibold">
                        {`(${el.tag})`}
                      </span>
                    )
                  }
                </h2>
                {active === index && (
                  <div className="space-y-4">
                    <p className="text-gray-700 mt-2 font-nunito text-xs sm:text-sm md:text-base lg:text-lg">
                      <span className="font-bold">
                        {el.description.split(".")[0]}.
                      </span>
                      {el.description.split(".").splice(1).join(".")}
                    </p>
                    <div className="flex flex-wrap gap-2 items-end">
                      {el.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-white text-gray-600 rounded-md text-xs sm:text-sm border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </FadeUpAnimation>

        {/* Image Section */}
        <FadeUpAnimation
          className="relative w-full lg:w-[570px] min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[450px]"
          amount={0.5}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Border container with background image */}
            <div 
              className="relative p-4 sm:p-6 md:p-8"
              style={{
                backgroundImage: 'url("/PNG/video border.png")',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {industryAwareData[active].images.primarySrc?.toLowerCase().endsWith(".webm") ? (
                <video
                  src={industryAwareData[active].images.primarySrc}
                  className="rounded-xl z-10 shadow-[0px_1px_20px_rgba(0,0,0,0.4)] max-w-[90%] max-h-[90%] object-contain mx-auto block"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedMetadata={(e) => {
                    const dur = e.currentTarget.duration;
                    if (Number.isFinite(dur) && dur > 0) {
                      setMediaDurations((prev) => ({ ...prev, [active]: dur }));
                    }
                  }}
                />
              ) : (
                <img
                  src={industryAwareData[active].images.primarySrc}
                  alt={industryAwareData[active].images.alt}
                  className="rounded-xl z-10 shadow-[0px_1px_20px_rgba(0,0,0,0.4)] max-w-[90%] max-h-[90%] object-contain mx-auto block"
                />
              )}
            </div>
          </div>

          
        </FadeUpAnimation>
      </div>
      <style jsx>{`
        .loader-vertical-animation {
          /* Use scaleY transform for smooth animation */
          transform-origin: top;
          animation-name: loaderVerticalFill;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
        @keyframes loaderVerticalFill {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }
      `}</style>
      </div>
    </div>
  );
}