import { Award } from "lucide-react";
import SharedUI from "@/components/layout/SharedUI";
import Tag from "@/components/layout/Tag";
import Reveal from "@/components/layout/Reveal"; 
import { certs } from "@/lib/data";

export default function Certs() {
  return (
    <SharedUI id="certs" index="02" title="Proof of work, on paper."> 
      <div className="grid gap-5 md:grid-cols-2">
        {certs.map((c, i) => (
          <Reveal key={c.title} delay={i * 100}> 
            <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-card p-7 transition hover:-translate-y-1 hover:border-brand/60">
              
              <span className="absolute right-5 top-2 font-display text-7xl font-bold text-line transition group-hover:text-brand/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Award className="text-brand" />
              <h3 className="mt-6 font-display text-2xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-muted">{c.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SharedUI>
  );
}