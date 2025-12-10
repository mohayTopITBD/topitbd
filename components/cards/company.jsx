"use client";
import React from "react";

function Company() {
  return (
    <div className="w-full h-28 flex items-center justify-center overflow-hidden py-4 bg-gray-300">
      <div className="flex items-center animate-slide">
        {[
          "black-1.webp",
          "black-2.webp",
          "black-3.webp",
          "black-4.webp",
          "black-5.webp",
          "black-6.webp",
          "black-7.webp",
          "black-9.webp",
          "black-10.webp",
          "black-11.webp",
          "black-12.webp",
          "black-13.webp",
        ].map((img, i) => (
          <img
            key={i}
            src={`/company/${img}`}
            alt="company"
            className="h-12 w-auto mx-4 inline-block"
          />
        ))}
      </div>
    </div>
  );
}

export default Company;
