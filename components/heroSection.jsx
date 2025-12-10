import React from "react";
import HeroContactCard from "./cards/heroContactCard";
import ReviewedBy from "./cards/reviewedBy";
import Company from "./cards/company";
import TiltImage from "./TiltImage";

function HeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-wrap-reverse items-center justify-center">
      <img
        src="/hero-top-gradient.webp"
        alt=""
        className="w-full h-full object-cover absolute inset-0 justify-center items-center flex"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen px-4 py-12 md:py-0 w-full max-w-7xl mx-auto">
        {/* Left side - Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center mb-8 md:mb-0">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/20 blur-xl rounded-full animate-pulse"></div>
            <TiltImage
              src="/download.png"
              alt="Hero"
              className="relative w-3/4 max-w-md h-auto object-contain"
            />
          </div>
        </div>

        {/* Right side - Text */}
        <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-2xl leading-tight tracking-tight">
            IDEATE
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-2xl leading-tight tracking-tight">
            DEVELOP, DEPLOY.
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 max-w-2xl leading-tight tracking-tight">
            SUCCEED!
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl leading-relaxed tracking-wide mb-8">
            From concept to deployment, we engineer digital experiences that
            drive business growth. We help with Modern UI/UX design and
            world-class software development for enterprises.
          </p>

          <HeroContactCard />
          <ReviewedBy />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
