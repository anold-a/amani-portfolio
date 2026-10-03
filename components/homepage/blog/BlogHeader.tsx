"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function BlogHeader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-70 h-1 bg-accent" style={{ width: `${progress * 100}%` }} />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 text-sm">
          <Link href="/" className="flex items-center gap-2 font-semibold transition hover:text-brand">
            <ArrowLeft size={16} /> Portfolio
          </Link>
          <Link href="/blogs" className="font-normal text-xl  transition hover:text-brand">
            Diary
          </Link>
        </div>
      </header>
    </>
  );
}