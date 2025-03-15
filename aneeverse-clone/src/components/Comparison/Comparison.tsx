"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';

const Comparison = () => {
  const comparisonData = {
    traditional: {
      title: "Traditional Agency",
      points: [
        { text: "Long-term contracts", positive: false },
        { text: "High monthly retainers", positive: false },
        { text: "Slow turnaround time", positive: false },
        { text: "Limited revisions", positive: false },
        { text: "Complex processes", positive: false },
      ]
    },
    aneeverse: {
      title: "Aneeverse",
      points: [
        { text: "Monthly subscription", positive: true },
        { text: "Affordable pricing", positive: true },
        { text: "Fast turnaround time", positive: true },
        { text: "Unlimited revisions", positive: true },
        { text: "Simple processes", positive: true },
      ]
    }
  };

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#063642] text-white overflow-hidden">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="text-xs sm:text-sm uppercase tracking-wider font-medium text-[#7dcbff]">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4">
            The Clear Difference
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Traditional Agency */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-[#7dcbff]"
            >
              {comparisonData.traditional.title}
            </motion.h3>
            <div className="space-y-4 sm:space-y-5">
              {comparisonData.traditional.points.map((point, index) => (
                <motion.div
                  key={point.text}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUpVariant}
                  className="flex items-center space-x-3 text-white/80"
                >
                  <FiX className="flex-shrink-0 w-5 h-5 text-red-500" />
                  <span className="text-sm sm:text-base">{point.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Aneeverse */}
          <div className="bg-[#7dcbff]/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-[#7dcbff]/20">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-[#7dcbff]"
            >
              {comparisonData.aneeverse.title}
            </motion.h3>
            <div className="space-y-4 sm:space-y-5">
              {comparisonData.aneeverse.points.map((point, index) => (
                <motion.div
                  key={point.text}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUpVariant}
                  className="flex items-center space-x-3 text-white"
                >
                  <FiCheck className="flex-shrink-0 w-5 h-5 text-[#7dcbff]" />
                  <span className="text-sm sm:text-base">{point.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Hiring or traditional outsourcing? <span className="text-[#f97316] font-permanent-marker text-2xl tracking-wide">neither</span>
        </h2>
      </div>
    </section>
  );
};

export default Comparison; 