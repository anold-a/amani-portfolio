"use client";

import { useEffect, useState } from "react";
import { Home, User, Award, Briefcase, ThumbsUp, Code, Library, Mail, ExternalLink } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { id: "home", label: "Home", Icon: Home },
  { id: "bio", label: "Bio", Icon: User },
  { id: "certs", label: "Certs", Icon: Award },
  { id: "exp", label: "Exp", Icon: Briefcase },
  { id: "refs", label: "Refs", Icon: ThumbsUp },
  { id: "projects", label: "Projects", Icon: Code },
  { id: "blogs", label: "Blogs", Icon: Library },
  { id: "contact", label: "Contact", Icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed left-1/2 top-4 z-50 flex max-w-[95vw] -translate-x-1/2 items-center gap-1 overflow-x-auto rounded-2xl border border-line bg-white/80 p-1.5 shadow-sm backdrop-blur">
      {links.map(({ id, label, Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={label}
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
            active === id ? "bg-brand text-white" : "text-ink/70 hover:text-ink"
          }`}
        >
          <Icon size={16} />
          <span className="hidden lg:inline">{label}</span>
        </a>
      ))}
      <a
        href={profile.resume}
        target="_blank"
        rel="noreferrer"
        className="ml-1 flex shrink-0 items-center gap-2 rounded-lg border border-ink px-3 py-2 text-sm font-semibold"
      >
        <span className="hidden sm:inline">CV</span> <ExternalLink size={14} />
      </a>
    </nav>
  );
}