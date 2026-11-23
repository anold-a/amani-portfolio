import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  label: string;
  title?: string;
  subtitle: string;
 
}

export default function InfoCard({ label, title, subtitle}: InfoCardProps) {
  return (
    <div className="flex flex-col justify-between   p-6 transition hover:border-brand/40">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
          {label}
        </span>
      
      </div>

      <div className="mt-1">
        <h3 className="text-sm font-bold text-white">{title}</h3>
        <p className="text-[11px] text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}
