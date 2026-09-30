export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items]; 
  return (
    <div className="overflow-hidden border-y border-line py-4" aria-hidden>
      <div className="marquee-track flex w-max font-mono text-sm uppercase tracking-widest text-muted">
        {row.map((s, i) => (
          <span key={i} className="flex items-center gap-10 pr-10">
            {s} <span className="text-brand">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}