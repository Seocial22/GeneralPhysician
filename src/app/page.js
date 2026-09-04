import AboutUsSection from "@/components/AboutUsSection";
import AppointmentSection from "@/components/AppointmentSection";
import HeroSection from "@/components/HeroSection";
// import NewYearPopup from "@/components/NewYearPopup";
import OurMission from "@/components/OurMission";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export const metadata = {
  metadataBase: new URL("https://gaurnishhealth.in"),
  title: "Best General Physician - Dr. Manish Sharma",
  description:
    "Dr. Manish Sharma (MD) & Dt. Gauri Mehra - Top General Physician & Dietician in Ajmer. Comprehensive healthcare & nutrition services.",
  alternates: {
    canonical: "https://gaurnishhealth.in/",
  },
  keywords: [
    "best general physician in Ajmer",
    "top dietician in Ajmer",
    "Dr. Manish Sharma Ajmer",
    "Dt. Gauri Mehra Dietician",
    "best doctors in Ajmer",
    "general physician near me",
    "nutritionist in Ajmer",
    "healthcare specialists Ajmer",
    "medical consultation Ajmer",
    "diet planning Ajmer",
    "family doctor Ajmer",
    "weight management specialist",
    "diabetes care Ajmer",
    "holistic healthcare Ajmer",
  ],
  openGraph: {
    title:
      "Best General Physician and Dietician in Ajmer | Dr. Manish Sharma & Dt. Gauri Mehra",
    description:
      "Dr. Manish Sharma (MD) and Dt. Gauri Mehra are Ajmer's top healthcare specialists offering complete medical and nutritional care",
    url: "https://gaurnishhealth.in/",
    siteName: "GaurNish Health",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best General Physician and Dietician in Ajmer | Dr. Manish Sharma & Dt. Gauri Mehra",
    description:
      "Ajmer's top healthcare specialists - Dr. Manish Sharma (General Physician) and Dt. Gauri Mehra (Dietician)",
    images: ["/images/og-image.jpg"],
  },
   robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
    index: true,
    follow: true,
    noimageindex: false,
    },
  },
  other: {
    "application-name": "Gaurnish HealthCare",
    author: "Gaurnish HealthCare",
    generator: "Next.js",
    "theme-color": "#ffffff",
    publisher: "Gaurnish HealthCare",
  },
};

