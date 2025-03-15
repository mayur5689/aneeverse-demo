"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: 'Website Design',
      description: 'E-commerce, UI/UX, Custom Design, Responsive Design, CMS Integration',
    },
    {
      title: 'Landing Pages',
      description: 'High Conversion, Lead Generation, A/B Testing, Minimal UI, Fast Loading',
    },
    {
      title: 'SEO Optimization',
      description: 'Keyword Research, On-Page SEO, Technical SEO, Backlink Building, Content Optimization',
    },
    {
      title: 'GMB Optimization',
      description: 'Google My Business, Local Ranking, Map SEO, Business Profile, Review Management',
    },
    {
      title: 'Local SEO',
      description: 'Geo-Targeting, NAP Consistency, Local Listings, Customer Reviews, Local Backlinks',
    },
    {
      title: 'Email Design',
      description: 'Responsive Emails, Newsletter Templates, HTML Emails, Transactional Emails',
    },
    {
      title: 'Marketing Strategy',
      description: 'Brand Awareness, Customer Retention, Market Research, Competitor Analysis, Growth Hacking',
    },
    {
      title: 'Email Campaign',
      description: 'Personalized Emails, Automated Sequences, Lead Nurturing, Email Analytics, A/B Testing',
    },
    {
      title: 'Google Ads',
      description: 'PPC, Keyword Targeting, Ad Copywriting, Performance Tracking, Conversion Optimization',
    },
    {
      title: 'Meta Ads',
      description: 'Facebook Ads, Instagram Ads, Audience Targeting, Video Ads, Retargeting Campaigns',
    },
    {
      title: 'Influencer Marketing',
      description: 'Brand Collaborations, Social Proof, Sponsored Posts, Influencer Outreach, Engagement Growth',
    },
    {
      title: 'Blog Writing',
      description: 'SEO Blogs, Long-Form Content, Industry Research, Engaging Storytelling, Content Strategy',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

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
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-base uppercase tracking-wider text-accent-700 mb-4 font-medium"
          >
            Easy & Hassle-Free
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto"
          >
            Every Type of Creative Work You'll Ever Need, and more
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="md:text-left"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-accent-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 