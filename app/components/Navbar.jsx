'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import React from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  return (
    <nav className="bg-[#0e5d70] shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="https://bookingenginecdn.hostaway.com/account/attachment/95957-qq2dgEB0CKQ8J8d7ihcUmbyXjM8xkZk17elywb8Ts4s-67b7a73c23878?width=600&quality=70&format=webp&v=2" 
              alt="Wave VRM Logo" 
              width={150} 
              height={50} 
              className="object-contain"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <div 
            className="relative"
            onMouseEnter={() => setShowPreview(true)}
            onMouseLeave={() => setShowPreview(false)}
          >
            {/* <Link href="https://cr-3d.com/Tours/Thepointenclave//" target="_blank" className="text-white hover:text-gray-300 font-medium">
              Explore Avellanas
            </Link> */}
            <Link href="/explore-avellanas" className="text-white hover:text-gray-300 font-medium">
              Explore Avellanas
            </Link>
{/* 
            {showPreview && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 h-40 bg-white shadow-lg border rounded-lg overflow-hidden">
                <Image
                  src="/preview.png"
                  alt="3D Tour Preview"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )} */}
          </div>
          <Link href="https://wavetest.holidayfuture.com/all-listings" target="_blank" className="text-white hover:text-gray-300 font-medium">
            All Listings
          </Link>
          <Link href="/property-management" className="text-white hover:text-gray-300 font-medium">
            Property Management
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300 font-medium">
            Contact Us
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 font-medium">
            About
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none text-2xl">
            ☰
          </button>
        </div>
      </div>
    </div>
    {isOpen && (
      <div className="md:hidden bg-[#0e5d70] py-2 space-y-2 px-4 shadow-md">
        <Link href="https://cr-3d.com/Tours/Thepointenclave//" target="_blank" className="block text-white hover:text-gray-300 font-medium">
          Explore Avellanas
        </Link>
        <Link href="https://wavetest.holidayfuture.com/all-listings" target="_blank" className="block text-white hover:text-gray-300 font-medium">
          All Listings
        </Link>
        <Link href="/property-management" className="block text-white hover:text-gray-300 font-medium">
          Property Management
        </Link>
        <Link href="https://wavetest.holidayfuture.com/contact-us" className="block text-white hover:text-gray-300 font-medium">
          Contact Us
        </Link>
        <Link href="https://wavetest.holidayfuture.com/about-us" className="block text-white hover:text-gray-300 font-medium">
          About
        </Link>
      </div>
    )}
  </nav>
  )
}

export default Navbar