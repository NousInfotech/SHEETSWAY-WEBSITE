'use client';

import React from 'react';

interface CTAItemProps {
  title: string;
  description: string[];
  buttonText: string;
  buttonColor?: 'orange' | 'purple';
  onButtonClick?: () => void;
  className?: string;
}

const CTAItem: React.FC<CTAItemProps> = ({
  title,
  description,
  buttonText,
  buttonColor = 'orange',
  onButtonClick,
  className = ""
}) => {
  const getButtonColorClasses = () => {
    switch (buttonColor) {
      case 'purple':
        return 'text-purple-600';
      case 'orange':
      default:
        return 'text-orange-500';
    }
  };

  return (
    <div className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 ${className}`}>
      <div className="text-white space-y-4 flex-1">
        <h2 className="text-md sm:text-3xl md:text-2xl font-bold leading-tight">
          {title}
        </h2>
        <div className="space-y-1">
          {description.map((line, index) => (
            <p key={index} className="text-white/90 text-sm sm:text-lg">
              {line}
            </p>
          ))}
        </div>
      </div>
      <div className="lg:flex-shrink-0">
        <button 
          className={`bg-white ${getButtonColorClasses()} font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg w-48`}
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CTAItem;