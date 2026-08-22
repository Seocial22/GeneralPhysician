'use client';
import Link from 'next/link';
import React, { } from 'react';
import { FaPhone, FaClock, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DoctorsSection = () => {
  // Section header animation ref
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Doctor card refs for staggered animations
  const [card1Ref, card1InView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const [card2Ref, card2InView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  // CTA button ref
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Variants for animations
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const specialtyVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#d56753",
      transition: { duration: 0.3 }
    }
  };

  const backgroundCircleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 0.1,
      transition: {
        duration: 2,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated decorative circles */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={backgroundCircleVariants}
        className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#9ab665] -z-10"
      ></motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={backgroundCircleVariants}
        transition={{ delay: 0.5 }}
        className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-[#9ab665] -z-10"
      ></motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={backgroundCircleVariants}
        transition={{ delay: 0.7 }}
        className="absolute top-60 right-40 w-16 h-16 rounded-full bg-[#9ab665] -z-10"
      ></motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={backgroundCircleVariants}
        transition={{ delay: 0.9 }}
        className="absolute bottom-20 left-40 w-20 h-20 rounded-full bg-[#9ab665] -z-10"
      ></motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={backgroundCircleVariants}
        transition={{ delay: 1.1 }}
        className="absolute top-40 left-1/2 w-28 h-28 rounded-full bg-[#9ab665] -z-10"
      ></motion.div>

      <div className="container mx-auto px-4">
        <motion.h2
          ref={headingRef}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          variants={headingVariants}
          className="text-5xl text-center text-[#2e5d3c] mb-16"
          style={{ fontFamily: "'Berkshire Swash', cursive" }}
        >
          Meet Our Doctors
        </motion.h2>

        <div className="flex flex-col gap-12 text-[#2e5d3c]">
          {/* Dr. Manish Sharma */}
          <motion.div
            ref={card1Ref}
            initial="hidden"
            animate={card1InView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <motion.div
                  className="h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/images/dr-manish.jpg"
                    alt="Dr. Manish Sharma"
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              </div>

              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl font-bold mb-1 text-[#2e5d3c]"
                    style={{ fontFamily: "'Berkshire Swash', cursive" }}
                  >
                    Dr. Manish Sharma
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-xl text-gray-700"
                  >
                    M.D. (General Physician)
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex items-center mt-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <FaPhone className="text-[#609966] mr-3" />
                    <span className="text-lg">+91 8690761918</span>
                  </motion.div>
                </div>

                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-xl text-[#2e5d3c] mb-4 font-semibold"
                  style={{ fontFamily: "'Berkshire Swash', cursive" }}
                >
                  Specializations
                </motion.h4>
                <motion.div
                  initial="hidden"
                  animate={card1InView ? "visible" : "hidden"}
                  variants={cardVariants}
                  className="grid grid-cols-2 gap-3 mb-8"
                >
                  {[
                    "Seasonal Diseases",
                    "Diabetes (Sugar)",
                    "Respiratory Problems",
                    "Cardiac Diseases",
                    "Mental & Brain Disorders",
                    "Thyroid Issues",
                    "Paralysis & Bone Conditions",
                    "Stomach Related Diseases"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={specialtyVariants}
                      whileHover={{ x: 5, color: "#2e5d3c" }}
                      className="flex text-[#2e5d3c]  items-center"
                    >
                      <FaCheckCircle className="text-[#609966] mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="border-t border-gray-200 pt-6">
                  <motion.h4
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-xl text-[#2e5d3c] mb-4 font-semibold"
                    style={{ fontFamily: "'Berkshire Swash', cursive" }}
                  >
                    Consultation Hours
                  </motion.h4>
                  <div className="grid md:grid-cols-2 gap-4 text-[#2e5d3c]">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                      className="bg-[#f3f8e9] p-4 rounded-lg"
                    >
                      <h5 className="font-bold text-[#2e5d3c] mb-2">Morning</h5>
                      <div className="flex items-center mb-2">
                        <FaClock className="text-[#609966] mr-2" />
                        <span>10:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="text-[#609966] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer</span>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                      className="bg-[#f3f8e9] p-4 rounded-lg"
                    >
                      <h5 className="font-bold text-[#2e5d3c] mb-2">Evening</h5>
                      <div className="flex items-center mb-2">
                        <FaClock className="text-[#609966] mr-2" />
                        <span>6:00 PM - 8:00 PM <b>(Prior Appointment Only)</b></span>
                      </div>
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="text-[#609966] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer, Rajasthan</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dt. Gauri Mehra */}
          <motion.div
            ref={card2Ref}
            initial="hidden"
            animate={card2InView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <motion.div
                  className="h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/images/dr-gauri.jpg"
                    alt="Dt. Gauri Mehra"
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              </div>

              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl font-bold mb-1 text-[#2e5d3c]"
                    style={{ fontFamily: "'Berkshire Swash', cursive" }}
                  >
                    Dt. Gauri Mehra
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-xl text-gray-700"
                  >
                    Dietician
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex items-center mt-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <FaPhone className="text-[#609966] mr-3" />
                    <span className="text-lg">+91 9461068894</span>
                  </motion.div>
                </div>

                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-xl text-[#2e5d3c] mb-4 font-semibold"
                  style={{ fontFamily: "'Berkshire Swash', cursive" }}
                >
                  Specializations
                </motion.h4>
                <motion.div
                  initial="hidden"
                  animate={card2InView ? "visible" : "hidden"}
                  variants={cardVariants}
                  className="grid grid-cols-2 gap-3 mb-8"
                >
                  {[
                    "Weight Loss/Gain Diet",
                    "Anti-Diabetic Diet",
                    "Gastro Health Diet",
                    "Child Nutrition Care",
                    "Keto Diet",
                    "Renal Care Diet",
                    "Pregnancy/Lactation Diet",
                    "Cardiac Diet"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={specialtyVariants}
                      whileHover={{ x: 5, color: "#2e5d3c" }}
                      className="flex items-center"
                    >
                      <FaCheckCircle className="text-[#609966] mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="border-t border-gray-200 pt-6">
                  <motion.h4
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-xl text-[#2e5d3c] mb-4 font-semibold"
                    style={{ fontFamily: "'Berkshire Swash', cursive" }}
                  >
                    Consultation Hours
                  </motion.h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                      className="bg-[#f3f8e9] p-4 rounded-lg"
                    >
                      <h5 className="font-bold text-[#2e5d3c] mb-2">Morning</h5>
                      <div className="flex items-center mb-2">
                        <FaClock className="text-[#609966] mr-2" />
                        <span>10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="text-[#609966] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer</span>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                      className="bg-[#f3f8e9] p-4 rounded-lg"
                    >
                      <h5 className="font-bold text-[#2e5d3c] mb-2">Evening</h5>
                      <div className="flex items-center mb-2">
                        <FaClock className="text-[#609966] mr-2" />
                        <span>6:00 PM - 8:00 PM <b>(Prior Appointment Only)</b></span>
                      </div>
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="text-[#609966] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer, Rajasthan</span>
                      </div>

                    </motion.div>
                    {/* <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                      className="bg-[#f3f8e9] p-4 rounded-lg"
                    >
                      <h5 className="font-bold text-[#2e5d3c] mb-2">Evening</h5>
                      <div className="flex items-center mb-2">
                        <FaClock className="text-[#609966] mr-2" />
                        <span>5:00 PM - 8:00 PM</span>
                      </div>
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="text-[#609966] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Pawan Putra Medical</span>
                      </div>
                    </motion.div> */}
                    
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ctaRef}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={ctaVariants}
          className="mt-16 text-center"
        >
          <Link href="/bookconsultation">
            <motion.button
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="bg-[#e87461] text-white font-bold py-4 px-10 rounded-lg shadow-lg"
            >
              Book An Appointment Today
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorsSection;