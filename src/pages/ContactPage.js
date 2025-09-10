import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

// =======================================================================================
// CONTACT PAGE COMPONENT
// This page now has its own file and is a default export with updated content.
// =======================================================================================
export default function ContactPage() {
  return (
    <section className="container mx-auto p-4 md:p-8 min-h-[60vh] flex flex-col items-center justify-center text-gray-800">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Contact Us – Hidden Traveller 🌍✨</h2>
        <p className="text-lg text-gray-600 mb-2">Got questions? Ready to explore differently?</p>
        <p className="text-lg text-gray-600">Or want to plan your next unforgettable journey with us? 🎒</p>
        <p className="text-lg text-gray-600 mt-4">We’d love to hear from you! Whether it’s about bookings, collaborations, or just sharing travel stories — we’re always here for you. ❤️</p>
      </div>

      {/* Contact Details Section */}
      <div className="w-full max-w-3xl bg-white p-6 md:p-12 rounded-2xl shadow-xl space-y-6 text-left mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Reach Us Here 📬</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          <div className="flex items-center space-x-4">
            <Mail className="text-teal-500" size={24} />
            <div>
              <p className="font-semibold">Email</p>
              <a href="mailto:hiddentravellerindia@gmail.com" className="text-gray-600 hover:text-teal-500 transition-colors">hiddentravellerindia@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-teal-500" size={24} />
            <div>
              <p className="font-semibold">Call / WhatsApp</p>
              <a href="tel:+918668271086" className="text-gray-600 hover:text-teal-500 transition-colors">+91 86682 71086</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Instagram className="text-pink-500" size={24} />
            <div>
              <p className="font-semibold">Instagram</p>
              <a href="https://www.instagram.com/hiddentraveller" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition-colors">@hiddentraveller</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook className="text-blue-600" size={24} />
            <div>
              <p className="font-semibold">Facebook</p>
              <a href="https://www.facebook.com/hiddentraveller" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">Hidden Traveller</a>
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-4 mt-6">
          <MapPin className="text-red-500" size={24} />
          <div>
            <p className="font-semibold">Address</p>
            <address className="text-gray-600 not-italic">
              Dholemala Society, Salisbury Park, <br />
              Gultekadi, Pune, Maharashtra 411037
            </address>
          </div>
        </div>
      </div>

      {/* Booking & Invitations Section */}
      <div className="w-full max-w-3xl bg-gray-50 p-6 md:p-12 rounded-2xl shadow-xl text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Booking & Invitations 🎟️</h3>
        <p className="text-lg text-gray-600 mb-6">
          Our trips are invitation-only and crafted for limited explorers. Here’s how to join the tribe:
        </p>
        <ul className="space-y-4 text-left">
          <li className="flex items-center space-x-3">
            <span className="text-teal-500 font-bold text-xl">1️⃣</span>
            <p className="text-gray-700">Fill out the Google Form ✍️</p>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-teal-500 font-bold text-xl">2️⃣</span>
            <p className="text-gray-700">Our team will carefully review your application.</p>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-teal-500 font-bold text-xl">3️⃣</span>
            <p className="text-gray-700">Receive your personal invite & detailed itinerary via WhatsApp or email.</p>
          </li>
        </ul>
      </div>

      {/* Quote Section */}
      <div className="mt-12 text-center max-w-2xl mx-auto">
        <blockquote className="text-xl italic text-gray-700 font-semibold border-l-4 border-teal-500 pl-4">
          “Your next great story begins with a single message.
          Let’s explore the hidden together.” 🌱
        </blockquote>
      </div>
    </section>
  );
}