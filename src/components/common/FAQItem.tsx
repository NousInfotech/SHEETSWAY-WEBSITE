'use client';

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  number: number;
  isOpen?: boolean;
  onToggle?: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  number,
  isOpen = false,
  onToggle
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (onToggle) onToggle();
  };

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none group"
        onClick={handleToggle}
        aria-expanded={isExpanded}
      >
        <span className="text-gray-700 font-medium text-lg pr-4">
          {number}. {question}
        </span>
        <div className="flex-shrink-0">
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      
      <div
        className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 text-base leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;