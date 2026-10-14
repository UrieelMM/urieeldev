"use client";

import { motion } from "framer-motion";
import { EASE } from "./reveal";
import { WordsReveal } from "./words-reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  index?: string;
  highlight?: string[];
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  index,
  highlight,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={`flex max-w-3xl flex-col gap-5 ${
        centered ? "mx-auto items-center text-center" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: centered ? 0 : -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent"
      >
        {index ? <span className="text-muted">{index}</span> : null}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: EASE }}
          className="h-px w-10 origin-left bg-gradient-to-r from-accent to-accent-2"
          aria-hidden
        />
        {eyebrow}
      </motion.div>
      <WordsReveal
        text={title}
        highlight={highlight}
        className="text-[2.1rem] font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
      />
      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
