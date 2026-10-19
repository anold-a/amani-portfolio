import {ArrowRight, Calendar, Clock } from "lucide-react";
import SharedUI from "@/components/layout/SharedUI";
import Tag from "@/components/layout/Tag";
import Reveal from "@/components/layout/Reveal";
import { sortedPosts, toMeta } from "@/lib/posts";
import Link from "next/link";

export default function Blogs() {
  const latest = sortedPosts.slice(0, 4).map(toMeta);
  return (
    <SharedUI id="blogs" scramble title={<>Notes and <span>write ups</span></>}>
      <section
  aria-label="Latest resources"
  className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
>
  {latest.map((p, i) => (
    <Reveal key={p.slug} delay={i * 80}>
      <Link
        href={`/blogs/${p.slug}`}
        className="group relative flex h-full min-h-62.5 flex-col rounded-lg border border-[#e5ded8] bg-[#faf7f4] p-6 transition-colors duration-200 hover:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#512064] focus-visible:ring-offset-2"
      >
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#777078]">
          <span className="flex items-center gap-2">
            <Calendar size={14} />
            {p.dateLabel}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14} />
            {p.minutes} min
          </span>
        </div>

        <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#512064]/10 text-brand opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
          <span aria-hidden="true">↗</span>
        </span>

        <h3 className="mt-8 pr-8 text-lg font-normal leading-snug tracking-tight text-brand transition-colors group-hover:text-ink sm:text-xl">
          {p.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#716971]">{p.summary}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
          {p.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </Link>
    </Reveal>
  ))}
</section>
      <div className="mt-10 flex justify-end">
        <Link href="/blogs" className="flex items-center gap-2 font-semibold text-brand hover:underline">
          View all notes <ArrowRight size={16} />
        </Link>
      </div>
    </SharedUI>
  );
}