import { Calendar, Clock } from "lucide-react";
import SharedUI from "@/components/layout/SharedUI";
import Tag from "@/components/layout/Tag";
import { blogs } from "@/lib/data";

export default function Blogs() {
  return (
    <SharedUI id="blogs" index="07" title="Talk it like I walk it.">
      <div className="grid gap-6 md:grid-cols-2">
        {blogs.map((b) => (
          <article key={b.title} className="rounded-xl border border-line bg-card p-6">
            <div className="flex gap-5 text-sm text-muted">
              <span className="flex items-center gap-2"><Calendar size={14} /> {b.date}</span>
              <span className="flex items-center gap-2"><Clock size={14} /> {b.read}</span>
            </div>
            <h3 className="mt-8 font-display text-2xl font-semibold">{b.title}</h3>
            <p className="mt-3 text-muted">{b.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {b.tags.map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
          </article>
        ))}
      </div>
    </SharedUI>
  );
}