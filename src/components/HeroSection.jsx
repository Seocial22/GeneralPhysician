"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Berkshire_Swash } from 'next/font/google';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const HeroSection = () => {
  return (
    <section 
      className="relative bg-[#E7EECD] pt-20 pb-24 md:pt-32 md:pb-36 lg:pt-36 lg:pb-40 overflow-hidden"
    >
      {/* Background leaves */}
      <Image
        src="/images/leaf-bg.avif" 
        alt="Leaf background"
        fill
        className="object-cover"
        priority
      />

      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 relative">
          {/* Animated stethoscope using GPU-composited CSS */}
          <div className="absolute top-0 left-0 md:left-16 lg:left-32 z-10 animate-float">
            <Image
              src="/images/stethoscope.png" 
              alt="Stethoscope decoration"
              width={208}
              height={208}
              className="w-36 md:w-44 lg:w-52 h-auto"
              priority
            />
          </div>
          
          <div className="text-center mt-32 md:mt-40 lg:mt-44 relative z-20">
            {/* Primary H1 heading */}
            <h1 
              className={`${berkshire.className} text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a3821] mb-3 md:mb-4 leading-tight`}
            >
              Your Health, Our Priority
            </h1>
              
            {/* Description text (p element for proper heading hierarchy) */}
            <p className="text-base font-semibold md:text-lg text-[#1a3821] max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
              Experience personalized care with Dr. Manish Sharma, our experienced General Physician, and Dt. Gauri Mehra, our certified Dietician. Together, they provide comprehensive wellness solutions tailored just for you.
            </p>
              
            {/* CTA button */}
            <div className="mb-10 md:mb-12">
              <Link 
                href="/bookconsultation"
                className="inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-3 bg-[#eb7147] hover:bg-[#d15e37] text-white text-base md:text-lg font-medium shadow-md hover:shadow-lg rounded-sm cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Book An Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;