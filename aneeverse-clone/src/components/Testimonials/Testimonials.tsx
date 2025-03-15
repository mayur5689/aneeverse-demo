"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-white overflow-hidden">
      <div className="container mx-auto relative">
        {/* Background decorative element */}
        <div className="absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-accent-100 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl shadow-custom-lg p-8 md:p-12 border border-accent-200"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">JM Visa Services</h3>
              <p className="text-accent-700 italic text-lg leading-relaxed">
                "Working with AneeVerse got us to the #1 spot in Mumbai through smart blog strategies and GMB optimization. 
                Our leads have grown, and we've even saved on marketing costs. Really glad we made this move!"
              </p>
              <div className="mt-6">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-200 flex items-center justify-center overflow-hidden">
                    {/* Avatar placeholder - would be an actual image in production */}
                    <span className="text-accent-500 text-xs">AT</span>
                  </div>
                  <p className="font-medium text-accent-800">Amrita Thakar, Founder</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-accent-100 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-black mb-1">57%</div>
                <div className="text-accent-700 text-sm font-medium">production Time Saved</div>
              </div>
              <div className="bg-accent-100 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-black mb-1">$10,775</div>
                <div className="text-accent-700 text-sm font-medium">cost Savings</div>
              </div>
              <div className="bg-accent-100 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-black mb-1">20</div>
                <div className="text-accent-700 text-sm font-medium">videos Delivered</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Aneeverse is the perfect fit for fast moving brands
            </h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14"
            >
              <div className="bg-white p-8 rounded-xl shadow-custom border border-accent-200">
                <h3 className="text-xl font-bold mb-4">Scalable</h3>
                <p className="text-accent-700 text-base leading-relaxed">
                  Boost your in-house creative. We handle the heavy lifting so you can focus on strategic, 
                  high-impact work without adding overhead to the team.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-custom border border-accent-200">
                <h3 className="text-xl font-bold mb-4">Flexible</h3>
                <p className="text-accent-700 text-base leading-relaxed">
                  Say yes to more projects. Whether you need more bandwidth or different skills, 
                  Aneeverse has the resources you need to get the job done.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-custom border border-accent-200">
                <h3 className="text-xl font-bold mb-4">24/7</h3>
                <p className="text-accent-700 text-base leading-relaxed">
                  Don't sacrifice quality for speed. Our global team of creatives delivers 
                  agency-level work in a fraction of the time.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 