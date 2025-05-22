'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

export default function AboutPage() {
  return (
    <>
    <Navbar />
   <SearchBar />
    <main className="bg-white pt-[160px]">
     {/* Header Section */}
<section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage: `url('https://bookingenginecdn.hostaway.com/account/attachment/95957-IPKvg--YaY4UcCv7UFhJAdpi4lVDSPTkvrRMTk6-lRj4-67b7912c6c8bb?width=1200&quality=70&format=webp&v=2')`,
    }}
  />
  <div className="absolute inset-0 bg-black opacity-40 z-10" />
  <h1 className="relative z-20 text-white text-4xl md:text-6xl font-bold text-center px-4">
    About Wave Vacation Rentals
  </h1>
</section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="text-gray-800 text-lg space-y-6 leading-relaxed">
          <p>
            At Wave Vacation Rentals, we’re more than just a vacation rental company—we’re passionate about creating
            unforgettable experiences in Playa Avellanas, Costa Rica. Founded by Steve Hubbard and Laura Paniagua, our
            mission is to offer guests the perfect blend of comfort, convenience, and local charm.
          </p>

          <p>
            Steve brings a wealth of experience from the technology and startup world and is passionate about
            hospitality and creating amazing guest experiences, ensuring that our guests are well cared for and that
            our systems and processes run smoothly and efficiently with the latest innovations. Laura, with her
            deep-rooted expertise in hotel operations and property management, ensures that our operations run smoothly
            and efficiently and that our vacation homes are well cared for and maintained to our high standards.
          </p>

          <p>
            Together, we’ve built Wave Vacation Rentals with a commitment to high-quality stays, personalized service,
            and a love for the stunning natural beauty of Playa Avellanas. We do our best to see that every guest
            receives top-notch service and an authentic Costa Rican experience. Whether you’re looking for a peaceful
            retreat or an adventure-filled getaway, we’re here to make your stay truly special.
          </p>

          <p>Welcome to paradise—welcome to Wave!</p>
        </div>

        {/* Image */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://bookingenginecdn.hostaway.com/account/attachment/95957-IPKvg--YaY4UcCv7UFhJAdpi4lVDSPTkvrRMTk6-lRj4-67b7912c6c8bb?width=1200&quality=70&format=webp&v=2"
            alt="Playa Avellanas"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </main>
    </>
  );
}
