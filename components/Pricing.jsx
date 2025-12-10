"use client"
import   { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function PricingSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Set initial state for animation
    gsap.set(sectionRef.current, { opacity: 0, y: 100 });
    gsap.set(cardsRef.current, { opacity: 0, y: 50 });

    // Animation triggered when section enters viewport
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%", // Trigger when top of section reaches 80% of viewport
      once: true, // Only run once
      onEnter: () => {
        // Animate section
        gsap.to(sectionRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        });

        // Staggered animation for pricing cards
        gsap.to(cardsRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.3,
        });
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const pricingPlans = [
    {
      title: "UI/UX Design",
      subtitle: "For personal or Industrial",
      price: "29",
      features: [
        "Ensured proper UX",
        "Followed guide or create",
        "Modern softwares",
        "Scalable and ready to develop",
        "Collaborative",
      ],
      borderColor: "border-gray-600",
    },
    {
      title: "Development",
      subtitle: "For personal or Industrial",
      price: "49",
      features: [
        "Frontend Development",
        "Backend Development",
        "Database, Server Setup",
        "DevOps and Deploy",
        "Bug Fixing",
        "After sales service",
      ],
      borderColor: "border-indigo-600",
    },
    {
      title: "Branding",
      subtitle: "For personal or Industrial",
      price: "19",
      features: [
        "Logo from scratch",
        "Brand Guideline",
        "Animation and Graphical assets",
        "3D Animation",
        "Brand Assets preparation",
      ],
      borderColor: "border-gray-600",
    },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-black py-16 px-6">
      <div className="text-center mb-16">
        <span className="text-2xl md:text-3xl font-bold px-6 py-3 rounded-full   bg-gray-200  inline-block backdrop-blur-sm text-black">
          Our Pricing
        </span>
        <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold text-center text-white mt-6 mb-4">
          Built to scale with your ambitions.
        </h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`border ${plan.borderColor} rounded-lg p-8 hover:border-indigo-500 transition-colors duration-300`}
            >
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-400 text-sm">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-white text-5xl font-bold">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400 text-lg">/per hour</span>
                </div>
              </div>

              {/* Button */}
              <button className="w-full border-2 border-indigo-600 text-white font-semibold py-3.5 rounded-full hover:bg-indigo-600 transition-colors duration-300 mb-8">
                Start Project
              </button>

              {/* Divider */}
              <div className="border-t border-gray-800 mb-8"></div>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                      <Check
                        className="w-3.5 h-3.5 text-white"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-white text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <span className="text-center flex items-center justify-center mt-10">
          Complete the form by clicking "Start Project" to send us a message.
          Our support team will promptly respond to your request.
        </span>
      </div>
    </div>
  );
}
