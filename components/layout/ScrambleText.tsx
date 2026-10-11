
"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export default function ScrambleText({
  children,
}: {
  children: ReactNode;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setKey((previous) => previous + 1);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref}>
      <ScrambleContent key={key}>{children}</ScrambleContent>
    </span>
  );
}

function ScrambleContent({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    let frame = 0;

    const animate = (now: number) => {
      if (!start) start = now;

      const next = Math.min((now - start) / 800, 1);
      setProgress(next);

      if (next < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  function render(node: ReactNode, path = "root"): ReactNode {
    if (typeof node === "string" || typeof node === "number") {
      const text = String(node);
      const resolved = Math.floor(progress * text.length);

      return text.split("").map((char, index) => {
        if (char === " " || index < resolved || progress >= 1) return char;

        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join("");
    }

    if (Array.isArray(node)) {
      return node.map((child, index) => render(child, `${path}-${index}`));
    }

    if (node && typeof node === "object" && "props" in node) {
      const element = node as React.ReactElement<{ children?: ReactNode }>;

      return (
        <element.type {...element.props} key={path}>
          {render(element.props.children, `${path}-child`)}
        </element.type>
      );
    }

    return node;
  }

  return <>{render(children)}</>;
}
