"use client";

import React from 'react';
import { FaLightbulb, FaListAlt, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PerfectFit: React.FC = () => {
  return (
    <section className="bg-[#ebfafe] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-[#063642] mb-3"
          >
            Aneeverse is the
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-3"
          >
            <span className="text-[#4299e1] font-handwriting tracking-wider">PERFECT FIT</span>
            <span className="text-[#063642]"> for fast moving</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-[#063642]"
          >
            brands
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-[#f8f4e5] rounded-2xl p-6 mb-6 inline-block">
              <FaLightbulb className="text-[#063642] text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-[#063642] mb-4">SCALABLE</h3>
            <p className="text-[#4a6f7c] leading-relaxed max-w-md mx-auto text-lg">
              Boost your in-house creative. We handle the heavy lifting so you can focus on strategic, high-impact work without adding overhead to the team.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-[#f8f4e5] rounded-2xl p-6 mb-6 inline-block">
              <FaListAlt className="text-[#063642] text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-[#063642] mb-4">FLEXIBLE</h3>
            <p className="text-[#4a6f7c] leading-relaxed max-w-md mx-auto text-lg">
              Say yes to more projects. Whether you need more bandwidth or different skills, Aneeverse has the resources you need to get the job done.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-[#f8f4e5] rounded-2xl p-6 mb-6 inline-block">
              <FaStar className="text-[#063642] text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-[#063642] mb-4">24/7</h3>
            <p className="text-[#4a6f7c] leading-relaxed max-w-md mx-auto text-lg">
              Don't sacrifice quality for speed. Our global team of creatives delivers agency-level work in a fraction of the time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PerfectFit; 