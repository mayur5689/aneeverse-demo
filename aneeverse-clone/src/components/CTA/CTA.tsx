"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-accent-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-accent-200 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-80 h-80 bg-accent-200 rounded-full opacity-40 blur-3xl"></div>
      
      <div className="container mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto bg-white rounded-2xl shadow-custom-lg p-10 md:p-16 border border-accent-200"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to simplify your creative process?
            </h2>
            <p className="text-accent-700 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
              Join leading brands using Aneeverse to save time and money while driving better marketing results.
              Our team is ready to help you scale your creative production.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            >
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-white bg-primary hover:bg-primary-dark transition-colors duration-300 font-medium text-base">
                Schedule a discovery call
              </button>
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-primary bg-white border border-primary hover:bg-accent-50 transition-colors duration-300 font-medium text-base">
                Learn more about our plans
              </button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5x</div>
              <p className="text-accent-700">faster turnaround time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">80%</div>
              <p className="text-accent-700">cost savings vs agencies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-accent-700">skilled professionals</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-accent-700">global creative support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 