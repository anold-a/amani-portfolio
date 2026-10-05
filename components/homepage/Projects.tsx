"use client"

import Image from "next/image";
import SharedUI from "@/components/layout/SharedUI";
import Tag from "@/components/layout/Tag";
import { projects } from "@/lib/data";
import Reveal from "../layout/Reveal";
import Link from "next/link";
import { ArrowRight, ArrowUpRight,Star  } from "lucide-react";
import ScrambleText from "../layout/ScrambleText";
import { useState } from "react";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  return (
    <SharedUI id="projects" index ="05" note="fresh from the editor" title={<>Things I <span className="italic">built</span></>}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <div className=" group relative pt-8"
             onMouseEnter={() => setHoveredProject(p.name)}
             onMouseLeave={() => setHoveredProject(null)}
            >
            <article className="relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-card transition hover:border-brand/60">
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
                  {p.href && <ArrowUpRight size={18} className="shrink-0 text-muted transition hover:text-brand" />}
                </div>
                <p className="mt-2 text-muted">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => <Tag key={s}>{s}</Tag>)}
                </div>
              </div>
            
            </article>

           {p.status === "in-progress" && (
  <div
    className="
      pointer-events-none
      absolute
      top-0
      left-0
      right-0
      z-20
      opacity-0
      transition-all
      duration-300
      group-hover:opacity-100
    "
  >

   
    <div className="absolute left-2 top-0 flex items-center gap-1">

     
      <Star
        size={15}
        fill="currentColor"
        className="
          rotate-[-15deg]
          text-brand
          transition-transform
          duration-300
          group-hover:-translate-y-1
        "
      />

     
      <Star
        size={9}
        fill="currentColor"
        className="
          mt-3
          rotate-20
          text-brand
          transition-transform
          delay-75
          duration-300
          group-hover:translate-y-1
        "
      />

    </div>


    <span
  className="
    absolute
    right-2
    top-0
    rounded-lg
    border
    border-brand/40
    bg-background
    px-4
    py-1.5
    text-[10px]
    font-bold
    uppercase
    tracking-[0.18em]
    text-brand
    shadow-lg
    backdrop-blur-sm
    transition-transform
    duration-300
    group-hover:-translate-y-1
  "
>
  <ScrambleText
    text="In Progress****Coming Soon"
    active={hoveredProject === p.name}
  />
</span>

  </div>
)}

            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 flex justify-end">
        <Link href="" className="flex items-center gap-2 font-semibold text-brand hover:text-rose-700">
          View All <ArrowRight size={16} />
        </Link>
      </div>
    </SharedUI>
  );
}