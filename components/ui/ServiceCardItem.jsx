"use client";

import React, { useRef, useEffect } from "react";
import TiltCard from "./TiltCard";

const ServiceCardItem = ({ service, onHover }) => {
  const cardRef = useRef(null);

  return (
    <TiltCard perspective={1000} className="w-full">
      <a
        href={service.href}
        ref={cardRef}
        className="block bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 cursor-pointer border border-gray-700 px-6 py-4 rounded-lg hover:shadow-xl backdrop-blur-sm"
        onMouseEnter={() => onHover && onHover(service)}
      >
        <div className="flex">
          <div className="flex text-gray-400 justify-between items-center w-full hover:text-blue-400">
            <h3 className="text-lg font-semibold text-white group-hover:text-xl transition-all duration-300">
              {service.title}
            </h3>
            <span className="font-bold text-lg md:text-xl group-hover:text-2xl transition-all duration-300">
              {service.id}
            </span>
          </div>
        </div>
      </a>
    </TiltCard>
  );
};

export default ServiceCardItem;
