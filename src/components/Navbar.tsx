'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import assets from '@/data/assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Auditor', href: '/marketplace-auditor' },
    { name: 'Reseller', href: '/reseller' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About Us', href: '/about-us' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 w-full fixed top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="cursor-pointer">
              <Image
                src={assets.LogoPng}
                alt="SheetSway Logo"
                width={150}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Audit Software Button - First Position */}
              <div className="relative group">
                <a
                  href="https://www.sheetsway.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-100 text-orange-600 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-orange-200"
                >
                  Audit-Software
                </a>
              </div>
              
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Login Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-orange-500 px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center cursor-pointer"
              >
                Login
                <svg
                  className="ml-1 h-4 w-4 text-gray-400 transition-transform duration-200 group-hover:rotate-180"
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
              </button>
              <div className="absolute right-0 top-full pt-2 w-48 z-50 hidden group-hover:block hover:block">
                <div className="bg-white rounded-md shadow-lg py-1 border border-gray-200">
                  <a
                    href="https://sheetsway-audit-marketplace.vercel.app/auth/sign-in"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                  >
                    Client
                  </a>
                  <a
                    href="https://sheetsway-vetted-auditor-portal.vercel.app/auth/sign-in"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                  >
                    Auditor
                  </a>
                </div>
              </div>
            </div>

            {/* Sign Up Dropdown */}
            <div className="relative group">
              <button
                className="bg-orange-50 hover:bg-orange-100 text-orange-500 px-6 py-2 rounded-xl text-sm font-medium transition-colors duration-200 border border-orange-100 flex items-center cursor-pointer"
              >
                Sign Up
                <svg
                  className="ml-1 h-4 w-4 text-orange-400 transition-transform duration-200 group-hover:rotate-180"
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
              </button>
              <div className="absolute right-0 top-full pt-2 w-48 z-50 hidden group-hover:block hover:block">
                <div className="bg-white rounded-md shadow-lg py-1 border border-gray-200">
                  <a
                    href="https://sheetsway-audit-marketplace.vercel.app/auth/sign-up"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                  >
                    Client
                  </a>
                  <a
                    href="https://sheetsway-vetted-auditor-portal.vercel.app/auth/sign-up"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                  >
                    Auditor
                  </a>
                </div>
              </div>
            </div>
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
            {/* Mobile Audit Software Button - First Position */}
            <div>
              <a
                href="https://www.sheetsway.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-100 text-orange-500 hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-400 hover:text-white block px-3 py-2 text-base font-medium transition-all duration-200 border border-orange-200 rounded-lg mx-3 my-2 text-center"
              >
                Audit-Software
              </a>
            </div>
            
            {navigationItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 block px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              </div>
            ))}
            
            <div className="pt-4 pb-3 border-t border-gray-200">
              {/* Mobile Login Menu */}
              <div className="mb-2">
                <div className="text-gray-700 px-3 py-2 text-base font-medium">Login</div>
                <ul className="ml-4 border-l border-gray-200 pl-2">
                  <li>
                    <a
                      href="https://sheetsway-audit-marketplace.vercel.app/auth/sign-in"
                      className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-sm font-medium"
                    >
                      Client
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sheetsway-vetted-auditor-portal.vercel.app/auth/sign-in"
                      className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-sm font-medium"
                    >
                      Auditor
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Mobile Sign Up Menu */}
              <div className="mb-2">
                <div className="text-gray-700 px-3 py-2 text-base font-medium">Sign Up</div>
                <ul className="ml-4 border-l border-gray-200 pl-2">
                  <li>
                    <a
                      href="https://sheetsway-audit-marketplace.vercel.app/auth/sign-up"
                      className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-sm font-medium"
                    >
                      Client
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sheetsway-vetted-auditor-portal.vercel.app/auth/sign-up"
                      className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-sm font-medium"
                    >
                      Auditor
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;