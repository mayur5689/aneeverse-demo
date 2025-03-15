"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBuilding, FaPaintBrush, FaUserTie, FaTools } from 'react-icons/fa';

const Comparison = () => {
  const criteria = [
    'Speed',
    'Flexibility',
    'Quality',
    'Scalability',
    'Cost-effectiveness',
  ];

  const options = [
    {
      title: 'Aneeverse',
      description: 'Work with the top 1% of global creative talent, recruited from the best brands and agencies.',
      checks: [true, true, true, true, true],
      highlight: true,
      Icon: FaUsers
    },
    {
      title: 'In-house team',
      description: "In-house teams don't always have the skill mix or bandwidth to handle every request that the business needs.",
      checks: [false, false, true, true, false],
      highlight: false,
      Icon: FaBuilding
    },
    {
      title: 'Creative agencies',
      description: 'Working with full-scale creative agencies can be slow, costly, and inflexible.',
      checks: [false, false, true, true, false],
      highlight: false,
      Icon: FaPaintBrush
    },
    {
      title: 'Freelancers',
      description: 'Freelancers can be unreliable and hard to scale, leading to inconsistent work and questionable quality.',
      checks: [false, false, true, true, true],
      highlight: false,
      Icon: FaUserTie
    },
    {
      title: 'Self-service tools',
      description: 'These solutions make incremental improvements to capacity, and work mostly for simpler, repetitive tasks.',
      checks: [false, false, true, true, false],
      highlight: false,
      Icon: FaTools
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-12 bg-[#063642] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
          >
            Hiring or traditional outsourcing?
          </motion.h2>
          <span className="text-[#ff00ff] font-permanent-marker text-2xl sm:text-3xl md:text-4xl tracking-wide">neither</span>
        </div>
        
        {/* Scrollable container for mobile */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[1000px] md:min-w-full">
            {/* Criteria Headers */}
            <div className="grid grid-cols-[2fr_repeat(5,_1fr)] gap-4 mb-6">
              <div></div>
              {['Speed', 'Flexibility', 'Quality', 'Scalability', 'Cost-effectiveness'].map((criterion, index) => (
                <div key={index} className="text-center">
                  <span className="text-sm font-medium text-white">{criterion}</span>
                </div>
              ))}
            </div>
            
            {/* Options */}
            <motion.div 
              initial="hidden"
              animate="visible"
              className="space-y-2"
            >
              {options.map((option, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`${index === 0 ? "bg-[#82d9f7] rounded-[50px]" : ""}`}
                >
                  <div className="grid grid-cols-[2fr_repeat(5,_1fr)] items-center gap-4 py-3">
                    <div className={`flex items-center ${index === 0 ? "pl-6 text-[#063642]" : "pl-4 text-white"}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${index === 0 ? "bg-[#82d9f7]" : "bg-[#0b4757]/60"}`}>
                        <option.Icon className={`text-lg ${index === 0 ? "text-[#063642]" : "text-white"}`} />
                      </div>
                      <div>
                        <h3 className={`text-base font-bold ${index === 0 ? "text-[#063642]" : "text-white"}`}>
                          {option.title}
                        </h3>
                        <p className={`text-xs mt-0.5 max-w-xs leading-tight ${index === 0 ? "text-[#063642]/90" : "text-gray-400"}`}>
                          {option.description}
                        </p>
                      </div>
                    </div>
                    
                    {option.checks.map((isChecked, checkIndex) => (
                      <div key={checkIndex} className="flex justify-center items-center">
                        <span className={`text-xl ${isChecked ? (index === 0 ? "text-[#063642]" : "text-[#82d9f7]") : "text-white/50"}`}>
                          {isChecked ? "✓" : "✕"}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison; 