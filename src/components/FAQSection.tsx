"use client";

import React, { useState } from "react";
import FAQItem from "@/components/common/FAQItem";
import Link from "next/link";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqData = [
    {
      question:
        "What makes Sheetsway smarter than just hiring an auditor through Google?",
      answer:
        "Unlike a generic Google search, Sheetsway only shows you vetted auditors who specialize in your industry and location. You don’t need to cold-call or guess — just list your request, and qualified auditors will come to you with tailored proposals.",
    },
    {
      question:
        "How does Sheetsway help me find the right auditor for my business?",
      answer:
        "Once you submit your audit request, Sheetsway matches it with relevant auditors. You’ll receive proposals you can compare by experience, budget, deadline, and more — all through a secure portal. No spam, no upsells, just what fits your needs.",
    },
    {
      question: "Can I compare multiple quotes before choosing an auditor?",
      answer:
        "Yes. You’ll see all your quotes side by side with key info like firm background, fees, expected timelines, and included services. You’re always in control and can choose based on what matters most to your business.",
    },
    {
      question: "What happens after I accept an audit proposal?",
      answer:
        "After you accept, the auditor is notified instantly. Your private audit workspace opens up, where you can chat, share documents, and track progress. Everything stays in one place from start to finish.",
    },
    {
      question:
        "What if I don’t know what documents to upload? Will the auditor guide me?",
      answer:
        "Don’t worry, you don’t need to be an expert. Our platform gives you a checklist based on your audit type, and once connected, your auditor can request anything specific. You’ll always know what’s needed, and how to upload it.",
    },
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
          <Link href={"/faq"}>
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
