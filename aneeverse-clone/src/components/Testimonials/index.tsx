"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    company: 'VMC',
    quote: "AneeVerse helped us with our creative work. They brought lots of fun ideas that made everything simple and bright. It felt like having a whole team of friends.",
    author: 'Vikram Manghnani',
    role: 'VMC',
    image: '/images/testimonal/team2.avif',
    stats: {
      productionTime: '65%',
      costSavings: '$15,000',
      videosDelivered: '25'
    }
  },
  {
    id: 2,
    company: 'Novino Inks Pvt Ltd',
    quote: "The biggest benefit has been the time saved. AneeVerse built a high-converting eCommerce website that truly reflects our brand. The level of customization and efficiency they brought in is unmatched.",
    author: 'Navin Agarwal',
    role: 'Founder',
    image: '/images/testimonal/team1.avif',
    stats: {
      productionTime: '40%',
      costSavings: '$8,000',
      videosDelivered: '15'
    }
  },
  {
    id: 3,
    company: 'Digital Marketing Agency',
    quote: "The team at AneeVerse has transformed our creative workflow. Their attention to detail and quick turnaround times have made them an invaluable partner for our agency.",
    author: 'Michael Chen',
    role: 'Creative Director',
    image: '/images/testimonal/team3.avif',
    stats: {
      productionTime: '45%',
      costSavings: '$9,500',
      videosDelivered: '18'
    }
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 200);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 200);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);  // Empty dependency array since we're using the function form of setState

  const handleImageClick = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 200);
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative bg-[#063642] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative">
          {/* Navigation Dots */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <FaChevronUp className="text-white" />
            </button>
            <div className="flex flex-col gap-2 py-4">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <FaChevronDown className="text-white" />
            </button>
          </div>

          {/* Testimonial Content */}
          <div className="relative h-[400px] md:h-[300px]">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className={`relative rounded-full overflow-hidden transition-all duration-200 cursor-pointer ${
                    index === currentIndex 
                      ? 'w-32 h-32 md:w-40 md:h-40 opacity-100 z-20' 
                      : 'w-24 h-24 opacity-50 z-10'
                  }`}
                  onClick={() => handleImageClick(index)}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className={`object-cover transition-all duration-200 ${
                      index !== currentIndex ? 'grayscale' : ''
                    }`}
                    priority={index === currentIndex}
                  />
                </motion.div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="ml-48 md:ml-56"
              >
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {currentTestimonial.company}
                  </h3>
                  <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed max-w-3xl">
                    "{currentTestimonial.quote}"
                  </p>
                  <div className="text-white">
                    <p className="font-medium">{currentTestimonial.author}</p>
                    <p className="text-white/70 italic">{currentTestimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            key={`${currentTestimonial.id}-stat1`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0b4757]/60 rounded-2xl p-6 text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              {currentTestimonial.stats.productionTime}
            </div>
            <div className="text-sm text-white/70 uppercase tracking-wider">
              Production Time Saved
            </div>
          </motion.div>
          <motion.div
            key={`${currentTestimonial.id}-stat2`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-[#0b4757]/60 rounded-2xl p-6 text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              {currentTestimonial.stats.costSavings}
            </div>
            <div className="text-sm text-white/70 uppercase tracking-wider">
              Cost Savings
            </div>
          </motion.div>
          <motion.div
            key={`${currentTestimonial.id}-stat3`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-[#0b4757]/60 rounded-2xl p-6 text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              {currentTestimonial.stats.videosDelivered}
            </div>
            <div className="text-sm text-white/70 uppercase tracking-wider">
              Videos Delivered
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 