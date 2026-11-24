"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 1.4,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  // Extract prefix, numeric value, and suffix (e.g., "<10ms" -> prefix "<", num 10, suffix "ms")
  const match = value.match(/^([^0-9]*)([0-9]+)([^0-9]*)$/);
  const prefix = match ? match[1] : "";
  const targetNumber = match ? parseInt(match[2], 10) : null;
  const suffix = match ? match[3] : "";

  const [displayNumber, setDisplayNumber] = useState<number>(0);

  useEffect(() => {
    if (!isInView || targetNumber === null) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easedProgress * targetNumber);
      
      setDisplayNumber(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayNumber(targetNumber);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, targetNumber, duration]);

  if (targetNumber === null) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {isInView ? displayNumber : 0}
      {suffix}
    </span>
  );
}
