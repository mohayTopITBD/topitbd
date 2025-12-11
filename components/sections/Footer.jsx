"use client"
import React from "react";
import {
  Phone,
  Mail,
  ArrowUp,
  Linkedin,
  Facebook,
  Dribbble,
  Github,
  Youtube,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const footerSections = {
    inquiries: {
      title: "INQUIRIES",
      content: [
        {
          type: "address",
          text: "290/737 York House Green Lane West, Garstang, Preston, Lancashire, England, PR3 1NJ",
        },
        {
          type: "phone",
          icon: <Phone className="w-4 h-4" />,
          text: "+44 7360251473",
        },
        {
          type: "email",
          icon: <Mail className="w-4 h-4" />,
          text: "hello@netrosystems.com",
        },
      ],
    },
    companyInfo: {
      title: "COMPANY INFO",
      links: ["About Us", "Join Our Team", "Portfolio"],
    },
    services: {
      title: "SERVICES",
      links: [
        "Software Development",
        "Product Design (UI/UX Design)",
        "3D Product Animation",
        "SaaS Development & SQA",
      ],
    },
    support: {
      title: "SUPPORT",
      links: ["Privacy Policy", "Help Center"],
    },
    resources: {
      title: "RESOURCES",
      links: ["Company Portfolio"],
    },
  };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
    { icon: <Dribbble className="w-5 h-5" />, label: "Dribbble" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub" },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      label: "X",
    },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, label: "YouTube" },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
        </svg>
      ),
      label: "Pinterest",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.5 2C6.977 2 2.5 6.477 2.5 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.843 21.128 22.5 16.991 22.5 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
      label: "Meta",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Inquiries Section */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-800 font-bold text-lg mb-6">
              {footerSections.inquiries.title}
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                {footerSections.inquiries.content[0].text}
              </p>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                {footerSections.inquiries.content[1].icon}
                <span>{footerSections.inquiries.content[1].text}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                {footerSections.inquiries.content[2].icon}
                <span>{footerSections.inquiries.content[2].text}</span>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-6">
              {footerSections.companyInfo.title}
            </h3>
            <ul className="space-y-3">
              {footerSections.companyInfo.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-6">
              {footerSections.services.title}
            </h3>
            <ul className="space-y-3">
              {footerSections.services.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-6">
              {footerSections.support.title}
            </h3>
            <ul className="space-y-3">
              {footerSections.support.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-6">
              {footerSections.resources.title}
            </h3>
            <ul className="space-y-3">
              {footerSections.resources.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Go to Top Button */}
            <button
              onClick={scrollToTop}
              className="mt-8 flex items-center gap-2 text-gray-800 font-semibold text-sm hover:text-gray-600 transition-colors group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              Go to Top
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8"></div>

        {/* Copyright */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm">
            © 2019 - 2025 • Netro Systems, All Rights Reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Description Paragraphs */}
        <div className="space-y-6 text-center max-w-6xl mx-auto">
          <p className="text-gray-500 text-sm leading-relaxed">
            Netro Systems is a leading software design and development company
            dedicated to transforming ideas into innovative digital solutions.
            Specializing in **UI/UX design**, **web development**, **mobile
            applications**, and **SaaS solutions**, we combine creativity with
            cutting-edge technology to deliver exceptional user experiences and
            high-performing products. At Netro, we partner with startups,
            enterprises, and businesses of all sizes to build custom software
            that drives growth, efficiency, and digital transformation. Our
            approach is rooted in collaboration, ensuring that every project
            aligns with the client&apos;s vision, goals, and audience needs.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            With a team of skilled designers, developers, and strategists, Netro
            Systems has successfully delivered solutions across industries such
            as **e-commerce**, **healthcare**, **finance**, and **technology**.
            We pride ourselves on our agile methodologies, user-centered design
            principles, and a commitment to excellence. From crafting minimum
            viable products (MVPs) for startups to developing enterprise-level
            software, Netro Systems ensures scalability, security, and
            performance. Our mission is to empower businesses to thrive in a
            rapidly evolving digital landscape. By prioritizing **innovation**,
            **quality**, and **client satisfaction**, we aim to be the dynamic
            force driving your success. Let Netro Systems be your partner in
            building the future—one solution at a time. **Your vision, our
            innovation.**
          </p>
        </div>
      </div>
    </footer>
  );
}
