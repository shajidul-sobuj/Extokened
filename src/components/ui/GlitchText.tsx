"use client";

import React, { useState, useEffect, useRef } from "react";
import { playGlitch } from "@/lib/sound";

interface GlitchTextProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
  autoDecrypt?: boolean;
}

const GLYPHS = "!<>-_\\/[]{}—=+*^?#01X_@";

export function GlitchText({
  text,
  className = "",
  triggerOnHover = true,
  autoDecrypt = true,
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const isAnimating = useRef(false);

  const scramble = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    playGlitch();

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        isAnimating.current = false;
      }

      iteration += 1 / 2;
    }, 30);
  };

  useEffect(() => {
    if (autoDecrypt) {
      const timer = setTimeout(() => {
        scramble();
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [text, autoDecrypt]);

  return (
    <span
      onMouseEnter={triggerOnHover ? scramble : undefined}
      className={`inline-block transition-colors cursor-default ${className}`}
    >
      {displayText}
    </span>
  );
}
