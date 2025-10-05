'use client'

import FadeUpAnimation from '@/components/FadeUpAnimation'
import { industryAwareData } from '@/app/_constants/industryAware-data'
import { useMobile } from '@/hooks/useMobile'
import assets from '@/data/assets'
import { useEffect, useState } from 'react'
import { SectionDivider } from '@/components/common'
import Image from 'next/image'


export default function IndustryAwareAI () {
  const [active, setActive] = useState(0)
  const [isMobile] = useMobile(700)
  const [mediaDurations, setMediaDurations] = useState({})

  useEffect(() => {
    const primarySrc =
      industryAwareData[active]?.images?.primarySrc?.toLowerCase?.() || ''
    const isVideo = primarySrc.endsWith('.webm')
    const configuredDuration = industryAwareData[active]?.duration
    const durationSec =
      Number.isFinite(configuredDuration) && configuredDuration > 0
        ? configuredDuration
        : isVideo && mediaDurations[active]
        ? mediaDurations[active]
        : 10
    const timeoutMs = Math.max(700, Math.round(durationSec * 700))

    const id = setTimeout(() => {
      setActive(prev => (prev === industryAwareData.length - 1 ? 0 : prev + 1))
    }, timeoutMs)

    return () => clearTimeout(id)
  }, [active, mediaDurations, setActive])

  // 🔹 Enhanced Bottom Divider (contained within parent)
 const BottomDivider = () => (
  <div className='absolute left-0 right-0 bottom-0 h-16 -mb-12 bg-gray-200'>
    <div className='h-full w-full relative'>
      {/* Shadow effect going upward */}
      <div className='absolute inset-0 bg-gradient-to-t from-gray-400/30 via-gray-300/15 to-transparent' />
      
      {/* Top highlight line */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400/60 to-transparent' />
      
      {/* Optional: Bottom edge for depth */}
      <div className='absolute bottom-0 left-0 right-0 h-px bg-gray-200' />
    </div>
  </div>
)

  if (isMobile) {
    return (
      <div className='relative overflow-x-hidden overflow-y-visible'>
        <div className='text-gray-900 bg-gradient-to-b from-white via-orange-50 to-white px-4 py-10 relative pb-20 w-full'>
          {[
            'Automatic FS Mapping',
            'Procedures Generation',
            'AI Driven Answers',
            'AI Chat Bot'
          ].map((el, i) => (
            <div key={i} className='relative w-full overflow-hidden'>
              <div
                className={`${
                  active === i ? 'border-l-4 border-primary -ml-4 pl-4 pr-0' : ''
                } w-full`}
              >
                <h1
                  className={`${
                    active === i ? 'text-primary' : 'text-gray-400 mb-4'
                  } text-xl font-extrabold font-montserrat break-words pr-2`}
                  onClick={() => setActive(i)}
                >
                  {el}{' '}
                  {industryAwareData[active].title == el &&
                    industryAwareData[active].tag && (
                      <span className='text-sm font-semibold'>
                        ({industryAwareData[active].tag})
                      </span>
                    )}
                </h1>
                {active === i && (
                  <>
                    <p className='text-sm font-semibold text-gray-800 mt-1 font-nunito break-words pr-2'>
                      {industryAwareData[active].description.split('.')[0]}.
                    </p>
                    <div className='flex gap-2 mt-4 flex-wrap pr-2'>
                      {industryAwareData[active].tags.map(tag => (
                        <button
                          key={tag}
                          className='px-2 py-1 bg-white text-gray-600 rounded-md text-xs border whitespace-nowrap'
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {active === i && (
                <div className='my-4 w-full overflow-hidden px-2'>
                  {industryAwareData[active].images.primarySrc
                    ?.toLowerCase()
                    .endsWith('.webm') ? (
                    <video
                      src={industryAwareData[active].images.primarySrc}
                      className='rounded-xl shadow-[0px_1px_10px_rgba(0,0,0,0.3)] w-full max-w-full h-auto object-contain mx-auto block'
                      autoPlay
                      loop
                      muted
                      playsInline
                      onLoadedMetadata={e => {
                        const dur = e.currentTarget.duration
                        if (Number.isFinite(dur) && dur > 0) {
                          setMediaDurations(prev => ({
                            ...prev,
                            [active]: dur
                          }))
                        }
                      }}
                    />
                  ) : (
                    <img
                      src={industryAwareData[active].images.primarySrc}
                      alt={industryAwareData[active].title}
                      className='rounded-xl shadow-[0px_1px_10px_rgba(0,0,0,0.3)] w-full max-w-full h-auto object-contain mx-auto block'
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* 🔹 Bottom Divider */}
        <BottomDivider />
      </div>
    )
  }

  return (
    <div className='relative overflow-hidden'>
      <div className='text-gray-900 bg-gradient-to-b from-white via-orange-50 to-white px-4 sm:px-6 md:px-8 lg:px-12 relative pb-20'>
        <SectionDivider
          imageSrc={assets.Rectangle2MarketplacePng}
          position='top'
        />

        {/* Background Image - contained within parent */}
        <div className='absolute inset-0 z-0 mt-16 pointer-events-none'>
          <Image
            src='/images/blog/LineBg.svg'
            alt='Background Pattern'
            fill
            className='object-cover opacity-10'
            priority
          />
        </div>

        {/* Left-aligned Header */}
        <FadeUpAnimation className='pt-16 sm:pt-20 mb-8 mt-15 lg:mt-15 relative z-10'>
          <div className='max-w-6xl mx-auto'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold font-bodoni text-gray-900'>
              Built by Auditors,
            </h1>
            <div className='mt-3 flex items-center gap-2 text-gray-600 font-montserrat flex-wrap'>
              <span className='text-sm sm:text-base'>Backed by</span>
              <img src='/SVG/Logo.svg' alt='SheetSway' className='h-5 w-auto' />
              <span className='text-sm sm:text-base'>
                Audit Automation Software
              </span>
            </div>
          </div>
        </FadeUpAnimation>

        {/* Automatic FS Mapping Section */}
        <div className='max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 md:gap-16 lg:gap-20 relative z-10'>
          {/* Text Section */}
          <FadeUpAnimation
            className='w-full lg:w-[450px] flex flex-col'
            amount={0.6}
          >
            {industryAwareData.map((el, index) => (
              <div key={index} className='relative mb-5'>
                {active === index && (
                  <div className='absolute left-0 top-2 bottom-0 flex'>
                    <div className='w-1 bg-primary rounded'>
                      <div
                        className='h-full w-1 bg-[#FFA954] loader-vertical-animation'
                        style={{
                          animationDuration: `${
                            Number.isFinite(
                              industryAwareData[index]?.duration
                            ) && industryAwareData[index]?.duration > 0
                              ? industryAwareData[index]?.duration
                              : industryAwareData[index].images.primarySrc
                                  ?.toLowerCase()
                                  .endsWith('.webm') && mediaDurations[index]
                              ? mediaDurations[index]
                              : 10
                          }s`
                        }}
                      ></div>
                    </div>
                  </div>
                )}
                <div className='pl-3 flex flex-col justify-between'>
                  <h2
                    className={`text-lg sm:text-xl md:text-2xl font-extrabold cursor-pointer font-montserrat hover:text-primary break-words ${
                      active === index ? 'text-primary' : 'text-[#A8A8A8]'
                    }`}
                    onClick={() => setActive(index)}
                  >
                    {el.title}{' '}
                    {el.tag && (
                      <span className='text-base font-semibold'>
                        ({el.tag})
                      </span>
                    )}
                  </h2>
                  {active === index && (
                    <div className='space-y-4'>
                      <p className='text-gray-700 mt-2 font-nunito text-xs sm:text-sm md:text-base lg:text-lg break-words'>
                        <span className='font-bold'>
                          {el.description.split('.')[0]}.
                        </span>
                        {el.description.split('.').splice(1).join('.')}
                      </p>
                      <div className='flex flex-wrap gap-2 items-end'>
                        {el.tags.map(tag => (
                          <span
                            key={tag}
                            className='px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-white text-gray-600 rounded-md text-xs sm:text-sm border whitespace-nowrap'
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
            className='relative w-full lg:w-[570px] min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[450px]'
            amount={0.5}
          >
            <div className='absolute inset-0 flex items-center justify-center overflow-hidden'>
              <div
                className='relative p-4 sm:p-6 md:p-0'
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
                {industryAwareData[active].images.primarySrc
                  ?.toLowerCase()
                  .endsWith('.webm') ? (
                  <video
                    src={industryAwareData[active].images.primarySrc}
                    className='rounded-xl z-10 shadow-[0px_1px_20px_rgba(0,0,0,0.4)] max-w-[90%] max-h-[90%] object-contain mx-auto block'
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedMetadata={e => {
                      const dur = e.currentTarget.duration
                      if (Number.isFinite(dur) && dur > 0) {
                        setMediaDurations(prev => ({ ...prev, [active]: dur }))
                      }
                    }}
                  />
                ) : (
                  <img
                    src={industryAwareData[active].images.primarySrc}
                    alt={industryAwareData[active].images.alt}
                    className='rounded-xl z-10 shadow-[0px_1px_20px_rgba(0,0,0,0.4)] max-w-[90%] max-h-[90%] object-contain mx-auto block'
                  />
                )}
              </div>
            </div>
          </FadeUpAnimation>
        </div>
      </div>

      {/* 🔹 Bottom Divider */}
      <BottomDivider />

      <style jsx>{`
        .loader-vertical-animation {
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
  )
}