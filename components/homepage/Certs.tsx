import SharedUI from "@/components/layout/SharedUI";
import { certs } from "@/lib/data";
import CertCard from "@/components/homepage/certs/CertCard";

export default function Certs() {
  if (certs.length === 0) return null;

  return (
    <SharedUI
      id="certs"
      index={<p className="text-2xl font-bold text-white">Continuous Path</p>}
      scramble
      title={
        <>
         <span className="text-sm text-slate-400"> Verified technical credentials and interactive simulation programs</span>
        </>
      }
    >
      
      <ul className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2" aria-label="Certificates">
        {certs.map((cert) => (
          <li key={cert.title} className="flex">
            <div className="w-full">
              <CertCard cert={cert} />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center gap-3 rounded-md border border-[#2b3447] bg-[#1E293B] px-5 py-4">
  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
    🎓
  </span>
  <div>
    <p className="text-sm font-semibold text-white">Continuous Professional Development</p>
    <p className="text-xs text-slate-400">
      Currently enrolled in Advanced Distributed Systems (MIT OpenCourseWare)
    </p>
  </div>
</div>
    </SharedUI>
  );
}