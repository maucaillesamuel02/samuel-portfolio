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
      " Elevate is an enterprise web and mobile platform developed by Nextep, a US-based HR technology company, supporting employee onboarding, workforce management, and HR services.",
    contribution:
      "Contributed to full-stack development using C#, .NET, React, React Native, and TypeScript. Implemented employee onboarding, rehiring, and access management features, and supported integrations with Salesforce and PrismHR while collaborating with US-based engineering and QA teams.",
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
      "A financial planning web application supporting business workflows for a banking-sector client.",
    contribution:
      "Developed backend APIs and Angular components using .NET Core, Entity Framework, and SQL Server.",
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
      "An online store specializing in sports nutrition products and supplements.",
    contribution:
      "Customized Shopify theme sections, responsive layouts, and storefront functionality using Liquid, CSS, and JavaScript.",
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
