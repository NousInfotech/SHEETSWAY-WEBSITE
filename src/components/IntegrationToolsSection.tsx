'use client';

import React from 'react';
import Image from 'next/image';
import assets from '@/data/assets';

const IntegrationToolsSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={assets.At4x1MarketplacePng}
          alt="Background Pattern"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* OUR TOOLS Button */}
        <div className="text-center mb-16">
          <button 
            className="px-8 py-3 rounded-full text-white font-semibold text-sm uppercase tracking-wide"
            style={{ backgroundColor: '#FFA955' }}
          >
            Our Tools
          </button>
        </div>
        
        {/* Main Text */}
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gray-800">Let&apos;s </span>
            <span style={{ color: '#E8840C' }}>Integrate</span>
            <span className="text-gray-800"> With</span>
          </h2>
          <h3 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
            What You Already Know Best
          </h3>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Word Plugin Column */}
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-800">Word Plugin</h3>
              <p className="text-sm text-gray-700 font-bold leading-relaxed max-w-md mx-auto">
                Drafting Letters and preparing Financial Statements have never been easier.
              </p>
              <p className="text-sm text-gray-600">
                Data pulled from the portal, automatically populate your audit letters
              </p>
            </div>
            
            {/* Word Plugin Interface */}
            <div className="flex-1 bg-white border border-gray-200 rounded-xl p-8 shadow-lg max-w-md mx-auto flex flex-col">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <Image
                  src={assets.WordPluginIconPng}
                  alt="Word Plugin Icon"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              
              {/* Input Fields */}
              <div className="flex-1 space-y-4">
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Template</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value="IFRS" 
                      readOnly
                      className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Variables</label>
                  <input 
                    type="text" 
                    value="Company Address" 
                    readOnly
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Conditions</label>
                  <input 
                    type="text" 
                    value="if FS > 0 Then" 
                    readOnly
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              {/* Action Elements */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors relative group">
                  Save
                  {/* Arrow icon */}
                  <Image
                    src={assets.ArrowIconPng}
                    alt="Arrow Icon"
                    width={25}
                    height={25}
                    className="absolute top-7 -right-2 w-4 h-4 opacity-80"
                  />
                </button>
                <Image
                  src={assets.FileIconPng}
                  alt="Folder Icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center">
              <a href="#" className="text-lg text-gray-800 hover:text-gray-600 transition-colors">
                Explore our <span style={{ color: '#E8840C' }}>Drafting</span> tool {'>'}
              </a>
            </div>
          </div>

          {/* Excel Plugin Column */}
          <div className="flex flex-col h-full space-y-8 text-center">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-800">Excel Plugin</h3>
              <p className="text-sm font-bold text-gray-700 leading-relaxed max-w-md mx-auto">
                Upload Documents and Extract data with a click of a button.
              </p>
              <p className="text-sm text-gray-600">
                Populate working papers in seconds and keep everything referenced to the portal
              </p>
            </div>
            
            {/* Excel Plugin Interface */}
            <div className="flex-1 bg-white border border-gray-200 rounded-xl p-8 shadow-lg max-w-md mx-auto flex flex-col">
              {/* Excel Icon */}
              <div className="flex justify-center mb-8">
                <Image
                  src={assets.ExcelPluginIconPng}
                  alt="Excel Plugin Icon"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              
              {/* Feature Grid (2x2 Layout) */}
              <div className="flex-1 grid grid-cols-2 gap-4 place-items-center">
                {/* Top-Left Card: Text Extract */}
                <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-green-300 transition-colors w-full h-32 flex flex-col justify-center items-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">ABC</div>
                  <div className="text-sm text-gray-600 font-medium">Text Extract</div>
                </div>
                
                {/* Top-Right Card: Cross Reference */}
                <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-green-300 transition-colors w-full h-32 flex flex-col justify-center items-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">99=</div>
                  <div className="text-sm text-gray-600 font-medium">Cross Reference</div>
                </div>
                
                {/* Bottom-Left Card: Document Extraction */}
                <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-green-300 transition-colors w-full h-32 flex flex-col justify-center items-center">
                  <Image
                    src={assets.DocumentExtractionIconPng}
                    alt="Document Extraction"
                    width={32}
                    height={32}
                    className="w-8 h-8 mx-auto mb-2"
                  />
                  <div className="text-sm text-gray-600 font-medium">Document Extraction</div>
                </div>
                
                {/* Bottom-Right Card: Reconciliation */}
                <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-green-300 transition-colors w-full h-32 flex flex-col justify-center items-center">
                  <Image
                    src={assets.ReconciliationIconPng}
                    alt="Reconciliation"
                    width={32}
                    height={32}
                    className="w-8 h-8 mx-auto mb-2"
                  />
                  <div className="text-sm text-gray-600 font-medium">Reconciliation</div>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center">
              <a href="#" className="text-lg text-gray-800 hover:text-gray-600 transition-colors">
                Explore our <span style={{ color: '#E8840C' }}>Extraction</span> tool {'>'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationToolsSection; 