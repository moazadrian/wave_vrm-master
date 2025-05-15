import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const page = () => {
  return (
    <>
    <Navbar />
    <section className="bg-gray-50 px-6 py-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-8">Feel free to contact us using the form below</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-5 py-3 text-base border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3 text-base border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Simulated Phone Input */}
            <div className="flex items-center border border-gray-300 rounded-md bg-white overflow-hidden">
              <div className="px-4 text-sm text-gray-700">🇳🇴 +47</div>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              rows="4"
              placeholder="Write something"
              className="w-full px-5 py-3 text-base border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <label className="flex items-start gap-2 text-sm text-gray-700">
              <input type="checkbox" className="mt-1" required />
              I agree to the&nbsp;
              <a href="#" className="font-semibold text-blue-700 hover:underline">Privacy Policy</a> and&nbsp;
              <a href="#" className="font-semibold text-blue-700 hover:underline">Terms of Service</a>
            </label>

            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition"
            >
              Send
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-gray-800 text-base">
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <a href="mailto:steve@hubbardhospitality.com" className="text-blue-600 hover:underline">
                steve@hubbardhospitality.com
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p>+1 (831) 239-8715</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p>3225 McLeod Dr</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default page