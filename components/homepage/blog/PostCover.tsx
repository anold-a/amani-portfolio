import Image from "next/image";

export default function PostCover({
  title,
  tag,
  src ="/blog.jpeg",
  className = "",
}: {
  title: string;
  tag?: string;
  src?: string;
  className?: string;
}) {
  return (
    <div className={`flex  p-4 ${className}`}>
    <div className="relative isolate flex-1 overflow-hidden  text-bg border border-[#111] bg-[#fafafa]" >
      {src ? (
        <Image src={src} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      ) : (
      
         <span
            aria-hidden
            className="absolute inset-0 flex items-center justify-center text-7xl font-medium text-[#111]/15"
          >
            {title[0]}
          </span>
      
      )}
    </div>
    </div>
  );
}