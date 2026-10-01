import { Briefcase } from "lucide-react";
import SharedUI from "@/components/layout/SharedUI";
import Reveal from "@/components/layout/Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <SharedUI id="exp" index="03" note="the journey so far" title={<>Work <span className="italic">history</span></>}>
      <ol className="relative before:absolute before:left-5 before:top-0 before:h-full before:w-0.5 before:bg-line md:before:left-1/2 md:before:-translate-x-1/2">
        {experience.map((e, i) => {
          const right = i % 2 === 1;
          return (
            <li
              key={e.id}
              className={`relative pb-10 pl-14 md:w-1/2 ${right ? "md:ml-auto md:pl-12" : "md:pl-0 md:pr-12 md:text-right"}`}
            >
              <span
                className={`absolute top-0 grid size-10 place-items-center rounded-full border-2 border-brand bg-bg text-brand ${
                  right ? "left-0 md:-left-5" : "left-0 md:left-auto md:-right-5"
                }`}
              >
                <Briefcase size={16} />
              </span>
              <Reveal>
                <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold">{e.period}</span>
                <h3 className="mt-2 font-display text-xl font-semibold">{e.role}</h3>
                <ul className="mt-2 space-y-1 text-muted">
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </SharedUI>
  );
}