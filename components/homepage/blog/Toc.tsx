"use client";

import { useEffect, useState } from "react";

type Heading = { id: string; text: string };

export default function Toc({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    const els = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-20% 0px -70% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <nav
      aria-label="On this page"
      className="sticky top-28 hidden w-64 self-start rounded-xl border border-[#e6dac6] bg-[#f6eddf] px-5 py-5 lg:block"
    >
      <p className="border-b border-[#d3c2a6] pb-3 text-xs font-bold uppercase tracking-[0.09em] text-brand">
        In this article
      </p>

      <ul className="mt-2">
        {headings.map((h) => {
          const isActive = active === h.id;
          return (
            <li key={h.id} className="border-b  border-[#d3c2a6]/60 last:border-0">
              <a
                href={`#${h.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`my-1.5 block rounded-r-md rounded-l-md px-3 py-2 text-sm leading-snug transition-colors ${
                  isActive
                    ? "border-l-md bg-white/60 font-semibold text-brand"
                    : "border-transparent text-[#514852] hover:bg-white/40 hover:text-brand"
                }`}
              >
                {h.text.trim()}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}