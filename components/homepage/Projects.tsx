import Image from "next/image";
import SharedUI from "@/components/layout/SharedUI";
import Tag from "@/components/layout/Tag";
import { projects } from "@/lib/data";
import Reveal from "../layout/Reveal";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <SharedUI id="projects" index ="05" note="fresh from the editor" title={<>Things I <span className="italic">built</span></>}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-card transition hover:border-brand/60">
              {p.href && (
                <a href={p.href} target="_blank" rel="noreferrer" aria-label={`Open ${p.name}`} className="absolute inset-0 z-10" />
              )}
              {p.image && (
                <div className="relative aspect-video border-b border-line bg-line">
                  <Image
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    fill
                    sizes="(min-width: 1200px) 540px, (min-width: 768px) 48vw, 100vw"
                quality={90}
                    className="object-cover object-top"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  {p.href && <ArrowUpRight size={18} className="shrink-0 text-muted transition group-hover:text-brand" />}
                </div>
                <p className="mt-2 text-muted">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => <Tag key={s}>{s}</Tag>)}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 flex justify-end">
        <Link href="/coming-soon" className="flex items-center gap-2 font-semibold text-brand hover:underline">
          On the workbench: what is coming next <ArrowRight size={16} />
        </Link>
      </div>
    </SharedUI>
  );
}