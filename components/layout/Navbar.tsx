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
    
      <div className="fixed left-0 top-0 z-70 h-0.5 bg-brand" style={{ width: `${progress * 100}%` }} />

      
      <Link
        href={profile.resume}
        target="_blank"
        rel="noreferrer"
        className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full border border-line bg-card/80 px-4 py-2 font-mono text-xs backdrop-blur transition hover:border-brand hover:text-brand"
      >
        Résumé <ExternalLink size={12} />
      </Link>

     
      <nav className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col md:flex">
        {links.map(({ id, label }, i) => (
          <a key={id} href={`#${id}`} className="group flex items-center gap-3 py-1.5 font-mono text-xs">
            <span className={active === id ? "text-brand" : "text-muted transition group-hover:text-ink"}>
              {String(i).padStart(2, "0")}
            </span>
            <span
              className={`whitespace-nowrap rounded bg-card px-2 py-1 transition ${
                active === id ? "text-brand opacity-100" : "text-ink opacity-0 group-hover:opacity-100"
              }`}
            >
              {label}
            </span>
          </a>
        ))}
      </nav>

      <nav className="fixed inset-x-3 bottom-3 z-50 flex justify-between rounded-2xl border border-line bg-card/90 p-1.5 backdrop-blur md:hidden">
        {links.map(({ id, label, Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={label}
            className={`grid size-10 place-items-center rounded-xl transition ${
              active === id ? "bg-brand text-bg" : "text-muted"
            }`}
          >
            <Icon size={16} />
          </a>
        ))}
      </nav>
    </>
  );
}