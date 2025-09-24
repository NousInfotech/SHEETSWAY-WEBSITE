'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import assets from '@/data/assets';

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
    const videoId = url.split('youtu.be/')[1]?.split('?')[0] || url.split('watch?v=')[1]?.split('&')[0];
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
           
            {/* Border Image as Overlay */}
            <div className="absolute -inset-2 sm:-inset-4 md:-inset-5 lg:-inset-6">
              <Image
                src={assets.BorderMarketplacePng}
                alt="Border"
                fill
                className="object-contain"
              />
            </div>

            {/* Video Play Button */}
            <button
              onClick={openVideo}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         bg-orange-500 hover:bg-orange-600 transition-colors duration-300 
                         rounded-full p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl 
                         focus:outline-none focus:ring-4 focus:ring-orange-300"
              aria-label="Play video"
            >
              {/* Play Icon */}
              <svg 
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-white ml-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal Popup */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 bg-opacity-95 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 bg-gray-800 hover:bg-gray-700 
                         text-white rounded-full p-2 transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* YouTube Embed */}
            <iframe
              src={getEmbedUrl('https://youtu.be/pZZyvk7ggt8')}
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
        <div 
          className="fixed inset-0 z-40"
          onClick={closeVideo}
        ></div>
      )}
    </section>
  );
};

export default ImageSection;