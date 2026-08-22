"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Berkshire_Swash } from 'next/font/google';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
});

const HeroSection = () => {
  // Controls for animations
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Animate when in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Container animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Item animations
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Floating animation for decorative elements
  const float = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: [-15, 0, -15],
      opacity: 1,
      transition: {
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        },
        opacity: { duration: 0.5 }
      }
    }
  };

  // Button animation
  const button = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#d15e37",
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.98
    }
  };

  
  

  return (
    <section 
      ref={ref}
      className="relative bg-[#E7EECD] pt-20 pb-24 md:pt-32 md:pb-36 lg:pt-36 lg:pb-40 overflow-hidden"
    >
      {/* Animated background leaves */}
     
        <Image
          src="/images/leaf-bg.avif" 
          alt="Leaf background"
          fill
          className="object-fit"
          priority
        />
 
      
      {/* Main content container */}
      <motion.div 
        initial="hidden"
        animate={controls}
        variants={container}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 relative">
          {/* Animated stethoscope */}
          <motion.div 
            variants={float}
            className="absolute top-0 left-0 md:left-16 lg:left-32 z-10"
          >
            <Image
              src="/images/stethoscope.png" 
              alt="Stethoscope"
              width={180}
              height={180}
              className="w-36 md:w-44 lg:w-52"
              priority
            />
          </motion.div>
          
          <div className="text-center mt-32 md:mt-40 lg:mt-44 relative z-20">
            {/* Animated headline */}
            <motion.h2 
              variants={{
                hidden: { y: 40, opacity: 0, scale: 0.95 },
                visible: {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }
                }
              }}
              className={`${berkshire.className} text-5xl md:text-6xl lg:text-7xl font-bold text-[#2d5134] mb-3 md:mb-4 leading-tight`}
            >
              Your Health, Our Priority
            </motion.h2>
              
            {/* Animated description */}
            <motion.h2
              variants={item}
              className="text-base font-semibold md:text-lg text-[#2d5134] opacity-90 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed"
            >
              Experience personalized care with Dr. Manish Sharma, our experienced General Physician, and Dt. Gauri Mehra, our certified Dietician. Together, they provide comprehensive wellness solutions tailored just for you.
            </motion.h2>
              
            {/* Animated CTA button */}
            <motion.div 
              variants={item}
              className="mb-10 md:mb-12"
            >
              <Link href="/bookconsultation" passHref>
                <motion.a
                  variants={button}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-3 bg-[#eb7147] text-white text-base md:text-lg font-medium shadow-md rounded-sm cursor-pointer"
                >
                  Book An Appointment
                </motion.a>
              </Link>
            </motion.div>
          </div>
            
          {/* Animated heart (commented out as per request) */}
          <motion.div 
            variants={{
              ...float,
              visible: {
                ...float.visible,
                transition: {
                  ...float.visible.transition,
                  delay: 0.5
                }
              }
            }}
            className="absolute bottom-0 right-0 md:right-16 lg:right-32 z-10"
          >
            {/* Heart image would go here */}
          </motion.div>
        </div>
      </motion.div>

      {/* Additional decorative animated elements */}
      {/* <AnimatePresence>
        {inView && (
          <>
            <motion.div 
              initial={{ x: -100, y: 50, opacity: 0, rotate: -15 }}
              animate={{ 
                x: 0, 
                y: [50, 30, 50], 
                opacity: 1,
                transition: {
                  x: { duration: 0.8, ease: "easeOut" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.8 }
                }
              }}
              className="absolute bottom-20 left-10 z-0"
            >
              <div className="w-16 h-16 rounded-full bg-[#2d5134] opacity-10"></div>
            </motion.div>
            
            <motion.div 
              initial={{ x: 100, y: 100, opacity: 0, rotate: 15 }}
              animate={{ 
                x: 0, 
                y: [100, 80, 100], 
                opacity: 1,
                transition: {
                  x: { duration: 0.8, ease: "easeOut", delay: 0.3 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
                  opacity: { duration: 0.8, delay: 0.3 }
                }
              }}
              className="absolute top-1/3 right-20 z-0"
            >
              <div className="w-12 h-12 rounded-full bg-[#eb7147] opacity-10"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence> */}
    </section>
  );
};

export default HeroSection;