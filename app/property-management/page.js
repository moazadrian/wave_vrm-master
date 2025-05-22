import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

export const metadata = {
  title: 'Wave Vacation Rentals',
  description: 'Boutique Vacation Rentals in Playa Avellanas, Costa Rica',
}

const page = () => {
  return (
     <>
     <Navbar />
     <SearchBar />
    <section className='pt-[160px]'>
<section className="bg-[#f9fafb] text-gray-800 px-6 py-16 lg:px-24">
  <div className="w-full max-w-screen-xl mx-auto">
    <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
      Property Management by Wave Vacation Rentals
    </h1>
    <p className="text-xl text-gray-600 mb-12">
      Boutique Service. Exceptional Standards.
    </p>

    <p className="text-lg mb-8 leading-relaxed text-gray-700 max-w-4xl">
      At <strong>Wave Vacation Rentals</strong>, we offer full-service, boutique vacation rental management in the heart of Playa Avellanas, Costa Rica. {"We’re not just managers—we’re passionate hosts committed to delivering 5-star guest experiences and caring for each property as if it were our own."}
    </p>

    <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900">
      Our approach is rooted in three core commitments:
    </h2>

    <div className="grid gap-10 max-w-4xl">
      <div>
        <h3 className="text-xl font-bold mb-2" style={{ color: '#0e5d70' }}>
          Unmatched Guest Experience
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {"Every stay matters. From seamless check-ins to thoughtful touches and quick communication, we create the kind of experiences that lead to glowing reviews and repeat bookings."}
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2" style={{ color: '#0e5d70' }}>
          Personalized Concierge Services
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {"From surf lessons and yoga to private chefs and transportation, our dedicated team helps guests make the most of their time in Avellanas. We handle the details, so they can focus on enjoying pura vida."}
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2" style={{ color: '#0e5d70' }}>
          Meticulous Property Care
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {"We pride ourselves on keeping every home in \"like new\" condition. Proactive maintenance not only protects your asset, it elevates the guest experience—and boosts your ROI through better reviews and higher demand."}
        </p>
      </div>
    </div>

    <p className="mt-12 text-lg text-gray-800 max-w-3xl">
      {"If you’re looking for a trusted local partner who will care for your home and guests with integrity and enthusiasm, we’d love to connect."}
    </p>

    <p className="mt-6 text-gray-600 max-w-3xl">
      {"Check out our Airbnb reviews to see what guests are saying about the Wave experience."}<br />
      {"Contact us to learn more—we’re passionate about what we do and would love to share more with you."}
    </p>

    <div className="mt-12 border-t pt-8">
      <p className="text-lg font-semibold text-gray-800">
        {"Pura Vida,"}<br />Steve & Laura
      </p>
      <p className="text-gray-700">Wave Vacation Rentals</p>
      <p className="text-gray-700">
        📧 <a href="mailto:info@wavevacationrentals.com" className="text-blue-600 hover:underline">info@wavevacationrentals.com</a>
      </p>
      <p className="text-gray-700">
        📱 <a href="https://wa.me/50661790687" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">(WhatsApp) +506 6179-0687</a>
      </p>
    </div>
  </div>
</section>
</section>
    <Footer />
    </>
  )
}

export default page