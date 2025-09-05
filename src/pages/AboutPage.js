import React from 'react';
import { Compass } from 'lucide-react';

// =======================================================================================
// ABOUT PAGE COMPONENT
// =======================================================================================
export default function AboutPage() {
  return (
    <section className="container mx-auto p-4 md:p-8 text-center flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">About Hidden Traveller 🌍✨</h2>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        At Hidden Traveller, we believe travel is more than just visiting places — it’s about living stories.
      </p>

      {/* Main Philosophy Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-xl text-gray-700 mb-6">
          We are a community of explorers, not tourists. Our journeys go beyond crowded spots and typical itineraries, taking you to hidden gems, local cultures, and authentic experiences that most travelers never get to see.
        </p>
        <p className="text-xl text-gray-700 mb-6">
          Our trips are invitation-only and designed for limited explorers, ensuring every journey feels personal, meaningful, and unforgettable. Whether it’s kayaking through secret backwaters, trekking to undiscovered peaks, or sharing stories around a local’s dinner table — we make sure every moment stays with you forever.
        </p>
      </div>

      {/* Why We Exist Section */}
      <div className="bg-gray-50 p-6 md:p-12 rounded-2xl shadow-lg w-full max-w-3xl mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Why We Exist 🌱</h3>
        <p className="text-lg text-gray-600 mb-8">
          The world doesn’t need another travel company. It needs a movement of conscious travelers who care about places, people, and the planet.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-left text-lg text-gray-700">
          <li className="flex items-center space-x-3">
            <span className="text-teal-500 font-bold text-2xl">•</span>
            <span>Authentic Travel – Living like locals, not just passing through.</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-teal-500 font-bold text-2xl">•</span>
            <span>Small, Curated Batches – Quality over quantity.</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-teal-500 font-bold text-2xl">•</span>
            <span>Offbeat Adventures – Exploring places most don’t know about.</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-teal-500 font-bold text-2xl">•</span>
            <span>Sustainable Journeys – Respecting nature and culture.</span>
          </li>
        </ul>
      </div>

      {/* Our Vibe Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Vibe 🌟</h3>
        <blockquote className="text-2xl italic font-semibold text-gray-700 mb-8 border-l-4 border-teal-500 pl-4">
          “We don’t collect souvenirs. We collect stories.”
        </blockquote>
        <p className="text-lg text-gray-600 mb-8">
          From Varanasi’s mystical ghats to Gokarna’s secret beaches, from Pondicherry’s colorful streets to Udupi’s untouched backwaters, every Hidden Traveller trip is a new chapter in a storybook we’re writing together.
        </p>
        <div className="flex flex-col items-center">
          <p className="text-xl font-bold text-teal-600 mb-4">
            If you’re ready to travel differently, to explore deeply, connect deeply, and live deeply, welcome to the tribe. ❤️
          </p>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <Compass className="text-teal-500 mx-auto mb-4" size={48} />
            <p className="text-gray-600 font-semibold">Ready to begin your story? Explore our trips.</p>
          </div>
        </div>
      </div>
    </section>
  );
}