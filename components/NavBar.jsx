"use client";
import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import ServicesCard from "./cards/ServicesCard";
 

// Main NavBar Component
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#", hasDropdown: true },
    { name: "Portfolio", href: "#" },
    { name: "About us", href: "#" },
    { name: "Join us", href: "#" },
    { name: "Contact us", href: "#" },
  ];

  const handleServicesClick = (e) => {
    e.preventDefault();
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/10 backdrop-blur-md    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <span className="text-xl font-bold text-white">TopITBD</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    link.hasDropdown && setIsServicesDropdownOpen(true)
                  }
                  onMouseLeave={() =>
                    link.hasDropdown && setIsServicesDropdownOpen(false)
                  }
                >
                  <a
                    href={link.href}
                    className="text-white hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center gap-1"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <Plus
                        className={`w-4 h-4 transition-transform ${
                          isServicesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>

                  {/* Services Dropdown */}
                  {link.hasDropdown && isServicesDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-[600px] origin-top-left">
                      <ServicesCard />
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
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-indigo-400 focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-900`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <div key={link.name}>
              <a
                href={link.href}
                className="text-white hover:text-indigo-400 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                onClick={link.hasDropdown ? handleServicesClick : undefined}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </a>

              {/* Mobile Services Dropdown */}
              {link.hasDropdown && isMobileServicesOpen && (
                <div className="px-4 py-2">
                  <ServicesCard />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
