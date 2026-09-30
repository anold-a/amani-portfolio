export default function SharedUI({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="font-display text-lg font-bold uppercase tracking-[0.2em]">{title}</h2>
      <div className="mt-3 h-0.5 w-24 bg-line">
        <div className="h-full w-1/4 bg-brand" />
      </div>
      <div className="mt-14">{children}</div>
    </section>
  );
}
