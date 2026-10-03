
export type Step = { label: string; done: boolean };

export type Upcoming = {
  slug: string; 
  name: string;
  tagline: string; 
  status: "Planning" | "Building" | "Testing"; 
  target?: string;
  stack: string[];
  steps: Step[]; 
  repo?: string; 
};


export const upcoming: Upcoming[] = [
  {
    slug: "smartseason",
    name: "SmartSeason",
    tagline: "Role-based crop field monitoring, rebuilt with Next.js and Prisma.",
    status: "Building",
    
    stack: ["Next.js", "Prisma"],
   
    steps: [
      { label: "Data model", done: true },
      { label: "Sign-in and roles", done: true },
      { label: "Field and crop screens", done: false },
      { label: "Reports", done: false },
      { label: "Deploy and test with real users", done: false },
    ],
  },

  {
    slug: "job-pulse",
    name: "Job Pulse",
    tagline: "A job application tracker, being rebuilt with Next.js and Tailwind.",
    status: "Building",
    
    stack: ["Next.js", "Tailwind"],
    repo: "https://github.com/iam-amani/job-pulse",
    steps: [
      { label: "Landing page", done: true },
      { label: "FAQ section", done: true },
      { label: "Add and edit applications", done: false },
      { label: "Filters and status tracking", done: false },
      { label: "Charts and dashboard", done: false },
      { label: "Deploy", done: false },
    ],
  },

];