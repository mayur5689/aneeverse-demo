"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  // Service cards data
  const serviceCards = [
    {
      id: 1,
      title: "Blog",
      subtitle: "WRITING",
      image: "/images/cards-image/creative3.png",
      link: "/services/blog-writing",
      color: "bg-green-700",
      tags: []
    },
    {
      id: 2,
      title: "Ghost",
      subtitle: "WRITING",
      image: "/images/cards-image/creative4.png",
      link: "/services/ghost-writing",
      color: "bg-red-700",
      tags: []
    },
    {
      id: 3,
      title: "Social",
      subtitle: "MEDIA",
      image: "/images/cards-image/creative1.png",
      link: "/services/social-media",
      color: "bg-gray-700",
      tags: []
    },
    {
      id: 4,
      title: "Content",
      subtitle: "MARKETING",
      image: "/images/cards-image/creative2.png",
      link: "/services/content-marketing",
      color: "bg-gray-700",
      tags: []
    },
    {
      id: 5,
      title: "Meta",
      subtitle: "ADS",
      image: "/images/cards-image/creative1.png",
      link: "/services/meta-ads",
      color: "bg-gray-700",
      tags: []
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#ebfafe] text-[#063642]">
      <div className="container mx-auto px-4">
        <div className="text-left mb-4">
          <div className="uppercase text-sm tracking-wide font-medium text-[#4571E0] mb-2">
            EASY & HASSLE-FREE
          </div>
        </div>
        
        <div className="mb-16 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#063642] leading-tight">
            Every Type of Creative Work You'll Ever<br className="hidden md:block"/>
            Need, <span className="text-[#4571E0] font-permanent-marker text-3xl md:text-4xl tracking-wide inline-block align-middle">AND MORE</span>
          </h2>
        </div>

        {/* Full-width card scroller */}
        <div className="w-full overflow-x-hidden">
          <div className="services-slider">
            <div className="services-track">
              {/* First set of cards */}
              {serviceCards.map((card) => (
                <Link 
                  href={card.link} 
                  key={card.id}
                  className={`service-card ${card.color}`}
                >
                  <div className="absolute inset-0 w-full h-full">
                    <Image 
                      src={card.image} 
                      alt={card.title} 
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-0 left-0 p-8 z-10">
                    <h3 className="text-white text-2xl md:text-3xl font-bold">
                      {card.title}<br />
                      <span className="font-handwriting text-xl md:text-2xl">{card.subtitle}</span>
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                </Link>
              ))}

              {/* Duplicate set for seamless looping */}
              {serviceCards.map((card) => (
                <Link 
                  href={card.link} 
                  key={`${card.id}-duplicate-1`}
                  className={`service-card ${card.color}`}
                >
                  <div className="absolute inset-0 w-full h-full">
                    <Image 
                      src={card.image} 
                      alt={card.title} 
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-0 left-0 p-8 z-10">
                    <h3 className="text-white text-2xl md:text-3xl font-bold">
                      {card.title}<br />
                      <span className="font-handwriting text-xl md:text-2xl">{card.subtitle}</span>
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                </Link>
              ))}

              {/* Third set for ensuring continuous scrolling */}
              {serviceCards.map((card) => (
                <Link 
                  href={card.link} 
                  key={`${card.id}-duplicate-2`}
                  className={`service-card ${card.color}`}
                >
                  <div className="absolute inset-0 w-full h-full">
                    <Image 
                      src={card.image} 
                      alt={card.title} 
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-0 left-0 p-8 z-10">
                    <h3 className="text-white text-2xl md:text-3xl font-bold">
                      {card.title}<br />
                      <span className="font-handwriting text-xl md:text-2xl">{card.subtitle}</span>
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @font-face {
          font-family: 'Handwriting';
          src: local('Comic Sans MS'), local('Comic Sans'), local('Segoe Script');
          font-display: swap;
        }

        .font-handwriting {
          font-family: 'Handwriting', cursive;
          font-style: italic;
        }
        
        .services-slider {
          width: 100%;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }
        
        .services-track {
          display: flex;
          width: calc(280px * ${serviceCards.length * 3});
          animation: scroll 40s linear infinite;
        }
        
        .service-card {
          flex: 0 0 auto;
          width: 260px;
          height: 400px;
          margin-right: 20px;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          transition: transform 0.3s ease;
        }
        
        .service-card:hover {
          transform: scale(1.02);
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-280px * ${serviceCards.length}));
          }
        }

        /* Ensure animation pauses on hover for better usability */
        .services-slider:hover .services-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Services; 