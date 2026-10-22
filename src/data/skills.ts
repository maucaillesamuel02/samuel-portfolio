
export type Skill = {
  name: string;
  url?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend & APIs",
    skills: [
      { name: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
      { name: ".NET / .NET Core", url: "https://dotnet.microsoft.com/" },
      { name: "REST APIs", url: "https://developer.mozilla.org/en-US/docs/Glossary/REST" },
      { name: "Entity Framework", url: "https://learn.microsoft.com/en-us/ef/core/" },
      { name: "Swagger / OpenAPI", url: "https://swagger.io/" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Mobile",
    skills: [
      { name: "React", url: "https://react.dev/" },
      { name: "React Native", url: "https://reactnative.dev/" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Angular", url: "https://angular.dev/" },
      { name: "Flutter", url: "https://flutter.dev/" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Databases",
    skills: [
      { name: "SQL Server", url: "https://www.microsoft.com/en-us/sql-server" },
      { name: "MySQL", url: "https://www.mysql.com/" },
      { name: "Firebase / Firestore", url: "https://firebase.google.com/docs/firestore" },
      { name: "Google Cloud Platform", url: "https://cloud.google.com/" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Integrations",
    skills: [
      { name: "Git / GitHub", url: "https://github.com/" },
      { name: "Azure DevOps", url: "https://azure.microsoft.com/en-us/products/devops" },
      { name: "Salesforce API", url: "https://developer.salesforce.com/" },
      { name: "PrismHR", url: "https://www.prismhr.com/" },
    ],
  },
];
