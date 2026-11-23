import Image from "next/image";
import { Mail } from "lucide-react";
import { profile,skills } from "@/lib/data";

import { ArrowDownRight, FileText } from "lucide-react";
import Link from "next/link";



export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen flex-col justify-between pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-2.5 py-0.5 font-mono text-[11px] text-muted">
            <span className="size-2 animate-pulse rounded-full bg-brand" /> Open to opportunities
          </span>

          
          <h1 className="mt-5 font-display text-white text-4xl font-bold leading-[0.9] tracking-tighter">
           Hello,I am {profile.name}
            <br />
           
          </h1>

          
          <p className="mt-10 font-mono text-sm text-muted">
            <span className="text-brand">&gt;</span> {profile.role}
            <span className="ml-1 inline-block h-4 w-2 translate-y-1 animate-pulse bg-brand" />
          </p>
          
         <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 md:text-lg">
  {profile.bio || profile.tagline}
</p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#projects" className="flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-bg">
              See my work <ArrowDownRight size={18} />
            </Link>
            <Link
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[#1E293B] text-white px-6 py-3 font-semibold transition hover:border-brand hover:text-brand"
            >
              <FileText size={18} /> Curriculum Vitae
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-4">
  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-muted">
    Connect
  </span>
  
  <div className="flex items-center gap-3">
    <Link
      href={profile.github || "https://github.com"}
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
      className="flex size-8 items-center justify-center rounded-sm  bg-card/5 text-white transition hover:border-brand hover:text-brand"
    >
       <svg className="size-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    </Link>

    <Link
      href={profile.linkedin || "https://linkedin.com"}
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
      className="flex size-8 items-center justify-center rounded-sm bg-card/5 text-white transition hover:border-brand hover:text-brand"
    >
      <svg className="size-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    </Link>

    <Link
      href={`mailto:${profile.email || "hello@example.com"}`}
      aria-label="Email"
      className="flex size-8 items-center justify-center rounded-sm  bg-card/5 text-white transition hover:border-brand hover:text-brand"
    >
      <Mail size={18} />
    </Link>
  </div>
</div>
        </div>

        
        <div className="relative mx-auto w-full max-w-sm">
          
          <div className="absolute  rounded-3xl border border-brand/60" />
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-card">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              sizes="(min-width: 768px) 384px, 90vw"
              className="object-cover grayscale"
            />   
          </div>
        </div>
      </div>

     
    </section>
  );
}