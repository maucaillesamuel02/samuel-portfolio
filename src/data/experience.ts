export type WorkExperience = {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
};

export const experiences: WorkExperience[] = [
  {
    company: "Nextep",
    role: "Software Engineer",
    period: "Sep 2025 – Oct 2026",
    description: [
      "Contributed to Elevate by Nextep, an enterprise HR web and mobile platform.",
      "Developed employee onboarding, rehiring, and cross-hiring workflows using .NET, Firestore, and Google Cloud Functions.",
      "Contributed to integrations with Salesforce, PrismHR, and Google Calendar.",
      "Developed administrative features, role-based access controls, and time-and-attendance functionality.",
      "Collaborated with US-based engineering and QA teams to deliver production-ready features.",
    ],
    technologies: [
      "C#",
      ".NET",
      "React",
      "React Native",
      "TypeScript",
      "Firestore",
      "Google Cloud",
    ],
  },
  {
    company: "Formativa Perú",
    role: "Full Stack Web Developer",
    period: "May 2025 – Sep 2025",
    description: [
      "Developed a financial planning application for a banking-sector client.",
      "Built backend REST APIs using C#, .NET Core, and Entity Framework.",
      "Developed Angular frontend components integrated with backend services.",
      "Applied Clean Architecture principles and worked with SQL Server and Azure DevOps.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "C#",
      ".NET",
      "Entity Framework",
      "SQL Server",
      "Azure DevOps",
    ],
  },
  {
    company: "Lusan LATAM",
    role: "Mobile Frontend Developer",
    period: "Sep 2023 – Apr 2024",
    description: [
      "Developed mobile frontend interfaces for an agricultural monitoring application.",
      "Built data visualization features using Flutter and Dart.",
      "Contributed to presenting agricultural monitoring information through a mobile interface.",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Git",
      "Postman",
    ],
  },
];
