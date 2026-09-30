import SharedUI from "@/components/layout/SharedUI";
import { profile,stats } from "@/lib/data";


export default function Bio() {
  return (
    <SharedUI id="bio" title="Software DEV.">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-xl leading-relaxed text-ink/80">
          {profile.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="rounded-2xl border border-line bg-card font-mono text-sm">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="size-3 rounded-full bg-red-400/70" />
            <span className="size-3 rounded-full bg-yellow-400/70" />
            <span className="size-3 rounded-full bg-brand/70" />
            <span className="ml-3 text-muted">~/about</span>
          </div>
          <div className="space-y-2 p-5">
            <p><span className="text-brand">$</span> whoami</p>
            <p className="text-muted">{profile.name}</p>
            <p><span className="text-brand">$</span> cat role.txt</p>
            <p className="text-muted">{profile.role}</p>
            <p><span className="text-brand">$</span> cat location.txt</p>
            <p className="text-muted">{profile.location}</p>
            <p><span className="text-brand">$</span> ls stats/</p>
            {stats.map((s) => (
              <p key={s.label} className="text-muted">
                <span className="text-ink">{s.value}</span> — {s.label}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SharedUI>
  );
}