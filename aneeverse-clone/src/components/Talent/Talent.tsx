"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    icon: "💼",
    title: "Brand Identity",
    description: "Brand guidelines, logo design, visual identity, and more to establish a consistent brand presence."
  },
  {
    icon: "📱",
    title: "UI/UX Design",
    description: "User-centered design process to create intuitive, engaging, and effective digital experiences."
  },
  {
    icon: "🎨",
    title: "Graphic Design",
    description: "Eye-catching visuals for marketing materials, social media, advertisements, and more."
  },
  {
    icon: "📸",
    title: "Photo Editing",
    description: "Professional photo retouching, color correction, and manipulation for stunning visuals."
  },
  {
    icon: "📊",
    title: "Data Visualization",
    description: "Clear, compelling, and interactive ways to present complex data and insights."
  },
  {
    icon: "🎬",
    title: "Motion Design",
    description: "Animated graphics and visual effects that bring static designs to life."
  },
];

const Talent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-0 translate-x-1/2 w-80 h-80 bg-accent-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-10 left-0 -translate-x-1/2 w-96 h-96 bg-accent-200 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#f97316] font-permanent-marker text-2xl tracking-wide">WORLD-CLASS TALENT</span> with no borders
          </h2>
          <p className="text-accent-700 text-lg leading-relaxed">
            Aneeverse brings together skilled creative professionals to deliver exceptional 
            quality on every project. Our diverse team offers a wide range of specialized 
            services to meet your unique needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-custom border border-accent-200 hover:shadow-custom-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-accent-700">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 text-center"
        >
          <p className="text-accent-800 font-medium mb-6">
            These are just a few examples. Our team can accommodate a wide range of creative needs.
          </p>
          <button className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-primary hover:bg-primary-dark transition-colors duration-300 font-medium">
            Talk to us about your project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Talent; 