"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

type ScrollHighlightTextProps = {
  text: string;
  progress: MotionValue<number>;
  highlight?: string[];
  className?: string;
};

function Word({
  word,
  progress,
  range,
  highlighted,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  highlighted: boolean;
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [10, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={`inline-block ${highlighted ? "text-gradient-animated" : ""}`}
    >
      {word}
    </motion.span>
  );
}

export function ScrollHighlightText({
  text,
  progress,
  highlight = [],
  className,
}: ScrollHighlightTextProps) {
  const words = text.split(" ");
  const step = 1 / words.length;

  return (
    <p className={className} aria-label={text}>
      <span aria-hidden>
        {words.map((word, i) => {
          const start = i * step;
          return (
            <span key={`${word}-${i}`}>
              <Word
                word={word}
                progress={progress}
                range={[start, Math.min(1, start + step * 3)]}
                highlighted={highlight.includes(word.replace(/[.,:]/g, ""))}
              />
              {i < words.length - 1 ? " " : null}
            </span>
          );
        })}
      </span>
    </p>
  );
}
