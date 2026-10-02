"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";

export default function CopyLink() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="flex items-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 text-sm font-semibold transition hover:border-ink"
    >
      {copied ? <Check size={16} /> : <Link2 size={16} />} {copied ? "Link copied" : "Copy link"}
    </button>
  );
}