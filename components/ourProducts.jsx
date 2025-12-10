import React from "react";
import { ArrowRight } from "lucide-react";

export default function OurProducts() {
  const products = [
    {
      id: 1,
      title: "TRIVIALY",
      description:
        "Boosts up to 40% eCommerce sales via customer engagement activities. Try this FREEMIUM tool! Currently available for Wordpress only.",
      image: "/products/1.png",
    },
    {
      id: 2,
      title: "TELZEN-TELECOM BRAND",
      description:
        "When you travel you must need a roaming enabled eSIM into your phone. Don't you? Then try our cutting edge product.",
      image: "/products/2.png",
    },
    {
      id: 3,
      title: "TELZEN-TELECOM BRAND",
      description:
        "When you travel you must need a roaming enabled eSIM into your phone. Don't you? Then try our cutting edge product.",
      image: "/products/3.png",
    },
    {
      id: 4,
      title: "TELZEN-TELECOM BRAND",
      description:
        "When you travel you must need a roaming enabled eSIM into your phone. Don't you? Then try our cutting edge product.",
      image: "/products/4.png",
    },
    {
      id: 5,
      title: "TELZEN-TELECOM BRAND",
      description:
        "When you travel you must need a roaming enabled eSIM into your phone. Don't you? Then try our cutting edge product.",
      image: "/products/5.png",
    },
    {
      id: 6,
      title: "TELZEN-TELECOM BRAND",
      description:
        "When you travel you must need a roaming enabled eSIM into your phone. Don't you? Then try our cutting edge product.",
      image: "/products/6.png",
    },
    {
      id: 7,
      title: "TELZEN-TELECOM BRAND",
      description:
        "When you travel you must need a roaming enabled eSIM into your phone. Don't you? Then try our cutting edge product.",
      image: "/products/7.png",
    },
    {
      id: 8,
      title: "TELZEN-TELECOM BRAND",
      description:
        "When you travel you must need a roaming enabled eSIM into your phone. Don't you? Then try our cutting edge product.",
      image: "/products/8.png",
    },
    {
      id: 9,
      title: "TELZEN-TELECOM BRAND",
      description:
        "When you travel you must need a roaming enabled eSIM into your phone. Don't you? Then try our cutting edge product.",
      image: "/products/9.png",
    },
    {
      id: 10,
      title: "TELZEN-TELECOM BRAND",
      description:
        "When you travel you must need a roaming enabled eSIM into your phone. Don't you? Then try our cutting edge product.",
      image: "/products/10.png",
    },
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`${product.bgColor}  overflow-hidden transition-transform hover:scale-[1.02] duration-300`}
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Container */}
            <div className="py-3">
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                {product.title}
              </h2>

              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Button */}
              <button className="group bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2 hover:gap-3">
                See Details
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
