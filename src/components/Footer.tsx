import React from 'react';
import Image from 'next/image';
import assets from '@/data/assets';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        {/* First Row: Logo, Solutions, Company, Knowledge Base, Social Media */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo Section */}
          <div>
            <Image 
              src={assets.LogoSvg} 
              alt="SheetSway" 
              width={150} 
              height={40} 
              className="h-8 w-auto"
            />
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  Sheetsway Audit Software
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  Sheetsway Client Connect
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  Advanced Extraction Excel Plugin
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  Financial Statement Word Plugin
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  Meet Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Knowledge Base */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Knowledge Base</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  Tutorials & Guides
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Social Media</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Row: Partner with us, Care Center */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Empty column to align with logo */}
          <div></div>

          {/* Partner with us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Partner with us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  Grow with us
                </a>
              </li>
            </ul>
          </div>

          {/* Care Center */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Care Center</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  Meet with us
                </a>
              </li>
            </ul>
          </div>

          {/* Empty columns */}
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 A4 Malta. All rights reserved
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Terms and Conditions
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                License
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Application Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;