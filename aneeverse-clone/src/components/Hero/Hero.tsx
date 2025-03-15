"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isDesktop, setIsDesktop] = React.useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define animation for repeating images with slower, smoother movement
  const upwardAnimation = {
    y: [0, -1200],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 80,
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
        duration: 80,
        ease: "linear"
      }
    }
  };

  const leftwardAnimation = {
    x: [0, -2400],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 80,
        ease: "linear"
      }
    }
  };

  const rightwardAnimation = {
    x: [0, 2400],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 80,
        ease: "linear"
      }
    }
  };
  
  return (
    <section className="relative pt-8 lg:pt-40 pb-4 lg:pb-20 px-4 md:px-10 lg:px-12 bg-[#063642] text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-8">
          {/* Left content - centered on mobile */}
          <div className="w-full lg:w-1/2 lg:pr-4 text-center lg:text-left mt-16 lg:mt-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold mb-4 md:mb-6 leading-[1.15]"
            >
              <span className="uppercase tracking-normal font-inter font-semibold">DESIGN, OPTIMIZE, </span>
              <span className="uppercase tracking-normal font-inter font-semibold">ADVERTISE</span>
              <span className="block text-xl sm:text-2xl md:text-3xl font-normal mt-2 text-[#f97316] font-permanent-marker tracking-wide">
                WE GOT YOU COVERED.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Get access to high-velocity creative team that works with your brand. 
              Ship campaigns — faster, more reliably, and at scale.
            </motion.p>
            
            {/* Services list - hidden on mobile */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block space-y-4 mb-8 md:mb-10"
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
              className="flex justify-center lg:justify-start"
            >
              <Link 
                href="/get-started"
                className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-[#7dcbff] text-black font-medium rounded-full hover:bg-[#5fb8f5] transition-colors duration-300 text-base sm:text-lg"
              >
                GET STARTED
              </Link>
            </motion.div>
          </div>
          
          {/* Right image grid */}
          <div className="w-full lg:w-1/2 lg:ml-[-40px]">
            {/* Desktop view - original 3 columns */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-2">
              {/* First column */}
              <div className="overflow-hidden relative h-[750px]">
                <motion.div 
                  className="space-y-2 absolute top-0 left-0 w-full"
                  animate={upwardAnimation}
                >
                  {/* Keep all original first column images */}
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
              
              {/* Second column */}
              <div className="overflow-hidden relative h-[750px]">
                <motion.div 
                  className="space-y-2 absolute top-0 left-0 w-full"
                  animate={downwardAnimation}
                >
                  {/* Keep all original second column images */}
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
              
              {/* Third column */}
              <div className="overflow-hidden relative h-[750px]">
                <motion.div 
                  className="space-y-2 absolute top-0 left-0 w-full"
                  animate={upwardAnimation}
                >
                  {/* Keep all original third column images */}
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

            {/* Mobile view - 2 rows with horizontal scroll */}
            <div className="lg:hidden flex flex-col gap-4 mt-8">
              {/* Top row - scrolls left */}
              <div className="overflow-hidden relative h-[190px]">
                <motion.div 
                  className="absolute top-0 left-0 flex gap-6"
                  animate={leftwardAnimation}
                  style={{ width: "fit-content" }}
                >
                  {[...Array(5)].map((_, index) => (
                    <React.Fragment key={index}>
                      <div className="relative w-[150px] h-[190px] rounded-xl overflow-hidden flex-shrink-0">
                        <Image src="/images/shopify.avif" alt="Shopify" fill sizes="150px" className="object-cover" priority={index === 0} />
                      </div>
                      <div className="relative w-[150px] h-[190px] rounded-xl overflow-hidden flex-shrink-0">
                        <Image src="/images/opa.avif" alt="OPA! Sushi" fill sizes="150px" className="object-cover" priority={index === 0} />
                      </div>
                      <div className="relative w-[150px] h-[190px] rounded-xl overflow-hidden flex-shrink-0">
                        <Image src="/images/reddit.avif" alt="Reddit" fill sizes="150px" className="object-cover" priority={index === 0} />
                      </div>
                      <div className="relative w-[150px] h-[190px] rounded-xl overflow-hidden flex-shrink-0">
                        <Image src="/images/roland.avif" alt="Roland" fill sizes="150px" className="object-cover" priority={index === 0} />
                      </div>
                    </React.Fragment>
                  ))}
                </motion.div>
                {/* Clone for seamless loop */}
                <motion.div 
                  className="absolute top-0 left-[2400px] flex gap-6"
                  animate={leftwardAnimation}
                  style={{ width: "fit-content" }}
                >
                  {[...Array(5)].map((_, index) => (
                    <React.Fragment key={index}>
                      <div className="relative w-[150px] h-[190px] rounded-xl overflow-hidden flex-shrink-0">
                        <Image src="/images/shopify.avif" alt="Shopify" fill sizes="150px" className="object-cover" />
                      </div>
                      <div className="relative w-[150px] h-[190px] rounded-xl overflow-hidden flex-shrink-0">
                        <Image src="/images/opa.avif" alt="OPA! Sushi" fill sizes="150px" className="object-cover" />
                      </div>
                      <div className="relative w-[150px] h-[190px] rounded-xl overflow-hidden flex-shrink-0">
                        <Image src="/images/reddit.avif" alt="Reddit" fill sizes="150px" className="object-cover" />
                      </div>
                      <div className="relative w-[150px] h-[190px] rounded-xl overflow-hidden flex-shrink-0">
                        <Image src="/images/roland.avif" alt="Roland" fill sizes="150px" className="object-cover" />
                      </div>
                    </React.Fragment>
                  ))}
                </motion.div>
              </div>

              {/* Bottom row - scrolls right */}
              <div className="overflow-hidden relative h-[190px]">
                <motion.div 
                  className="absolute top-0 right-0 flex gap-6"
                  animate={rightwardAnimation}
                  style={{ width: "fit-content" }}
                >
                  {[...Array(5)].map((_, index) => (
                    <React.Fragment key={index}>
                      <div className="relative w-[150px] h-[190px] rounded-xl overflow-hidden flex-shrink-0">
                        <Image src="/images/roland.avif" alt="Roland" fill sizes="150px" className="object-cover" priority={index === 0} />
                      </div>
                      <div className="relative w-[150px] h-[190px] rounded-xl overflow-hidden flex-shrink-0">
                        <Image src="/images/opa.avif" alt="OPA! Sushi" fill sizes="150px" className="object-cover" priority={index === 0} />
                      </div>
                      <div className="relative w-[150px] h-[190px] rounded-xl overflow-hidden flex-shrink-0">
                        <Image src="/images/shopify.avif" alt="Shopify" fill sizes="150px" className="object-cover" priority={index === 0} />
                      </div>
                      <div className="relative w-[150px] h-[190px] rounded-xl overflow-hidden flex-shrink-0">
                        <Image src="/images/reddit.avif" alt="Reddit" fill sizes="150px" className="object-cover" priority={index === 0} />
                      </div>
                    </React.Fragment>
                  ))}
                </motion.div>
                {/* Clone for seamless loop */}
                <motion.div 
                  className="absolute top-0 right-[2400px] flex gap-6"
                  animate={rightwardAnimation}
                  style={{ width: "fit-content" }}
                >
                  {[...Array(5)].map((_, index) => (
                    <React.Fragment key={index}>
                      <div className="relative w-[150px] h-[190px] rounded-xl overflow-hidden flex-shrink-0">
                        <Image src="/images/roland.avif" alt="Roland" fill sizes="150px" className="object-cover" />
                      </div>
                      <div className="relative w-[150px] h-[190px] rounded-xl overflow-hidden flex-shrink-0">
                        <Image src="/images/opa.avif" alt="OPA! Sushi" fill sizes="150px" className="object-cover" />
                      </div>
                      <div className="relative w-[150px] h-[190px] rounded-xl overflow-hidden flex-shrink-0">
                        <Image src="/images/shopify.avif" alt="Shopify" fill sizes="150px" className="object-cover" />
                      </div>
                      <div className="relative w-[150px] h-[190px] rounded-xl overflow-hidden flex-shrink-0">
                        <Image src="/images/reddit.avif" alt="Reddit" fill sizes="150px" className="object-cover" />
                      </div>
                    </React.Fragment>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;