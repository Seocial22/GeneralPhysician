"use client";
import React from 'react';
import { berkshire } from '../lib/fonts';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function OurMission() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="bg-white py-8 sm:py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2 
            className={`${berkshire.className} text-2xl sm:text-3xl md:text-5xl text-green-800 mb-3 sm:mb-4 md:mb-6`}
            variants={fadeInUp}
          >
            Our Mission
          </motion.h2>
          <motion.div 
            className="w-16 sm:w-24 md:w-32 h-1 md:h-2 bg-orange-400 mx-auto mb-4 sm:mb-6 md:mb-8"
            variants={scaleUp}
          />
        </motion.div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center">
          {/* Image Column */}
          <motion.div 
            className="order-2 md:order-1 w-full px-4 sm:px-0"
            initial="hidden"
            animate={controls}
            variants={slideInFromLeft}
          >
            <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
              <Image 
                src="/images/our-mission.webp" 
                alt="Health and wellness at Gaurnish Health" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-xl shadow-xl object-cover"
              />
            </div>
          </motion.div>
          
          {/* Text Column */}
          <motion.div 
            className="order-1 md:order-2 space-y-4 sm:space-y-6 md:space-y-8"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.p 
              className="text-sm sm:text-base md:text-xl text-gray-700 leading-relaxed"
              variants={fadeInUp}
            >
              We believe your health is as unique as you are. Our team creates personal health plans that fit your lifestyle, combining the best of nutrition and medical care to help you feel your best every day.
            </motion.p>
            
            <motion.div 
              className="space-y-3 sm:space-y-4 md:space-y-6"
              variants={containerVariants}
            >
              <motion.div 
                className="bg-green-50 p-3 sm:p-4 md:p-6 rounded-lg border-l-4 border-green-600"
                variants={fadeInUp}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl text-green-700 font-semibold mb-1 sm:mb-2 md:mb-3">
                  Personalized Nutrition
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">
                  "Good food is the foundation of true happiness." We create custom meal plans based on your body's needs, preferences, and health goals to transform your relationship with food.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-green-50 p-3 sm:p-4 md:p-6 rounded-lg border-l-4 border-green-600"
                variants={fadeInUp}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl text-green-700 font-semibold mb-1 sm:mb-2 md:mb-3">
                  Holistic Healthcare
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">
                  "Health is about balance, not perfection." We provide comprehensive care that addresses your physical, mental, and emotional wellbeing for lasting health improvements.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}