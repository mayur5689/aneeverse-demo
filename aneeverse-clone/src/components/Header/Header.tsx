"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-[#ebfafe]/95 backdrop-blur-sm text-[#063642]' 
          : 'py-4 bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-10">
            <span className={`text-xl md:text-2xl font-bold ${scrolled ? 'text-[#063642]' : 'text-white'}`}>
              aneeverse
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link 
              href="/services" 
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled ? 'text-[#063642]/80 hover:text-[#063642]' : 'text-white/80 hover:text-white'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/works" 
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled ? 'text-[#063642]/80 hover:text-[#063642]' : 'text-white/80 hover:text-white'
              }`}
            >
              Our Works
            </Link>
            <Link 
              href="/why-us" 
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled ? 'text-[#063642]/80 hover:text-[#063642]' : 'text-white/80 hover:text-white'
              }`}
            >
              Why Us
            </Link>
            <Link 
              href="/resources" 
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled ? 'text-[#063642]/80 hover:text-[#063642]' : 'text-white/80 hover:text-white'
              }`}
            >
              Resources
            </Link>
            <Link 
              href="/pricing" 
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled ? 'text-[#063642]/80 hover:text-[#063642]' : 'text-white/80 hover:text-white'
              }`}
            >
              Pricing
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/book" 
              className={`text-sm font-medium transition-colors duration-200 px-2 py-1 ${
                scrolled ? 'text-[#063642]/80 hover:text-[#063642]' : 'text-white/80 hover:text-white'
              }`}
            >
              Book a Call
            </Link>
            <Link 
              href="/login" 
              className={`text-sm font-medium transition-colors duration-200 px-6 py-2 rounded-full ${
                scrolled 
                  ? 'bg-[#063642] text-white hover:bg-[#063642]/90' 
                  : 'bg-white text-[#063642] hover:bg-white/90'
              }`}
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 focus:outline-none transition-colors duration-200 z-10 ${
              scrolled ? 'text-[#063642]' : 'text-white'
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className={`absolute top-full left-0 right-0 p-4 mt-2 rounded-lg shadow-lg ${
                  scrolled 
                    ? 'bg-[#ebfafe] text-[#063642]' 
                    : 'bg-[#063642] text-white'
                }`}
              >
                <div className="flex flex-col space-y-4">
                  <Link 
                    href="/services" 
                    className="text-base font-medium hover:opacity-80"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link 
                    href="/works" 
                    className="text-base font-medium hover:opacity-80"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Works
                  </Link>
                  <Link 
                    href="/why-us" 
                    className="text-base font-medium hover:opacity-80"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Why Us
                  </Link>
                  <Link 
                    href="/resources" 
                    className="text-base font-medium hover:opacity-80"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Resources
                  </Link>
                  <Link 
                    href="/pricing" 
                    className="text-base font-medium hover:opacity-80"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <div className="pt-4 border-t border-current/10">
                    <Link 
                      href="/book" 
                      className="block text-base font-medium hover:opacity-80 mb-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Book a Call
                    </Link>
                    <Link 
                      href="/login" 
                      className={`block text-center text-base font-medium px-6 py-2 rounded-full ${
                        scrolled 
                          ? 'bg-[#063642] text-white' 
                          : 'bg-white text-[#063642]'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Header; 