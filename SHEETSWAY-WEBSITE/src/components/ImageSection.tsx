"use client";
import React, { useState } from "react";
import Image from "next/image";
import assets from "@/data/assets";

const ImageSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  // Convert YouTube URL to embed URL with 4K quality
  const getEmbedUrl = (url: string): string => {
    const videoId =
      url.split("youtu.be/")[1]?.split("?")[0] ||
      url.split("watch?v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&quality=hd2160&vq=hd2160`;
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          {/* Main Image with Border Overlay */}
          <div className="relative w-full max-w-[90vw] sm:max-w-none">
            {/* Main Image */}
            <Image
              src={assets.At4x1NewMarketplacePng}
              alt="Marketplace Image"
              width={793}
              height={436}
              className="object-contain w-full h-auto"
            />

            {/* Black Overlay for Fade Effect */}
            <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>

            {/* Border Image as Overlay */}
            <div className="absolute -inset-2 sm:-inset-4 md:-inset-5 lg:-inset-6">
              <Image
                src={assets.BorderMarketplacePng}
                alt="Border"
                fill
                className="object-contain"
              />
            </div>

            {/* Animated Video Play Button */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <button
                onClick={openVideo}
                className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 xl:w-24 xl:h-24 bg-gradient-to-t from-orange-300 via-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 hover:scale-105 active:scale-95"
                aria-label="Play video"
              >
                {/* Animated Outer Circles */}
                <div className="absolute inset-0 rounded-full border-4 border-white opacity-40 has-scale-animation"></div>
                <div className="absolute inset-0 rounded-full border-3 border-white opacity-30 has-scale-animation has-delay-short"></div>

                {/* Play Icon */}
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-white transition-transform duration-200 hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center z-50 p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8">
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-10 bg-gray-800 hover:bg-gray-700 
                   text-white rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close video"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* YouTube Embed */}
            <iframe
              src={getEmbedUrl("https://youtu.be/pZZyvk7ggt8")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

      {/* Click outside to close modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-40" onClick={closeVideo}></div>
      )}
      {/* CSS Animations */}
      <style>{`
        @keyframes scaleAnimation {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.4);
            opacity: 0.2;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        .has-scale-animation {
          animation: scaleAnimation 2.5s ease-out infinite;
        }

        .has-delay-short {
          animation-delay: 0.8s;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

        /* Responsive video container */
        @media (min-width: 1024px) {
          .video-container {
            aspect-ratio: 16/9;
            max-width: 1200px;
            max-height: 675px;
          }
        }
      `}</style>
    </section>
  );
};

export default ImageSection;
