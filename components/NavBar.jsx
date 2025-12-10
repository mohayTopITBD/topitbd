"use client"
import React, { useState } from 'react';
import Services from './cards/ServicesCard';
import Link from 'next/link';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Portfolio', href: '#' },
    { name: 'About us', href: '#' },
    { name: 'Join us', href: '#' },
    { name: 'Contact us', href: '#' }
  ];

  // Function to handle services click on mobile
  const handleServicesClick = (e) => {
    if (window.innerWidth < 768) { // md breakpoint
      e.preventDefault();
      setIsServicesDropdownOpen(!isServicesDropdownOpen);
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/"><span className="text-xl font-bold text-white">TopITBD</span></Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => link.name === 'Services' && setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => link.name === 'Services' && setIsServicesDropdownOpen(false)}
                >
                  <a
                    href={link.href}
                    className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                  >
                    {link.name}
                  </a>
                  {link.name === 'Services' && (
                    <div 
                      className="absolute left-0 mt-2 w-96 origin-top-right"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <Services />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <div key={link.name}>
              <a
                href={link.href}
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={link.name === 'Services' ? handleServicesClick : undefined}
              >
                {link.name}
              </a>
              {link.name === 'Services' && isServicesDropdownOpen && (
                <div className="px-4 py-2">
                  <Services />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;