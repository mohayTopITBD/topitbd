"use client";

import React, { useRef, useEffect } from "react";

const TiltImage = ({ src, alt, className = "" }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const handleMouseMove = (e) => {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 10; // Max 10 degrees
      const rotateX = -((y - centerY) / centerY) * 10; // Max 10 degrees

      img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    };

    const handleMouseLeave = () => {
      img.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    };

    img.addEventListener("mousemove", handleMouseMove);
    img.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      img.removeEventListener("mousemove", handleMouseMove);
      img.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.3s ease-out",
      }}
    />
  );
};

export default TiltImage;
