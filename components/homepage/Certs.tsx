import SharedUI from "@/components/layout/SharedUI";
import { certs } from "@/lib/data";
import CertCard from "@/components/homepage/certs/CertCard";

export default function Certs() {
  if (certs.length === 0) return null;

  return (
    <SharedUI
      id="certs"
      index={<>Continuous Path</>}
      scramble
      title={
        <>
          Learning, <span>certified.</span>
        </>
      }
    >
      
      <ul className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3" aria-label="Certificates">
        {certs.map((cert) => (
          <li key={cert.title} className="flex">
            <div className="w-full">
              <CertCard cert={cert} />
            </div>
          </li>
        ))}
      </ul>
    </SharedUI>
  );
}