import AboutUsHero from "@/components/AboutUsHero";
import ContactPage from "@/components/ContactPage";

export const metadata = {
  metadataBase: new URL("https://gaurnishhealth.in"),
  title: "Contact Best Doctors in Ajmer | Dr. Manish Sharma & Dt. Gauri Mehra",
  description:
    "Book appointments with Ajmer's best healthcare specialists - Dr. Manish Sharma (General Physician) and Dt. Gauri Mehra (Dietician). Reach us for consultations and health queries.",
  alternates: {
    canonical: "https://gaurnishhealth.in/contact",
  },
  keywords: [
    "contact best doctors in Ajmer",
    "Dr. Manish Sharma appointment",
    "Dt. Gauri Mehra consultation",
    "general physician contact Ajmer",
    "dietician clinic address",
    "healthcare contact number",
    "medical consultation booking",
    "clinic hours Ajmer",
    "emergency contact doctor",
    "nutritionist appointment",
    "health queries Ajmer",
    "patient support contact",
    "clinic location map",
  ],
  openGraph: {
    title:
      "Contact Best Doctors in Ajmer | Dr. Manish Sharma & Dt. Gauri Mehra",
    description:
      "Reach Ajmer's top healthcare specialists for appointments and health consultations",
    url: "https://gaurnishhealth.in/contact",
    siteName: "GaurNish Health",
    images: [
      {
        url: "/images/contact-og-image.jpg",
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
      "Contact Best Doctors in Ajmer | Dr. Manish Sharma & Dt. Gauri Mehra",
    description:
      "Get in touch with Ajmer's leading healthcare specialists for your medical needs",
    images: ["/images/contact-og-image.jpg"],
  }, robots: {
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

export default function Contact() {
  return (
    <>
      <h1 className="hidden">Best Doctor in Ajmer</h1>
      <AboutUsHero
        title="Contact Us"
        description="Get in touch with Dr. Manish Sharma (General Physician) and Dt. Gauri Mehra (Dietician) for expert healthcare and personalized nutrition counselling. We are here to support your wellness journey."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Contact Us", path: "/contact" },
        ]}
      />
      <ContactPage />
    </>
  );
}
