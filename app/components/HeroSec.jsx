import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
        {/* Background Video */}
        <video
  className="absolute top-0 left-0 w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
  poster="/loader.jpg" // Add your local or hosted preview image here
>
  <source src="https://wavevacationrentals.com/waveHero.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>


        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>

        {/* Hero Content (Bottom Aligned) */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Wave VRM</h1>
          <h4 className="text-lg md:text-2xl mt-4">Experience the best we have to offer</h4>
          <div className="mt-6 flex justify-center space-x-4">
            <Link href="https://wavetest.holidayfuture.com/all-listings">
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
