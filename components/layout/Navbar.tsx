"use client";

import { useEffect, useState } from "react";
import { Home, User, Award, Briefcase, ThumbsUp, Code, Library, Mail, ExternalLink } from "lucide-react";
import { profile } from "@/lib/data";
import Link from "next/link";

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
  const [progress, setProgress] = useState(0);

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

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-70 h-1 bg-accent" style={{ width: `${progress * 100}%` }} />
      <nav className="fixed left-1/2 top-4 z-50 flex max-w-[94vw] -translate-x-1/2 items-center gap-1 overflow-x-auto rounded-xl border border-line bg-card/85 p-1.5 ">
        {links.map(({ id, label, Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={label}
            className={`flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition ${
              active === id ? "bg-brand text-bg" : "text-ink/70 hover:bg-line/60 hover:text-ink"
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
          className="ml-1 flex shrink-0 items-center gap-2 rounded-full border-2 border-ink px-3 py-2 text-sm font-bold"
        >
          <span className="hidden sm:inline">Résumé</span> <ExternalLink size={14} />
        </a>
      </nav>
    </>
  );
}