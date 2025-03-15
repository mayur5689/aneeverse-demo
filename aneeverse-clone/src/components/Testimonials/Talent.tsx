"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Talent = () => {
  return (
    <section className="bg-[#e7edd6] py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wider text-[#063642]/70">WORK WITH THE BEST</p>
              <h2 className="text-5xl md:text-6xl font-bold">
                <span className="text-[#4299e1] font-handwriting block mb-3">WORLD-CLASS TALENT</span>
                <span className="text-[#063642]">with no borders</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#063642] space-y-8"
            >
              <p className="text-xl leading-relaxed">
                Work with the top 1% of global creative talent – elite designers, project managers, animators, copywriters, AI technologists and more, recruited from the best brands and agencies.
              </p>
              <p className="text-xl leading-relaxed">
                Plus, a dedicated project manager to ensure your briefs stay on track from start to finish.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button className="bg-[#063642] text-white px-10 py-4 rounded-full hover:bg-[#063642]/90 transition-colors duration-200 text-lg font-medium">
                Book a Call
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[700px] rounded-[40px] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/talent/bottom-about.webp"
              alt="World-class talent"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Talent; 