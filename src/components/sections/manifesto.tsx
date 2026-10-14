"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollHighlightText } from "@/components/ui/scroll-highlight-text";
import { manifesto } from "@/lib/data";

const rings = [120, 180, 240, 300];

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const textProgress = useTransform(scrollYProgress, [0.05, 0.75], [0, 1]);
  const ringsRotate = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const ringsScale = useTransform(scrollYProgress, [0, 1], [0.7, 1.35]);
  const ringsOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.85, 1],
    [0, 1, 1, 0],
  );
  const draw = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const contentScale = useTransform(scrollYProgress, [0.82, 1], [1, 0.94]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.88, 1],
    [0, 1, 1, 0],
  );
  const footY = useTransform(scrollYProgress, [0.6, 0.8], [20, 0]);
  const footOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <section
      ref={ref}
      aria-label="Manifiesto"
      className="relative h-[240vh] sm:h-[280vh]"
    >
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        <motion.svg
          aria-hidden
          viewBox="-320 -320 640 640"
          style={{
            rotate: ringsRotate,
            scale: ringsScale,
            opacity: ringsOpacity,
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[140vmin] w-[140vmin] -translate-x-1/2 -translate-y-1/2"
          fill="none"
        >
          <defs>
            <linearGradient id="mfStroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" style={{ stopColor: "var(--accent)" }} />
              <stop offset="50%" style={{ stopColor: "var(--accent-2)" }} />
              <stop offset="100%" style={{ stopColor: "var(--accent-3)" }} />
            </linearGradient>
          </defs>
          {rings.map((r, i) => (
            <motion.circle
              key={r}
              r={r}
              stroke="url(#mfStroke)"
              strokeWidth={i % 2 ? 0.6 : 1.2}
              strokeLinecap="round"
              style={{ pathLength: draw, opacity: 0.18 + i * 0.05 }}
              transform={`rotate(${i * 70})`}
            />
          ))}
          {rings.map((r, i) => (
            <circle
              key={`dot-${r}`}
              cx={r * Math.cos((i * 70 * Math.PI) / 180)}
              cy={r * Math.sin((i * 70 * Math.PI) / 180)}
              r={3}
              fill="var(--accent-2)"
              opacity={0.6}
            />
          ))}
        </motion.svg>

        <motion.div
          style={{ scale: contentScale, opacity: contentOpacity }}
          className="relative mx-auto w-full max-w-5xl px-5 sm:px-8"
        >
          <p className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-10 bg-gradient-to-r from-accent to-accent-2" />
            Lo que hago
          </p>
          <ScrollHighlightText
            text={manifesto.text}
            highlight={manifesto.highlight}
            progress={textProgress}
            className="text-[1.85rem] font-semibold leading-[1.18] tracking-tight sm:text-5xl lg:text-[3.6rem]"
          />
          <motion.div
            style={{ scaleX: textProgress }}
            className="mt-12 h-px origin-left bg-gradient-to-r from-accent via-accent-2 to-accent-3"
            aria-hidden
          />
          <motion.p
            style={{ y: footY, opacity: footOpacity }}
            className="mt-5 font-mono text-xs uppercase tracking-[0.25em] text-muted"
          >
            Frontend · Backend · Cloud · E-commerce
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
