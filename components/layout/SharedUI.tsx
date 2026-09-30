import Reveal from "./Reveal";

export default function SharedUI({
  id,
  index,
  title,
  children,
}: {
  id: string;
   index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono text-sm text-brand">{`// ${index} — ${id}`}</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-16">{children}</div>
    </section>
  );
}
