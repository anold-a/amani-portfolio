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

  return (
    <button
      type="button"
      onClick={copy}
      className="flex items-center justify-center gap-2 rounded-full border border-line bg-card px-5 py-3 text-sm font-semibold transition hover:border-ink"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? "Copied!" : "Copy email"}
    </button>
  );
}