// Schema.org structured data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://gaurnishhealth.in/#organization",
      name: "GaurNish Health",
      url: "https://gaurnishhealth.in/",
      logo: {
        "@type": "ImageObject",
        url: "https://gaurnishhealth.in/images/logo.png",
      },
      address: [
        {
          "@type": "PostalAddress",
          name: "Paras Urology & Multispeciality Hospital",
          streetAddress: "Haribhau Upadhyay Nagar, C-Block, Pushkar Road",
          addressLocality: "Ajmer",
          addressRegion: "Rajasthan",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          name: "Jeevan Jyoti Hospital",
          streetAddress: "19, 26B, Beawar Rd, Nai Basti, Ramganj",
          addressLocality: "Ajmer",
          addressRegion: "Rajasthan",
          addressCountry: "IN",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Dr. Manish Sharma",
          telephone: "+91-8690761918",
        },
        {
          "@type": "ContactPoint",
          contactType: "Dt. Gauri Mehra",
          telephone: "+91-9461068894",
        },
      ],
    },
    {
      "@type": "Physician",
      "@id": "https://gaurnishhealth.in/#doctor1",
      name: "Dr. Manish Sharma",
      jobTitle: "General Physician",
      description:
        "M.D. General Physician specializing in Seasonal Diseases, Diabetes, Respiratory Problems, Cardiac Diseases, and more",
      telephone: "+91-8690761918",
      medicalSpecialty: [
        "General Medicine",
        "Seasonal Diseases",
        "Diabetes Management",
        "Respiratory Problems",
        "Cardiac Diseases",
        "Mental & Brain Disorders",
        "Thyroid Issues",
        "Paralysis & Bone Conditions",
        "Gastroenterology",
        "Hypertension",
      ],
      worksFor: {
        "@id": "https://gaurnishhealth.in/#organization",
      },
      workLocation: [
        {
          "@type": "Place",
          name: "Paras Urology & Multispeciality Hospital",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Haribhau Upadhyay Nagar, C-Block, Pushkar Road",
            addressLocality: "Ajmer",
            addressRegion: "Rajasthan",
            addressCountry: "IN",
          },
        },
        {
          "@type": "Place",
          name: "Jeevan Jyoti Hospital",
          address: {
            "@type": "PostalAddress",
            streetAddress: "19, 26B, Beawar Rd, Nai Basti, Ramganj",
            addressLocality: "Ajmer",
            addressRegion: "Rajasthan",
            addressCountry: "IN",
          },
        },
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "M.D. (General Physician)",
      },
      availableService: [
        {
          "@type": "MedicalService",
          name: "General Medicine Consultation",
          hoursAvailable: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "10:00",
              closes: "17:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "18:00",
              closes: "20:00",
            },
          ],
        },
      ],
    },
    {
      "@type": "Dietitian",
      "@id": "https://gaurnishhealth.in/#doctor2",
      name: "Dt. Gauri Mehra",
      jobTitle: "Dietician",
      description:
        "Expert Dietician providing Weight Management, Anti-Diabetic Diet, Child Nutrition, Keto Diet, and specialized nutrition care",
      telephone: "+91-9461068894",
      medicalSpecialty: [
        "Clinical Nutrition",
        "Weight Management",
        "Diabetic Nutrition",
        "Gastro Health Diet",
        "Child Nutrition",
        "Ketogenic Diet",
        "Renal Nutrition",
        "Pregnancy & Lactation Nutrition",
        "Cardiac Nutrition",
      ],
      worksFor: {
        "@id": "https://gaurnishhealth.in/#organization",
      },
      workLocation: [
        {
          "@type": "Place",
          name: "Paras Urology & Multispeciality Hospital",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Haribhau Upadhyay Nagar, C-Block, Pushkar Road",
            addressLocality: "Ajmer",
            addressRegion: "Rajasthan",
            addressCountry: "IN",
          },
        },
        {
          "@type": "Place",
          name: "Jeevan Jyoti Hospital",
          address: {
            "@type": "PostalAddress",
            streetAddress: "19, 26B, Beawar Rd, Nai Basti, Ramganj",
            addressLocality: "Ajmer",
            addressRegion: "Rajasthan",
            addressCountry: "IN",
          },
        },
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Dietetics and Nutrition",
      },
      availableService: [
        {
          "@type": "MedicalService",
          name: "Nutritional Consultation",
          hoursAvailable: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "10:00",
              closes: "14:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "18:00",
              closes: "20:00",
            },
          ],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://gaurnishhealth.in/#website",
      url: "https://gaurnishhealth.in/",
      name: "GaurNish Health",
      description:
        "Best General Physician and Dietician in Ajmer - Dr. Manish Sharma & Dt. Gauri Mehra providing comprehensive healthcare services",
      publisher: {
        "@id": "https://gaurnishhealth.in/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://gaurnishhealth.in/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://gaurnishhealth.in/#webpage",
      url: "https://gaurnishhealth.in/",
      name: "Best General Physician - Dr. Manish Sharma",
      isPartOf: {
        "@id": "https://gaurnishhealth.in/#website",
      },
      about: {
        "@id": "https://gaurnishhealth.in/#organization",
      },
      description:
        "Dr. Manish Sharma (MD) & Dt. Gauri Mehra - Top General Physician & Dietician in Ajmer. Comprehensive healthcare & nutrition services.",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://gaurnishhealth.in/#localbusiness",
      name: "GaurNish Health - Paras Hospital",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Haribhau Upadhyay Nagar, C-Block, Pushkar Road",
        addressLocality: "Ajmer",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
      telephone: "+91-8690761918",
      openingHours: ["Mo-Sa 10:00-17:00", "Mo-Sa 18:00-20:00"],
      priceRange: "$",
      hasMap:
        "https://maps.google.com/?q=Paras+Urology+Multispeciality+Hospital+Ajmer",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://gaurnishhealth.in/#localbusiness2",
      name: "GaurNish Health - Jeevan Jyoti Hospital",
      address: {
        "@type": "PostalAddress",
        streetAddress: "19, 26B, Beawar Rd, Nai Basti, Ramganj",
        addressLocality: "Ajmer",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
      telephone: "+91-9461068894",
      openingHours: ["Mo-Sa 18:00-20:00"],
      priceRange: "$",
      hasMap: "https://maps.google.com/?q=Jeevan+Jyoti+Hospital+Ajmer",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <WhyChooseUsSection />
      <OurMission />
      <AppointmentSection />
      {/* <NewYearPopup/> */}
    </>
  );
}
