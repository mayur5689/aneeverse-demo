"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Brands = () => {
  // Company logos array
  const companyLogos = [
    '/images/company-logo/google.png',
    '/images/company-logo/webflow.png',
    '/images/company-logo/shopify.png',
    '/images/company-logo/reddit.png',
    '/images/company-logo/novartis.png',
  ];

  // Create arrays with duplicated logos for infinite scrolling effect
  const generateLogosArray = () => {
    // Duplicate the array multiple times to ensure smooth scrolling
    return [...companyLogos, ...companyLogos, ...companyLogos];
  };

  const logos = generateLogosArray();

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-20 bg-[#ebfafe] text-[#063642]">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-12 sm:mb-16 md:mb-20"
        >
          Trusted by 500+ of the world's biggest brands
        </motion.h2>

        {/* Logos with scrolling animation - first row scrolls left */}
        <div className="overflow-hidden mb-8 sm:mb-12 md:mb-16 w-full">
          <div className="logos-slide-container">
            <div className="animate-slideLeft flex">
              {logos.map((logo, index) => (
                <motion.div 
                  key={`slide-left-${index}`}
                  className="mx-4 sm:mx-6 flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="h-12 w-24 sm:h-16 sm:w-28 md:h-20 md:w-36 bg-[#ebfafe] flex items-center justify-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-300">
                    <Image 
                      src={logo}
                      alt="Company Logo"
                      width={100}
                      height={50}
                      style={{ objectFit: 'contain' }}
                      className="max-h-8 sm:max-h-10 md:max-h-12 max-w-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Logos with scrolling animation - second row scrolls right */}
        <div className="overflow-hidden w-full">
          <div className="logos-slide-container">
            <div className="animate-slideRight flex">
              {logos.map((logo, index) => (
                <motion.div 
                  key={`slide-right-${index}`}
                  className="mx-4 sm:mx-6 flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="h-12 w-24 sm:h-16 sm:w-28 md:h-20 md:w-36 bg-[#ebfafe] flex items-center justify-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-300">
                    <Image 
                      src={logo}
                      alt="Company Logo"
                      width={100}
                      height={50}
                      style={{ objectFit: 'contain' }}
                      className="max-h-8 sm:max-h-10 md:max-h-12 max-w-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .logos-slide-container {
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 20%,
            black 80%,
            transparent
          );
        }

        .animate-slideLeft {
          animation: slideLeft 30s linear infinite;
          will-change: transform;
          display: inline-flex;
        }

        .animate-slideRight {
          animation: slideRight 30s linear infinite;
          will-change: transform;
          display: inline-flex;
        }

        @keyframes slideLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 3));
          }
        }

        @keyframes slideRight {
          from {
            transform: translateX(calc(-100% / 3));
          }
          to {
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-slideLeft,
          .animate-slideRight {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Brands; 