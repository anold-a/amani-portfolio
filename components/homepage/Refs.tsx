import SharedUI from "../layout/SharedUI";
import { refs } from "@/lib/data";

export default function Refs() {
  return (
    <SharedUI id="refs" index="04" title="What people say">
      <div className="grid gap-6 md:grid-cols-2">
        {refs.map((r, i) => (
          <figure key={i} className="rounded-xl border border-line bg-card p-8">
            <blockquote className="border-l-4 border-brand pl-4 text-lg text-muted">{r.quote}</blockquote>
            <figcaption className="mt-6">
              <p className="font-display font-semibold">{r.name}</p>
              <p className="text-sm text-muted">{r.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </SharedUI>
  );
}