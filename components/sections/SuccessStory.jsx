"use client";
import React, { useEffect, useState, useRef } from "react";

export default function SuccessStory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      number: "5",
      suffix: "YRS",
      label: "EXPERIENCE",
      color: "text-green-400",
    },
    {
      number: "70",
      suffix: "M",
      label: "RAISED",
      color: "text-yellow-400",
    },
    {
      number: "84",
      suffix: "+",
      label: "HAPPY CLIENTS",
      color: "text-green-400",
    },
    {
      number: "153",
      suffix: "+",
      label: "PROJECTS",
      color: "text-yellow-400",
    },
  ];

  // Counter animation hook
  const useCountUp = (end, duration = 2000, isVisible) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      const endValue = parseInt(end);

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(endValue * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return count;
  };

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black py-20 px-6 flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-center mb-20">
          <span className="block text-4xl md:text-6xl lg:text-7xl font-black mb-2">
            <span className="text-gray-400">NUMBERS THAT </span>
            <span className="text-gray-600">SHOWCASE</span>
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl font-black">
            <span className="text-white">OUR </span>
            <span className="text-gray-600">SUCCESS STORY</span>
          </span>
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              isVisible={isVisible}
              useCountUp={useCountUp}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ stat, isVisible, useCountUp }) {
  const count = useCountUp(stat.number, 2000, isVisible);

  return (
    <div className="text-center">
      <div
        className={`text-6xl md:text-7xl lg:text-8xl font-black ${stat.color} mb-4`}
      >
        {count}
        {stat.suffix}
      </div>
      <div className="text-white text-xl md:text-2xl font-bold tracking-wider">
        {stat.label}
      </div>
    </div>
  );
}
