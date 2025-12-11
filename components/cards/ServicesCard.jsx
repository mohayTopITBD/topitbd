import React, { useState } from "react";
import { Phone, MessageCircle, Linkedin, Calendar } from "lucide-react";
import ServiceCardItem from "../ui/ServiceCardItem";

function ServicesCard() {
  const services = [
    {
      id: "01",
      title: "Software Development",
      href: "/services/software-development",
    },
    {
      id: "02",
      title: "3D Product Animation",
      href: "/services/3d-product-animation",
    },
    {
      id: "03",
      title: "Product Design (UI/UX Design)",
      href: "/services/product-design",
    },
    { id: "04", title: "SaaS Development & SQA", href: "#" },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: Phone,
      name: "WhatsApp",
      href: "#",
    },
    {
      id: 2,
      icon: MessageCircle,
      name: "Telegram",
      href: "#",
    },
    {
      id: 3,
      icon: Linkedin,
      name: "LinkedIn",
      href: "#",
    },
  ];

  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div className="bg-gray-900 backdrop-blur-lg shadow-lg w-[26rem] h-[28rem] transition-all duration-300 ease-in-out z-50 overflow-hidden ">
      <div className="grid grid-cols-1 gap-4 h-full p-4">
        <div className="grid grid-cols-1 gap-4 flex-grow">
          {services.map((service) => (
            <ServiceCardItem
              key={service.id}
              service={service}
              onHover={setHoveredService}
            />
          ))}
        </div>

        {/* Bottom section with social icons and schedule button */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-700">
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.href}
                  className="relative group"
                >
                  <div className="hover:bg-blue-500 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-gray-300 transition-all duration-300 hover:text-white" />
                  </div>
                </a>
              );
            })}
          </div>

          <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            <Calendar className="w-4 h-4" />
            <span>Schedule a Call</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
