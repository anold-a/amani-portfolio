import { MapPin, Cpu, Shuffle, Terminal } from "lucide-react";

export const profile = {
  name: "Arnold Amani",
  first: "Arnold",
  last: "Amani",
  role: "Web Developer",
  location: "Nyeri, Kenya",
  tagline: "Into Advanced System Design.",
  bio: [
    "First Of My Name.",
    "The rest I am still writing.",
    "Beyond coding, I enjoy experimenting on new technologies and always learning something new.",
  ],
  subBio: [
  "A BBIT graduate,with a year of building websites and web applications.",
  "Current transitioning from being a frontend developer to a full stack developer,mobile later",
  "So far working across the entire application, from the database to the interface.",
  "Comfortable building with React, Next.js, Node.js, and Express, with experience in both PostgreSQL and MongoDB.",
  "I've built and shipped real projects end-to-end, including a job application tracker and a role-based field monitoring platform.",
  "Focused on writing clean, maintainable code and following good practices rather than just getting something to run.",
  
  
],
  email: "amaniarnold08@gmail.com",
  github: "https://github.com/iam-amani",
  whatsapp: "https://wa.me/@itzchaupole",
  linkedin: "",
  resume: "/",
  photo: "/me.jpg",
};


export type Experience = {
  id: string;
  period: string;
  role: string;
  company?: string;
  location?: string;
  current?: boolean;
  points: string[]; 
  tags?: string[];
};
export const experience: Experience[] = [
  {
    id: "001",
    period: "2026 - Present",
    role: "Freelancing Gigs",
    company: "Dev.io",
    location: "Nyeri, Kenya (Remote)",
    current: true,
    points: [
      "Plan, build and deploy **full-stack web apps** on my own, from the first commit to a live site.",
      "Built **Job Pulse**, a job application tracker with a kanban board, follow-up automation and funnel analytics.",
      "Built **SmartSeason**, a crop field monitoring system with **role-based access control**.",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "002",
    period: "2025",
    role: "Full-Stack Developer",
    company: "Tractor Online Store",
    location: "Nairobi, Kenya",
    points: [
      "Built a **marketplace for second-hand agricultural equipment** from scratch.",
      "Implemented **video previews**, secure payments and product management.",
      "Designed the **Prisma and PostgreSQL schema** for products and users.",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    id: "003",
    period: "Sep 2024 - Feb 2025",
    role: "Collaborative IT Team Member",
    company: "McDorcis Solutions",
    location: "Nairobi, Kenya",
    points: [
      "Helped build an **online storefront** with product listing, search and authentication.",
      "Used **dynamic routing and server-side rendering** to improve performance and SEO.",
      "Took part in **code reviews** with senior developers.",
    ],
    tags: ["Next.js", "JavaScript", "SSR", "Code Review"],
  },
  {
    id: "004",
    period: "Sep 2024",
    role: "Software Development Certificate",
    company: "Power Learn Project",
    points: ["Completed hands-on training in **software development fundamentals**."],
    tags: ["JavaScript", "Git"],
  },
  {
    id: "005",
    period: "Graduate",
    role: "BTech, Business Information Technology",
    company: "JKUAT",
    location: "Nairobi, Kenya",
    points: ["Studied **information systems, business and supply chain**."],
  },
];

type Project = {
name: string;
desc: string;
stack: string[];
href: string;
image?: string;
github?: string;

};

export const projects: Project[] = [
  { name: "Job Pulse",image: "/job-pulse.jpeg", desc: "Job application tracker with a user-friendly UI, filters and charts.", stack: ["Next.js", "Tailwind"],href: "https://job-pulse-psi-seven.vercel.app/",github:"https://github.com/anold-a/job-pulse.git"},
  { name: "SmartSeason",image: "/smart-season.jpeg", desc: "Role-based crop field monitoring system.", stack: ["Next.js", "Prisma", "TypeScript"], href: "https://farm-flow-mu.vercel.app/",github:"https://github.com/anold-a/farm-flow.git"},
  { name: "Agri-online-marketplace",image: "/market-place.jpeg", desc: "An online market place where farmers can search,market, negotiate and trade  agriculture equipments", stack: ["Next.js", "Prisma","PostgreSQL", "TypeScript"], href: "https://farm-flow-mu.vercel.app/",github:"https://github.com/anold-a/tractor-online-store"},
  { name: "School-management-system",image: "/ikonex.jpeg", desc: "A school system built for managing students, class streams, subjects, scores and generating PDF report cards.", stack: ["HTML","CSS", "JavaScript", "Node.js + Express.js","MySQL"], href: "https://github.com/anold-a/ikonex-school-management-application-",github:"https://github.com/anold-a/ikonex-school-management-application-"},
  

  
];



export const skills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "Node.js", "PostgreSQL", "Git"];

export const stats = [
  { value: "BBIT", label: "Graduate" },
  { value: "Dip.", label: "Education" },
  { value: "Next.js", label: "Main stack" },
];


export type Cert = {
  title: string;
  issuer: string;
    status?: string;              
  description?: string;   
  tags?: string[];
  date: string;
   hours?: string;             
  logo?: string;           
  credentialId?: string;   
  certificateUrl?: string; 
  verifyUrl?: string;      
};


export const certs: Cert[] = [
   {
    title: "JavaScript Developer Certification",
    issuer: "freeCodeCamp",
    date: "Oct 2026",                 
    hours: "Approx. 300 hours",       
    logo: "/freeCodeCamp.jpeg",
    certificateUrl:"https://www.freecodecamp.org/certification/fcce8ca3bd4-ebf4-4076-8132-a329d974b0e2/javascript-v9",
    verifyUrl:"https://www.freecodecamp.org/certification/fcce8ca3bd4-ebf4-4076-8132-a329d974b0e2/javascript-v9"  
  },
   {
    title: "Data Structures and Algorithms",   
    issuer: "Scrimba",
    date: "Oct 2026",                          
    hours: "4.3 hours · 61 lessons",          
    logo: "/scrimba.jpeg",
    certificateUrl:"https://scrimba.com/u4159900:certs;cert2ffentAFMUNriXCWySHVArQw3SbH67FfzLuhre2W3z6JtX",
    verifyUrl:"https://scrimba.com/u4159900:certs;cert2ffentAFMUNriXCWySHVArQw3SbH67FfzLuhre2W3z6JtX" 
   
  },
   {
    title: "Intro to NestJS",                   
    issuer: "Scrimba",
    date: "Sep 2026",                          
    hours: "1.4 hours · 22 lessons",           
    logo: "/scrimba.jpeg", 
    certificateUrl:"https://scrimba.com/u4159900:certs;cert29m6quprvaPdBmTAxqJt3k6vSht7RAT6E1dChQnYYjBeD",
    verifyUrl:"https://scrimba.com/u4159900:certs;cert29m6quprvaPdBmTAxqJt3k6vSht7RAT6E1dChQnYYjBeD"          
  },
  {
    title: "Technology Software Development Job Simulation", 
    issuer: "Citi · Forage",                                   
    date: "Sep 2026",                                         
    logo: "/citi.jpeg",
    certificateUrl:"https://www.theforage.com/simulations/citi/software-development-dlxt/completed",
    verifyUrl:"https://www.theforage.com/simulations/citi/software-development-dlxt/completed"
  },
];

export const highlights = [
  {
    label: "Location",
    title: "Nyeri",
    subtitle: "Central, Kenya",
    icon: MapPin,
  },
  {
    label: "Focus",
    title: "Full-Stack",
    subtitle: "Resilient Systems",
    icon: Cpu,
  },
  {
    label: "Exploring",
    title: "DSA & Graphs",
    subtitle: "Advanced Primitives",
    icon: Shuffle,
  },
];

