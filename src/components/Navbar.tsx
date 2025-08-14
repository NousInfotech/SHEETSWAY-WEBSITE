'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import assets from '@/data/assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Solution', href: '#', hasDropdown: true },
    { name: 'Knowledge Base', href: '#', hasDropdown: true },
    { name: 'Pricing', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 w-full fixed top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src={assets.LogoPng}
              alt="SheetSway Logo"
              width={150}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <svg
                        className="ml-1 h-4 w-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 px-4 py-2 text-sm font-medium transition-colors duration-200"
            >
              Login
            </a>
            <a
              href="#"
              className="bg-orange-50 hover:bg-orange-100 text-orange-500 px-6 py-2 rounded-xl text-sm font-medium transition-colors duration-200 border border-orange-100"
            >
              Try for Free
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <a
                href="#"
                className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium"
              >
                Login
              </a>
              <a
                href="#"
                className="bg-orange-50 hover:bg-orange-100 text-orange-500 block px-3 py-2 rounded-xl text-base font-medium mt-2 mx-3 text-center transition-colors duration-200 border border-orange-100"
              >
                Try for Free
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;