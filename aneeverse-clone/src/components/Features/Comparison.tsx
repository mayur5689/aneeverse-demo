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
    <section className="py-24 bg-[#063642] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold"
          >
            Hiring or traditional <br />
            outsourcing? <span className="text-[#ff00ff] font-handwriting">neither</span>
          </motion.h2>
        </div>
        
        {/* Criteria Headers */}
        <div className="grid grid-cols-[2fr_repeat(5,_1fr)] gap-4 mb-12">
          <div></div>
          {criteria.map((criterion, index) => (
            <div key={index} className="text-center">
              <span className="text-base font-medium text-gray-300">{criterion}</span>
            </div>
          ))}
        </div>
        
        {/* Options */}
        <motion.div 
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {options.map((option, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={index === 0 ? "bg-[#82d9f7] rounded-[100px] py-12" : "py-6"}
            >
              <div className="grid grid-cols-[2fr_repeat(5,_1fr)] items-center gap-4">
                <div className={`flex items-start ${index === 0 ? "pl-16 text-[#063642]" : "pl-6 text-white"}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-5 ${index === 0 ? "bg-[#82d9f7]" : "bg-[#0b4757]/60"}`}>
                    <option.Icon className={`text-2xl ${index === 0 ? "text-[#063642]" : "text-white"}`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${index === 0 ? "text-[#063642]" : "text-white"}`}>
                      {option.title}
                    </h3>
                    <p className={`text-sm mt-2 max-w-xs leading-relaxed ${index === 0 ? "text-[#063642]/90" : "text-gray-400"}`}>
                      {option.description}
                    </p>
                  </div>
                </div>
                
                {option.checks.map((isChecked, checkIndex) => (
                  <div key={checkIndex} className="flex justify-center items-center">
                    <span className={`text-3xl ${isChecked ? "text-white" : "text-white opacity-90"}`}>
                      {isChecked ? "✓" : "✕"}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison; 