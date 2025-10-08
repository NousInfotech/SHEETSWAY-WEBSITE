"use client";

import React, { useState } from "react";
import FAQItem from "@/components/common/FAQItem";
import Link from "next/link";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqData = [
    {
      question: "What is Sheetsway Marketplace and how does it help auditors?",
      answer:
        "Sheetsway Marketplace is a digital platform where auditors connect directly with businesses in need of audit services. It gives auditors a steady flow of new clients, streamlined proposal tools, and a modern environment to manage engagements from start to finish. The platform is built to help you find work, collaborate remotely, and deliver high-quality audits using built-in automation and integrated tools.",
    },
    {
      question: "Can Sheetsway help me scale my audit practice remotely?",
      answer:
        "Yes. Sheetsway is designed for remote scalability. Whether you’re working solo or managing a growing team, our platform lets you collaborate, assign tasks, communicate with clients, and handle every part of the audit online — from proposals to final reports. Built-in tools for AI-based planning, document handling, and communication make remote auditing seamless and efficient.",
    },
    {
      question: "Can I work as a solo auditor, join a team, or lead a firm?",
      answer:
        "Absolutely. Sheetsway gives you full flexibility — you can freelance on your own, join another firm, or even create your own branded audit firm by teaming up with auditors around the world. The platform supports virtual firm creation with team permissions, branding options, and shared client portals — allowing you to grow your practice with collaborators, wherever they are.",
    },
    {
      question: "How do I get audit jobs on the platform?",
      answer:
        "Once your profile is set up and verified, you can browse live audit requests from real businesses. Each request includes budget details, deadlines, and scope. You can submit your proposal directly through the portal and negotiate terms. When a client accepts your proposal, the engagement begins — all within the platform.",
    },
    {
      question: "Are there any fees for using the platform as an auditor?",
      answer:
        "There are no upfront or subscription fees. You can create your account, list your services, and start submitting proposals for free. Sheetsway only takes a small commission once an audit job is finalized and paid. It’s a pay-as-you-earn system designed to support you at every stage of growth.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white -mt-0">
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
        <Link href={"/faq"}>
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
        </Link>
      </div>
    </section>
  );
};

export default FAQSection;
