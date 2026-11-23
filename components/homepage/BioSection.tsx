import SharedUI from "@/components/layout/SharedUI";
import { profile,stats } from "@/lib/data";
import Image from "next/image";
import { Terminal } from "lucide-react";
import InfoCard from "@/components/layout/InfoCard";
import { highlights } from "@/lib/data";
import TechnicalStack from "./TechnicalStack";



export default function Bio() {
  return (
    <SharedUI index={<p className="text-muted">Overview</p>} id="bio"  scramble
  title={
    <p className="text-white">
      A bit <span >about me</span>
    </p>
  }>
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] ">
        <div className="space-y-6 text-xl leading-relaxed text-white">
        
          {profile.subBio.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="mt-12 space-y-6">
  
</div>
          
        </div>
       <TechnicalStack />
      </div>
    </SharedUI>
  );
}