// components/Footer.js
import React from 'react';
import {
  Code2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  const quickLinks = ['Home', 'About', 'Services', 'Technologies', 'Contact'];
  const servicesList = ['ERP Solutions', 'Odoo Implementation', 'Digital Marketing', 'SEO Optimization', 'Android Apps', 'Web Development', 'POS Software', 'Power BI', '3D Rendering'];
  
  const socialIcons = [
  { icon: FaFacebookF, href: "#", color: "hover:text-blue-600" },
  { icon: FaTwitter, href: "#", color: "hover:text-sky-500" },
  { icon: FaLinkedinIn, href: "#", color: "hover:text-blue-700" },
  { icon: FaInstagram, href: "#", color: "hover:text-pink-600" },
  { icon: FaYoutube, href: "#", color: "hover:text-red-600" },
];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-fluid mx-auto px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Bambus Technologies</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Empowering businesses with intelligent technology solutions — from ERP implementation to digital marketing and beyond.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className={`bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300 ${social.color}`}
                    aria-label={`Follow us on ${social.icon.name}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm hover:text-emerald-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="grid grid-cols- gap-x-3 gap-y-2">
              {servicesList.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm hover:text-emerald-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">Subscribe to get the latest updates and offers.</p>
            <div className="flex mb-6">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-lg w-full text-green-400 border border-gray-300 focus:outline-none"
              />
              <button className="bg-emerald-600 px-4 py-2 rounded-r-lg hover:bg-emerald-700 transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-emerald-500" />
              <span>+91 93445 67746</span>
            </div>
            <div className="flex items-center gap-3 text-sm mt-2">
              <Mail className="w-4 h-4 text-emerald-500" />
              <span>contact@bambustechnologies.in</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Bambus Technologies LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;