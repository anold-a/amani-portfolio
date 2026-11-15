import Image from "next/image";
import type { Cert } from "@/lib/data";


const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f8ef7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12161f]";
const btnBase =
  "flex-1 rounded-md px-4 py-2.5 text-center text-[11px] font-bold uppercase tracking-wide transition-colors motion-reduce:transition-none";


const initials = (name: string) =>
  name.split(/[\s/]+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();

export default function CertCard({ cert }: { cert: Cert }) {
  return (
    
    <article className="flex flex-col h-55 rounded-sm border border-brand bg-brand p-5 transition-colors hover:border-[#3a4660] motion-reduce:transition-none">
      <div className="flex items-start gap-4">
        
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#f3f4f6]">
          {cert.logo ? (
            <Image src={cert.logo} alt="" fill sizes="56px" className="object-contain p-2" />
          ) : (
            <span aria-hidden className="text-sm font-bold text-[#12161f]">
              {initials(cert.issuer)}
            </span>
          )}
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-bold uppercase leading-snug tracking-wide text-white">
            {cert.title}
          </h3>
          <p className="mt-1 text-xs text-[#8b95a7]">
  {[cert.date, cert.hours].filter(Boolean).join(" · ")}
</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-[#c9d1e0]">{cert.issuer}</p>
      
      {cert.credentialId && (
        <p className="mt-1 text-xs text-[#8b95a7]">Credential ID: {cert.credentialId}</p>
      )}

      
      {(cert.certificateUrl || cert.verifyUrl) && (
        <div className="mt-5 flex gap-3">
          {cert.certificateUrl && (
            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View certificate: ${cert.title}`}
              className={`${btnBase} border border-[#2b3447] bg-[#1b2130] text-white hover:bg-[#232b3d] ${focusRing}`}
            >
              View certificate
            </a>
          )}
          {cert.verifyUrl && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verify credential: ${cert.title}`}
              className={`${btnBase} bg-white text-brand hover:bg-[#232b3d]  ${focusRing}`}
            >
              Verify
            </a>
          )}
        </div>
      )}
    </article>
  );
}