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

