"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
     
    }
  }

  const pill =
  "flex items-center justify-center gap-2 rounded-full border border-line bg-card px-5 py-3 text-sm font-semibold transition hover:border-ink";


  return (
    <button
      type="button"
      onClick={copy}
      className={`${pill} flex items-center rounded-xl border border-slate-800 bg-slate-900/80 text-white justify-center gap-2 h-10`}
    >
      {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? "Copied!" : "Copy email"}
    </button>
  );
}