import React from 'react'

const Footer = () => {
  return (
<footer className="bg-[#b0c4c9] py-10 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-start">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://bookingenginecdn.hostaway.com/account/attachment/95957-qq2dgEB0CKQ8J8d7ihcUmbyXjM8xkZk17elywb8Ts4s-67b7a73c23878?width=600&quality=70&format=webp&v=2"
            alt="Wave Vacation Rentals"
            className="h-12"
          />
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-white text-sm ml-6">
          <a href="https://wavetest.holidayfuture.com/privacy-policy" className="hover:underline" target='_blank'>Privacy Policy</a>
          <a href="https://wavetest.holidayfuture.com/terms-and-conditions" className="hover:underline" target='_blank'>Terms and Conditions</a>
        </div>
      </div>
    </footer>


  )
}

export default Footer