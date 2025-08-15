'use client';

import React from 'react';
import Image from 'next/image';
import assets from '@/data/assets';

const ImageSection = () => {
  return (
    <section className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          {/* Main Image with Border Overlay */}
          <div className="relative">
            {/* Main Image */}
            <Image
              src={assets.At4x1NewMarketplacePng}
              alt="Marketplace Image"
              width={793}
              height={436}
              className="object-contain"
            />
            
            {/* Border Image as Overlay */}
            <div className="absolute -inset-6">
              <Image
                src={assets.BorderMarketplacePng}
                alt="Border"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection; 