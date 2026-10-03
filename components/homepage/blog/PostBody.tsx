import Image from "next/image";
import type { Block } from "@/lib/posts";
import { slugify } from "@/lib/posts";
import CodeBlock from "./CodeBlock";

export default function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6 text-lg leading-relaxed text-ink/85">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={i}
                id={slugify(b.text)}
                className="scroll-mt-24 pt-4 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
              >
                {b.text}
              </h2>
            );
          case "p":
            return <p key={i}>{b.text}</p>;
          case "list":
            return (
              <ul key={i} className="list-disc space-y-2 pl-6 marker:text-accent">
                {b.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "code":
            return <CodeBlock key={i} code={b.code} file={b.file} lang={b.lang} />;
          case "image":
            return (
              <figure key={i}>
                <div className="relative aspect-video overflow-hidden rounded-lg border border-line bg-line">
                  <Image src={b.src} alt={b.alt} fill sizes="(min-width: 1024px) 720px, 100vw" className="object-cover object-top" />
                </div>
                {b.caption && (
                  <figcaption className="mt-2 text-center font-hand text-xl text-muted">{b.caption}</figcaption>
                )}
              </figure>
            );
          case "aside":
            return (
              <aside
                key={i}
                className="-rotate-1 rounded-sm bg-white/40 backdrop-blur-md shadow-2xl border border-white/20 px-5 py-4  text-sm leading-snug text-ink "
              >
                {b.text}
              </aside>
            );
        }
      })}
    </div>
  );
}