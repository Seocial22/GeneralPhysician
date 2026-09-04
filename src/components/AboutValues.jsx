"use client";
import React, { useEffect } from 'react';
import { FaMedal, FaHandHoldingHeart, FaBalanceScale, FaBookOpen } from 'react-icons/fa';
import { Berkshire_Swash } from 'next/font/google';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const AboutValues = () => {
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
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 8
      }
    }
  };

  const values = [
    {
      icon: <FaMedal className="text-[#eb7147] text-2xl" />,
      title: "Excellence",
      description: "We strive to provide the highest quality care using evidence-based practices and staying updated with medical advancements."
    },
    {
      icon: <FaHandHoldingHeart className="text-[#eb7147] text-2xl" />,
      title: "Compassion",
      description: "We approach each patient with empathy, understanding, and respect, recognizing the whole person beyond their medical condition."
    },
    {
      icon: <FaBalanceScale className="text-[#eb7147] text-2xl" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our practices, being honest and transparent with our patients."
    },
    {
      icon: <FaBookOpen className="text-[#eb7147] text-2xl" />,
      title: "Education",
      description: "We believe in empowering patients with knowledge about their health, enabling them to make informed decisions."
    }
  ];
  
  return (
    <section className="bg-white py-12" ref={ref}>
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
            Our Core Values
          </motion.h2>
          <motion.div 
            variants={titleUnderline}
            className="w-24 h-1 bg-[#eb7147] mx-auto mt-2"
          />
        </div>
        
        <motion.div 
          variants={container}
          className="flex flex-wrap justify-center gap-8"
        >
          {values.map((value, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ 
                y: -5,
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)"
              }}
              className="flex items-start space-x-4 w-full md:w-5/12 bg-[#E7EECD] p-6 rounded-lg shadow-sm"
            >
              <motion.div 
                variants={iconContainer}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm"
              >
                {value.icon}
              </motion.div>
              <div>
                <h3 className={`${berkshire.className} text-xl text-[#2d5134] mb-3`}>{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutValues;