import { ArrowUpRight } from "lucide-react";
import Tag from "@/components/layout/Tag";
import Countdown from "./Countdown";
import type { Upcoming } from "@/lib/upcoming";

const statusStyle: Record<Upcoming["status"], string> = {
  Planning: "bg-line text-muted",
  Building: "bg-accent/20 text-ink",
  Testing: "bg-brand/15 text-brand",
};

export default function UpcomingCard({ p }: { p: Upcoming }) {
  const done = p.steps.filter((s) => s.done).length;
  const pct = p.steps.length ? Math.round((done / p.steps.length) * 100) : 0;
  const next = p.steps.find((s) => !s.done);

  return (
    <article className=" flex h-full flex-col rounded-lg border border-line bg-card p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl font-bold">{p.name}</h3>
        <span className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${statusStyle[p.status]}`}>
          {p.status}
        </span>
      </div>
      <p className="mt-2 text-muted">{p.tagline}</p>

      <div className="mt-5">
        <div className="flex justify-between text-xs font-semibold text-muted">
          <span>{pct}% done</span>
          <span>{done} of {p.steps.length} steps</span>
        </div>
        <div
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${p.name} progress`}
          className="mt-2 h-2.5 overflow-hidden rounded-full bg-line"
        >
          <div className="h-full rounded-full bg-brand transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <ul className="mt-5 space-y-2 text-sm">
        {p.steps.map((s) => (
          <li key={s.label} className="flex items-center gap-3">
            <span
              aria-hidden
              className={`grid size-5 shrink-0 place-items-center rounded-full border text-[11px] font-bold ${
                s.done ? "border-brand bg-brand text-bg" : "border-line text-transparent"
              }`}
            >
              ✓
            </span>
            <span className={s.done ? "text-muted line-through" : ""}>{s.label}</span>
          </li>
        ))}
      </ul>

      {next && <p className="mt-4 font-normal text-2xl leading-none text-accent">next: {next.label}</p>}

      <div className="mt-5">
        {p.target ? (
          <Countdown target={p.target} size="sm" />
        ) : (
          <p className="text-sm text-muted">Launch date: still to be announced.</p>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.stack.map((s) => <Tag key={s}>{s}</Tag>)}
      </div>

      {p.repo && (
        <a href={p.repo} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
          Follow along on GitHub <ArrowUpRight size={14} />
        </a>
      )}
    </article>
  );
}