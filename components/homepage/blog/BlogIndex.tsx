"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Clock } from "lucide-react";
import PostCover from "./PostCover";
import type { PostMeta } from "@/lib/posts";

export default function BlogIndex({ items }: { items: PostMeta[] }) {
  const [tag, setTag] = useState("All");
  const tags = ["All", ...Array.from(new Set(items.flatMap((p) => p.tags)))];
  const shown = tag === "All" ? items : items.filter((p) => p.tags.includes(tag));
  const [featured, ...rest] = shown;

 
  const noOf = (slug: string) =>
    String(items.length - items.findIndex((x) => x.slug === slug)).padStart(2, "0");

  return (
    <>
      <div className="mt-8 flex flex-wrap items-center gap-2" role="group" aria-label="Filter by tag">
        <span className="mr-1 font-hand text-xl text-accent">filter:</span>
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={tag === t}
            onClick={() => setTag(t)}
            className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider transition ${
              tag === t
                ? "border-ink bg-ink text-bg"
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
          className="card-pop group mt-10 grid overflow-hidden rounded-lg border border-line bg-card md:grid-cols-[1.1fr_1fr]"
        >
          <PostCover title={featured.title} src={featured.cover} tag={featured.tags[0]} className="min-h-56" />
          <div className="flex flex-col justify-center p-7">
            <span className="font-hand text-2xl text-accent">note no. {noOf(featured.slug)}</span>
            <h2 className="mt-1  text-2xl font-bold leading-tight sm:text-3xl">{featured.title}</h2>
            <p className="mt-3 text-muted">{featured.summary}</p>
            <p className="mt-5 flex items-center gap-4 text-sm text-muted">
              <span>{featured.dateLabel}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {featured.minutes} min read</span>
            </p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brand">
              Read the note <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      )}

      {rest.length > 0 && (
        <ol className="mt-12 divide-y divide-line border-y border-line">
          {rest.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blogs/${p.slug}`}
                className="group grid items-center gap-3 py-6 transition hover:bg-card md:grid-cols-[3.5rem_1fr_auto] md:px-3"
              >
                <span className="font-hand text-3xl leading-none text-accent">{noOf(p.slug)}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold transition group-hover:text-brand">{p.title}</h3>
                  <p className="mt-1 text-muted">{p.summary}</p>
                  <p className="mt-2 text-xs text-muted">{p.dateLabel} · {p.minutes} min read</p>
                </div>
                <ArrowRight className="hidden text-muted transition group-hover:translate-x-2 group-hover:text-brand md:block" />
              </Link>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}