"use client";

import FadeUpAnimation from "@/components/FadeUpAnimation";
import { industryAwareData } from "@/app/_constants/industryAware-data";
import { useMobile } from "@/hooks/useMobile";
import assets from "@/data/assets";
import { SectionDivider } from "@/components/common";
import { useEffect, useState } from "react";
import Image from 'next/image';
// import assets from '@/data/assets';

export default function IndustryAwareAI() {
  const [active, setActive] = useState(0);
  const [isMobile] = useMobile(700);
  const [mediaDurations, setMediaDurations] = useState({});

  useEffect(() => {
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
  }, [active, mediaDurations, setActive]);

  if (isMobile) {
    return (
      <div className="text-gray-900 bg-gradient-to-b from-white via-orange-50 to-white px-6 py-10 relative overflow-hidden">
        <SectionDivider imageSrc={assets.Rectangle2MarketplacePng} position="top" />
        {[
          "Automatic FS Mapping",
          "Procedures Generation",
          "AI Driven Answers",
          "AI Chat Bot",
        ].map((el, i) => (
          <div key={i} className="relative">
            <div
              className={`${active === i ? "border-l-4 border-primary -mx-6 px-6" : ""
                }`}
            >
              {/* {active === i && (
                <div className="absolute left-0 top-2 bottom-0 flex">
                  <div className="w-1 bg-primary rounded">
                    <div
                      className="h-full bg-gray-200 loader-vertical-animation"
                      style={{ animationDuration: "10s" }}
                    ></div>
                  </div>
                </div>
              )} */}
              <h1
                className={`${active === i ? "text-primary" : "text-gray-400 mb-4"
                  } text-2xl font-extrabold font-montserrat`}
                onClick={() => setActive(i)}
              >
                {el}{"  "}
                {
                  industryAwareData[active].title == el && (
                    industryAwareData[active].tag && (
                      <span className="text-base font-semibold">
                        {`(${industryAwareData[active].tag})`}
                      </span>
                    )
                  )
                }
              </h1>
              {active === i && (
                <>
                  <p className="text-sm font-semibold text-gray-800 mt-1 max-w-xs font-nunito">
                    {industryAwareData[active].description.split(".")[0]}.
                  </p>
                  <div className="flex gap-2 mt-4">
                    {industryAwareData[active].tags.map((tag) => (
                      <button
                        key={tag}
                        className="px-2 py-1 bg-white text-gray-600 rounded-md text-xs sm:text-sm border"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {active === i && (
              <div className="my-4">
                {industryAwareData[active].images.primarySrc?.toLowerCase().endsWith(".webm") ? (
                  <video
                    src={industryAwareData[active].images.primarySrc}
                    className="rounded-xl shadow-[0px_1px_10px_rgba(0,0,0,0.3)] w-full h-full object-contain mx-auto block"
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
                    alt={industryAwareData[active].title}
                    className="rounded-xl shadow-[0px_1px_10px_rgba(0,0,0,0.3)] w-full h-full object-cover"
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="text-gray-900 bg-gradient-to-b from-white via-orange-50 to-white px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden">
       <div className="absolute inset-0 z-0">
        <Image
          src={assets.At4x1MarketplacePng}
          alt="Background Pattern"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      <SectionDivider imageSrc={assets.Rectangle2MarketplacePng} position="top" />
      {/* Left-aligned Header */}
      <FadeUpAnimation className="pt-16 sm:pt-20 mb-8 mt-15 lg:mt-15">
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
              className="relative p-4 sm:p-6 md:p-0"
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
  );
}
