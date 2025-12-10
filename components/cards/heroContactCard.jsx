import React from 'react'
import { Phone, MessageCircle, Linkedin, Calendar } from 'lucide-react';

function HeroContactCard() {
  const socialLinks = [
    { 
      id: 1, 
      icon: Phone, 
      name: 'WhatsApp', 
      href: '#',
      gradient: 'from-green-500 to-green-600'
    },
    { 
      id: 2, 
      icon: MessageCircle, 
      name: 'Telegram', 
      href: '#',
      gradient: 'from-blue-500 to-blue-600'
    },
    { 
      id: 3, 
      icon: Linkedin, 
      name: 'LinkedIn', 
      href: '#',
      gradient: 'from-blue-700 to-blue-800'
    }
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-6 px-4  mt-8 w-full max-w-2xl">
      <div className="flex space-x-4">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.id}
              href={social.href}
              className="relative group"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md">
                <IconComponent className="w-6 h-6 text-gray-800 group-hover:text-white transition-all duration-300" />
              </div>
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 group-hover:scale-110`}></div>
            </a>
          );
        })}
      </div>
      
      <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:scale-105 transform">
        <Calendar className="w-5 h-5" />
        <span className="font-medium">Schedule a Call</span>
      </button>
    </div>
  )
}

export default HeroContactCard