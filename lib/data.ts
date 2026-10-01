export const profile = {
  name: "Arnold Amani",
  first: "Arnold",
  last: "Amani",
  role: "Dev",
  location: "Nyeri, Kenya",
  tagline: "Into Advanced System Design.",
  bio: [
    "First Of My Name.",
    "But most people find it accommodating to call me,Sere",
    "Beyond coding, I enjoy experimenting on new technologies and deep diving in poetry world.",
  ],
  email: "amaniarnold08@gmail.com",
  github: "https://github.com/iam-amani",
  whatsapp: "https://wa.me/@itzchaupole",
  resume: "/coming soon",
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
  {id:"001", period: "2026 - Present", role: "Independent Developer", points: ["Built and shipped full-stack projects with Next.js, Prisma and Tailwind.", "Maintain a public portfolio of projects on GitHub."] },
  {id:"002", period: "2024", role: "Team Member - Mcorcis", points: ["Actively participated in build end-to-end full stack projects", "(coming soon)."] },
];

export const refs = [
  { quote: "(coming soon).", name: "(coming soon).", role: "(coming soon)." },
  { quote: "(coming soon).", name: "(coming soon).", role: "(coming soon)." },
];

type Project = {
name: string;
desc: string;
stack: string[];
href: string;
image?: string;
};

export const projects: Project[] = [
  { name: "Job Pulse",image: "/.png", desc: "Job application tracker with a user-friendly UI, filters and charts.", stack: ["Next.js", "Tailwind"], href: "(coming soon)." },
  { name: "SmartSeason",image: "/farm.png", desc: "Role-based crop field monitoring system.", stack: ["Next.js", "Prisma", "TypeScript"], href: "(coming soon)." },
  { name: "tractor-online-store", desc: "An e-commerce platform where you can sell second hand tractors and agricultural equipments ", stack: ["Next.js"], href: "https://github.com/iam-amani/farm-flow" },
  { name: "Ikonex School Management", desc: "School management application.", stack: ["Next.js"], href: "https://github.com/iam-amani/ikonex-school-management-application-" },
];

export const blogs = [
  { date: "(coming).", read: "5 min", title: "(coming ).", desc: "(coming soon).", tags: ["Next.js", "Web"] },
  { date: "(coming soon).", read: "8 min", title: "(coming soon).", desc: "(coming soon).", tags: ["Learning"] },
];

export const skills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "Node.js", "PostgreSQL", "Git"];

export const stats = [
  { value: "BBIT", label: "Graduate" },
  { value: "Dip.", label: "Education" },
  { value: "Next.js", label: "Main stack" },
];

