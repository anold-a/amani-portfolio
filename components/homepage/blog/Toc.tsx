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

  const list = (
    <ul className="space-y-2 text-sm">
      {headings.map((h) => (
        <li key={h.id}>
          <a
            href={`#${h.id}`}
            className={`flex gap-2 transition ${
              active === h.id ? "font-semibold text-brand" : "text-muted hover:text-ink"
            }`}
          >
            <span aria-hidden className={active === h.id ? "text-accent" : "text-transparent"}>→</span>
            {h.text}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <details className="rounded-lg border border-line bg-card p-4 lg:hidden">
        <summary className="cursor-pointer  text-2xl ">in this post</summary>
        <div className="mt-3">{list}</div>
      </details>
      <nav aria-label="In this post" className="sticky top-24 hidden lg:block">
        <p className="mb-3 font-hand text-2xl ">in this post</p>
        {list}
      </nav>
    </>
  );
}