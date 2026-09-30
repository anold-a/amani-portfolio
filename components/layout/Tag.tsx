export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted">
      {children}
    </span>
  );
}