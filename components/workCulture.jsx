import React from "react";
import { ArrowRight } from "lucide-react";

export default function workCulture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-5 py-3 bg-gray-200/80 text-gray-600 rounded-full text-xl font-bold uppercase tracking-widest">
                Work Culture
              </span>
            </div>

            {/* Heading - Very Light Gray */}
            <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold text-gray-200 leading-[1.1]">
              Netro Systems fosters innovation, collaboration, diversity, and
              growth, creating impactful software solutions in a vibrant,
              inclusive culture.
            </h1>

            {/* Buttons */}
            <div className="flex flex-wrap gap-6 items-center pt-4">
              <button className="group bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                Join our team
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="text-black font-semibold transition-all duration-300 flex items-center gap-3 hover:gap-4">
                <span className="w-10 h-[2px] bg-black"></span>
                Know more about us
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:ml-12">
            <div className="relative  overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/workCulture.png"
                alt="Team member at work"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
