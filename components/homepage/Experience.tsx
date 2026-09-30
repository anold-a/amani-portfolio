import SharedUI from "../layout/SharedUI";
import Reveal from "../layout/Reveal"; // NEW
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    
    <SharedUI id="exp" index="03" title="git log --career">
      <ol className="relative ml-2 border-l border-line">
        {experience.map((e) => (
          <li key={e.id} className="relative pb-14 pl-8">
            <span className="absolute -left-1.5 top-2 size-2.5 rounded-full bg-brand ring-4 ring-bg" />
            <Reveal>
              <p className="font-mono text-sm text-brand">commit {e.id}</p> 
              <p className="mt-1 font-mono text-xs text-muted">Date: {e.period}</p> 
              <h3 className="mt-4 font-display text-2xl font-semibold">{e.role}</h3>
              <ul className="mt-3 space-y-1.5 font-mono text-sm text-muted">
                {e.points.map((p) => (
                  <li key={p}>
                    <span className="text-brand">+</span> {p} 
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </SharedUI>
  );
}