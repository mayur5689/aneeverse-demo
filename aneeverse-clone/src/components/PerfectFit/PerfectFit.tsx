"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const PerfectFit = () => {
  const benefits = [
    "Unlimited design requests",
    "Fast turnaround time",
    "Fixed monthly pricing",
    "Dedicated design team",
    "Money-back guarantee",
    "Cancel anytime",
    "Brand consistency",
    "Premium support"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="section-padding bg-[#f0f9fc] overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs sm:text-sm uppercase tracking-wider font-medium text-[#063642]">
              PERFECT FIT FOR
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              Aneeverse is the <span className="text-[#f97316] font-permanent-marker text-2xl tracking-wide">PERFECT FIT</span> for fast moving brands
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-[#063642]/80 leading-relaxed">
              Whether you're a startup or an established business, our design subscription service is tailored to help you scale your creative output efficiently and cost-effectively.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-4"
            >
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit}
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#7dcbff] flex items-center justify-center">
                    <FiCheck className="w-3 h-3 text-[#063642]" />
                  </div>
                  <span className="text-[#063642]">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 sm:mt-12"
            >
              <button className="btn btn-primary">
                Start Your Journey
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-[#063642] p-8 sm:p-12">
              <div className="relative h-full w-full">
                <div className="absolute top-0 left-0 w-24 h-24 bg-[#7dcbff]/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#7dcbff]/20 rounded-full translate-x-1/4 translate-y-1/4" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                    Ready to Scale?
                  </h3>
                  <p className="text-white/80">
                    Join hundreds of businesses that trust us with their design needs.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PerfectFit; 