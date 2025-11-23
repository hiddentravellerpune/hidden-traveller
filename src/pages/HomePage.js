import React, { useRef, useEffect, useState } from 'react'; // ADDED useState HERE
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Sun, Compass, Mountain, Star, Calendar, Users, MapPin } from 'lucide-react';

// Import carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- Asset Imports (Assuming these paths are correct in your project) ---
// NOTE: Ensure these asset paths are correct in your local project structure.
import homephoto from '../assets/homephoto.jpg';
import SahyadriImage from '../assets/Sahyadri.jpg';
import ImageOne from '../assets/image1.jpg';
import ImageTwo from '../assets/image2.jpg';
import ImageThree from '../assets/image3.jpg';

import VaranasiAyodhyaImage from '../assets/VaranasiAyodhya.jpg';
import UdupiGokarnaImage from '../assets/UdupiGokarna.jpg';
import PondicherryImage from '../assets/Pondicherry.jpg';
import GorakhGadImage from '../assets/GorakhGad.jpg';
import KamalGadImage from '../assets/KamalGad.jpg';
import SStepWaterfallImage from '../assets/SStepWaterfall.jpg';
import HimachalImage from '../assets/Himachal.jpg';
import CustomtourImage from '../assets/Customtour.jpg';


// =======================================================================================
// Star Rating Component (Helper)
// =======================================================================================
const StarRating = ({ rating }) => {
    const totalStars = 5;
    return (
        <div className="flex justify-center mb-4">
            {Array(totalStars).fill().map((_, i) => (
                <Star
                    key={i}
                    className={`w-5 h-5 ${
                        i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                />
            ))}
        </div>
    );
};

// =======================================================================================
// Batch Card Component (Helper) - Used for Sahyadri Treks
// =======================================================================================

const BatchCard = ({ batch }) => {
    const isPathInProgress = batch.path === "In-Progress";
    const isBookingInProgress = batch.bookingLink === "In-Progress";
    
    return (
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-teal-100 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col">
            <div className="relative overflow-hidden w-full pt-[56.25%]">
                <img
                    src={batch.image}
                    alt={batch.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{batch.title}</h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2 min-h-[3rem]">{batch.description}</p>
                
                <div className="space-y-2 mb-6 text-sm flex-grow">
                    <div className="flex items-center text-gray-700">
                        <MapPin className="w-4 h-4 mr-2 text-teal-500" />
                        <span className='font-semibold'>Location:</span>&nbsp;{batch.location}
                    </div>
                    <div className="flex items-center text-gray-700">
                        <Calendar className="w-4 h-4 mr-2 text-teal-500" />
                        <span className='font-semibold'>Date:</span>&nbsp;{batch.date}
                    </div>
                    <div className="flex items-center text-gray-700">
                        <Users className="w-4 h-4 mr-2 text-teal-500" />
                        <span className='font-semibold'>Availability:</span>&nbsp;<span className='text-red-500 font-medium'>{batch.availability}</span>
                    </div>
                </div>

                <div className="mt-auto">
                    {isPathInProgress ? (
                        <div className="block text-center bg-gray-400 text-white px-6 py-3 rounded-lg font-bold cursor-not-allowed">
                            Details Coming Soon
                        </div>
                    ) : (
                        <Link 
                            to={batch.path}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block text-center bg-teal-500 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:bg-teal-600"
                        >
                            View Details
                        </Link>
                    )}
                    
                    {isBookingInProgress ? (
                        <div className="w-full block mt-4 text-center bg-gray-200 text-gray-600 px-5 py-3 rounded-lg font-bold shadow-sm cursor-not-allowed">
                            Booking Coming Soon
                        </div>
                    ) : (
                        <a
                            href={batch.bookingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full block mt-4 text-center border border-teal-500 text-teal-600 px-5 py-3 rounded-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-[1.01] hover:bg-teal-50"
                        >
                            Book now
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};


// =======================================================================================
// TOUR CARD COMPONENT (Helper for Backpacking Adventures)
// =======================================================================================
const TourCard = ({ tour }) => {
    const isLinkExternal = tour.path && tour.path.startsWith('http');
    const LinkComponent = isLinkExternal ? 'a' : Link;
    
    const linkProps = isLinkExternal 
        ? { 
            href: tour.path, 
            target: "_blank", 
            rel: "noopener noreferrer" 
          }
        : { 
            to: tour.path || '#'
          }; 

    const isPathInProgress = tour.path === "In-Progress";

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden group flex flex-col h-full">
            <div className="relative overflow-hidden w-full pt-[78.7%]">
                <img
                    src={tour.image}
                    alt={tour.title}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="p-6 text-center flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{tour.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2 min-h-[3rem] flex-grow-0">{tour.description}</p>
                
                <div className="space-y-2 mb-6 text-sm flex-grow"> 
                    {tour.location && (
                        <div className="flex items-center justify-center text-gray-700">
                            <MapPin className="w-4 h-4 mr-2 text-teal-500" />
                            <span className='font-semibold'>Location:</span>&nbsp;{tour.location}
                        </div>
                    )}
                    {tour.date && (
                        <div className="flex items-center justify-center text-gray-700">
                            <Calendar className="w-4 h-4 mr-2 text-teal-500" />
                            <span className='font-semibold'>Date:</span>&nbsp;{tour.date}
                        </div>
                    )}
                    {tour.availability && (
                        <div className="flex items-center justify-center text-gray-700">
                            <Users className="w-4 h-4 mr-2 text-teal-500" />
                            <span className='font-semibold'>Availability:</span>&nbsp;<span className='text-red-500 font-medium'>{tour.availability}</span>
                        </div>
                    )}
                </div>

                {isPathInProgress ? (
                    <div className="mt-auto inline-block bg-gray-400 text-white px-6 py-2 rounded-full font-bold cursor-not-allowed">
                        Coming Soon
                    </div>
                ) : (
                    <LinkComponent 
                        {...linkProps}
                        className="mt-auto inline-block bg-teal-500 text-white px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:bg-teal-600">
                        Explore
                    </LinkComponent>
                )}
            </div>
        </div>
    );
};

// =======================================================================================
// TESTIMONIAL CARD COMPONENT (Helper)
// =======================================================================================
const TestimonialCard = ({ quote, name, rating }) => {
    return (
        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 h-full flex flex-col justify-between min-h-[250px] md:min-h-[300px]"> 
            <div>
                {/* Star Rating Icons */}
                <div className="flex justify-center mb-3">
                    {Array(rating).fill().map((_, i) => (
                        <span key={i} className="text-yellow-500 text-xl">★</span>
                    ))}
                </div>
                
                {/* Quote */}
                <p className="text-gray-600 italic mb-4 leading-relaxed text-center">"{quote}"</p>
            </div>
            
            {/* Name */}
            <p className="font-semibold text-gray-800 text-sm border-t pt-3 mt-4 text-center">- {name}</p>
        </div>
    );
};

// =======================================================================================
// TESTIMONIALS SECTION COMPONENT (FIXED: 1 SLIDE ON ALL SCREENS)
// =======================================================================================
const TestimonialsSection = ({ testimonials }) => { 
    const sliderRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false); // State to delay rendering

    useEffect(() => {
        const timer = setTimeout(() => {
            // Set mount flag to true after a delay (500ms)
            setIsMounted(true); 

            if (sliderRef.current) {
                // Ensure starting at the first slide
                sliderRef.current.slickGoTo(0); 
            }
        }, 500); 
        
        return () => clearTimeout(timer);
    }, []);
    
    const testimonialSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        // SET TO 1 FOR ALL SCREENS
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
        arrows: false,
        // Removed the 'responsive' array as slidesToShow: 1 is universal now.
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-800">
                    What Our Explorers Say
                </h2>
                
                <div className="px-4"> 
                    {isMounted ? (
                        <Slider 
                            key="mounted-slider-single" // Key change forces re-render on mount
                            ref={sliderRef} 
                            {...testimonialSettings}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="p-2 h-full"> 
                                    <TestimonialCard 
                                        quote={testimonial.quote}
                                        name={testimonial.name}
                                        rating={testimonial.rating}
                                    />
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        // Placeholder content while waiting for mount
                        <div className="text-center py-12 text-gray-500 min-h-[300px] flex items-center justify-center border border-gray-200 rounded-xl">
                            Loading testimonials...
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

// =======================================================================================
// HOME PAGE COMPONENT (The main default export)
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
        {
            title: "Corporate and Customize tours",
            description: "The greatest deals are often sealed not in a city, but on a summit. Custom tours that elevate your team.",
            image: CustomtourImage,
        },
    ];

    // Data for the tour categories (Backpacking Adventures)
    const tourCategories = [
        {
            title: "Himachal",
            description: "Himachal Pradesh - Kasol, Kheerganga and Manali",
            image: HimachalImage,
            location: " Himachal Pradesh",
            date: " 19th - 27th December",
            availability: " Limited Seats",
            path: "https://drive.google.com/file/d/1sFcsZZhESZkRQBjXzi8R8tbYXIqvTRgP/view", // External link
        },
        {
            title: "Udupi & Gokarna",
            description: "A coastal adventure with temples, treks and backwaters.",
            image: UdupiGokarnaImage,
            location: "Karnataka Coast",
            date: "December 2025",
            availability: "Open for Booking",
            path: "/udupi-gokarna", // Internal link
        },
        {
            title: "Varanasi & Ayodhya",
            description: "A spiritual journey to India's ancient cities.",
            image: VaranasiAyodhyaImage,
            location: "Uttar Pradesh",
            date: "January 2026",
            availability: "Open for Booking",
            path: "/varanasi-ayodhya", // Internal link
        },
        {
            title: "Pondicherry",
            description: "A serene coastal town with French influence.",
            image: PondicherryImage,
            location: "Pondicherry, Tamil Nadu",
            date: "January 2026",
            availability: "Open for Booking",
            path: "/pondicherry", // Internal link
        },
        
    ];

    // Data for Current Batches (Sahyadri Treks)
    const currentBatches = [
        
        {
            title: "7 Step Waterfall",
            description: "Climb. Discover. Find your flow. (The 7-Step Waterfall Experience)",
            image: SStepWaterfallImage,
            location: " Raigad, Maharastra",
            date: " 29th & 30th November",
            availability: " Few Seats Left!",
            path: "https://drive.google.com/file/d/1pymUyDCbreQ2yDOn1UFY1ekqukrcFrHc/view",
            bookingLink: "https://docs.google.com/forms/d/e/1FAIpQLSet91g7THDoFbDWShJH3tAbpudVrXm8MU5BxfLrUBeljBLHew/viewform",
        },
        {
            title: "Gorakhgad Rappelling & Trek",
            description: "300 FT VERTICAL RAPPELLING FROM A MASSIVE ROCK FACE.",
            image: GorakhGadImage,
            location: " Malshej Ghat, Maharashtra",
            date: " 13th-14th December ",
            availability: " Limited Seats!",
            path: "https://drive.google.com/file/d/1_HbTbUU2CWDfr7D3mHimT0Qkn-pwSrLJ/view",
            bookingLink: "https://docs.google.com/forms/d/e/1FAIpQLSfkCiatWbNAImG1xSvsfdIm0JGCda3c9AJoPO50-LkCVcrCLw/viewform",
        },
        {
            title: "Kamalgad Fort",
            description: "Kamalgad, also called Bhelanja or Kattalgad is a square hill fort",
            image: KamalGadImage,
            location: " Wai-Satara, Maharastra",
            date: "7th & 14th December",
            availability: "Open for Booking",
            path: "In-Progress", 
            bookingLink: "In-Progress", 
        }
    ];

    // Data for the testimonials section
    const testimonials = [
       {
        rating: 5,
        quote: "I’ve been on several treks with different travel groups, but Hidden Traveller has been the best experience by far. Trek leaders, Uday and Tushar, were outstanding, they ensured the journey was smooth, comfortable, safe, and truly memorable. I couldn't have asked for more. Hidden Traveller is a hidden gem which I wish more people discover soon! :))",
        name: "Divisha Shekhavat",
      },
        {
            rating: 5,
            quote: "Close your eyes and trust Hidden Traveller. I've just had an amazing experience with them. The whole trek was organised so efficiently. Right from communicating all the information to food & travel arrangements. The whole process was smooth. Also the trek leaders took really good care of everyone's safety. This is the most genuine and best trek organizing company I've come across, they truly admire nature and respect it. They are doing a brilliant job by getting a community of nature lovers together and offering them the most beautiful experiences that too at reasonable prices.",
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
        },
        {
            rating: 5,
            quote: "Hey hidden traveller , just wanted to share some awesome feedback about our waterfall hike! 🤩 Everything was well-planned, from punctual departures to timely returns. The short and sweet hike, combined with the bonus waterfall fun, exceeded our expectations! 🌟 We also appreciated the careful management of hidden trails - it's clear why they're kept under wraps. 🙏 Big thanks to Uday and sumit himanshu for making all the arrangements - you guys rock! 👍",
            name: "Nandan Shinde",
        },
        {
            rating: 5,
            quote: "Amazing experience! The waterfall was serene and untouched — pure bliss. Organizers were professional, friendly, and ensured safety throughout. Highly recommend for a peaceful nature escape. 🌿🌊 …",
            name: "Swamiraj Jagdale",
        },
        {
          rating: 5,
          quote: "Hidden Travelers offers the best trekking experiences with expert planning. Their friendly, experienced leaders ensure every trek is safe, enjoyable, and unforgettable. Highly recommended for all adventure lovers!",
          name: "Omkar Shinde",
        },
        {
        rating: 5,
        quote: "Really good experience of a properly managed and super exciting offbeat trek in mountain range of sahyadri, the purposefully trek with zero littering, no crowing and well organized from start to end, kudos to the orgnazing team and hard work Of uday and tushar. Please travel with them and learn to enjoy the serenity while protecting the mother nature.",
        name: "Ankur Tiwari",
      },
        {
          rating: 5,
          quote: "I had the most incredible experience on a trip to Udupi and Gokarna, all thanks to the flawless planning and warm hospitality of HiddenTraveller. From the moment we set off, everything was thoughtfully curated — from comfortable travel arrangements to cozy stays and delightful local experiences... I wholeheartedly recommend HiddenTraveller. Udupi has my heart now — and HiddenTraveller made it happen!",
          name: "Aishwarya P",
        },
        {
          rating: 5,
          quote: "This was my first experience with Hiddentraveller at Korigad Fort. Location is awesome and adventurous and I enjoyed it, Management also very good under the guidance of trek leads. Food taste and quality is awesome. I experienced a one of my Best trek with Hiddentraveller. …",
          name: "Shubham Takwale",
        },
    ];

    // Settings for the Hero carousel
    const heroCarouselSettings = {
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
                <Slider {...heroCarouselSettings}>
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Upcoming Backpacking Adventures</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tourCategories.map((tour, index) => (
                        <TourCard key={index} tour={tour} />
                    ))}
                </div>
            </section>

            <hr className="my-8 border-gray-200" />

            {/* Current Batches Section */}
            <section className="bg-teal-50 p-8 md:p-16 mt-8">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Upcoming Sahyadri Treks ⛰️</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentBatches.map((batch, index) => (
                            <BatchCard key={index} batch={batch} />
                        ))}
                    </div>
                </div>
            </section>

            <hr className="my-8 border-gray-200" />

            {/* Why Choose Us Section */}
            <section className="bg-white p-8 md:p-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Hidden Traveller?</h2>
                    <p className="text-base md:text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                        We are passionate about creating safe, memorable, and authentic travel experiences.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 border border-gray-100">
                            <Sun className="text-yellow-500 mx-auto mb-4" size={48} />
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Expert Guides</h3>
                            <p className="text-gray-600">Our experienced guides ensure your safety and enjoyment on every trip.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 border border-gray-100">
                            <Compass className="text-teal-500 mx-auto mb-4" size={48} />
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Seamless Planning</h3>
                            <p className="text-gray-600">From transport to accommodation, we handle all the details for you.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 border border-gray-100">
                            <Mountain className="text-gray-800 mx-auto mb-4" size={48} />
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Authentic Experiences</h3>
                            <p className="text-gray-600">We take you off the beaten path to truly connect with nature and culture.</p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="my-8 border-gray-200" />

            {/* Testimonials Section (The Fixed Carousel) */}
            <TestimonialsSection testimonials={testimonials} />
        </>
    );
}