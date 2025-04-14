'use client';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewSection = () => {
  const reviews = [
    {
      title: 'This place was fantastic!',
      content:
        'Great location, safe and spotless. Steve and team were great hosts. Very attentive, great communication, and super flexible. Will return soon.',
      author: 'Mark',
      date: 'September, 2024',
    },
    {
      title: 'This place was fantastic!',
      content:
        'Great location, safe and spotless. Steve and team were great hosts. Very attentive, great communication, and super flexible. Will return soon.',
      author: 'Mark',
      date: 'September, 2024',
    },
    {
      title: 'This place was fantastic!',
      content:
        'Great location, safe and spotless. Steve and team were great hosts. Very attentive, great communication, and super flexible. Will return soon.',
      author: 'Mark',
      date: 'September, 2024',
    },
  ];

  return (
    <section className="bg-[#f2e8df] py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
        What our guests are saying
      </h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white/0 text-black rounded-lg shadow-none"
          >
            <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
            <div className="flex justify-center mb-3 text-[#0570b0]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-sm max-w-sm mx-auto">{review.content}</p>
            <div className="mt-6 font-bold">{review.author}</div>
            <div className="text-xs">{review.date}</div>
          </div>
        ))}
      </div>
      <button className="mt-12 text-sm font-semibold underline text-black transition">
        See more reviews
      </button>
    </section>
  );
};

export default ReviewSection;
