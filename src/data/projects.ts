export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  contribution: string;
  technologies: string[];
  company?: string;
  website?: string;
  repository?: string;
  featured: boolean;
};

export const projects: Project[] = [    
  {
    slug: "elevate-by-nextep",
    title: "Elevate by Nextep",
    category: "Enterprise HR Platform",
    company: "Nextep",
    description:
      "An enterprise HR platform developed by Nextep, a US-based company, supporting employee onboarding, workforce management, and HR services.",
    contribution:
      "Developed full-stack features using .NET, React, and TypeScript, including onboarding and rehiring workflows, access controls, and enterprise integrations. Collaborated with US-based engineering and QA teams.",
    technologies: [
      "C#",
      ".NET",
      "React",
      "TypeScript",
      "Firestore",
      "Google Cloud",
    ],
    website: "https://www.nextep.com/",
    featured: true,
  },

  {
    slug: "financial-planning",
    title: "Financial Planning Application",
    category: "Banking / Enterprise Software",
    company: "Formativa Perú",
    description:
      "An enterprise financial planning application developed for a banking-sector client, supporting financial workflows, data consistency, and business planning processes.",
    contribution:
      "Developed REST APIs using .NET Core, Entity Framework, and SQL Server, alongside Angular frontend components. Applied modular architecture principles to support maintainability and future extensions.",
    technologies: [
      "C#",
      ".NET Core",
      "Angular",
      "TypeScript",
      "SQL Server",
    ],
    featured: true,
  },
    {
    slug: "catchflai",
    title: "CatchFlai",
    category: "AgTech / Mobile Application",
    company: "Lusan LATAM",
    description:
        "An agricultural monitoring solution that combines ecological insect capture with AI-powered identification and quantification to support crop monitoring and decision-making.",
    contribution:
        "Contributed to the mobile frontend development using Flutter and Dart, building interfaces for agricultural monitoring data visualization and supporting a user-friendly mobile experience.",
    technologies: [
        "Flutter",
        "Dart",
        "Mobile Development",
        "Git",
    ],
    website: "https://catchflai.com/",
    featured: true,
    },
  {
    slug: "up-nutrition",
    title: "UP Nutrition",
    category: "E-commerce",
    description:
      "An e-commerce platform for sports nutrition products, providing an online shopping experience for customers purchasing supplements and fitness-related products.",
    contribution:
      "Customized Shopify storefront components using Liquid, CSS, and JavaScript. Developed responsive sections, improved product presentation, and managed theme changes using Git and GitHub.",
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "CSS",
      "Git",
    ],
    website: "https://upnutrition.com.pe",
    featured: true,
  },
];
