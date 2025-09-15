'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className='flex items-center justify-between px-6 py-4 bg-white shadow-sm'>
      <div className='flex items-center'>
        <Image
          src='/images/blog/Logo.png'
          alt='Sheetsway Logo'
          width={120}
          height={40}
          className='h-10 w-auto'
        />
      </div>

      <div className='hidden md:flex items-center space-x-8'>
        <div className='relative'>
          <button className='flex items-center text-gray-700 hover:text-gray-900'>
            Solutions
            <svg
              className='ml-1 w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </button>
        </div>
        <div className='relative'>
          <button className='flex items-center text-gray-700 hover:text-gray-900'>
            Knowledge Bank
            <svg
              className='ml-1 w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </button>
        </div>
        <Link href='/pricing' className='text-gray-700 hover:text-gray-900'>
          Pricing
        </Link>
        <Link href='/about' className='text-gray-700 hover:text-gray-900'>
          About Us
        </Link>
        <Link href='/contact' className='text-gray-700 hover:text-gray-900'>
          Contact Us
        </Link>
      </div>

      <div className='flex items-center space-x-4'>
        <Link href='/login' className='text-gray-700 hover:text-gray-900'>
          Login
        </Link>
        <Link
          href='/trial'
          className='bg-[rgba(232,132,12,0.15)] text-[rgba(232,132,12,0.7)] px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors'
        >
          Try for Free
        </Link>
      </div>
    </nav>
  )
}

export default Header