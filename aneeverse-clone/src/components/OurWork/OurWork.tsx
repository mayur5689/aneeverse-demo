"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const OurWork = () => {
  const projects = [
    {
      title: "Webflow",
      category: "Illustration Design, Ad Creative",
      image: "/images/our-work/works-ban-1.avif",
      size: "large", // Full width
    },
    {
      title: "Pernod Ricard",
      category: "eBook & Digital Reports, Video Production",
      image: "/images/our-work/works2.avif",
      size: "medium",
      hasArrow: true,
    },
    {
      title: "Salesforce",
      category: "Motion Design, Ad Creative",
      image: "/images/our-work/works3.avif",
      size: "medium",
    },
    {
      title: "Shopify",
      category: "Ad Creative",
      image: "/images/our-work/works4.avif",
      size: "small",
    },
    {
      title: "Antler",
      category: "Brand Identity, Motion Design, Social Media Creative",
      image: "/images/our-work/works5.avif",
      size: "medium",
    },
    {
      title: "Reddit",
      category: "Motion Design, Social Media Creative",
      image: "/images/our-work/works6.avif",
      size: "medium",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-12 sm:py-20 px-4 md:px-10 lg:px-20 bg-[#ebfafe] text-[#063642]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="uppercase text-sm tracking-wide font-medium mb-2">
              OUR WORKS
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold flex items-center gap-2">
              See Our <span className="text-[#f97316] font-permanent-marker font-normal text-xl sm:text-2xl md:text-3xl tracking-wide">Top Works</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 sm:mt-0"
          >
            <Link 
              href="/works"
              className="inline-block px-6 py-2 border border-[#063642] rounded-full hover:bg-[#063642] hover:text-white transition-colors duration-300"
            >
              Explore all
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-xl ${
                index === 0 ? 'md:col-span-3 h-[280px] md:h-[400px]' : 
                index === 2 ? 'md:col-span-2 h-[240px]' : 
                'h-[240px]'
              }`}
            >
              <Link href={`/works/${project.title.toLowerCase()}`}>
                <div className="w-full h-full relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#063642] group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#063642]/80 group-hover:text-white/80 transition-colors duration-300">
                    {project.category}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork; 