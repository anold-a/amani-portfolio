import {ArrowRight, Calendar, Clock } from "lucide-react";
import SharedUI from "@/components/layout/SharedUI";
import Tag from "@/components/layout/Tag";
import Reveal from "@/components/layout/Reveal";
import { sortedPosts, toMeta } from "@/lib/posts";
import Link from "next/link";

export default function Blogs() {
  const latest = sortedPosts.slice(0, 4).map(toMeta);
  return (
    <SharedUI id="blogs" index="06" note="thinking out loud" title={<>Notes and <span className="itaalic">write-ups</span></>}>
      <div className="grid gap-6 md:grid-cols-2">
        {latest.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            <Link href={`/blogs/${p.slug}`} className=" group block h-full rounded-lg border border-line bg-card p-6">
              <div className="flex gap-5 text-sm text-muted">
                <span className="flex items-center gap-2"><Calendar size={14} /> {p.dateLabel}</span>
                <span className="flex items-center gap-2"><Clock size={14} /> {p.minutes} min</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold transition group-hover:text-brand">{p.title}</h3>
              <p className="mt-2 text-muted">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex justify-end">
        <Link href="/blogs" className="flex items-center gap-2 font-semibold text-brand hover:underline">
          View all notes <ArrowRight size={16} />
        </Link>
      </div>
    </SharedUI>
  );
}