import React from 'react';
import Link from 'next/link';

const AvellanasOffer = () => {
  return (
    <div className="py-16 text-center bg-white">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-gray-900">What Avellanas Have to Offer</h2>

      {/* Image Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Image Placeholder 1 */}
        <div>
          <img src="/surfing.png" alt="surfing"/>
          {/* <div className="w-full h-80 bg-gray-200"></div> */}
          <h3 className="text-xl font-semibold mt-4 text-gray-900">Surfing</h3>
        </div>

        {/* Image Placeholder 2 */}
        <div>
        <img src="/restaurants.png" alt="Restaurants"/>
          <h3 className="text-xl font-semibold mt-4 text-gray-900">Restaurants</h3>
        </div>

        {/* Image Placeholder 3 */}
        <div>
        <img src="/tours.png" alt="Tours"/>
          <h3 className="text-xl font-semibold mt-4 text-gray-900">Tours</h3>
        </div>
      </div>

      {/* Description */}
      <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-700">
        Get to know Playa Avellanas and start planning your stay and adventures. 
        Find information about surfing, restaurants, cafés, tours, and events in 
        our guidebook, where you can easily get in contact with businesses and 
        reserve your spots before you arrive in Costa Rica.
      </p>

      {/* Button */}
      <Link href="https://cr-3d.com/Tours/Thepointenclave//">
      <button className="mt-6 px-6 py-3 bg-[#0e5d70] text-white rounded-lg font-medium hover:bg-[#179cbc]">
        Explore Avellanas from the Air
      </button>
      </Link>
    </div>
  )
}

export default AvellanasOffer