"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const TiltCard = ({ children, className = "", perspective = 1000 }) => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;

    if (!card || !container) return;

    const handleMouseMove = (e) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;

      const mouseX = e.clientX - cardCenterX;
      const mouseY = e.clientY - cardCenterY;

      const rotateY = (mouseX / cardRect.width) * 20; // Max rotation 20 degrees
      const rotateX = -(mouseY / cardRect.height) * 20; // Max rotation 20 degrees

      card.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [perspective]);

  return (
    <div
      ref={containerRef}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      <div
        ref={cardRef}
        className="transition-transform duration-300 ease-out will-change-transform"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.3s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
