import { Award } from "lucide-react";
import SharedUI from "@/components/layout/SharedUI";
import Tag from "@/components/layout/Tag";
import Reveal from "@/components/layout/Reveal"; 
import { certs } from "@/lib/data";
import Image from "next/image";

export default function Certs() {
  return (
    <SharedUI id="certs" index="02" note="the paperwork" title={<>Learning, <span className="italic">certified</span></>}> 
      <div className="grid gap-5 md:grid-cols-2">
        {certs.map((c, i) => (
          <Reveal key={c.title} delay={i * 100}> 
            
               <article className=" relative h-full overflow-hidden rounded-lg border border-line  p-6">
              {c.image && (
<div className="relative mb-5 aspect-4/3 overflow-hidden rounded border border-line bg-white">
<Image src={c.image} alt={`${c.title} certificate`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain" />
</div>
)}
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