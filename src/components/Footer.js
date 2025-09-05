import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import logo from '../assets/htlogo.png';

// =======================================================================================
// FOOTER COMPONENT
// =======================================================================================
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          {/* The logo and title are now a single link to the homepage */}
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors cursor-pointer">
            <img src={logo} alt="Hidden Traveller Logo" className="h-10 w-auto" />
            <h3 className="text-xl font-bold">Hidden Traveller</h3>
          </Link>
          <p className="text-sm">Providing unforgettable adventures across India.</p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/hiddentraveller" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors" aria-label="Instagram"><Instagram /></a>
            <a href="https://www.facebook.com/hiddentraveller" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors" aria-label="Facebook"><Facebook /></a>
            <a href="https://www.youtube.com/channel/UC-YOUR-CHANNEL-ID" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors" aria-label="YouTube"><Youtube /></a>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
            {/* Added links for Privacy Policy and Terms & Conditions */}
            <li><Link to="/privacy-policy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-teal-400 transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Popular Tours</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/udupi-gokarna" className="hover:text-teal-400 transition-colors">Udupi & Gokarna</Link></li>
            <li><Link to="/varanasi-ayodhya" className="hover:text-teal-400 transition-colors">Varanasi & Ayodhya</Link></li>
            <li><Link to="/pondicherry" className="hover:text-teal-400 transition-colors">Pondicherry</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:hiddentravellerindia@gmail.com" className="hover:text-teal-400 transition-colors">hiddentravellerindia@gmail.com</a></li>
            <li><a href="tel:+919876543210" className="hover:text-teal-400 transition-colors">+91 98765 43210</a></li>
            <li>Dholemala Society, Salisbury Park, Pune, India</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-10 pt-6 border-t border-gray-700">
        &copy; {new Date().getFullYear()} HiddenTraveller. All rights reserved.
      </div>
    </footer>
  );
}