import Reveal from "./Reveal";
import ScrambleText from "./ScrambleText";

export default function SharedUI({
  id,
  
  title,
  index,
  scramble,
  children,
}: {
  id: string;
  index:React.ReactNode;
  title: React.ReactNode;
  scramble?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-2 py-20">
      <Reveal>
      <p className="text-sm font-normal text-brand tracking-[0.09em] sm:text-lg">{index}</p>
    <h2 className="mt-1 max-w-2xl text-2xl font-normal sm:text-4xl">
     {scramble ? <ScrambleText>{title}</ScrambleText> : title}
</h2>
   
        
      </Reveal>
      <div className="mt-16">{children}</div>
    </section>
  );
}
