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
            <span className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide w-[200px] h-[40px] flex items-center ${scrolled ? 'text-[#063642]' : 'text-white'}`}>
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 w-full h-[100vh] bg-[#ebfafe] z-40"
              >
                <div className="container mx-auto px-4">
                  {/* Header section with logo and close button */}
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide w-[200px] h-[40px] flex items-center text-[#063642]">
                      aneeverse
                    </span>
                    <button 
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 text-[#063642] hover:opacity-80"
                      aria-label="Close menu"
                    >
                      <FiX className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Menu items */}
                  <div className="flex flex-col space-y-6 mt-12">
                    <Link 
                      href="/services" 
                      className="text-lg font-medium text-[#063642] hover:opacity-80 flex items-center justify-between"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Services
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link 
                      href="/works" 
                      className="text-lg font-medium text-[#063642] hover:opacity-80"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Our Work
                    </Link>
                    <Link 
                      href="/why-us" 
                      className="text-lg font-medium text-[#063642] hover:opacity-80 flex items-center justify-between"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Why Us
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link 
                      href="/resources" 
                      className="text-lg font-medium text-[#063642] hover:opacity-80 flex items-center justify-between"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Resources
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link 
                      href="/pricing" 
                      className="text-lg font-medium text-[#063642] hover:opacity-80"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Pricing
                    </Link>
                  </div>
                  <div className="mt-8 space-y-4">
                    <button 
                      className="w-full py-4 text-lg font-medium text-[#063642] bg-transparent rounded-full border-2 border-[#063642] hover:bg-[#063642] hover:text-white transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Book a Call
                    </button>
                    <button 
                      className="w-full py-4 text-lg font-medium text-white bg-[#063642] rounded-full hover:bg-[#063642]/90 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </button>
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