import { ExternalLink } from "lucide-react";
import SharedUI from "@/components/layout/SharedUI";
import Tag from "@/components/layout/Tag";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <SharedUI id="projects" index ="05" title="Talk is cheap. Show me the code.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} className="overflow-hidden rounded-xl border border-line bg-card">
            <div className="grid h-48 place-items-center bg-linear-to-br from-brand to-ink font-display text-6xl font-black text-white/90">
              {p.name[0]}
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-muted">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
              {p.href && (
                <a href={p.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  View code <ExternalLink size={14} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </SharedUI>
  );
}