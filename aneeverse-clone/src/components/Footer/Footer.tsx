"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-[#063642] text-white">
      {/* Background Image */}
      <Image
        src="/images/footer/fbg.jpg"
        alt=""
        fill
        className="object-cover opacity-20"
        priority
      />

      {/* Main Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-wide mb-4">
              DESIGN, OPTIMIZE, ADVERTISE
            </h2>
            <p className="font-permanent-marker text-[#f97316] text-2xl">
              WE GOT YOU COVERED.
            </p>
            <button className="mt-8 bg-white text-[#063642] px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-colors">
              GET STARTED
            </button>
          </div>

          {/* Main Content with Lines */}
          <div className="grid grid-cols-12 gap-8 mt-20">
            {/* Services Section */}
            <div className="col-span-12 md:col-span-8">
              <div className="relative">
                <h3 className="text-lg font-medium mb-8 relative">
                  Services
                  {/* Horizontal line */}
                  <div className="absolute -bottom-4 left-0 right-0 h-px bg-white/20" />
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-x-12 mt-8">
                {/* Left Column */}
                <div>
                  <div className="mb-8">
                    <a href="#" className="flex items-center gap-2 text-base mb-4">
                      Website Services →
                    </a>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li><a href="#" className="hover:text-white">Website Design</a></li>
                      <li><a href="#" className="hover:text-white">Landing Pages</a></li>
                      <li><a href="#" className="hover:text-white">SEO Optimization</a></li>
                      <li><a href="#" className="hover:text-white">GMB Optimization</a></li>
                      <li><a href="#" className="hover:text-white">Local SEO</a></li>
                      <li><a href="#" className="hover:text-white">Email Design</a></li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <a href="#" className="flex items-center gap-2 text-base mb-4">
                      Content Writing →
                    </a>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li><a href="#" className="hover:text-white">Blog Writing</a></li>
                      <li><a href="#" className="hover:text-white">Ghost Writing</a></li>
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="mb-8">
                    <a href="#" className="flex items-center gap-2 text-base mb-4">
                      Marketing Services →
                    </a>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li><a href="#" className="hover:text-white">Marketing Strategy</a></li>
                      <li><a href="#" className="hover:text-white">Email Campaigns</a></li>
                      <li><a href="#" className="hover:text-white">Google Ads</a></li>
                      <li><a href="#" className="hover:text-white">Meta Ads</a></li>
                      <li><a href="#" className="hover:text-white">Influencer Marketing</a></li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <a href="#" className="flex items-center gap-2 text-base mb-4">
                      Creative Design Services →
                    </a>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li><a href="#" className="hover:text-white">Social Media Creatives</a></li>
                      <li><a href="#" className="hover:text-white">Presentation Design</a></li>
                      <li><a href="#" className="hover:text-white">Brochure Design</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="col-span-12 md:col-span-4">
              <div className="relative">
                <h3 className="text-lg font-medium mb-8 relative">
                  Navigation
                  {/* Horizontal line */}
                  <div className="absolute -bottom-4 left-0 right-0 h-px bg-white/20" />
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-x-8 mt-8">
                <div>
                  <p className="text-base mb-4">main</p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li><a href="#" className="hover:text-white">Our Work</a></li>
                    <li><a href="#" className="hover:text-white">Our people</a></li>
                    <li><a href="#" className="hover:text-white">About Us</a></li>
                    <li><a href="#" className="hover:text-white">Pricing</a></li>
                  </ul>
                </div>
                <div>
                  <p className="text-base mb-4">learn</p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li><a href="#" className="hover:text-white">Blog</a></li>
                    <li><a href="#" className="hover:text-white">Guides & Reports</a></li>
                    <li><a href="#" className="hover:text-white">Customer Stories</a></li>
                    <li><a href="#" className="hover:text-white">Video Library</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-20 flex flex-col md:flex-row justify-between items-center">
            <div>
              <a href="/" className="text-2xl font-bold block mb-2">
                aneeverse
              </a>
              <p className="text-sm text-white/70">
                © 2025 Aneeverse. All rights reserved.
              </p>
            </div>

            <div className="flex items-center mt-6 md:mt-0">
              <div className="flex gap-4 mr-8">
                <a href="#" className="text-white/70 hover:text-white text-sm">Privacy Policy</a>
                <a href="#" className="text-white/70 hover:text-white text-sm">Terms of Use</a>
                <a href="#" className="text-white/70 hover:text-white text-sm">Status page</a>
                <a href="#" className="text-white/70 hover:text-white text-sm">DMCA</a>
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <FaLinkedinIn size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 