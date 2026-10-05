export const profile = {
  name: "Arnold Amani",
  first: "Arnold",
  last: "Amani",
  role: "Dev",
  location: "Nyeri, Kenya",
  tagline: "Into Advanced System Design.",
  bio: [
    "First Of My Name.",
    "The rest I am still writing.",
    "Beyond coding, I enjoy experimenting on new technologies and deep diving in poetry world.",
  ],
  email: "amaniarnold08@gmail.com",
  github: "https://github.com/iam-amani",
  whatsapp: "https://wa.me/@itzchaupole",
  resume: "/",
  photo: "/me.jpg",
};

type Cert = {
title: string;
desc: string;
tags:string[];
image?: string;
};


export const certs: Cert[] = [
  { title: "CITI",image: "/citi.png", desc: "Used Java to build an internal tool visualizing stock market risk in real time.", tags: ["Unified Modeling Language", "Databases & API", "Java"] },
  { title: "Scrimba",image: "/dsa.png", desc: "Had a chance to learn,unlearn and relearn concepts around dsa by interacting with scrimba course work and challenges.", tags: ["Data Structures", "Algorithms"] },
];

export const experience = [
  {
    id: "001",
    period: "2026 - Present",
    role: "Independent Developer",
    points: [
      "Plan, build and deploy full-stack web apps on my own, from the first commit to a live site.",
      "Work mainly with Next.js, Prisma and Tailwind CSS.",
    ],
  },
  {
    id: "002",
    period: "Ongoing",
    role: "Version control and clean history",
    points: [
      "Write descriptive commit messages with type prefixes such as feat, fix and style.",
      "Work over SSH and keep every project public, so my history can be read from the first commit.",
    ],
  },
  {
    id: "003",
    period: "2026",
    role: "Data and access control",
    points: [
      "Model data with Prisma and build role-based access for a crop field monitoring system.",
      "Keep secrets such as database URLs in environment variables, out of the repository.",
    ],
  },
  {
    id: "004",
    period: "2026",
    role: "Interfaces that work for everyone",
    points: [
      "Build keyboard friendly components, such as an accordion with proper aria attributes.",
      "Respect reduced motion settings and design layouts that work on phones first.",
    ],
  },
  {
    id: "005",
    period: "2024",
    role: "Bachelor of Business Information Technology (BBIT)",
    points: [
      "Studied information systems,business and supply chain.",
      
    ],
  },
];

export const builds = [
   {
    quote:
      "I use projects as a way to turn ideas into practical software and explore technologies I want to understand better.",
    name: "Build",
    role: "Turning ideas into working projects.",
  },
  {
    quote:
      "My projects evolve as I learn  from experimenting with new stacks to improving existing applications and exploring new ideas.",
    name: "Explore",
    role: "Current work and future projects.",
  },
];

type Project = {
name: string;
desc: string;
stack: string[];
href: string;
image?: string;
status?: "in-progress" | "completed";
};

export const projects: Project[] = [
  { name: "Job Pulse",image: "/job-pulse-hero.png", desc: "Job application tracker with a user-friendly UI, filters and charts.", stack: ["Next.js", "Tailwind"],href: "", status: "in-progress",},
  { name: "SmartSeason",image: "/farm.png", desc: "Role-based crop field monitoring system.", stack: ["Next.js", "Prisma", "TypeScript"], href: "", status: "in-progress",},
  { name: "tractor-online-store",image: "/tractor-store.png", desc: "An e-commerce platform where you can sell second hand tractors and agricultural equipments ", stack: ["Next.js"], href: "https://github.com/iam-amani/tractor-online-store.git", status: "completed", },
  { name: "Ikonex School Management",image: "/elimu-bora.png", desc: "School management application.", stack: ["HTML,CSS,JAVASCRIPT"], href: "https://github.com/iam-amani/ikonex-school-management-application-", status: "completed", },
];



export const skills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "Node.js", "PostgreSQL", "Git"];

export const stats = [
  { value: "BBIT", label: "Graduate" },
  { value: "Dip.", label: "Education" },
  { value: "Next.js", label: "Main stack" },
];


