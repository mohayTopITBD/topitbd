"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DifferenceSection() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "TRISTIAN SHIN",
      position: "Co-Founder, Atti LLC",
      image: "/testimonial/1.png",
      text: "I RECENTLY HAD THE PLEASURE OF WORKING WITH AN EXCEPTIONAL FREELANCE APP DESIGNER WHOSE WORK TRULY EXCEEDED MY EXPECTATIONS. RIGHT FROM THE OUTSET, THEIR APPROACH WAS MARKED BY A REMARKABLE LEVEL OF PATIENCE AND UNDERSTANDING. THEY LISTENED ATTENTIVELY TO MY REQUIREMENTS AND OFFERED INSIGHTFUL SUGGESTIONS THAT SIGNIFICANTLY ENHANCED THE FINAL DESIGN. THE QUALITY OF WORK DELIVERED WAS OUTSTANDING, ESPECIALLY CONSIDERING THE PRICE POINT. THE FREELANCER DEMONSTRATED A KEEN EYE FOR DETAIL, AND THEIR CREATIVE FLAIR BROUGHT A FRESH AND ENGAGING LOOK TO MY APP. IN SUMMARY, THIS FREELANCER IS A RARE FIND - SOMEONE WHO DELIVERS EXCEPTIONAL WORK AT A REASONABLE COST.",
    },
    {
      id: 2,
      name: "SARAH JOHNSON",
      position: "CEO, TechStart Inc",
      image: "/testimonial/2.png",
      text: "WORKING WITH THIS TEAM WAS AN ABSOLUTE GAME-CHANGER FOR OUR BUSINESS. THEIR PROFESSIONALISM AND DEDICATION TO DELIVERING QUALITY WORK ON TIME WAS IMPRESSIVE. THEY UNDERSTOOD OUR VISION PERFECTLY AND BROUGHT IT TO LIFE WITH STUNNING DESIGNS AND SEAMLESS FUNCTIONALITY. I HIGHLY RECOMMEND THEIR SERVICES TO ANYONE LOOKING FOR TOP-NOTCH DIGITAL SOLUTIONS.",
    },
    {
      id: 3,
      name: "MICHAEL CHEN",
      position: "Product Manager, InnovateLab",
      image: "/testimonial/3.png",
      text: "THE LEVEL OF EXPERTISE AND CREATIVITY THIS TEAM BROUGHT TO OUR PROJECT WAS PHENOMENAL. THEY NOT ONLY MET OUR EXPECTATIONS BUT EXCEEDED THEM IN EVERY WAY. THE ATTENTION TO DETAIL, USER EXPERIENCE FOCUS, AND INNOVATIVE SOLUTIONS MADE OUR APP STAND OUT IN THE MARKET. COULDN'T BE HAPPIER WITH THE RESULTS.",
    },
    {
      id: 4,
      name: "EMILY RODRIGUEZ",
      position: "Founder, DesignHub",
      image: "/testimonial/1.png",
      text: "EXCEPTIONAL SERVICE FROM START TO FINISH! THE TEAM WAS RESPONSIVE, CREATIVE, AND PROFESSIONAL THROUGHOUT THE ENTIRE PROJECT. THEY TOOK THE TIME TO UNDERSTAND OUR BRAND AND DELIVERED A PRODUCT THAT PERFECTLY ALIGNED WITH OUR VISION. THE QUALITY OF WORK IS OUTSTANDING AND THE PRICING WAS VERY REASONABLE.",
    },
    {
      id: 5,
      name: "DAVID MARTINEZ",
      position: "Director, CloudSync Solutions",
      image: "/testimonial/4.png",
      text: "I'VE WORKED WITH MANY DEVELOPERS AND DESIGNERS OVER THE YEARS, BUT THIS TEAM STANDS OUT AS ONE OF THE BEST. THEIR TECHNICAL SKILLS ARE MATCHED ONLY BY THEIR CREATIVITY AND COMMITMENT TO CLIENT SATISFACTION. THEY DELIVERED A ROBUST, SCALABLE SOLUTION THAT HAS SIGNIFICANTLY IMPROVED OUR BUSINESS OPERATIONS.",
    },
    {
      id: 6,
      name: "JESSICA THOMPSON",
      position: "Marketing Head, BrandBoost",
      image: "/testimonial/3.png",
      text: "OUTSTANDING WORK! THE TEAM'S ABILITY TO TRANSLATE OUR IDEAS INTO A BEAUTIFUL, FUNCTIONAL PRODUCT WAS REMARKABLE. THEY WERE PATIENT WITH OUR FEEDBACK AND MADE REVISIONS QUICKLY AND EFFICIENTLY. THE FINAL PRODUCT EXCEEDED ALL OUR EXPECTATIONS AND HAS RECEIVED EXCELLENT FEEDBACK FROM OUR USERS.",
    },
    {
      id: 7,
      name: "ROBERT WILSON",
      position: "CTO, DataFlow Systems",
      image: "/testimonial/4.png",
      text: "THIS WAS ONE OF THE SMOOTHEST PROJECTS I'VE EVER BEEN PART OF. THE TEAM'S COMMUNICATION WAS EXCELLENT, THEY MET ALL DEADLINES, AND THE QUALITY OF WORK WAS EXCEPTIONAL. THEIR INNOVATIVE APPROACH AND PROBLEM-SOLVING SKILLS HELPED US OVERCOME SEVERAL TECHNICAL CHALLENGES. HIGHLY RECOMMENDED FOR ANY COMPLEX DIGITAL PROJECT.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-6 relative overflow-hidden flex items-center justify-center">
      {/* Large Quotation Mark */}
      <div className="absolute top-10 right-20 text-gray-200 text-[300px] font-serif leading-none select-none pointer-events-none">
        "
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Heading */}
        <h1 className="text-center mb-16">
          <span className="block text-5xl md:text-7xl font-black text-black mb-2">
            SEE HOW WE'VE MADE
          </span>
          <span className="block text-5xl md:text-7xl font-black text-gray-400">
            A DIFFERENCE
          </span>
        </h1>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="mb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="text-center">
                <p className="text-center text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl mx-auto mb-12 px-4">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-4 mb-12">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-black">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            className="swiper-button-prev w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 hover:bg-gray-50 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="swiper-button-next w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 hover:bg-gray-50 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Custom Pagination Dots */}
        <div className="swiper-pagination flex justify-center gap-2 mt-8"></div>
      </div>
    </div>
  );
}
