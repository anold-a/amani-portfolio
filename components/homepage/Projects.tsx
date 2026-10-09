
"use client";

import Image from "next/image";
import SharedUI from "@/components/layout/SharedUI";
import Tag from "@/components/layout/Tag";
import { projects } from "@/lib/data";
import Reveal from "../layout/Reveal";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  Code2,
  ExternalLink,
} from "lucide-react";


export default function Projects() {
 

  return (
    <SharedUI
      id="projects"
      index="05"
      note="fresh from the editor"
      title={
        <>
          Things I <span className="italic">built</span>
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-card transition hover:border-brand/60">
              {p.image && (
                <div className="project-image relative aspect-video overflow-hidden border-b border-line bg-line">
  <Image
    src={p.image}
    alt={`${p.name} screenshot`}
    fill
    sizes="(min-width: 1200px) 540px, (min-width: 768px) 48vw, 100vw"
    quality={90}
    className="object-cover object-top"
  />

  <div className="project-image-overlay absolute inset-0 z-20 flex items-center justify-center bg-black/60">


   <div className="flex items-center gap-3"> 
    {p.github && ( 
      <a href={p.github} 
         target="_blank" 
         rel="noopener noreferrer" 
         className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-neutral-100" >
           <Code2 size={16} strokeWidth={2.5} />
            Code 
            </a> )} 
            {p.href && (
               <a href={p.href} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="inline-flex items-center gap-2 rounded-lg bg-brand px-3 py-2 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:brightness-110" >
                 <ExternalLink size={16} strokeWidth={2} />
                  Live Site </a> 
                )} 
                </div>
  </div>
</div>
)}

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold">
                    {p.name}
                  </h3>

                  {p.href && (
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-muted transition hover:text-brand"
                    />
                  )}
                </div>

                <p className="mt-2 text-muted">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <Link
          href="/projects"
          className="flex items-center gap-2 font-semibold text-brand hover:text-rose-700"
        >
          View All <ArrowRight size={16} />
        </Link>
      </div>
    </SharedUI>
  );
}

