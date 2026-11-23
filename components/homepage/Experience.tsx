"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import SharedUI from "@/components/layout/SharedUI";
import Reveal from "@/components/layout/Reveal";
import { experience } from "@/lib/data";


function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") ? (
          <strong key={i} className="font-semibold text-white">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = listRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const p = (window.innerHeight * 0.5 - rect.top) / rect.height;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <SharedUI
      id="exp"
      index={<p className="text-2xl font-bold text-white">Career Timeline</p>}
      scramble
      title={<span className="text-sm text-slate-400">Selected roles, collaborations and impact</span>}
    >
      <ol
        ref={listRef}
        className="relative before:absolute before:left-5 before:top-0 before:h-full before:w-0.5 before:bg-line md:before:left-1/2 md:before:-translate-x-1/2"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-5 top-0 w-0.5 bg-brand md:left-1/2 md:-translate-x-1/2"
          style={{ height: `${progress * 100}%` }}
        />

        {experience.map((e, i) => {
          const right = i % 2 === 1;
          return (
            <li
              key={e.id}
              className={`relative pb-10 pl-14 md:w-1/2 ${
                right ? "md:ml-auto md:pl-12" : "md:pl-0 md:pr-12"
              }`}
            >
              <span
                className={`absolute top-0 grid size-10 place-items-center rounded-full border border-[#2b3447] bg-[#1b2130] text-white ${
                  right ? "left-0 md:-left-5" : "left-0 md:left-auto md:-right-5"
                }`}
              >
                <Image src="/icon.jpeg" className="rounded-full" alt="" width={40} height={40} />
              </span>

              <Reveal>
                <article className="rounded-2xl border border-[#2b3447] bg-[#1E293B] p-5 text-left shadow-lg">
                 
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                    <span className="rounded border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 text-emerald-300">
                      {e.period}
                    </span>
                    {e.current && (
                      <span className="flex items-center gap-1 text-slate-400">
                        <Clock className="size-3 text-brand" /> Current Role
                      </span>
                    )}
                  </div>

                  
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-slate-100">
                    {e.role}
                    {e.company && (
                      <>
                        {" · "}
                        <span className="text-brand">{e.company}</span>
                      </>
                    )}
                  </h3>

                  {e.location && (
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="size-3" /> {e.location}
                    </p>
                  )}

                  <hr className="my-4 border-[#2b3447]" />

                  
                  <ul className="space-y-3 text-sm leading-relaxed text-slate-300">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-1 grid size-4 shrink-0 place-items-center rounded bg-brand text-emerald-300">
                          <ArrowRight className="size-3" />
                        </span>
                        <span>
                          <RichText text={p} />
                        </span>
                      </li>
                    ))}
                  </ul>

                  
                  {e.tags && (
                    <>
                      <hr className="my-4 border-[#2b3447]" />
                      <div className="flex flex-wrap gap-2">
                        {e.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-[#2b3447] bg-[#232b3d] px-2 py-1 font-mono text-[11px] text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </SharedUI>
  );
}