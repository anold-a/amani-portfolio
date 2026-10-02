import Image from "next/image";

export default function PostCover({
  title,
  tag,
  src,
  className = "",
}: {
  title: string;
  tag?: string;
  src?: string;
  className?: string;
}) {
  return (
    <div className={`relative isolate overflow-hidden bg-brand text-bg ${className}`}>
      {src ? (
        <Image src={src} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(var(--bg) 1.5px, transparent 1.5px)",
              backgroundSize: "18px 18px",
            }}
          />
          <span
            aria-hidden
            className="absolute -bottom-10 -right-2 font-display text-[12rem] font-black leading-none text-bg/15"
          >
            {title[0]}
          </span>
          {tag && (
            <span className="absolute left-5 top-5 rounded-full bg-bg px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand">
              {tag}
            </span>
          )}
        </>
      )}
    </div>
  );
}