import Image from "next/image";
import { Code, Server, Smartphone, Network } from "lucide-react";
import { profile,skills } from "@/lib/data";
import Marquee from "@/components/homepage/Marquee"; 
import { ArrowDownRight, FileText } from "lucide-react";

const floaters = [
  { Icon: Code, pos: "-left-5 top-[60%]" },
  { Icon: Server, pos: "-right-4 top-[35%]" },
  { Icon: Smartphone, pos: "left-[15%] -bottom-5" },
  { Icon: Network, pos: "-right-4 -bottom-5" },
];

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen flex-col justify-between pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 font-mono text-xs text-muted">
            <span className="size-2 animate-pulse rounded-full bg-brand" /> Open to opportunities
          </span>

          
          <h1 className="mt-8 font-display text-[clamp(3.5rem,11vw,9rem)] font-bold leading-[0.9] tracking-tighter">
            {profile.first}
            <br />
            <span className="relative inline-block text-brand">
               {profile.last}
             </span>
          </h1>

          
          <p className="mt-8 font-mono text-lg text-muted">
            <span className="text-brand">&gt;</span> {profile.role}
            <span className="ml-1 inline-block h-5 w-2 translate-y-1 animate-pulse bg-brand" />
          </p>
          
          <p className="mt-6 max-w-md border-l-4 border-accent pl-4 text-lg italic text-muted">“{profile.tagline}”</p>

          
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-bg">
              See my work <ArrowDownRight size={18} />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-line px-6 py-3 font-semibold transition hover:border-brand hover:text-brand"
            >
              <FileText size={18} /> Résumé
            </a>
          </div>
        </div>

        
        <div className="relative mx-auto w-full max-w-sm">
          
          <div className="absolute inset-0 rotate-3 rounded-3xl border border-brand/60" />
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-card">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              sizes="(min-width: 768px) 384px, 90vw"
              className="object-cover grayscale"
            />
            {floaters.map(({ Icon, pos }, i) => (
            <div key={i} className={`absolute ${pos} grid size-12 place-items-center rounded-xl border border-line bg-card text-brand `}>
              <Icon size={20} />
            </div>
          ))}
          </div>
          <span className="absolute -bottom-4 -left-4 -rotate-6 rounded-full bg-brand px-4 py-2 font-mono text-xs font-bold text-bg">
            BBIT · TEACHER · DEV
          </span>
        </div>
      </div>

      <Marquee items={skills} />
    </section>
  );
}