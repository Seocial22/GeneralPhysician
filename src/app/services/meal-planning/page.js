    // pages/services/meal-planning.js
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
  title: 'Best Meal Planning in Ajmer | Dietician-Designed Plans | Dt. Gauri Mehra',
  description: 'Get personalized meal plans from Ajmer\'s top dietician Dt. Gauri Mehra. Custom weekly/monthly plans for weight loss, diabetes, PCOS & family nutrition with local ingredients.',
  alternates: {
    canonical: 'https://gaurnishhealth.in/services/meal-planning'
  },
  keywords: [
    'best meal planning Ajmer',
    'dietician in Ajmer',
    'Dt. Gauri Mehra meal plans',
    'weight loss diet plan',
    'diabetes meal plan Ajmer',
    'PCOS diet specialist',
    'family nutrition planning',
    'healthy eating plans Ajmer',
    'Indian diet plans',
    'nutritionist consultation Ajmer',
    'personalized diet chart',
    'weekly meal planner',
    'medical nutrition therapy',
    'Ajmer dietician services',
    'healthy recipes for families',
    'doctor-designed meal plans',
    'weight management dietitian'
  ],
  openGraph: {
    title: 'Best Meal Planning in Ajmer | Dietician-Designed Plans | Dt. Gauri Mehra',
    description: 'Personalized meal plans by Ajmer\'s top dietician Dt. Gauri Mehra for weight loss, diabetes, PCOS & family nutrition using local ingredients.',
    url: 'https://gaurnishhealth.in/services/meal-planning',
    siteName: 'GaurNish Health',
    images: [
      {
        url: '/images/meal-planning-og-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Meal Planning in Ajmer | Dietician-Designed Plans | Dt. Gauri Mehra',
    description: 'Personalized meal plans by Ajmer\'s top dietician Dt. Gauri Mehra for weight loss, diabetes, PCOS & family nutrition using local ingredients.',
    images: ['/images/meal-planning-og-image.jpg'],
  },
};
    export default function MealPlanning() {
    return (
        <>
      

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
                <span className="text-[#2d5134]">Meal Planning</span>
            </div>
            
            <h1 className={`${berkshire.className} text-4xl md:text-5xl lg:text-6xl text-[#2d5134] mb-6`}>
                Meal Planning
            </h1>
            
            <p className="text-lg text-[#2d5134]/80 max-w-3xl">
                Ready-to-use weekly and monthly meal plans with simple recipes and shopping lists created by Ajmer&apos;s best doctors to help you reach your health goals.
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
                    src="/images/meal-planning.webp" 
                    alt="Meal Planning Services" 
                    width={800} 
                    height={500} 
                    className="w-full h-auto object-cover"
                />
                </div>
                
                <section>
                <h2 className={`${berkshire.className} text-3xl text-[#2d5134] mb-4`}>
                    What is Meal Planning?
                </h2>
                <p className="text-gray-700 mb-4">
                    Meal planning is having ready-made food schedules that tell you exactly what to eat for breakfast, lunch, dinner, and snacks each day. At our clinic in Ajmer, our doctors create these plans based on your health needs, cooking skills, and food likes.
                </p>
                <p className="text-gray-700 mb-4">
                    Unlike random food charts found online, our meal plans are created for your specific health conditions, family size, and daily routine. We include simple recipes, shopping lists, and food prep tips to make healthy eating easy and stress-free.
                </p>
                </section>

                <section>
                <h2 className={`${berkshire.className} text-3xl text-[#2d5134] mb-4`}>
                    Our Meal Planning Services
                </h2>
                
                <div className="space-y-6">
                    <div className="bg-[#f5f9f0] p-6 rounded-lg border-l-4 border-[#2d5134]">
                    <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Weekly Meal Plans</h3>
                    <p className="text-gray-700">
                        Get 7-day food schedules with breakfast, lunch, dinner and snack ideas. Our weekly plans include simple recipes using common ingredients available in Ajmer markets, plus a complete shopping list to make your market trips quick and easy.
                    </p>
                    </div>
                    
                    <div className="bg-[#f5f9f0] p-6 rounded-lg border-l-4 border-[#2d5134]">
                    <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Monthly Meal Plans</h3>
                    <p className="text-gray-700">
                        For those who want more variety and less frequent planning, our monthly plans give you 30 days of meal ideas with seasonal ingredients. These plans include meal prep guides to help you cook efficiently and save time on busy days.
                    </p>
                    </div>
                    
                    <div className="bg-[#f5f9f0] p-6 rounded-lg border-l-4 border-[#2d5134]">
                    <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Medical Condition Meal Plans</h3>
                    <p className="text-gray-700">
                        Get specialized meal plans for diabetes, heart disease, PCOS, thyroid disorders, and other health conditions. These plans follow medical guidelines while still giving you tasty food options that the whole family can enjoy.
                    </p>
                    </div>
                    
                    <div className="bg-[#f5f9f0] p-6 rounded-lg border-l-4 border-[#2d5134]">
                    <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Family Meal Plans</h3>
                    <p className="text-gray-700">
                        We create meal plans that work for the whole family, even when one person has special health needs. These plans focus on core meals everyone can eat with simple modifications for different family members&apos; health conditions.
                    </p>
                    </div>

                    <div className="bg-[#f5f9f0] p-6 rounded-lg border-l-4 border-[#2d5134]">
                    <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Special Occasion Planning</h3>
                    <p className="text-gray-700">
                        Get help planning for festivals, parties, and special events while staying on track with your health goals. We provide healthier versions of traditional foods and tips for portion control during celebrations.
                    </p>
                    </div>
                </div>
                </section>
                
                {/* Benefits Section - Now in Main Column */}
                <section>
                <h2 className={`${berkshire.className} text-3xl text-[#2d5134] mb-4`}>
                    Benefits of Our Meal Planning Service
                </h2>
                <p className="text-gray-700 mb-4">
                    Patients who use our meal planning services often experience:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Less stress about what to cook each day</li>
                    <li>Fewer unhealthy food choices due to having a plan ready</li>
                    <li>Better control of health conditions through consistent good eating</li>
                    <li>Money savings from planned shopping and less food waste</li>
                    <li>More energy from balanced, nutritious meals</li>
                    <li>Improved cooking skills and food knowledge</li>
                    <li>Better family meals with less cooking separate foods</li>
                    <li>More time saved with organized shopping and cooking</li>
                    <li>Steady progress toward health goals with consistent eating</li>
                </ul>
                </section>

                <section>
                <h2 className={`${berkshire.className} text-3xl text-[#2d5134] mb-4`}>
                    Why Choose Us for Meal Planning in Ajmer
                </h2>
                <p className="text-gray-700 mb-4">
                    Dt. Gauri Mehra is known as one of the best meal planning experts in Ajmer with deep understanding of both nutrition and local food habits. Unlike general meal plans found online, our plans consider your specific health conditions, medications, and family needs.
                </p>
                <p className="text-gray-700 mb-4">
                    Our clinic creates meal plans that work in real life, not just on paper. We understand the challenges of cooking for a family, eating out with friends, and celebrating festivals while managing health conditions. Our practical approach makes healthy eating doable for busy people in Ajmer.
                </p>
                </section>
            </div>
            
           {/* Redesigned Sidebar */}
<div className="lg:col-span-1">
  {/* Book Appointment Card with Improved Design */}
  <div className="bg-gradient-to-br from-[#2d5134] to-[#1d3422] text-white p-6 rounded-lg mb-8 shadow-lg">
    <h3 className={`${berkshire.className} text-2xl mb-4`}>
      Get Your Personalized Meal Plan
    </h3>
    <div className="flex items-center mb-5 bg-white/10 p-3 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#eb7147] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
      <p className="text-sm">
        Receive a <span className="font-bold">doctor-designed</span> meal plan tailored to your health needs and food preferences
      </p>
    </div>
    <div className="flex items-center mb-6 bg-white/10 p-3 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#eb7147] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="text-sm">
        <span className="font-bold">30-minute consultation</span> with Dr. Gauri to discuss your health goals
      </p>
    </div>
     <Link
              href="/bookconsultation">
    <button className="w-full bg-[#eb7147] hover:bg-[#d15e37] cursor-pointer text-white py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center font-bold shadow-md cursor-pointer">
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
          alt="Dt. Gauri Mehra - Best Meal Planning Doctor in Ajmer" 
          width={128} 
          height={128}
          className="w-full h-full object-cover" 
        />
      </div>
     
      <h4 className="text-xl font-semibold text-[#2d5134]">Dt. Gauri Mehra</h4>
      <p className="text-gray-600">Nutrition & Meal Planning Expert</p>
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
          <p className="font-semibold text-[#2d5134]">Medical Nutrition, Meal Planning</p>
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
  
  {/* Testimonial Section - New Addition */}
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
      &quot;Dr. Gauri&apos;s meal plan helped me control my diabetes without giving up my favorite foods. My blood sugar is now stable, and I&apos;ve lost 8kg in 3 months!&quot;
      </p>
      <div className="flex items-center mt-3">
        <div className="h-8 w-8 rounded-full bg-[#2d5134] text-white flex items-center justify-center font-bold mr-2">
          R
        </div>
        <div>
          <p className="font-semibold text-sm text-[#2d5134]">Rajesh S.</p>
          <p className="text-xs text-gray-500">Diabetes Management Plan</p>
        </div>
      </div>
    </div>
   
  </div>
  
  {/* Other Services - Improved Design */}
  <div className="bg-white p-6 rounded-lg mb-8 shadow-md border border-gray-200">
    <h3 className={`${berkshire.className} text-2xl text-[#2d5134] mb-4`}>
      Other Services
    </h3>
    <ul className="divide-y divide-gray-100">
      <li className="py-3">
        <Link href="/services/weight-management" className="flex items-center text-gray-700 hover:text-[#eb7147] transition duration-300 group">
          <div className="bg-[#f5f9f0] group-hover:bg-[#eb7147]/10 p-2 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2d5134] group-hover:text-[#eb7147]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </div>
          <div>
            <p className="font-medium">Weight Management</p>
            <p className="text-xs text-gray-500">Customized plans for healthy weight loss</p>
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
        <Link href="/services/chronic-disease" className="flex items-center text-gray-700 hover:text-[#eb7147] transition duration-300 group">
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
      <li className="py-3">
        <Link href="/services/specialized-treatment" className="flex items-center text-gray-700 hover:text-[#eb7147] transition duration-300 group">
          <div className="bg-[#f5f9f0] group-hover:bg-[#eb7147]/10 p-2 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2d5134] group-hover:text-[#eb7147]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <p className="font-medium">Specialized Treatment</p>
            <p className="text-xs text-gray-500">Advanced care for complex conditions</p>
          </div>
        </Link>
      </li>
    </ul>
  </div>
  
  {/* Quick Contact - New Addition */}
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
   <Link
              href="/contact">
    <button className="w-full bg-white text-[#eb7147] hover:bg-gray-100 cursor-pointer py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center font-semibold">
      Contact Us
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
    </Link>
  </div>
</div>
    </div>
            
            {/* Our Approach Section - Full Width and Attractive Design */}
            <section className="mt-16 bg-[#f5f9f0] rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-[#2d5134] text-white p-8 flex items-center justify-center">
                <h2 className={`${berkshire.className} text-4xl text-center`}>
                    Our Approach to Meal Planning
                </h2>
                </div>
                <div className="md:w-2/3 p-8">
                <p className="text-gray-700 mb-6">
                    At our clinic in Ajmer, we make meal planning practical and simple. Our approach includes:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                    <span className="mr-3 text-[#eb7147] mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <p>Creating plans based on your health needs and food preferences</p>
                    </div>
                    <div className="flex items-start">
                    <span className="mr-3 text-[#eb7147] mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <p>Using everyday ingredients found in local Ajmer markets</p>
                    </div>
                    <div className="flex items-start">
                    <span className="mr-3 text-[#eb7147] mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <p>Including simple recipes that don&apos;t need special cooking skills</p>
                    </div>
                    <div className="flex items-start">
                    <span className="mr-3 text-[#eb7147] mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <p>Planning meals with proper portion sizes for your health goals</p>
                    </div>
                    <div className="flex items-start">
                    <span className="mr-3 text-[#eb7147] mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <p>Balancing nutrition across the day to keep your energy stable</p>
                    </div>
                    <div className="flex items-start">
                    <span className="mr-3 text-[#eb7147] mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <p>Including options for eating out and social occasions</p>
                    </div>
                    <div className="flex items-start">
                    <span className="mr-3 text-[#eb7147] mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <p>Providing shopping lists organized by store sections to save time</p>
                    </div>
                    <div className="flex items-start">
                    <span className="mr-3 text-[#eb7147] mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <p>Suggesting meal prep ideas to make cooking faster on busy days</p>
                    </div>
                    <div className="flex items-start md:col-span-2">
                    <span className="mr-3 text-[#eb7147] mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <p>Creating plans that work with Indian cooking traditions and local foods</p>
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
                <h3 className="text-xl font-semibold text-[#2d5134] mb-2">How are your meal plans different from online meal plans?</h3>
                <p className="text-gray-700">
                Our meal plans are created by Ajmer&apos;s top doctors specially for your health conditions, medications, and food preferences. Online plans are general and don&apos;t consider your specific health needs or local food availability. Our plans use ingredients you can find in Ajmer markets and recipes that work with Indian cooking methods.
                </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Do I need special cooking skills to follow your meal plans?</h3>
                <p className="text-gray-700">
                No, our meal plans include simple recipes that anyone can make. We focus on basic cooking methods and provide clear instructions. Many dishes take just 15-30 minutes to prepare. We also include no-cook meal options and tips for quick food prep when you&apos;re busy.
                </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-[#2d5134] mb-2">How do I handle meal plans when cooking for my family?</h3>
                <p className="text-gray-700">
                Our family meal plans are designed so everyone can eat the same core meals with small adjustments as needed. We focus on healthy foods that appeal to all family members and provide tips for modifying portions or ingredients for different health needs. This way, you won&apos;t need to cook separate meals.
                </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Can I get meal plans for specific health conditions?</h3>
                <p className="text-gray-700">
                Yes, we create specialized meal plans for diabetes, high blood pressure, heart disease, PCOS, thyroid problems, kidney issues, and many other health conditions. Our doctors understand the nutritional needs for each condition and create plans that help improve your health markers while still giving you enjoyable food options.
                </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-[#2d5134] mb-2">How often should I update my meal plan?</h3>
                <p className="text-gray-700">
                Most patients benefit from updating their meal plans every 2-3 months or whenever there&apos;s a significant change in their health or lifestyle. Seasonal updates are also helpful to include fresh, available produce. As your health improves, we can adjust your plan to include more food options while maintaining your progress.
                </p>
            </div>
            </div>
        </div>
        </>
    );
}