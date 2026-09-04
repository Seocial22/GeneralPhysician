"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Berkshire_Swash } from 'next/font/google';
import { motion } from 'framer-motion';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const AboutUsHero = ({ 
  backgroundImage = '/images/leaf-bg.avif',
  title = 'About Us',
  description = 'With over 15 years of combined experience, our team of healthcare professionals is dedicated to providing holistic wellness solutions. We believe in a personalized approach to health that addresses your unique needs and goals.',
  breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' }
  ]
}) => {
  return (
    <section className="relative bg-[#f0f5dc] pt-36 pb-16 md:pt-30 md:pb-32 lg:pt-44 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={backgroundImage}
          alt="Leaf background"
          fill
          className="object-fit"
          priority
        />
      </div>
      
      {/* Breadcrumb navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mb-6 font-bold">
        <div className="flex justify-center">
          <nav className="text-[#305424]">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.path}>
                <Link href={crumb.path} className="hover:underline">
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <span className="mx-2">/</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
   
      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center relative">
          {/* Main Headline with new font */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`${berkshire.className} text-5xl md:text-6xl lg:text-7xl font-bold text-[#305424] mb-6 md:mb-8 leading-tight`}
          >
            {title}
          </motion.h2>
            
          {/* Description Text */}
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base font-medium md:text-lg text-[#305424] max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;