import Image from "next/image";
import type { Cert } from "@/lib/data";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]";

const initials = (name: string) =>
  name
    .split(/[\s/]+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function CertCard({ cert }: { cert: Cert }) {
  return (
    <article className="flex h-full flex-col rounded-sm border border-[#2b3447] bg-[#1E293B] p-5 transition-colors hover:border-emerald-500/40 motion-reduce:transition-none">
     
      <div className="flex items-start justify-between">
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#f3f4f6]">
          {cert.logo ? (
            <Image src={cert.logo} alt="" fill sizes="40px" className="object-contain p-2" />
          ) : (
            <span aria-hidden className="text-xs font-bold text-[#12161f]">
              {initials(cert.issuer)}
            </span>
          )}
        </div>

        {cert.status && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
            {cert.status}
            {cert.date && ` · ${cert.date}`}
          </span>
        )}
      </div>

      
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        {cert.issuer}
      </p>

      
      <h3 className="mt-1 text-base font-bold leading-snug text-white">{cert.title}</h3>

      
      {cert.description && (
        <p className="mt-2 line-clamp-2 text-sm text-slate-300">{cert.description}</p>
      )}

      
      {cert.tags && cert.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {cert.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-[#2b3447] bg-[#171f2e] px-2 py-1 text-[11px] text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      
      <div className="mt-auto flex items-center justify-between pt-5">
        {cert.credentialId && (
          <p className="text-xs text-slate-500">ID: {cert.credentialId}</p>
        )}

        {cert.certificateUrl && (
          <a
            href={cert.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View certificate: ${cert.title}`}
            className={`text-xs font-medium text-emerald-400 hover:underline ${focusRing}`}
          >
            View certificate ↗
          </a>
        )}
      </div>
    </article>
  );
}