"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Berkshire_Swash } from 'next/font/google';
import { FaClock, FaHospital, FaCheck } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { BsArrowRight } from 'react-icons/bs';
import { BiSolidPhoneCall } from "react-icons/bi";
import { motion } from 'framer-motion';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
});

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const AboutUsSection = () => {
  return (
    <section className="bg-[#FDF1ED] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className={`${berkshire.className} text-2xl text-[#eb7147] mb-2`}>
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5134] mb-6">
            Meet Our Expert Healthcare Team
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our experienced professionals are dedicated to providing personalized care and
            comprehensive healthcare solutions tailored to your specific needs.
          </p>
        </motion.div>

        {/* Doctors with side-by-side layout */}
        <div className="space-y-24">

          {/* Dr. Manish Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left side - Doctor Image */}
              <motion.div
                variants={fadeInLeft}
                className="md:w-1/2 h-96 md:h-auto relative overflow-hidden"
              >
                <Image
                  src="/images/dr-manish1.jpg"
                  alt="Dr. Manish Sharma"
                  width={600}
                  height={800}
                  className="w-full  h-full object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2d5134]/40 to-transparent md:bg-gradient-to-t"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden text-white">
                  <h3 className={`${berkshire.className} text-2xl`}>Dr. Manish Sharma</h3>
                  <p className="text-[#E7EECD]">M.D. (General Physician)</p>
                </div>
              </motion.div>

              {/* Right side - Doctor Details */}
              <motion.div
                variants={fadeInRight}
                className="md:w-1/2 p-6 md:p-10"
              >
                {/* Doctor name and title - visible only on desktop */}
                <div className="hidden md:block mb-6">
                  <h3 className={`${berkshire.className} text-3xl text-[#2d5134] mb-2`}>
                    Dr. Manish Sharma
                  </h3>
                  <p className="text-[#eb7147] text-xl font-medium">M.D. (General Physician)</p>
                </div>

                {/* Contact Info */}
                <div className="flex items-center mb-6">
                  <div className="bg-[#eb7147] p-2 rounded-full mr-4">
                    <BiSolidPhoneCall className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg font-medium">Contact: 8690761918</p>
                </div>

                {/* Specializations */}
                <div className="mb-8">
                  <h4 className="font-semibold text-[#2d5134] mb-4 bg-[#E7EECD] inline-block px-4 py-2 rounded-lg">
                    Specializations
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {[
                      "Seasonal Diseases",
                      "Diabetes (Sugar)",
                      "Respiratory Problems",
                      "Cardiac Diseases",
                      "Mental & Brain Disorders",
                      "Thyroid Issues",
                      "Paralysis & Bone Conditions",
                      "Stomach Related Diseases",
                      "Blood Pressure",
                      // "Abdominal Conditions",
                    ].map((specialization, index) => (
                      <motion.div
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.1 * index }
                          }
                        }}
                        className="flex items-center"
                      >
                        <FaCheck className="w-4 h-4 text-[#eb7147] mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{specialization}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Consultation Info */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="space-y-4">




                    <div className="flex items-center">
                      <FaHospital className="h-5 w-5 text-[#eb7147] mr-4 flex-shrink-0" />
                      <p className="text-gray-700"><span className="font-medium">Morning Hours:</span> 10:00 AM - 5:00 PM</p>
                    </div>

                    <div className="flex items-start">
                      <FaLocationDot className="h-5 w-5 text-[#eb7147] mr-4 mt-1 flex-shrink-0" />
                      <p className="text-gray-700"><span className="font-medium">Location:</span> Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer</p>
                    </div>

                    <div className="flex items-center">
                      <FaHospital className="h-5 w-5 text-[#eb7147] mr-4 flex-shrink-0" />
                      <p className="text-gray-700"><span className="font-medium">Evening Hours:</span> 6:00 PM - 8:00 PM <b>(Prior Appointment Only)</b></p>
                    </div>
                    <div className="flex items-start">
                      <FaLocationDot className="h-5 w-5 text-[#eb7147] mr-4 mt-1 flex-shrink-0" />
                      <p className="text-gray-700"><span className="font-medium">Location:</span> Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer</p>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Dr. Gauri Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left side - Doctor Image */}
              <motion.div
                variants={fadeInLeft}
                className="md:w-1/2 h-96 md:h-auto relative overflow-hidden"
              >
                <Image
                  src="/images/dr-gauri1.jpg"
                  alt="Dr. Gauri Mehra"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2d5134]/40 to-transparent md:bg-gradient-to-t"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden text-white">
                  <h3 className={`${berkshire.className} text-2xl`}>Dr. Gauri Mehra</h3>
                  <p className="text-[#E7EECD]">Dietician</p>
                </div>
              </motion.div>

              {/* Right side - Doctor Details */}
              <motion.div
                variants={fadeInRight}
                className="md:w-1/2 p-6 md:p-10"
              >
                {/* Doctor name and title - visible only on desktop */}
                <div className="hidden md:block mb-6">
                  <h3 className={`${berkshire.className} text-3xl text-[#2d5134] mb-2`}>
                    Dr. Gauri Mehra
                  </h3>
                  <p className="text-[#eb7147] text-xl font-medium">Dietician</p>
                </div>

                {/* Contact Info */}
                <div className="flex items-center mb-6">
                  <div className="bg-[#eb7147] p-2 rounded-full mr-4">
                    <BiSolidPhoneCall className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg font-medium">Contact: 9461068894</p>
                </div>

                {/* Specializations */}
                <div className="mb-8">
                  <h4 className="font-semibold text-[#2d5134] mb-4 bg-[#E7EECD] inline-block px-4 py-2 rounded-lg">
                    Specializations
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {[
                      "Weight Loss/Gain Diet",
                      "Anti-Diabetic Diet",
                      "Gastro Health Diet",
                      "Child Nutrition Care",
                      "Keto Diet",
                      "Renal Care Diet",
                      "Pregnancy/Lactation Diet",
                      "Cardiac Diet"
                    ].map((specialization, index) => (
                      <motion.div
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.1 * index }
                          }
                        }}
                        className="flex items-center"
                      >
                        <FaCheck className="w-4 h-4 text-[#eb7147] mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{specialization}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Consultation Info */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <FaClock className="h-5 w-5 text-[#eb7147] mr-4 flex-shrink-0" />
                      <p className="text-gray-700"><span className="font-medium">Morning Hours:</span> 10:00 AM - 2:00 PM</p>
                    </div>

                    <div className="flex items-start">
                      <FaLocationDot className="h-5 w-5 text-[#eb7147] mr-4 mt-1 flex-shrink-0" />
                      <p className="text-gray-700"><span className="font-medium">Location:</span> Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer</p>
                    </div>

                    <div className="flex items-center">
                      <FaHospital className="h-5 w-5 text-[#eb7147] mr-4 flex-shrink-0" />
                      <p className="text-gray-700"><span className="font-medium">Evening Hours:</span> 6:00 PM - 8:00 PM <b>(Prior Appointment Only)</b></p>
                    </div>
                    <div className="flex items-start">
                      <FaLocationDot className="h-5 w-5 text-[#eb7147] mr-4 mt-1 flex-shrink-0" />
                      <p className="text-gray-700"><span className="font-medium">Location:</span> Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer</p>
                    </div>

                    {/* <div className="flex items-center">
                      <FaHospital className="h-5 w-5 text-[#eb7147] mr-4 flex-shrink-0" />
                      <p className="text-gray-700"><span className="font-medium">Evening:</span> 5:00 PM - 8:00 PM (Pawan Putra Medical)</p>
                    </div> */}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Insurance & Facilities */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20 bg-white p-8 rounded-lg shadow-lg"
        >
          <h3 className={`${berkshire.className} text-2xl text-[#2d5134] mb-6 text-center`}>
            Accepted Insurance & Facilities
          </h3>
          <motion.div
            className="flex flex-wrap text-[#2D5134] justify-center gap-4"
            variants={staggerContainer}
          >
            {[
              "Chiranjeevi",
              "RGHS",
              "CGHS",
              "CAPF",
              "RAILWAY",
              "All Types of TPA"
            ].map((insurance, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.05 * index }
                  }
                }}
                className="bg-[#E7EECD] px-4 py-2 rounded text-lg hover:bg-[#d9e7b1] transition-colors duration-300"
              >
                {insurance}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/bookconsultation"
              className="inline-flex items-center cursor-pointer justify-center px-10 py-4 bg-[#eb7147] hover:bg-[#d15e37] text-white text-xl font-medium transition-colors duration-300 shadow-md hover:shadow-lg rounded-md"
            >
              Schedule An Appointment
              <BsArrowRight className="h-5 w-5 ml-3" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;