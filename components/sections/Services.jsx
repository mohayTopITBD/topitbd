"use client";
import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import TiltCard from "../ui/TiltCard";
import TiltImage from "../ui/TiltImage";

function Services() {
  const [swiperRef, setSwiperRef] = useState(null);

  // Service data with unique titles and descriptions
  const services = [
    {
      id: 1,
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business needs with cutting-edge technologies.",
      image: "/servicesCard/1.png",
    },
    {
      id: 2,
      title: "3D Product Animation",
      description:
        "Stunning 3D animations that bring your products to life and engage your audience.",
      image: "/servicesCard/2.png",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces designed to enhance user experience.",
      image: "/servicesCard/3.png",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android devices.",
      image: "/servicesCard/4.png",
    },
    {
      id: 5,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and services for modern businesses.",
      image: "/servicesCard/5.png",
    },
    {
      id: 6,
      title: "SaaS Development",
      description:
        "End-to-end Software as a Service solutions for your enterprise needs.",
      image: "/servicesCard/6.png",
    },
  ];

  return (
    <div className="services w-full h-screen py-20 px-4 bg-gradient-to-br bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-2xl md:text-3xl font-bold px-6 py-3 rounded-full   bg-gray-200  inline-block backdrop-blur-sm text-black">
            Our Services
          </span>
          <h1 className="text-6xl md:text-6xl font-bold text-center text-black mt-6 mb-4">
            Solutions For Your Business
          </h1>
        </div>

        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1}
          spaceBetween={20}
          pagination={false}
          navigation={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper service-swiper"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id} className="pb-10 w-full">
              <TiltCard perspective={1000} className="h-full">
                <div className="service-card bg-black backdrop-blur-lg h-full transition-all duration-300    w-full">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <h3 className="text-xl font-bold text-white ml-4">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4 mt-">
                      {service.description}
                    </p>
                    <button className="text-blue-400 font-medium flex items-center group">
                      Learn more
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="h-[12rem] relative">
                    <TiltImage
                      src={service.image}
                      alt={service.title}
                      className="w-32 absolute bottom-[-30] right-[-30]"
                    />
                  </div>
                </div>
              </TiltCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Services;
