"use client";

import { useEffect, useState } from "react";

type ScrambleTextProps = {
  text: string;
  active: boolean;
};

const chars = "!<>-_\\/[]{}—=+*^?#_";

export default function ScrambleText({
  text,
  active,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!active) {
      setDisplay(text);
      return;
    }

    let iteration = 0;

    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";

            if (index < iteration) {
              return char;
            }

            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration += 0.5;

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [active, text]);

  return <span>{display}</span>;
}