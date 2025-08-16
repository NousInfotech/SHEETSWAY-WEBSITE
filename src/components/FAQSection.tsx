'use client';

import React, { useState } from 'react';
import FAQItem from '@/components/common/FAQItem';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqData = [
    {
      question: "What are the primary features of Sheetsway?",
      answer: "Sheetsway utilizes advanced AI technologies such as Natural Language Processing (NLP) and Optical Character Recognition (OCR) to automate risk assessments, handle large datasets, and significantly reduce audit times. The software also offers customizable templates and an intuitive user interface designed to streamline the auditing process from start to finish."
    },
    {
      question: "Is Sheetsway compliant with local and international auditing standards?",
      answer: "Yes, Sheetsway is fully compliant with both local and international auditing standards including ISA (International Standards on Auditing), GAAS (Generally Accepted Auditing Standards), and other relevant regulatory requirements. Our platform is regularly updated to maintain compliance with evolving standards."
    },
    {
      question: "Does Sheetsway offer white-labeling options?",
      answer: "Yes, Sheetsway offers comprehensive white-labeling solutions that allow audit firms to customize the platform with their own branding, logos, and corporate identity. This enables firms to provide a seamlessly branded experience to their clients while leveraging our powerful audit automation technology."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white -mt-30">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            General Information
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              number={index + 1}
              isOpen={index === openIndex}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-8">
          <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium text-base px-6 py-3 rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition-all duration-200 flex items-center">
            View More
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;