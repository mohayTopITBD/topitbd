"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Experts() {
  const teamMembers = [
    {
      id: 1,
      name: "Naimur Rahman Noyon",
      position: "Software Engineer (Flutter)",
      image: "/expart.png",
    },
    {
      id: 2,
      name: "Abdullah Al Mamun",
      position: "Full Stack Developer",
      image: "/expart.png",
    },
    {
      id: 3,
      name: "Rakibul Islam",
      position: "UI/UX Designer",
      image: "/expart.png",
    },
    {
      id: 4,
      name: "Shahriar Hossain",
      position: "Backend Developer",
      image: "/expart.png",
    },
    {
      id: 5,
      name: "Shahriar Hossain",
      position: "Backend Developer",
      image: "/expart.png",
    },
    {
      id: 6,
      name: "Shahriar Hossain",
      position: "Backend Developer",
      image: "/expart.png",
    },
    {
      id: 7,
      name: "Shahriar Hossain",
      position: "Backend Developer",
      image: "/expart.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full text-sm font-semibold uppercase tracking-wider">
            Our Team
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-center mb-16">
          <span className="block text-5xl md:text-6xl lg:text-7xl font-black text-gray-600">
            MEET THE{" "}
          </span>
          <span className="block text-5xl md:text-6xl lg:text-7xl font-black text-black">
            EXPERTS
          </span>
        </h1>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="mb-16"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="group relative overflow-hidden bg-gray-900 hover:scale-[1.02] transition-transform duration-300 cursor-pointer h-full">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-300">{member.position}</p>
                  </div>
                </div>

                {/* Static Info on Card (visible on hover in original) */}
                <div className="absolute top-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-300">{member.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

       

        {/* Meet our team button */}
        <div className="flex justify-center">
          <button className="group flex items-center gap-2 text-black font-semibold text-lg hover:gap-3 transition-all duration-300">
            <span className="w-10 h-[2px] bg-yellow-500"></span>
            Meet our team
          </button>
        </div>
      </div>
    </div>
  );
}
