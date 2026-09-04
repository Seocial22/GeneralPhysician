"use client";
import Image from 'next/image';
import { FaHandHoldingHeart, FaUserMd, FaCalendarAlt } from 'react-icons/fa';
import { Berkshire_Swash } from 'next/font/google';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});
import { useEffect } from 'react';

const AboutStory = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
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

  const item = {
    hidden: { y: 30, opacity: 0 },
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

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 10,
        delay: 0.2
      }
    }
  };

  const circleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-white py-16 relative overflow-hidden" ref={ref}>
      {/* Animated decorative background elements */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={controls}
        variants={circleVariants}
        className="absolute top-0 left-0 w-32 h-32 bg-[#E7EECD] opacity-20 rounded-br-full"
      />
      <motion.div 
        initial={{ scale: 0 }}
        animate={controls}
        variants={{
          ...circleVariants,
          visible: { ...circleVariants.visible, transition: { delay: 0.3 } }
        }}
        className="absolute bottom-0 right-0 w-32 h-32 bg-[#E7EECD] opacity-20 rounded-tl-full"
      />
      
      <motion.div 
        initial="hidden"
        animate={controls}
        variants={container}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 
              variants={item}
              className={`${berkshire.className} text-4xl font-bold text-[#2d5134] mb-8 flex items-center`}
            >
              <motion.span 
                initial={{ scale: 0, rotate: -90 }}
                animate={controls}
                variants={{
                  visible: {
                    scale: 1,
                    rotate: 0,
                    transition: { type: "spring", stiffness: 150 }
                  }
                }}
              >
                <FaHandHoldingHeart className="text-[#eb7147] mr-4 text-3xl" />
              </motion.span>
              Our Story
            </motion.h2>
           
            <div className="space-y-6">
              <motion.div 
                variants={item}
                className="flex items-start"
              >
                <div className="h-full py-1">
                  <motion.div 
                    variants={circleVariants}
                    className="w-3 h-3 rounded-full bg-[#eb7147]"
                  />
                  <motion.div 
                    variants={lineVariants}
                    className="w-0.5 h-full bg-[#E7EECD] mx-auto"
                  />
                </div>
                <p className="text-gray-700 ml-5 text-lg">
                  Founded with a vision to provide integrated healthcare solutions, our clinic brings together medical expertise and nutritional science under one roof.
                </p>
              </motion.div>
             
              <motion.div 
                variants={item}
                className="flex items-start"
              >
                <div className="h-full py-1">
                  <motion.div 
                    variants={circleVariants}
                    className="w-3 h-3 rounded-full bg-[#eb7147]"
                  />
                  <motion.div 
                    variants={lineVariants}
                    className="w-0.5 h-full bg-[#E7EECD] mx-auto"
                  />
                </div>
                <p className="text-gray-700 ml-5 text-lg">
                  Dr. Manish Sharma and Dt. Gauri Mehra established this practice with the belief that true wellness comes from addressing both medical conditions and nutritional needs.
                </p>
              </motion.div>
             
              <motion.div 
                variants={item}
                className="flex items-start"
              >
                <div className="h-full py-1">
                  <motion.div 
                    variants={circleVariants}
                    className="w-3 h-3 rounded-full bg-[#eb7147]"
                  />
                </div>
                <p className="text-gray-700 ml-5 text-lg">
                  Since our establishment, we've been dedicated to delivering personalized care that focuses on treating not just symptoms, but improving overall quality of life for our patients.
                </p>
              </motion.div>
            </div>
           
            {/* <motion.div 
              variants={item}
              className="mt-8 bg-[#E7EECD] rounded-lg p-5 flex items-center shadow-md"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                initial={{ rotate: -20 }}
                animate={{ 
                  rotate: 0,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <FaCalendarAlt className="text-[#2d5134] text-3xl mr-4" />
              </motion.div>
              <div>
                <span className={`${berkshire.className} font-medium text-xl text-[#2d5134]`}>Serving Ajmer</span>
                <p className="text-gray-700">since 20xx</p>
              </div>
            </motion.div> */}
          </div>
         
          <motion.div 
            variants={imageVariants}
            className="rounded-xl overflow-hidden shadow-lg border-4 border-[#E7EECD]"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)"
            }}
          >
            <div className="relative">
              <Image
                src="/images/clinic.webp"
                alt="Our Clinic"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.6 }
                  }
                }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2d5134] to-transparent p-4"
              >
                <h3 className={`${berkshire.className} text-white text-xl`}>Our Healing Space</h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

     
    </section>
  );
};

export default AboutStory;