'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden pt-[160px]">
        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          muted
          playsInline
          poster="/loader.webp"
        >
          <source src="https://wavevacationrentals.com/waveHero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Circle Button */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       bg-white rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center 
                       shadow-lg cursor-pointer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
              alt="Play"
              className="w-6 h-6 md:w-8 md:h-8 opacity-80"
            />
          </button>
        )}

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10"></div>

        {/* Hero Content (Bottom Aligned) */}
<div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-4xl px-6">
  <div className="bg-[#115e72]/20 backdrop-blur-sm py-6 px-4 text-center text-white">
    <h1 className="text-4xl md:text-6xl font-bold">Wave Vacation Rentals</h1>
    <h4 className="text-lg md:text-2xl mt-2">
      Luxury vacation Rentals | Playa Avellanas, Costa Rica
    </h4>
  </div>
          <div className="mt-6 flex justify-center space-x-4">
            <Link href="https://book.wavevacationrentals.com/all-listings">
              <button className="px-6 py-3 bg-[#0e5d70] hover:bg-[#179cbc] rounded-lg font-medium">
                Our Listings
              </button>
            </Link>
            <Link href="https://cr-3d.com/Tours/Thepointenclave//">
              <button className="px-6 py-3 bg-gray-700 hover:bg-[#7e7e7e] rounded-lg font-medium">
                3D Tour
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
