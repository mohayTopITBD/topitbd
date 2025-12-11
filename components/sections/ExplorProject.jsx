"use client";
import React, { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltImage from "../ui/TiltImage";

gsap.registerPlugin(ScrollTrigger);

function ExplorProject() {
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((imageSection, index) => {
      if (!imageSection) return;

      gsap.to(imageSection, {
        scale: 0.9,
        scrollTrigger: {
          trigger: imageSection,
          start: "top 85%",
          end: "top 20%",
          scrub: 0.1,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center mt-10">
      <div>
        <h1 className="text-xl font-bold text-gray-400 w-62 h-12 text-center items-center justify-center flex border-gray/100 border border-dashed rounded-full">
          Explor Project
        </h1>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-400">Our Projects</h1>
      </div>

      <div className="relative w-full">
        <div
          className="explore-project-main-image-section sticky top-0 h-screen"
          ref={addToRefs}
          style={{ zIndex: 1 }}
        >
          <div className="flex relative group h-full">
            <TiltImage
              src="/exploreProject/1.webp"
              alt=""
              className="w-screen h-full object-cover rounded-l-4xl shadow-2xl"
            />
            <div className="image-hover-card w-90 h-full pt-20 bg-gray-400/50 absolute top-0 -left-full group-hover:left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 ease-in-out">
              <div className="flex flex-col justify-between h-full px-6 pb-6">
                <span className="text-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione at beatae nam asperiores numquam, nemo odio impedit
                  quisquam expedita rem quos minus deleniti optio tempore,
                  dicta, porro soluta iusto reiciendis!
                </span>
                <div className="flex flex-col gap-2 bottom-part">
                  <span className="text-white font-semibold">
                    software development
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2 w-fit">
                    Learn More
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="explore-project-main-image-section sticky top-0 h-screen"
          ref={addToRefs}
          style={{ zIndex: 2 }}
        >
          <div className="flex relative group h-full">
            <TiltImage
              src="/exploreProject/2.webp"
              alt=""
              className="w-screen h-full object-cover rounded-l-4xl shadow-2xl"
            />
            <div className="image-hover-card w-90 h-full pt-20 bg-gray-400/50 absolute top-0 -left-full group-hover:left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 ease-in-out">
              <div className="flex flex-col justify-between h-full px-6 pb-6">
                <span className="text-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione at beatae nam asperiores numquam, nemo odio impedit
                  quisquam expedita rem quos minus deleniti optio tempore,
                  dicta, porro soluta iusto reiciendis!
                </span>
                <div className="flex flex-col gap-2 bottom-part">
                  <span className="text-white font-semibold">
                    software development
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2 w-fit">
                    Learn More
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="explore-project-main-image-section sticky top-0 h-screen"
          ref={addToRefs}
          style={{ zIndex: 3 }}
        >
          <div className="flex relative group h-full">
            <TiltImage
              src="/exploreProject/3.webp"
              alt=""
              className="w-screen h-full object-cover rounded-l-4xl shadow-2xl"
            />
            <div className="image-hover-card w-90 h-full pt-20 bg-gray-400/50 absolute top-0 -left-full group-hover:left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 ease-in-out">
              <div className="flex flex-col justify-between h-full px-6 pb-6">
                <span className="text-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione at beatae nam asperiores numquam, nemo odio impedit
                  quisquam expedita rem quos minus deleniti optio tempore,
                  dicta, porro soluta iusto reiciendis!
                </span>
                <div className="flex flex-col gap-2 bottom-part">
                  <span className="text-white font-semibold">
                    software development
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2 w-fit">
                    Learn More
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="explore-project-main-image-section sticky top-0 h-screen"
          ref={addToRefs}
          style={{ zIndex: 4 }}
        >
          <div className="flex relative group h-full">
            <TiltImage
              src="/exploreProject/4.webp"
              alt=""
              className="w-screen h-full object-cover rounded-l-4xl shadow-2xl"
            />
            <div className="image-hover-card w-90 h-full pt-20 bg-gray-400/50 absolute top-0 -left-full group-hover:left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 ease-in-out">
              <div className="flex flex-col justify-between h-full px-6 pb-6">
                <span className="text-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione at beatae nam asperiores numquam, nemo odio impedit
                  quisquam expedita rem quos minus deleniti optio tempore,
                  dicta, porro soluta iusto reiciendis!
                </span>
                <div className="flex flex-col gap-2 bottom-part">
                  <span className="text-white font-semibold">
                    software development
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2 w-fit">
                    Learn More
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="explore-project-main-image-section sticky top-0 h-screen"
          ref={addToRefs}
          style={{ zIndex: 5 }}
        >
          <div className="flex relative group h-full">
            <TiltImage
              src="/exploreProject/5.webp"
              alt=""
              className="w-screen h-full object-cover rounded-l-4xl shadow-2xl"
            />
            <div className="image-hover-card w-90 h-full pt-20 bg-gray-400/50 absolute top-0 -left-full group-hover:left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 ease-in-out">
              <div className="flex flex-col justify-between h-full px-6 pb-6">
                <span className="text-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione at beatae nam asperiores numquam, nemo odio impedit
                  quisquam expedita rem quos minus deleniti optio tempore,
                  dicta, porro soluta iusto reiciendis!
                </span>
                <div className="flex flex-col gap-2 bottom-part">
                  <span className="text-white font-semibold">
                    software development
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2 w-fit">
                    Learn More
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExplorProject;
