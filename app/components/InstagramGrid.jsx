import React from 'react'

const InstagramGrid = () => {
   // Replace these with your actual image URLs or import statements
   const images = [
    '/surfing.png',
    '/restaurants.png',
    '/tours.png',
    '/surfing.png',
    '/restaurants.png',
    '/tours.png',
    '/surfing.png',
    '/restaurants.png'
  ];
  
    return (
        <section className="bg-[#175d6b] py-12">
        <div className="text-center mb-10">
          <h2 className="text-white text-3xl font-semibold">Find us on Instagram</h2>
        </div>
        <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
          {images.map((src, idx) => (
            <div key={idx} className="aspect-square overflow-hidden">
              <img
                src={src}
                alt={`Instagram photo ${idx + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </section>
  )
}

export default InstagramGrid