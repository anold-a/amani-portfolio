import Image from "next/image";
import { Code, Server, Smartphone, Network } from "lucide-react";
import { profile } from "@/lib/data";

const floaters = [
  { Icon: Code, pos: "-left-5 top-[60%]" },
  { Icon: Server, pos: "-right-4 top-[35%]" },
  { Icon: Smartphone, pos: "left-[15%] -bottom-5" },
  { Icon: Network, pos: "-right-4 -bottom-5" },
];

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-6 pt-28 md:grid-cols-2">
      <div>
        <h1 className="font-display text-6xl font-black leading-[0.95] tracking-tight sm:text-8xl">
          {profile.first}
          <br />
          <span className="text-brand">{profile.last}</span>
        </h1>
        <p className="mt-10 border-l-4 border-brand pl-4 text-xl italic text-muted">
          “{profile.tagline}”
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg bg-line" />
        <div className="relative aspect-4/5 overflow-hidden rounded-lg bg-card">
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            priority
            sizes="(min-width: 768px) 448px, 90vw"
            className="object-cover grayscale"
          />
        </div>
        {floaters.map(({ Icon, pos }, i) => (
          <div key={i} className={`absolute ${pos} grid size-14 place-items-center rounded-xl bg-white text-brand shadow-md`}>
            <Icon size={22} />
          </div>
        ))}
      </div>
    </section>
  );
}