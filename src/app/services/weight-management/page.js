// pages/services/weight-management.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Berkshire_Swash } from 'next/font/google';
import AppointmentSection from '@/components/AppointmentSection';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
});


export const metadata = {
  metadataBase: new URL('https://gaurnishhealth.in'),
  title: 'Best Weight Management in Ajmer | Doctor-Supervised Plans | Dt. Gauri Mehra',
  description: 'Medical weight management programs by Ajmer\'s top physician Dt. Gauri Mehra. Personalized sustainable weight loss plans for diabetes, PCOS & metabolic health with 15+ years expertise.',
  alternates: {
    canonical: 'https://gaurnishhealth.in/services/weight-management'
  },
  keywords: [
    'weight management Ajmer',
    'medical weight loss program',
    'Dt. Gauri Mehra weight loss',
    'sustainable weight loss Ajmer',
    'diabetes weight management',
    'PCOS weight loss specialist',
    'obesity treatment Ajmer',
    'Ajmer weight loss doctor',
    'personalized weight loss plans',
    'doctor-supervised diet plans',
    'healthy weight loss strategies',
    'metabolic health optimization',
    'weight loss for chronic conditions',
    'non-surgical weight management',
    'Indian weight loss programs',
    'long-term weight maintenance',
    'Ajmer bariatric physician'
  ],
  openGraph: {
    title: 'Best Weight Management in Ajmer | Doctor-Supervised Plans | Dt. Gauri Mehra',
    description: 'Medical weight management programs by Ajmer\'s top physician Dt. Gauri Mehra for diabetes, PCOS & metabolic health with sustainable results.',
    url: 'https://gaurnishhealth.in/services/weight-management',
    siteName: 'GaurNish Health',
    images: [
      {
        url: '/images/weight-management-og-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Weight Management in Ajmer | Doctor-Supervised Plans | Dt. Gauri Mehra',
    description: 'Medical weight loss programs by Ajmer\'s top physician Dt. Gauri Mehra for diabetes, PCOS & metabolic health.',
    images: ['/images/weight-management-og-image.jpg'],
  },
};

export default function WeightManagement() {
  return (
    <>
      <Head>
        <title>Weight Management | Best General Physician Care in Ajmer</title>
        <meta name="description" content="Personalized weight management programs with doctor-designed meal plans and lifestyle guidance from Ajmer's top physicians for healthy, sustainable results." />
      </Head>

      {/* Hero Section with background */}
      <div className="relative bg-[#f5f9f0] md:py-28 py-24 overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/leaf-bg.avif"
            alt="Leaf background"
            fill
            className="object-fit"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex text-sm text-[#2d5134]/70 mb-6">
            <Link href="/" className="hover:text-[#2d5134]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-[#2d5134]">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-[#2d5134]">Weight Management</span>
          </div>
          
          <h1 className={`${berkshire.className} text-4xl md:text-5xl lg:text-6xl text-[#2d5134] mb-6`}>
            Weight Management
          </h1>
          
          <p className="text-lg text-[#2d5134]/80 max-w-3xl">
            Doctor-guided weight control programs designed for real people in Ajmer - sustainable plans that fit your lifestyle and deliver lasting results.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-lg overflow-hidden mb-8">
              <Image 
                src="/images/weight-management.webp" 
                alt="Weight Management Services" 
                width={800} 
                height={500} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <section>
              <h2 className={`${berkshire.className} text-3xl text-[#2d5134] mb-4`}>
                What is Healthy Weight Management?
              </h2>
              <p className="text-gray-700 mb-4">
                Weight management is about achieving and maintaining a healthy weight through balanced eating, regular activity, and sustainable lifestyle changes. At our Ajmer clinic, we focus on gradual, healthy approaches rather than quick fixes that don&apos;t last.
              </p>
              <p className="text-gray-700 mb-4">
                Unlike fad diets that promise rapid results, our weight management programs are medically supervised and tailored to your unique metabolism, health conditions, and daily routine. We help you develop habits that lead to lasting weight control and better overall health.
              </p>
            </section>

            <section>
              <h2 className={`${berkshire.className} text-3xl text-[#2d5134] mb-4`}>
                Our Weight Management Services
              </h2>
              
              <div className="space-y-6">
                <div className="bg-[#f5f9f0] p-6 rounded-lg border-l-4 border-[#2d5134]">
                  <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Comprehensive Health Assessment</h3>
                  <p className="text-gray-700">
                    We begin with detailed health checks including BMI analysis, body composition testing, and metabolic screening to identify any underlying conditions affecting your weight (like thyroid disorders or insulin resistance).
                  </p>
                </div>
                
                <div className="bg-[#f5f9f0] p-6 rounded-lg border-l-4 border-[#2d5134]">
                  <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Personalized Nutrition Plans</h3>
                  <p className="text-gray-700">
                    Customized eating plans that consider your food preferences, cooking skills, and schedule. Our plans use locally available ingredients and include practical portion guidance for home meals and eating out.
                  </p>
                </div>
                
                <div className="bg-[#f5f9f0] p-6 rounded-lg border-l-4 border-[#2d5134]">
                  <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Activity & Movement Guidance</h3>
                  <p className="text-gray-700">
                    Realistic exercise recommendations tailored to your fitness level and daily routine. We focus on simple, sustainable activities that fit into your life - no expensive gym memberships required.
                  </p>
                </div>
                
                <div className="bg-[#f5f9f0] p-6 rounded-lg border-l-4 border-[#2d5134]">
                  <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Medical Weight Management</h3>
                  <p className="text-gray-700">
                    For patients who qualify, we offer supervised medical weight loss programs that may include prescription medications alongside diet and lifestyle changes, all carefully monitored by our physicians.
                  </p>
                </div>

                <div className="bg-[#f5f9f0] p-6 rounded-lg border-l-4 border-[#2d5134]">
                  <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Maintenance & Follow-up</h3>
                  <p className="text-gray-700">
                    Ongoing support to help you maintain your weight loss, with regular check-ins to adjust your plan as needed. We teach strategies to prevent weight regain and handle life&apos;s challenges.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Benefits Section */}
            <section>
              <h2 className={`${berkshire.className} text-3xl text-[#2d5134] mb-4`}>
                Benefits of Our Weight Management Program
              </h2>
              <p className="text-gray-700 mb-4">
                Patients who follow our weight management plans experience:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Steady, sustainable weight loss (0.5-1kg per week)</li>
                <li>Improved energy levels and sleep quality</li>
                <li>Better control of blood sugar, cholesterol, and blood pressure</li>
                <li>Reduced joint pain and improved mobility</li>
                <li>Healthier relationship with food and eating</li>
                <li>Practical strategies for social events and dining out</li>
                <li>Lifelong habits for weight maintenance</li>
                <li>Improved self-confidence and body image</li>
                <li>Reduced risk of weight-related health complications</li>
              </ul>
            </section>

            <section>
              <h2 className={`${berkshire.className} text-3xl text-[#2d5134] mb-4`}>
                Why Choose Us for Weight Management in Ajmer
              </h2>
              <p className="text-gray-700 mb-4">
                Dt. Gauri Mehra is recognized as one of Ajmer&apos;s leading weight management specialists, with extensive training in both medical nutrition therapy and behavioral change strategies. Our clinic takes a comprehensive approach that addresses all factors influencing weight - physical, psychological, and environmental.
              </p>
              <p className="text-gray-700 mb-4">
                What sets us apart is our focus on sustainable results. We don&apos;t believe in extreme diets or unrealistic exercise regimens. Instead, we help you make gradual changes that become permanent parts of your lifestyle. Our team provides continuous support and accountability to keep you motivated throughout your journey.
              </p>
            </section>
          </div>
          
          {/* Sidebar - Matching Meal Planning Design */}
          <div className="lg:col-span-1">
            {/* Book Appointment Card with Improved Design */}
            <div className="bg-gradient-to-br from-[#2d5134] to-[#1d3422] text-white p-6 rounded-lg mb-8 shadow-lg">
              <h3 className={`${berkshire.className} text-2xl mb-4`}>
                Start Your Weight Journey
              </h3>
              <div className="flex items-center mb-5 bg-white/10 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#eb7147] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <p className="text-sm">
                  Receive a <span className="font-bold">personalized weight plan</span> tailored to your health needs and lifestyle
                </p>
              </div>
              <div className="flex items-center mb-6 bg-white/10 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#eb7147] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">
                  <span className="font-bold">15-minute consultation</span> with Dr. Gauri to assess your needs
                </p>
              </div>
               <Link href="/bookconsultation" >
              <button className="w-full bg-[#eb7147] hover:bg-[#d15e37] text-white py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center font-bold shadow-md cursor-pointer">
                Book Consultation
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              </Link>
            </div>
            
            {/* Doctor Info with Improved Visual Design */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8 shadow-md">
              <h3 className={`${berkshire.className} text-2xl text-[#2d5134] mb-4`}>
                Meet Your Expert
              </h3>
              <div className="flex flex-col items-center mb-4 relative">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#f5f9f0] shadow-md">
                  <Image 
                    src="/images/dr-gauri.jpg" 
                    alt="Dt. Gauri Mehra - Best Weight Management Doctor in Ajmer" 
                    width={128} 
                    height={128}
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                <h4 className="text-xl font-semibold text-[#2d5134]">Dt. Gauri Mehra</h4>
                <p className="text-gray-600">Weight Management Specialist</p>
                <div className="flex items-center mt-2 text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex items-center">
                  <div className="bg-[#f5f9f0] p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2d5134]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="font-semibold text-[#2d5134]">15+ years</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[#f5f9f0] p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2d5134]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Specialization</p>
                    <p className="font-semibold text-[#2d5134]">Medical Weight Management</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[#f5f9f0] p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2d5134]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Patients Served</p>
                    <p className="font-semibold text-[#2d5134]">5000+</p>
                  </div>
                </div>
                
                <Link href="/about" className="mt-4 inline-flex items-center text-white bg-[#eb7147] hover:bg-[#d15e37] px-4 py-2 rounded-lg transition duration-300 text-sm font-semibold">
                  View Full Profile
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Testimonial Section */}
            <div className="bg-[#f5f9f0] p-6 rounded-lg mb-8 shadow-md border border-[#2d5134]/20">
              <h3 className={`${berkshire.className} text-2xl text-[#2d5134] mb-4`}>
                Patient Success Stories
              </h3>
              <div className="relative py-3 px-4 bg-white rounded-lg mb-4 shadow-sm">
                <div className="absolute -top-3 -left-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#eb7147]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 italic pt-2">
                &quot;After years of failed diets, Dr. Gauri&apos;s program helped me lose 22kg and keep it off for 3 years. Her practical approach made healthy eating doable with my busy schedule.&quot;
                </p>
                <div className="flex items-center mt-3">
                  <div className="h-8 w-8 rounded-full bg-[#2d5134] text-white flex items-center justify-center font-bold mr-2">
                    P
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#2d5134]">Priya M.</p>
                    <p className="text-xs text-gray-500">Lost 22kg in 10 months</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Other Services */}
            <div className="bg-white p-6 rounded-lg mb-8 shadow-md border border-gray-200">
              <h3 className={`${berkshire.className} text-2xl text-[#2d5134] mb-4`}>
                Other Services
              </h3>
              <ul className="divide-y divide-gray-100">
                <li className="py-3">
                  <Link href="/services/meal-planning" className="flex items-center text-gray-700 hover:text-[#eb7147] transition duration-300 group">
                    <div className="bg-[#f5f9f0] group-hover:bg-[#eb7147]/10 p-2 rounded-lg mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2d5134] group-hover:text-[#eb7147]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Meal Planning</p>
                      <p className="text-xs text-gray-500">Customized weekly/monthly meal plans</p>
                    </div>
                  </Link>
                </li>
                <li className="py-3">
                  <Link href="/services/nutrition-counseling" className="flex items-center text-gray-700 hover:text-[#eb7147] transition duration-300 group">
                    <div className="bg-[#f5f9f0] group-hover:bg-[#eb7147]/10 p-2 rounded-lg mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2d5134] group-hover:text-[#eb7147]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Nutrition Counseling</p>
                      <p className="text-xs text-gray-500">Expert guidance for better eating habits</p>
                    </div>
                  </Link>
                </li>
                <li className="py-3">
                  <Link href="/services/chronic-disease-management" className="flex items-center text-gray-700 hover:text-[#eb7147] transition duration-300 group">
                    <div className="bg-[#f5f9f0] group-hover:bg-[#eb7147]/10 p-2 rounded-lg mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2d5134] group-hover:text-[#eb7147]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Chronic Disease Management</p>
                      <p className="text-xs text-gray-500">Specialized care for long-term conditions</p>
                    </div>
                  </Link>
                </li>
                <li className="py-3">
                  <Link href="/services/preventive-care" className="flex items-center text-gray-700 hover:text-[#eb7147] transition duration-300 group">
                    <div className="bg-[#f5f9f0] group-hover:bg-[#eb7147]/10 p-2 rounded-lg mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2d5134] group-hover:text-[#eb7147]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Preventive Care</p>
                      <p className="text-xs text-gray-500">Stay healthy with proactive measures</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-[#eb7147] to-[#d15e37] p-6 rounded-lg shadow-lg text-white">
              <h3 className={`${berkshire.className} text-2xl mb-4`}>
                Have Questions?
              </h3>
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p>+91 98765 43210</p>
              </div>
              <div className="flex items-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p>gaurnishhealth@gmail.com</p>
              </div>
              <button className="w-full bg-white text-[#eb7147] hover:bg-gray-100 py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center font-semibold">
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Our Approach Section - Full Width and Attractive Design */}
        <section className="mt-16 bg-[#f5f9f0] rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-[#2d5134] text-white p-8 flex items-center justify-center">
              <h2 className={`${berkshire.className} text-4xl text-center`}>
                Our Weight Management Approach
              </h2>
            </div>
            <div className="md:w-2/3 p-8">
              <p className="text-gray-700 mb-6">
                At our Ajmer clinic, we take a comprehensive, medically-supervised approach to weight management that focuses on sustainable results:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <span className="mr-3 text-[#eb7147] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p>Comprehensive medical evaluation to identify underlying causes of weight issues</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 text-[#eb7147] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p>Personalized nutrition plans based on your metabolism and food preferences</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 text-[#eb7147] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p>Practical activity recommendations that fit your lifestyle and physical abilities</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 text-[#eb7147] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p>Behavior modification strategies to change unhealthy eating patterns</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 text-[#eb7147] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p>Medical supervision for safe, effective weight loss when needed</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 text-[#eb7147] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p>Regular progress monitoring with adjustments to your plan as needed</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 text-[#eb7147] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p>Strategies for maintaining weight loss long-term and preventing regain</p>
                </div>
                <div className="flex items-start md:col-span-2">
                  <span className="mr-3 text-[#eb7147] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p>Support for emotional eating and psychological aspects of weight management</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* CTA Section */}
      <AppointmentSection/>
      
      {/* FAQ Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className={`${berkshire.className} text-4xl text-[#2d5134] mb-10 text-center`}>
          Common Questions
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-[#2d5134] mb-2">How much weight can I expect to lose with your program?</h3>
            <p className="text-gray-700">
              Healthy, sustainable weight loss is typically 0.5-1kg per week. While this may seem slow compared to fad diets, this pace leads to lasting results. Some patients lose more initially, especially if they have significant water retention. We focus on fat loss rather than just weight loss, which is better for long-term health.
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Do I need to buy special foods or supplements?</h3>
            <p className="text-gray-700">
              No, our program uses regular foods available in local Ajmer markets. We don&apos;t recommend expensive supplements or meal replacements. Occasionally, we might suggest basic vitamins if blood tests show deficiencies, but these are standard supplements available at any pharmacy. Our focus is on teaching you how to make healthy choices with everyday foods.
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-[#2d5134] mb-2">I&apos;ve tried many diets before - why would this work?</h3>
            <p className="text-gray-700">
              Most diets fail because they&apos;re too restrictive or don&apos;t address underlying health issues affecting weight. Our medical approach is different - we first identify and treat any metabolic or hormonal imbalances. Then we create a personalized plan that fits your lifestyle, not a one-size-fits-all diet. We also provide ongoing support to help you overcome plateaus and maintain your results.
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Can I still eat out or attend family gatherings?</h3>
            <p className="text-gray-700">
              Absolutely! We provide practical strategies for navigating social events, festivals, and restaurant meals. Real life includes celebrations, and we teach you how to enjoy them while staying on track. You&apos;ll learn how to make better choices when eating out, manage portions, and balance special occasions with healthier days.
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-[#2d5134] mb-2">What if I have a medical condition like diabetes or thyroid problems?</h3>
            <p className="text-gray-700">
              Our physicians specialize in weight management for patients with chronic conditions. We carefully consider your medications, dietary restrictions, and health risks when creating your plan. In many cases, proper weight management can actually improve conditions like diabetes, high blood pressure, and cholesterol levels. We coordinate with your other doctors to ensure safe, effective care.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}