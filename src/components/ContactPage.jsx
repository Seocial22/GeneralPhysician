'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Berkshire_Swash } from 'next/font/google';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
});

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
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

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreeToTerms: false
  });
  
  // Submit status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Intersection Observer hooks
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [specialistsRef, specialistsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [specialtiesRef, specialtiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.firstName || !formData.email || !formData.agreeToTerms) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all required fields and agree to the terms.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Replace with your Web3Forms access key
      const formSubmission = {
        access_key: 'aa6a3e31-9d11-424f-b581-b12fc50b6056', 
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        subject: 'New Contact Form Submission - Gaurnish Health',
        from_name: 'Gaurnish Health',
      };
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formSubmission)
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          agreeToTerms: false
        });
        setSubmitStatus('success');
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Failed to submit the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto py-12 px-4">
        {/* Contact Form and Info Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Contact Information */}
          <motion.div 
            ref={contactRef}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-xl overflow-hidden p-8"
          >
            <div className="mb-8">
              <motion.h2 
                variants={fadeIn}
                className="text-[#2d5134] text-4xl font-bold mb-4"
              >
                Have Question?<br />
                Get In Touch
              </motion.h2>
              <motion.p 
                variants={fadeIn}
                className="text-gray-600 mb-8"
              >
                Whether you're looking for personalized medical care, specialist consultations, 
                or general guidance on health issues, we'd love to hear from you! 
                Fill out the form, and we'll get back to you as soon as possible.
              </motion.p>
              
              {/* Contact Details */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                className="space-y-6"
              >
                <motion.div variants={itemFadeIn} className="flex items-center">
                  <div className="bg-[#eb7147] hover:bg-[#d15e37] rounded-full p-3 mr-4 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-gray-600">+91 8690761918</div>
                </motion.div>
                
                <motion.div variants={itemFadeIn} className="flex items-center">
                  <div className="bg-[#eb7147] hover:bg-[#d15e37] rounded-full p-3 mr-4 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-gray-600">gaurnishhealth@gmail.com</div>
                </motion.div>
                
                <motion.div variants={itemFadeIn} className="flex items-center">
                  <div className="bg-[#eb7147] hover:bg-[#d15e37] rounded-full p-3 mr-4 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-gray-600">
                    Paras Urology & Multispeciality Hospital,<br />
                    Haribhau Upadhyay Nagar, C-Block,<br />
                    Pushkar Road, Ajmer
                  </div>
                </motion.div>
              </motion.div>
            </div>
           
            {/* Google Map */}
            <motion.div 
              variants={fadeIn}
              className="w-full h-64 rounded-lg overflow-hidden shadow-md mb-8"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.167520215487!2d74.60462717520872!3d26.482550576906178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be5482a277ae1%3A0xf8bd06d419786e82!2sDr%20Manish%20Sharma%3A%20Physician%20Doctor%20in%20Ajmer!5e0!3m2!1sen!2sin!4v1752748718437!5m2!1sen!2sin" 
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div 
            ref={formRef}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="bg-[#f8f9f0] rounded-xl shadow-xl overflow-hidden p-8"
          >
            <motion.div variants={fadeIn} className='text-[#2d5134] text-4xl font-bold mb-4'>Contact Form</motion.div>
            {submitStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSubmitStatus(null)} 
                  className="bg-[#2d5134] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <motion.form 
                variants={staggerContainer}
                initial="hidden"
                animate={formInView ? "visible" : "hidden"}
                className="space-y-6" 
                onSubmit={handleSubmit}
              >
                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded"
                  >
                    <p className="font-bold">Error</p>
                    <p>{errorMessage}</p>
                  </motion.div>
                )}
                
                <motion.div variants={itemFadeIn} className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#2d5134] font-medium mb-2">First Name <span className="text-red-500">*</span></label>
                    <div className="flex items-center bg-white rounded-lg border border-gray-300 px-3 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Your First Name"
                        className="bg-transparent focus:outline-none w-full"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[#2d5134] font-medium mb-2">Last Name</label>
                    <div className="flex items-center bg-white rounded-lg border border-gray-300 px-3 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Your Last Name"
                        className="bg-transparent focus:outline-none w-full"
                      />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemFadeIn} className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#2d5134] font-medium mb-2">Email <span className="text-red-500">*</span></label>
                    <div className="flex items-center bg-white rounded-lg border border-gray-300 px-3 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="youremail@gmail.com"
                        className="bg-transparent focus:outline-none w-full"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[#2d5134] font-medium mb-2">Phone</label>
                    <div className="flex items-center bg-white rounded-lg border border-gray-300 px-3 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="bg-transparent focus:outline-none w-full"
                      />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemFadeIn}>
                  <label className="block text-[#2d5134] font-medium mb-2">Additional Note</label>
                  <div className="flex items-start bg-white rounded-lg border border-gray-300 px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="bg-transparent focus:outline-none w-full h-32 resize-none"
                    ></textarea>
                  </div>
                </motion.div>
                
                <motion.div variants={itemFadeIn}>
                  <label className="flex items-center space-x-2 text-gray-600 mb-6">
                    <input 
                      type="checkbox" 
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="rounded text-[#2d5134] focus:ring-[#2d5134]" 
                      required
                    />
                    <span className="text-sm">I agree to the Privacy Policy and Terms of Service <span className="text-red-500">*</span></span>
                  </label>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit" 
                    className={`bg-[#eb7147] hover:bg-[#d15e37] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition duration-300 w-full md:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
            
            {/* Doctor Information */}
            <motion.div
              ref={specialistsRef}
              initial="hidden"
              animate={specialistsInView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <h2 className={`text-2xl font-bold mt-4 text-[#2d5134] ${berkshire.className} mb-4`}>Our Specialists</h2>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate={specialistsInView ? "visible" : "hidden"}
                className="grid sm:grid-cols-2 gap-4"
              >
                {/* Dr. Manish Sharma */}
                <motion.div 
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  className="bg-[#E7EECD] p-4 rounded-lg"
                >
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-white overflow-hidden mr-3">
                      <Image
                        src="/images/dr-manish1.jpg"
                        alt="Dr. Manish Sharma"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2d5134]">Dr. Manish Sharma</h3>
                      <p className="text-sm text-gray-600">M.D. (General Physician)</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Morning: 10:00 AM - 5:00 PM</p>
                    <p>Evening: 6:00 PM - 8:00 PM </p>
                    <b>(Prior Appointment Only)</b>
                    <p>Phone: +91 8690761918</p>
                  </div>
                </motion.div>
                
                {/* Dt. Gauri Mehra */}
                <motion.div 
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  className="bg-[#E7EECD] p-4 rounded-lg"
                >
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-white overflow-hidden mr-3">
                      <Image
                        src="/images/dr-gauri1.jpg"
                        alt="Dt. Gauri Mehra"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2d5134]">Dt. Gauri Mehra</h3>
                      <p className="text-sm text-gray-600">Dietician</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Morning: 10:00 AM - 2:00 PM</p>
                    <p>Evening: 6:00 PM - 8:00 PM</p>
                     <b>(Prior Appointment Only)</b>
                    <p>Phone: +91 9461068894</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Specialties Section */}
        <motion.div
          ref={specialtiesRef}
          initial="hidden"
          animate={specialtiesInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="bg-white rounded-xl shadow-xl overflow-hidden p-8"
        >
          <motion.h2 
            variants={fadeIn}
            className={`text-2xl font-bold text-center text-[#2d5134] ${berkshire.className} mb-8`}
          >
            Our Specialties
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={specialtiesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6"
          >
            <motion.div 
              variants={itemFadeIn}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                borderLeftWidth: "6px" 
              }}
              className="bg-[#E7EECD] p-6 rounded-lg border-l-4 border-[#2d5134] hover:shadow-md transition"
            >
              <div className="font-medium text-lg text-[#2d5134] mb-2">General Medicine</div>
              <p className="text-gray-600">Comprehensive care for all medical conditions. Our experienced physicians provide personalized treatment plans.</p>
            </motion.div>
            
            <motion.div 
              variants={itemFadeIn}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                borderLeftWidth: "6px" 
              }}
              className="bg-[#E7EECD] p-6 rounded-lg border-l-4 border-[#2d5134] hover:shadow-md transition"
            >
              <div className="font-medium text-lg text-[#2d5134] mb-2">Nutrition & Dietetics</div>
              <p className="text-gray-600">Personalized diet plans and nutritional guidance tailored to your specific health needs and goals.</p>
            </motion.div>
            
            <motion.div 
              variants={itemFadeIn}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                borderLeftWidth: "6px" 
              }}
              className="bg-[#E7EECD] p-6 rounded-lg border-l-4 border-[#2d5134] hover:shadow-md transition"
            >
              <div className="font-medium text-lg text-[#2d5134] mb-2">Diagnostic Services</div>
              <p className="text-gray-600">Advanced diagnostic and laboratory facilities to ensure accurate assessment and diagnosis.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default ContactPage;