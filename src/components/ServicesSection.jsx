"use client";
import React from 'react';
import Link from 'next/link';
import { Berkshire_Swash } from 'next/font/google';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
});

const ServicesSection = () => {
  // Using intersection observer for section heading
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Using intersection observer for Dr. Manish's services
  const [drManishRef, drManishInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Using intersection observer for Dr. Gauri's services
  const [drGauriRef, drGauriInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      } 
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconContainerVariants = {
    initial: { 
      borderColor: "#eb7147", 
      backgroundColor: "transparent" 
    },
    hover: { 
      backgroundColor: "#eb7147",
      scale: 1.1,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    initial: { color: "#eb7147" },
    hover: { 
      color: "#ffffff",
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div 
          ref={headingRef}
          variants={headingVariants}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p 
            variants={titleVariants}
            className={`${berkshire.className} text-xl text-[#eb7147] mb-2`}
          >
            Our Treatments
          </motion.p>
          <motion.h2 
            variants={titleVariants}
            className="text-4xl md:text-5xl font-bold text-[#2d5134] mb-6"
          >
            The Essential Support Of<br />
            <span className="block">Our Healthcare Experts</span>
          </motion.h2>
        </motion.div>

        {/* Services Cards - Dr. Manish's Services */}
        <motion.div 
          ref={drManishRef}
          variants={containerVariants}
          initial="hidden"
          animate={drManishInView ? "visible" : "hidden"}
          className='mb-24'
        >
          <motion.h1
            variants={titleVariants}
            className={`${berkshire.className} text-2xl md:text-3xl text-[#2d5134] text-center mb-12`}
          >
            Expert Diagnosis & Treatment – Dr. Manish Sharma
          </motion.h1>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          >
            {/* Service 1 */}
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="text-center group"
            >
              <div className="mb-6 flex justify-center">
                <motion.div 
                  variants={iconContainerVariants}
                  initial="initial"
                  whileHover="hover"
                  className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#eb7147]"
                >
                  <motion.svg 
                    variants={iconVariants}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-10 w-10" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </motion.svg>
                </motion.div>
              </div>
              <motion.h4 className="text-xl font-semibold text-[#2d5134] mb-3">Preventive Care</motion.h4>
              <motion.p className="text-gray-600 mb-4">
                Comprehensive health check-ups and preventive measures for abdominal conditions and seasonal diseases including typhoid and dengue.
              </motion.p>
              <Link href="/services/preventive-care">
                <motion.span
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-[#eb7147] hover:text-[#d15e37]"
                >
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.span>
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="text-center group"
            >
              <div className="mb-6 flex justify-center">
                <motion.div 
                  variants={iconContainerVariants}
                  initial="initial"
                  whileHover="hover"
                  className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#eb7147]"
                >
                  <motion.svg 
                    variants={iconVariants}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-10 w-10" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </motion.svg>
                </motion.div>
              </div>
              <motion.h4 className="text-xl font-semibold text-[#2d5134] mb-3">Chronic Disease Management</motion.h4>
              <motion.p className="text-gray-600 mb-4">
                Specialized care for diabetes, blood pressure, cardiac conditions, thyroid issues, respiratory issues, abdominal conditions and other chronic health concerns.
              </motion.p>
              <Link href="/services/chronic-disease">
                <motion.span
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-[#eb7147] hover:text-[#d15e37]"
                >
                  View Details 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.span>
              </Link>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="text-center group"
            >
              <div className="mb-6 flex justify-center">
                <motion.div 
                  variants={iconContainerVariants}
                  initial="initial"
                  whileHover="hover"
                  className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#eb7147]"
                >
                  <motion.svg 
                    variants={iconVariants}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-10 w-10" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </motion.svg>
                </motion.div>
              </div>
              <motion.h4 className="text-xl font-semibold text-[#2d5134] mb-3">Specialized Treatment</motion.h4>
              <motion.p className="text-gray-600 mb-4">
                Expert care for diabetes, respiratory problems, blood pressure, mental health concerns, cardiac problems and abdominal conditions.
              </motion.p>
              <Link href="/services/specialized-treatment">
                <motion.span
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-[#eb7147] hover:text-[#d15e37]"
                >
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Services Cards - Dr. Gauri's Services */}
        <motion.div 
          ref={drGauriRef}
          variants={containerVariants}
          initial="hidden"
          animate={drGauriInView ? "visible" : "hidden"}
        >
          <motion.h3 
            variants={titleVariants}
            className={`${berkshire.className} text-2xl md:text-3xl text-[#2d5134] text-center mb-12`}
          >
            Personalized Nutrition by Dt. Gauri Mehra
          </motion.h3>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          >
            {/* Service 1 */}
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="text-center group"
            >
              <div className="mb-6 flex justify-center">
                <motion.div 
                  variants={iconContainerVariants}
                  initial="initial"
                  whileHover="hover"
                  className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#eb7147]"
                >
                  <motion.svg 
                    variants={iconVariants}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-10 w-10" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </motion.svg>
                </motion.div>
              </div>
              <motion.h4 className="text-xl font-semibold text-[#2d5134] mb-3">Nutrition Counseling</motion.h4>
              <motion.p className="text-gray-600 mb-4">
                Personalized nutrition related to medical issue counseling based on your lifestyle, dietary habits, health goals, and medical conditions.
              </motion.p>
              <Link href="/services/nutrition-counseling">
                <motion.span
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-[#eb7147] hover:text-[#d15e37]"
                >
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.span>
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              variants={cardVariants}
              whileHover="hover" 
              className="text-center group"
            >
              <div className="mb-6 flex justify-center">
                <motion.div 
                  variants={iconContainerVariants}
                  initial="initial"
                  whileHover="hover"
                  className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#eb7147]"
                >
                  <motion.svg 
                    variants={iconVariants}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-10 w-10" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </motion.svg>
                </motion.div>
              </div>
              <motion.h4 className="text-xl font-semibold text-[#2d5134] mb-3">Meal Planning</motion.h4>
              <motion.p className="text-gray-600 mb-4">
                Weekly or monthly meal plans with recipes and shopping lists to fit with the health goals you want to achieve.
              </motion.p>
              <Link href="/services/meal-planning">
                <motion.span
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-[#eb7147] hover:text-[#d15e37]"
                >
                  View Details 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.span>
              </Link>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="text-center group"
            >
              <div className="mb-6 flex justify-center">
                <motion.div 
                  variants={iconContainerVariants}
                  initial="initial"
                  whileHover="hover"
                  className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#eb7147]"
                >
                  <motion.svg 
                    variants={iconVariants}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-10 w-10" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </motion.svg>
                </motion.div>
              </div>
              <motion.h4 className="text-xl font-semibold text-[#2d5134] mb-3">Weight Management</motion.h4>
              <motion.p className="text-gray-600 mb-4">
                Programs focused on sustainable weight loss or maintenance through balanced eating and appropriate physical activity.
              </motion.p>
              <Link href="/services/weight-management">
                <motion.span
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-[#eb7147] hover:text-[#d15e37]"
                >
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Uncomment if you want to add the CTA Section back
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <Link href="/appointment">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-3 bg-[#eb7147] hover:bg-[#d15e37] text-white text-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg rounded-sm"
            >
              Book A Consultation
            </motion.a>
          </Link>
        </motion.div>
        */}
      </div>
    </section>
  );
};

export default ServicesSection;