import Reveal from "./Reveal";

export default function SharedUI({
  id,
  index,
  note,
  title,
  children,
}: {
  id: string;
  index: string;
  note?: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-2 py-20">
      <Reveal>
       <p className="flex items-baseline gap-3">
       <span className="font-display text-sm font-bold text-brand">{index}</span>
        {note && <span className="font-display text-2xl ">{note}</span>}
    </p>
    <h2 className="mt-1 max-w-2xl  text-2xl font-bold  sm:text-4xl">
           {title}
         </h2>
   
        
      </Reveal>
      <div className="mt-16">{children}</div>
    </section>
  );
}
