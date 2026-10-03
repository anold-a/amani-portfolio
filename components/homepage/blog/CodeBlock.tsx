"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CodeBlock({ code, file, lang }: { code: string; file?: string; lang: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border border-ink/80 bg-ink text-bg ">
      <div className="flex items-center justify-between border-b border-bg/15 px-4 py-2 font-mono text-xs text-bg/70">
        <span>{file ?? lang}</span>
        <button
          type="button"
          onClick={copy}
          className="flex items-center gap-1.5 rounded px-2 py-1 transition hover:bg-bg/10 hover:text-bg"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}