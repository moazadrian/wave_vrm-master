import React from 'react'

const InfoSec = () => {
  return (
    <div className="bg-[#adc0c6] h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-6">
      <h6 className="text-sm font-medium tracking-wider text-gray-700">
      WELCOME TO WAVE VACATION RENTALS
      </h6>
      <h2 className="text-4xl font-bold mt-2 text-gray-900">
        Sun, Surf & Luxury
      </h2>
      <p className="text-lg mt-4 text-gray-700 max-w-2xl">
      We host luxury villas, set in a magical natural environment, with high-speed internet, gorgeous swimming pools, and fragrant gardens. The villas are located near the world-class Playa Avellanas beach for surfing and great community with delicious local restaurants.
      </p>
      <div className="mt-6 flex space-x-4">
        <button className="px-6 py-3 border border-gray-700 text-gray-900 hover:bg-gray-200 rounded-lg font-medium">
          Learn More
        </button>
        <button className="px-6 py-3 bg-[#a07d3b] text-white hover:bg-[#8a6830] rounded-lg font-medium">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default InfoSec