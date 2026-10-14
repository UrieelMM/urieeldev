"use client";

import { Fragment } from "react";
import { motion, type Variants } from "framer-motion";
import { EASE } from "./reveal";

const wordVariants: Variants = {
  hidden: { y: "110%", rotate: 4, opacity: 0 },
  visible: {
    y: "0%",
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

type WordsRevealProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  /** Words (by exact match) rendered with the animated gradient. */
  highlight?: string[];
  delay?: number;
  stagger?: number;
  /** Animate on mount instead of when scrolled into view. */
  immediate?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

export function WordsReveal({
  text,
  className,
  wordClassName = "",
  highlight = [],
  delay = 0,
  stagger = 0.06,
  immediate = false,
  as = "h2",
}: WordsRevealProps) {
  const MotionTag = motion[as];
  const words = text.split(" ");
  const trigger = immediate
    ? { animate: "visible" as const }
    : {
        whileInView: "visible" as const,
        viewport: { once: true, margin: "-10% 0px" },
      };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      {...trigger}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span
            aria-hidden
            className="inline-flex overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom"
          >
            <motion.span
              className={`inline-block ${
                highlight.includes(word) ? "text-gradient-animated" : ""
              } ${wordClassName}`}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </MotionTag>
  );
}
