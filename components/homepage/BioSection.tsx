import SharedUI from "@/components/layout/SharedUI";
import { profile } from "@/lib/data";

export default function Bio() {
  return (
    <SharedUI id="bio" title="Who am I?">
      <div className="max-w-3xl space-y-6 text-2xl font-light leading-snug">
        {profile.bio.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </SharedUI>
  );
}