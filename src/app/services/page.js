import AboutUsHero from "@/components/AboutUsHero";
import AppointmentSection from "@/components/AppointmentSection";
import ServicesSection from "@/components/ServicesSection";

export const metadata = {
  metadataBase: new URL("https://gaurnishhealth.in"),
  title:
    "Best Medical Treatments in Ajmer | Dr. Manish Sharma & Dt. Gauri Mehra",
  description:
    "Comprehensive medical treatments and healthcare services in Ajmer by Dr. Manish Sharma (General Physician) and Dt. Gauri Mehra (Dietician).",
  alternates: {
    canonical: "https://gaurnishhealth.in/services",
  },
  keywords: [
    "best medical treatments in Ajmer",
    "healthcare services Ajmer",
    "general physician treatments",
    "dietician services Ajmer",
    "Dr. Manish Sharma treatments",
    "Dt. Gauri Mehra diet plans",
    "medical care Ajmer",
    "chronic disease management",
    "weight management programs",
    "diabetes treatment Ajmer",
    "hypertension care",
    "nutrition therapy",
    "preventive healthcare",
    "family medicine services",
  ],
  openGraph: {
    title:
      "Best Medical Treatments in Ajmer | Dr. Manish Sharma & Dt. Gauri Mehra",
    description:
      "Expert medical treatments and personalized healthcare services in Ajmer by our specialist doctors",
    url: "https://gaurnishhealth.in/services",
    siteName: "GaurNish Health",
    images: [
      {
        url: "/images/services-og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
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
  twitter: {
    card: "summary_large_image",
    title:
      "Best Medical Treatments in Ajmer | Dr. Manish Sharma & Dt. Gauri Mehra",
    description:
      "Comprehensive healthcare treatments by Ajmer's leading specialists",
    images: ["/images/services-og-image.jpg"],
  },
  other: {
    "application-name": "Gaurnish HealthCare",
    author: "Gaurnish HealthCare",
    generator: "Next.js",
    "theme-color": "#ffffff",
    publisher: "Gaurnish HealthCare",
  },
};

export default function Services() {
  return (
    <>
      <AboutUsHero
        title="Our Treatments"
        description="Learn about our treatments and mission to provide exceptional care."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Treatments", path: "/services" },
        ]}
      />
      <ServicesSection />
      <AppointmentSection />
    </>
  );
}
