"use client";

import { Award, ArrowLeft, ArrowRight } from "lucide-react";
import SharedUI from "@/components/layout/SharedUI";
import Tag from "@/components/layout/Tag";
import { certs } from "@/lib/data";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Certs() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = certs.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  useEffect(() => {
    if (paused || total < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, 3000);

    return () => window.clearInterval(id);
  }, [paused, total]);

  if (total === 0) return null;

  const cert = certs[active];

  return (
    <SharedUI
      id="certs"
      index={<>Continuous Path</>}
      scramble
      title={
        <>
          Learning, <span>certified.</span>
        </>
      }
    >
      <section
        className="mx-auto max-w-6xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        aria-label="Certificates and learning"
      >
        

        <article
          key={cert.title}
          className="grid overflow-hidden rounded-2xl border border-line bg-[#f5f1ed] shadow-[0_24px_80px_-48px_rgba(0,0,0,0.35)] md:min-h-110 md:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="flex flex-col justify-between p-6 sm:p-9 md:p-10">
            <div>
              

              <h3 className="mb-5 font-mono text-lg    uppercase tracking-[0.2em] text-brand">
                {cert.title}
              </h3>

              <p className="mt-5 max-w-md text-base leading-7 text-muted">
                {cert.desc}
              </p>
            </div>

            <div className="mt-10">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Skills developed
              </p>
              <div className="flex flex-wrap gap-2">
                {cert.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-70 overflow-hidden bg-[#e8e2dc] md:min-h-110">
            {cert.image ? (
              <>
                <Image
                  key={cert.image}
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  fill
                  priority={active === 0}
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-white/10" />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/75 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground backdrop-blur">
                  Verified learning
                </div>
              </>
            ) : (
              <div className="flex h-full min-h-70 items-center justify-center">
                <Award
                  size={72}
                  strokeWidth={1}
                  className="text-brand/30"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
        </article>

        {total > 1 && (
          <div className="mt-5 flex items-center justify-between gap-4">
            <div
              className="flex items-center gap-2"
              aria-label="Choose certificate"
            >
              {certs.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Go to ${item.title}`}
                  aria-current={i === active ? "true" : undefined}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-2.5 bg-brand"
                      : "w-2.5 bg-line hover:bg-brand/50"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous certificate"
                onClick={prev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-foreground transition-all hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next certificate"
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-foreground transition-all hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </section>
    </SharedUI>
  );
}