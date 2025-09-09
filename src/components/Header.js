import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/htlogo.png';

export default function Header({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const [isEnquiryDropdownOpen, setIsEnquiryDropdownOpen] = useState(false);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    {
      name: "Enquiry",
      isDropdown: true,
      subLinks: [
        { name: "Corporate Trek & Team Outing", path: "https://forms.gle/GR32auxNme4G2iTL8" },
        { name: "Customise Tour", path: "https://forms.gle/8jYjsTZwhJCfBSHYA" }
      ]
    }
  ];

  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.innerWidth >= 768) {
          setIsMobileMenuOpen(false);
          setIsEnquiryDropdownOpen(false);
        }
      }, 100);
    };
    window.addEventListener('resize', handleResize);
    if (window.innerWidth >= 768) {
      setIsMobileMenuOpen(false);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [setIsMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsEnquiryDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm" role="banner">
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center" role="navigation">
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3 cursor-pointer">
          <img src={logo} alt="Hidden Traveller Logo" className="h-8 w-auto" />
          <span className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight">Hidden Traveller</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => {
            if (link.isDropdown) {
              return (
                <div key={link.name} className="relative group">
                  <button
                    onClick={() => setIsEnquiryDropdownOpen(!isEnquiryDropdownOpen)}
                    className="flex items-center text-gray-600 hover:text-teal-600 font-medium transition-colors text-base"
                  >
                    {link.name}
                    <ChevronDown size={18} className={`ml-1 transition-transform duration-200 ${isEnquiryDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                  <div
                    className={`absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out transform ${
                      isEnquiryDropdownOpen
                        ? 'scale-100 opacity-100 visible'
                        : 'scale-95 opacity-0 invisible'
                    }`}
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="enquiry-menu">
                      {link.subLinks.map(subLink => (
                        <a
                          key={subLink.name}
                          href={subLink.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsEnquiryDropdownOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600 transition-colors"
                          role="menuitem"
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 hover:text-teal-600 font-medium transition-colors relative group text-base"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation (Updated with dropdown) */}
      <div
        className={`md:hidden fixed left-0 right-0 z-40 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-y-auto ${
          isMobileMenuOpen
            ? 'translate-y-0 opacity-100 max-h-screen pointer-events-auto'
            : '-translate-y-full opacity-0 max-h-0 pointer-events-none'
        }`}
        style={{ top: `${headerHeight}px` }}
      >
        <div className="flex flex-col p-4 sm:p-6 space-y-4 pt-safe pb-safe">
          {navLinks.map(link => {
            if (link.isDropdown) {
              return (
                <div key={link.name} className="flex flex-col">
                  <button
                    onClick={() => setIsEnquiryDropdownOpen(!isEnquiryDropdownOpen)}
                    className="flex items-center justify-center text-gray-600 hover:text-teal-600 font-medium transition-colors py-3 text-lg border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {link.name}
                    <ChevronDown size={20} className={`ml-2 transition-transform duration-200 ${isEnquiryDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                  <div className={`flex flex-col transition-all duration-300 ease-in-out ${isEnquiryDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    {link.subLinks.map(subLink => (
                      <a
                        key={subLink.name}
                        href={subLink.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsEnquiryDropdownOpen(false);
                        }}
                        className="text-gray-600 hover:text-teal-600 font-medium transition-colors py-2 text-base text-center border-b border-gray-100"
                      >
                        {subLink.name}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-teal-600 font-medium transition-colors py-3 text-lg text-center border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}