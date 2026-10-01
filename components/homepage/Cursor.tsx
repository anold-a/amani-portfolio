"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    const loop = () => {
      cx += (x - cx) * 0.15;
      cy += (y - cy) * 0.15;
      if (ref.current) ref.current.style.transform = `translate(${cx - 16}px, ${cy - 16}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-60 hidden size-8 place-items-center rounded-full bg-brand/40 pointer-fine:grid"
    >
      <span className="size-2.5 rounded-full bg-brand" />
    </div>
  );
}