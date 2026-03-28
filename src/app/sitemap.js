// sitemap.js
const URL = "https://gaurnishhealth.in";

export default async function sitemap() {
  const currentDate = new Date().toISOString();

  const routes = [
    // Homepage (Highest Priority)
    {
      url: `${URL}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },

    // About Page
    {
      url: `${URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // Services Pages
    {
      url: `${URL}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${URL}/services/preventive-care`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${URL}/services/chronic-disease`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${URL}/services/specialized-treatment`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${URL}/services/nutrition-counseling`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${URL}/services/meal-planning`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${URL}/services/weight-management`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Blog Section (High Priority for SEO)
    {
      url: `${URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },

    // Blog Posts (Very High Priority for SEO and Local Search)
    {
      url: `${URL}/blog/best-general-physician-and-dietician-in-ajmer-gaurnish-health`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${URL}/blog/best-dietician-in-ajmer-dr-gauri-mehra`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${URL}/blog/best-doctor-for-diabetes-in-ajmer-dr-manish-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${URL}/blog/weight-management-specialist-in-ajmer-dr-gauri-mehra`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${URL}/blog/best-doctor-for-seasonal-diseases-in-ajmer-dr-manish-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${URL}/blog/best-child-nutrition-specialist-in-ajmer-dr-gauri-mehra`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${URL}/blog/best-thyroid-treatment-in-ajmer-dr-manish-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${URL}/blog/best-dietitian-nutritionist-near-me-in-ajmer-dr-gauri-mehra`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${URL}/blog/top-diabetologist-in-ajmer-dr-manish-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${URL}/blog/top-general-physician-in-ajmer-dr-manish-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${URL}/blog/best-general-physician-in-ajmer-dr-manish-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${URL}/blog/mental-brain-disorders-treatment-ajmer-dr-manish-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${URL}/blog/best-diet-nutrition-expert-ajmer-dr-gauri-mehra`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${URL}/blog/sugar-specialist-doctor-in-ajmer-dr-manish-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${URL}/blog/5-healthy-habits-to-prevent-lifestyle-diseases-dr-manish-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${URL}/blog/top-10-healthy-foods-for-weight-loss-dr-gauri-mehra`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${URL}/blog/how-to-lose-belly-fat-naturally-balanced-diet-dr-gauri-mehra`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${URL}/blog/importance-of-consulting-general-physician-ajmer-before-specialist-dr-manish-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${URL}/blog/balanced-indian-diet-plan-busy-professionals-dr-gauri-mehra`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${URL}/blog/understand-body-signals-early-disease-signs-dr-manish-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${URL}/blog/high-protein-diet-ideas-vegetarians-gauri-mehra`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${URL}/blog/best-family-doctor-general-physician-ajmer-dr-manish-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${URL}/blog/how-to-boost-immunity-naturally-with-food-dr-gauri-mehra`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${URL}/blog/thyroid-disease-myths-facts-treatment-ajmer-dr-manish-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${URL}/blog/best-diet-plan-for-weight-loss-in-ajmer-dr-gauri-mehra`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${URL}/blog/mental-brain-disorders-myths-facts-treatment-ajmer-dr-manish-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${URL}/blog/best-doctor-ajmer-diabetes-bp-chronic-disease-management`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${URL}/blog/diet-for-diabetes-bp-thyroid-patients-guide-ajmer-dr-gauri-mehra`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${URL}/blog/high-bp-diabetes-management-ajmer-dr-manish-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${URL}/blog/daily-habits-control-high-bp-sugar-levels-ajmer`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${URL}/blog/best-physician-in-ajmer-general-respiratory-stomach-bp-specialist`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${URL}/blog/how-to-choose-the-best-general-physician-in-ajmer-for-your-health-needs`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${URL}/blog/foods-that-boost-immunity-and-improve-overall-health`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${URL}/blog/healthy-weight-loss-complete-guide-dietitian`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${URL}/blog/why-you-feel-dizzy-suddenly-by-dr-manish-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    // Contact & Consultation Pages
    {
      url: `${URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${URL}/bookconsultation`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },

  ];

  return routes;
}