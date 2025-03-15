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
    <section className="py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-[#f7fafc] text-[#063642]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="uppercase text-sm tracking-wide font-medium mb-2">
              OUR WORKS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold flex items-center">
              See Our <span className="text-[#f97316] font-permanent-marker ml-2 font-normal text-2xl md:text-3xl tracking-wide">Top Works</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/works"
              className="inline-block px-6 py-2 border border-[#063642] rounded-full hover:bg-[#063642] hover:text-white transition-colors duration-300"
            >
              Explore all our works
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First row - large item */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-3 group relative overflow-hidden rounded-xl h-[280px] md:h-[400px]"
          >
            <Link href="/works/webflow">
              <div className="w-full h-full relative">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold text-[#063642] group-hover:text-white transition-colors duration-300">
                  {projects[0].title}
                </h3>
                <p className="text-sm text-[#063642]/80 group-hover:text-white/80 transition-colors duration-300">
                  {projects[0].category}
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Second row - two medium items */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-1 group relative overflow-hidden rounded-xl h-[240px]"
          >
            <Link href="/works/pernod-ricard">
              <div className="w-full h-full relative">
                <Image
                  src={projects[1].image}
                  alt={projects[1].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-6 left-6 flex items-center">
                <div>
                  <h3 className="text-xl font-bold text-[#063642] group-hover:text-white transition-colors duration-300">
                    {projects[1].title}
                  </h3>
                  <p className="text-sm text-[#063642]/80 group-hover:text-white/80 transition-colors duration-300">
                    {projects[1].category}
                  </p>
                </div>
                {projects[1].hasArrow && (
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 010-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 group relative overflow-hidden rounded-xl h-[240px]"
          >
            <Link href="/works/salesforce">
              <div className="w-full h-full relative">
                <Image
                  src={projects[2].image}
                  alt={projects[2].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold text-[#063642] group-hover:text-white transition-colors duration-300">
                  {projects[2].title}
                </h3>
                <p className="text-sm text-[#063642]/80 group-hover:text-white/80 transition-colors duration-300">
                  {projects[2].category}
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Third row - three items */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-1 group relative overflow-hidden rounded-xl h-[220px]"
          >
            <Link href="/works/shopify">
              <div className="w-full h-full relative">
                <Image
                  src={projects[3].image}
                  alt={projects[3].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold text-[#063642] group-hover:text-white transition-colors duration-300">
                  {projects[3].title}
                </h3>
                <p className="text-sm text-[#063642]/80 group-hover:text-white/80 transition-colors duration-300">
                  {projects[3].category}
                </p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-1 group relative overflow-hidden rounded-xl h-[220px]"
          >
            <Link href="/works/antler">
              <div className="w-full h-full relative">
                <Image
                  src={projects[4].image}
                  alt={projects[4].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold text-[#063642] group-hover:text-white transition-colors duration-300">
                  {projects[4].title}
                </h3>
                <p className="text-sm text-[#063642]/80 group-hover:text-white/80 transition-colors duration-300">
                  {projects[4].category}
                </p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-1 group relative overflow-hidden rounded-xl h-[220px]"
          >
            <Link href="/works/reddit">
              <div className="w-full h-full relative">
                <Image
                  src={projects[5].image}
                  alt={projects[5].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold text-[#063642] group-hover:text-white transition-colors duration-300">
                  {projects[5].title}
                </h3>
                <p className="text-sm text-[#063642]/80 group-hover:text-white/80 transition-colors duration-300">
                  {projects[5].category}
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurWork; 