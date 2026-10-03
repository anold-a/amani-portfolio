"use client";

import { useEffect, useState } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown({ target, size = "lg" }: { target: string; size?: "lg" | "sm" }) {
  
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const end = new Date(target).getTime();
  if (Number.isNaN(end)) return null;

  const diff = now === null ? null : Math.max(0, end - now);

  if (diff === 0) {
    return <p className="font-hand text-2xl text-accent">target date reached, almost there</p>;
  }

  const total = diff === null ? 0 : Math.floor(diff / 1000);
  const units = [
    { label: "Days", value: Math.floor(total / 86400) },
    { label: "Hours", value: Math.floor((total % 86400) / 3600) },
    { label: "Minutes", value: Math.floor((total % 3600) / 60) },
    { label: "Seconds", value: total % 60 },
  ];
  const big = size === "lg";

  return (
    <div role="timer" aria-live="off" className={`grid grid-cols-4 ${big ? "gap-3" : "gap-2"}`}>
      {units.map((u) => (
        <div
          key={u.label}
          className={`rounded-lg border border-line bg-card text-center ${
            big ? "px-3 py-5 shadow-[5px_5px_0_0_var(--line)]" : "px-2 py-3"
          }`}
        >
          <p className={`font-display font-black tabular-nums ${big ? "text-4xl sm:text-6xl" : "text-2xl"}`}>
            {diff === null ? "--" : pad(u.value)}
          </p>
          <p className={`font-semibold uppercase tracking-wider text-muted ${big ? "mt-1 text-xs" : "text-[10px]"}`}>
            {u.label}
          </p>
        </div>
      ))}
    </div>
  );
}