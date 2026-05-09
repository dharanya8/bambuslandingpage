// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Technologies', href: '#technologies' },
    // { name: 'Industries', href: '#industries' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white py-5'
    }`}>
      <nav className="container-fluid mx-auto flex justify-between items-center px-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
            Bambus Technologies
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 hover:translate-y-[-2px]"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-2 bg-emerald-50 px-2 py-2 rounded-full">
            <Phone className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">+91 93445 67746</span>
          </div>
          <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-3 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden`}>
          <div className="flex justify-end p-6">
            <button onClick={() => setIsOpen(false)}>
              <X size={28} className="text-gray-700" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 mt-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-emerald-600 text-xl font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-2 bg-emerald-50 px-5 py-2 rounded-full">
              <Phone className="w-5 h-5 text-emerald-600" />
              <span className="text-lg font-medium text-emerald-700">+91 93445 67746</span>
            </div>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full font-medium text-lg transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;