'use client'
import { useState, useEffect, useRef } from 'react'
import { useMobile } from '@/hooks/useMobile'
import { getfirstSentence } from '@/utils/helper'
import Button from '../components/common/Button'
import { logos, slides } from '../app/_constants/carousel'
import ResponsiveYouTube from '../components/common/ResponsiveYoutube'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'

const ArticleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile] = useMobile()

  return (
    <section className='relative bg-gradient-to-r from-[#1E84B2] to-[#004666] pt-10 pb-10'>
      {/* White Content Block with Rounded Bottom */}
      <div
        className='
  relative 
  -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40 xl:-mt-48 
  px-4 lg:px-6 xl:px-8 
  py-6 sm:py-20 lg:py-12   /* 👈 add vertical padding */
  bg-white 
  rounded-b-[50px] sm:rounded-b-[80px] md:rounded-b-[120px] lg:rounded-b-[160px] xl:rounded-b-[200px] 2xl:rounded-b-[250px] 
  shadow-lg
'
      >
        {/* Logos Section */}
        <div className='relative bg-white border-t-2 border-b-2 border-gray-200 overflow-x-hidden'>
          <div className='grid grid-cols-3 lg:grid-cols-6 justify-items-center gap-4 gap-y-6 items-center p-5 w-full'>
            {logos.map((logo, index) => (
              <img
                onClick={() => setCurrentIndex(index)}
                key={index}
                src={logo.activeSrc}
                alt={logo.alt}
                className={`lg:w-32 md:w-24 w-20 cursor-pointer ${
                  index === currentIndex ? '' : 'grayscale opacity-75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Carousel */}
        {isMobile ? (
          <MobileCarousel
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        ) : (
          <Carousel
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        )}

        {/* Pagination Dots */}
        <div className='flex items-center justify-center w-full mt-4 space-x-2'>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-[#E8840C] w-4' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- Carousel Component ---
function Carousel ({ currentIndex, setCurrentIndex }) {
  const totalSlides = slides.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalSlides)
    }, 7000)

    return () => clearInterval(interval)
  }, [setCurrentIndex, totalSlides])

  return (
    <div className='overflow-hidden lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-sm mx-auto rounded-3xl shadow-[0px_1px_20px_rgba(0,0,0,0.2)] mt-10'>
      <div
        className='flex transition-transform duration-500 ease-in-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((article, index) => {
          const { firstSentence, rest } = getfirstSentence(article.source)

          return (
            <div key={index} className='min-w-full flex'>
              <div className='flex flex-col sm:flex-row bg-white'>
                {/* Left Text */}
                <div className='sm:w-1/2 p-8 text-left flex flex-col justify-between'>
                  <div>
                    <div className='flex items-start justify-between mb-9'>
                      <img
                        src={article.logo}
                        alt='Publication Logo'
                        className='lg:w-36 md:w-28 w-20'
                      />
                    </div>
                    <div
                      className={`md:mr-9 ${
                        !article.author
                          ? 'flex flex-col items-start gap-10'
                          : ''
                      }`}
                    >
                      <h3 className='lg:text-xl text-base font-semibold text-gray-600 italic leading-6 mb-5'>
                        {article?.title}
                      </h3>
                      <p className='text-gray-600 lg:text-sm text-xs mt-1'>
                        <strong>{firstSentence}.</strong> {rest.join(' ')}
                      </p>
                      <div className='flex flex-wrap items-center gap-3 pt-2'>
                        {article.gotoArticle && (
                          <a
                            target='_blank'
                            rel='noreferrer'
                            href={article.href}
                          >
                            <Button
                              type='primary'
                              className='!bg-[#E8840C] hover:!bg-[#E8840C]/85'
                            >
                              Go to Article -&gt;
                            </Button>
                          </a>
                        )}
                        {article.btnText && (
                          <Button type='primary'>{article.btnText}</Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {article?.author && (
                    <div className='flex items-center gap-5 mt-6'>
                      {article?.author?.image && (
                        <img
                          src={article.author.image}
                          alt={article.author.name}
                          className='lg:w-20 lg:h-20 w-16 h-16 rounded-full border border-gray-300'
                          loading='lazy'
                        />
                      )}
                      <div className='text-left'>
                        <p className='text-sm font-semibold text-gray-900'>
                          {article?.author?.name || 'Anonymous'}
                        </p>
                        <p className='text-xs text-gray-500'>
                          {article?.author?.role || 'No role available'}
                        </p>
                        <p className='lg:text-sm text-xs text-gray-700 mt-2'>
                          {article?.author?.bio || 'No bio available'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Image */}
                <div className='sm:w-1/2'>
                  {article.ytSrc ? (
                    <ResponsiveYouTube
                      videoURL={article.ytSrc}
                      imgSrc={article.image}
                      className='h-[500px] rounded-tr-2xl rounded-br-2xl overflow-hidden w-full'
                    />
                  ) : (
                    <img
                      src={article.image}
                      alt='Article'
                      className='w-full h-full object-cover rounded-tr-2xl rounded-br-2xl'
                      loading='lazy'
                    />
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// --- MobileCarousel Component ---
function MobileCarousel ({ currentIndex, setCurrentIndex }) {
  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(currentIndex, 0)
    }
  }, [currentIndex])

  return (
    <div className='overflow-hidden max-w-sm sm:max-w-xl mx-auto rounded-3xl shadow-lg relative'>
      <Swiper
        ref={swiperRef}
        onSlideChange={swiper => setCurrentIndex(swiper.activeIndex)}
        slidesPerView={1}
        spaceBetween={0}
        allowTouchMove
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
      >
        {slides.map((article, index) => {
          const { firstSentence, rest } = getfirstSentence(article.source)
          return (
            <SwiperSlide key={index}>
              <div className='min-w-full gap-[50px] grid grid-rows-[20rem_15rem] bg-white'>
                <div>
                  <div className='flex items-start justify-between m-6'>
                    <img
                      src={article.logo}
                      alt='Publication Logo'
                      className='w-24'
                    />
                  </div>
                  <h3 className='text-lg mx-4 font-semibold text-gray-700 italic mb-4'>
                    {article?.title}
                  </h3>
                  <p className='text-gray-600 text-xs mb-3 mx-4'>
                    <strong>{firstSentence}.</strong> {rest.join(' ')}
                  </p>
                  <div className='mx-4 mt-4 flex flex-wrap items-center gap-3'>
                    {article.gotoArticle && (
                      <a target='_blank' rel='noreferrer' href={article.href}>
                        <Button
                          type='primary'
                          className='!bg-[#E8840C] hover:!bg-[#E8840C]/85'
                        >
                          Go to Article -&gt;
                        </Button>
                      </a>
                    )}
                    {article.btnText && (
                      <Button type='primary'>{article.btnText}</Button>
                    )}
                  </div>
                  {article?.author && (
                    <div className='flex items-center gap-4 mt-4 mx-4'>
                      {article?.author?.image && (
                        <img
                          src={article.author.image}
                          alt={article.author.name}
                          className='w-24 h-20 rounded-full border border-gray-300'
                          loading='lazy'
                        />
                      )}
                      <div>
                        <p className='text-sm font-semibold text-gray-900'>
                          {article?.author?.name || 'Anonymous'}
                        </p>
                        <p className='text-xs text-gray-500'>
                          {article?.author?.role || 'No role available'}
                        </p>
                        <p className='text-xs text-left text-gray-700 mt-1'>
                          {article?.author?.bio || 'No bio available'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className='w-full h-full'>
                  {article.ytSrc ? (
                    <ResponsiveYouTube
                      videoURL={article.ytSrc}
                      imgSrc={article.image}
                      playBtn={false}
                    />
                  ) : (
                    <img
                      src={article.image}
                      alt='Article'
                      className='w-full h-full object-cover object-top rounded-tr-2xl rounded-br-2xl'
                      loading='lazy'
                    />
                  )}
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ArticleCarousel
