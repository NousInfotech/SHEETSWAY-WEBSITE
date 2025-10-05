"use client";
import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { faqData, tabs } from '../../../../src/data/faqdata';

const FaqComponent = () => {
  const [activeTab, setActiveTab] = useState('clients');
  const [search, setSearch] = useState('');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (key) => {
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };



  const filterData = (data) => {
    if (!search.length) return data;
    
    return data
      .map((section) => {
        const filteredQuestions = section.questions.filter(
          (q) =>
            q.question.toLowerCase().includes(search.toLowerCase()) ||
            q.answer.toLowerCase().includes(search.toLowerCase())
        );
        
        return filteredQuestions.length > 0 
          ? { ...section, questions: filteredQuestions }
          : null;
      })
      .filter(Boolean);
  };

  const currentData = filterData(faqData[activeTab]);

  

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 rounded-xl p-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-white text-orange-400 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-6 py-4 text-lg border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          />
        </div>

        {/* Contact Section */}
        <div className="text-center mb-6">
          <p className="text-gray-600 text-lg mb-3">Haven't found what you're looking for?</p>
          <a href="#" className="text-orange-500 hover:text-orange-600 font-medium text-lg">
            Contact Us
          </a>
        </div>

        {/* Title */}
        <div className="text-center mb-0">
          <h1 className="text-5xl  text-gray-900 mb-6 leading-tight">
            Frequently Asked
            <br />
            Questions <span className="font-bold">by {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>
          </h1>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        {currentData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No FAQs found matching your search.</p>
          </div>
        ) : (
          <div className="space-y-16">
            {currentData.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-semibold text-gray-900 mb-8">
                  {section.heading}
                </h2>
                <div className="space-y-1">
                  {section.questions.map((item, index) => (
                    <div key={item.key} className="border-b border-gray-100 last:border-b-0">
                      <button
                        onClick={() => toggleItem(item.key)}
                        className="w-full flex justify-between items-center py-6 text-left hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-center">
                          <span className="text-gray-400 font-medium mr-4 min-w-[2rem]">
                            {index + 1}.
                          </span>
                          <span className="text-gray-900 font-medium text-lg group-hover:text-gray-700">
                            {item.question}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform ml-4 flex-shrink-0 ${
                            openItems[item.key] ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openItems[item.key] && (
                        <div className="pb-6 ml-12">
                          <p className="text-gray-600 text-lg leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqComponent;