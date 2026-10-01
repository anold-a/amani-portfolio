import { Calendar, Clock } from "lucide-react";
import SharedUI from "@/components/layout/SharedUI";
import Tag from "@/components/layout/Tag";
import Reveal from "@/components/layout/Reveal";
import { blogs } from "@/lib/data";

export default function Blogs() {
  return (
    <SharedUI id="blogs" index="06" note="thinking out loud" title={<>Notes and <span className="itaalic">write-ups</span></>}>
      <div className="grid gap-6 md:grid-cols-2">
        {blogs.map((b, i) => (
          <Reveal key={b.title} delay={i * 80}>
            <article className="card-pop h-full rounded-lg border border-line bg-card p-6">
              <div className="flex gap-5 text-sm text-muted">
                <span className="flex items-center gap-2"><Calendar size={14} /> {b.date}</span>
                <span className="flex items-center gap-2"><Clock size={14} /> {b.read}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{b.title}</h3>
              <p className="mt-2 text-muted">{b.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {b.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SharedUI>
  );
}