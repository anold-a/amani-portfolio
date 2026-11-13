"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Clock,Calendar } from "lucide-react";
import PostCover from "./PostCover";
import type { PostMeta } from "@/lib/posts";

export default function BlogIndex({ items }: { items: PostMeta[] }) {
  const [tag, setTag] = useState("All");
  const tags = ["All", ...Array.from(new Set(items.flatMap((p) => p.tags)))];
  const shown = tag === "All" ? items : items.filter((p) => p.tags.includes(tag));
  const [featured, ...rest] = shown;

 
  

  return (
    <>
      <div className="mt-8 flex flex-wrap items-center gap-2" role="group" aria-label="Filter by tag">
        
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={tag === t}
            onClick={() => setTag(t)}
            className={`rounded-lg border  px-4 py-2 text-xs font-semibold transition ${
              tag === t
                ? "border-brand bg-brand text-bg"
                : "border-line text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {featured && (
        <Link
          href={`/blogs/${featured.slug}`}
          className="group mt-10 grid gap-8 rounded-lg border border-line bg-card p-6 md:grid-cols-[1.1fr_1fr] md:p-8"
        >
          
          <div className="flex flex-col ">
            <span className="text-xs font-medium uppercase tracking-wide text-muted">
              {featured.tags[0]}
            </span>
            <h2 className="mt-1  text-2xl font-bold leading-tight sm:text-3xl">{featured.title}</h2>
            <p className="mt-3 text-muted">{featured.summary}</p>

            <div className="mt-auto flex items-center justify-between pt-8 text-sm">
               <p className="flex items-center gap-4 text-sm text-muted">
              <span>{featured.dateLabel}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {featured.minutes} min read</span>
            </p>
            <span className="inline-flex items-center gap-2 font-medium text-ink">
                Read the article{" "}
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </div>     
          </div>

          <PostCover title={featured.title} src={featured.cover} tag={featured.tags[0]} className="min-h-56 rounded-sm" />
        </Link>
      )}

      {rest.length > 0 && (
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <li key={p.slug} className="flex">
              <Link
                href={`/blogs/${p.slug}`}
                 className="group flex h-full w-full flex-col rounded-lg border border-line bg-card p-6 transition hover:border-brand"
              >
                 <p className="flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} /> {p.dateLabel}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} /> {p.minutes} min
                  </span>
                </p>


                <h3 className="mt-5 text-lg font-semibold leading-snug text-brand">{p.title}</h3>
                <p className="mt-3 text-sm text-muted">{p.summary}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-line px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}