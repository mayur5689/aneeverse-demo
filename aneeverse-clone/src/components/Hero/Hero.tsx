"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  // Define animation for repeating images with slower, smoother movement
  const upwardAnimation = {
    y: [0, -1200],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 35,
        ease: "linear"
      }
    }
  };

  const downwardAnimation = {
    y: [-1200, 0],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 35,
        ease: "linear"
      }
    }
  };
  
  return (
    <section className="relative pt-24 md:pt-32 pb-20 md:pb-40 px-4 md:px-10 lg:px-20 bg-[#063642] text-white min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
          {/* Left content */}
          <div className="w-full lg:w-1/2 lg:pr-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold mb-6 md:mb-8 leading-[1.15]"
            >
              <span className="uppercase tracking-tight block">DESIGN, OPTIMIZE,</span>
              <span className="uppercase tracking-tight block">ADVERTISE</span>
              <span className="block text-xl sm:text-2xl md:text-3xl font-normal mt-4 text-[#f97316] font-permanent-marker tracking-wide">
                WE GOT YOU COVERED.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 max-w-2xl leading-relaxed"
            >
              Get access to high-velocity creative team that works with your brand. 
              Ship campaigns — faster, more reliably, and at scale.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-8 md:mb-12"
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Dependable Services</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Proven Results</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Better results</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                href="/get-started"
                className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-[#7dcbff] text-black font-medium rounded-full hover:bg-[#5fb8f5] transition-colors duration-300 text-base sm:text-lg"
              >
                GET STARTED
              </Link>
            </motion.div>
          </div>
          
          {/* Right image grid - matched to original site */}
          <div className="w-full lg:w-1/2 grid grid-cols-3 gap-2 mt-8 lg:mt-0">
            {/* First column - continuously moves upward */}
            <div className="overflow-hidden relative h-[750px]">
              <motion.div 
                className="space-y-2 absolute top-0 left-0 w-full"
                animate={upwardAnimation}
              >
                {/* Images matching the first column of original site */}
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/images/shopify.avif"
                    alt="Shopify"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/images/opa.avif"
                    alt="OPA! Sushi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/images/opa.avif"
                    alt="OPA! Sushi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/images/shopify.avif"
                    alt="Shopify"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/images/opa.avif"
                    alt="OPA! Sushi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/images/opa.avif"
                    alt="Purple Phone"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Second column - continuously moves downward */}
            <div className="overflow-hidden relative h-[750px]">
              <motion.div 
                className="space-y-2 absolute top-0 left-0 w-full"
                animate={downwardAnimation}
              >
                {/* Images matching the middle column of original site */}
                <div className="relative h-72 rounded-xl overflow-hidden">
                  <Image
                    src="/images/shopify.avif"
                    alt="Shopify Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/images/reddit.avif"
                    alt="Reddit App"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/images/opa.avif"
                    alt="OPA! Sushi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-72 rounded-xl overflow-hidden">
                  <Image
                    src="/images/roland.avif"
                    alt="Roland Piano"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/images/shopify.avif"
                    alt="Shopify Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/images/opa.avif"
                    alt="OPA! Sushi"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Third column - continuously moves upward like first column */}
            <div className="overflow-hidden relative h-[750px]">
              <motion.div 
                className="space-y-2 absolute top-0 left-0 w-full"
                animate={upwardAnimation}
              >
                {/* Images matching the right column of original site */}
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/images/shopify.avif"
                    alt="Shopify Mobile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/images/opa.avif" 
                    alt="OPA! Sushi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/images/opa.avif"
                    alt="OPA! Sushi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/images/shopify.avif"
                    alt="Shopify Mobile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/images/opa.avif" 
                    alt="OPA! Sushi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/images/opa.avif"
                    alt="OPA! Sushi"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;