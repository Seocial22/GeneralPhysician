"use client";
import React, { useEffect } from 'react';
import { FaUserMd, FaClipboardCheck, FaHeartbeat } from 'react-icons/fa';
import { Berkshire_Swash } from 'next/font/google';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const AboutApproach = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const titleUnderline = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const iconContainer = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 8
      }
    }
  };

  const approaches = [
    {
      icon: <FaUserMd className="text-white text-2xl" />,
      title: "Personalized Care",
      description: "We believe every patient is unique. Our treatments are tailored to your specific health conditions, lifestyle, and personal goals."
    },
    {
      icon: <FaClipboardCheck className="text-white text-2xl" />,
      title: "Integrated Approach",
      description: "We combine medical treatment with nutritional guidance to provide comprehensive healthcare solutions that address the root causes."
    },
    {
      icon: <FaHeartbeat className="text-white text-2xl" />,
      title: "Preventive Focus",
      description: "We emphasize prevention, education, and lifestyle modifications to help you maintain optimal health and prevent future issues."
    }
  ];
  
  return (
    <section className="bg-[#E7EECD] py-12" ref={ref}>
      <motion.div 
        initial="hidden"
        animate={controls}
        variants={container}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <motion.h2 
            variants={item}
            className={`${berkshire.className} text-4xl text-[#2d5134] inline-block border-b-2 border-[#eb7147] pb-2`}
          >
            Our Approach to Healthcare
          </motion.h2>
          <motion.div 
            variants={titleUnderline}
            className="w-24 h-1 bg-[#eb7147] mx-auto mt-2"
          />
        </div>
        
        <motion.div 
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {approaches.map((approach, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ 
                y: -5,
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <motion.div 
                variants={iconContainer}
                className="w-20 h-20 bg-[#2d5134] rounded-full flex items-center justify-center mb-6 mx-auto"
              >
                {approach.icon}
              </motion.div>
              <h3 className={`${berkshire.className} text-2xl text-[#2d5134] text-center mb-4`}>{approach.title}</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {approach.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutApproach;