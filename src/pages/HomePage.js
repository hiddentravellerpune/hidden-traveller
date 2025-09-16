import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Sun, Compass, Mountain, Star } from 'lucide-react';

// Import carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import homephoto from '../assets/homephoto.jpg';
import SahyadriImage from '../assets/Sahyadri.jpg';
import ImageOne from '../assets/image1.jpg';
import ImageTwo from '../assets/image2.jpg';
import ImageThree from '../assets/image3.jpg';



import VaranasiAyodhyaImage from '../assets/VaranasiAyodhya.jpg';
import UdupiGokarnaImage from '../assets/UdupiGokarna.jpg';
import PondicherryImage from '../assets/Pondicherry.jpg';

// =======================================================================================
// Star Rating Component
// =======================================================================================
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    );
  }
  return <div className="flex justify-center mb-4">{stars}</div>;
};

// =======================================================================================
// HOME PAGE COMPONENT
// The main landing page.
// =======================================================================================
export default function HomePage() {
  // Data for the image carousel
  const heroSlides = [
    {
      title: "Welcome to Hidden Traveller",
      description: "Your adventure awaits...",
      image: homephoto,
    },
    {
      title: "Explore Hidden Sahyadri",
      description: "Offbeat Waterfalls, Camping & Crowdfree Forts...",
      image: SahyadriImage,
    },
    {
      title: "Discover Varanasi & Ayodhya",
      description: "A spiritual journey to India's ancient cities.",
      image: ImageOne,
    },
    {
      title: "Unveiling Udupi & Gokarna",
      description: "A coastal adventure with temples, treks and backwaters.",
      image: ImageTwo,
    },
    {
      title: "Experience Serene Pondicherry",
      description: "A serene coastal town with French influence.",
      image: ImageThree,
    },
    
  ];

  // Data for the tour cards
  const tourCategories = [
    {
      title: "Udupi & Gokarna",
      description: "A coastal adventure with temples, treks and backwaters.",
      image: UdupiGokarnaImage,
      path: "/udupi-gokarna",
    },
    {
      title: "Varanasi & Ayodhya",
      description: "A spiritual journey to India's ancient cities.",
      image: VaranasiAyodhyaImage,
      path: "/varanasi-ayodhya",
    },
    {
      title: "Pondicherry",
      description: "A serene coastal town with French influence.",
      image: PondicherryImage,
      path: "/pondicherry",
    }
  ];

  // Data for the testimonials section
  const testimonials = [
    {
      rating: 5,
      quote: "Close your eyes and trust Hidden Traveller. I've just had an amazing experience with them. The whole trek was organised so efficiently. Right from communicating all the information to food & travel arrangements. The whole process was smooth. Also the trek leaders took really good care of everyone's safety. This is the most genuine and best trek organizing company I've come across, they truly admire nature and respect it. 🫶✨️ Kudos to Uday and his team! They are doing a brilliant job by getting a community of nature lovers together and offering them the most beautiful experiences that too at reasonable prices.",
      name: "Pranali Shetye",
    },
    {
      rating: 5,
      quote: "Thank you so much for organising such an amazing OFFBEAT WATERFALL TREK which was actually crowd-free and safe!! Everything was just perfect. Right from the communication, pickup time, breakfast ( we absolutely loved the way it was arranged ^^), guidelines, warmup before the trek and the most important part Safety at the waterfalls 🤝🤝✨ Can’t thank you enough for the wonderful day🤌🏻 Looking forward for more such treks💪🏻",
      name: "Shre W",
    },
    {
      rating: 5,
      quote: "It was very awesome experience with hidden traveller. Thank you so much for organizing such a fantastic waterfall trek! Everything—from the scenic trail and the refreshing waterfall to the great company—made it an unforgettable experience. Your efforts and coordination were truly appreciated. Looking forward to more adventures with you all!",
      name: "Ujala Singh",
    }
  ];

  // Settings for the carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <>
      {/* Hero Carousel Section */}
      <section className="relative">
        <Slider {...carouselSettings}>
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative h-[60vh] md:h-[80vh]">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white max-w-3xl p-4">
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{slide.title}</h1>
                  <p className="text-lg md:text-xl font-light">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Featured Tours Section */}
      <section className="container mx-auto p-4 md:p-8 mt-4">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Adventures</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourCategories.map((tour, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden group">
              <div className="relative overflow-hidden w-full pt-[78.7%]">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{tour.title}</h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <Link to={tour.path}
                    className="inline-block bg-teal-500 text-white px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:bg-teal-600">
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 p-8 md:p-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Why Hidden Traveller?</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            We are passionate about creating safe, memorable, and authentic travel experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Sun className="text-yellow-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Our experienced guides ensure your safety and enjoyment on every trip.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Compass className="text-teal-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Seamless Planning</h3>
              <p className="text-gray-600">From transport to accommodation, we handle all the details for you.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Mountain className="text-gray-800 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Authentic Experiences</h3>
              <p className="text-gray-600">We take you off the beaten path to truly connect with nature and culture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto p-4 md:p-8">
        <h2 className="text-4xl font-bold text-center mb-8">What Our Hidden Travellers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <StarRating rating={testimonial.rating} />
              <p className="italic text-gray-700 mb-4 flex-grow">"{testimonial.quote}"</p>
              <p className="font-bold text-teal-600 mt-auto">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}