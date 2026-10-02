import SharedUI from "../layout/SharedUI";
import { builds } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function Builds() {
  return (
    <SharedUI id="refs" index="04" note="kind words" title={<> Building . <span className="italic">Exploring</span></>}>
      <div className="grid gap-6 md:grid-cols-2">
        {builds.map((build, index) => (
          <figure key={index} className="rounded-xl border border-line bg-card p-8">
            <blockquote className="border-l-4 border-brand pl-4 text-lg text-muted">{build.quote}</blockquote>
            <figcaption className="mt-6">
              <p className="font-display font-semibold">{build.name}</p>
              <p className="text-sm text-muted">{build.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-10 flex justify-end">
        <Link href="/" className="flex items-center gap-2 font-semibold text-brand hover:underline">
          All about my builds <ArrowRight size={16} />
        </Link>
      </div>
    </SharedUI>
  );
}