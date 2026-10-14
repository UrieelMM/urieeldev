"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { about, stats } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, staggerContainer, staggerItem } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";

function SpinningBadge({ rotate }: { rotate: MotionValue<number> }) {
  return (
    <motion.div
      style={{ rotate }}
      className="relative h-32 w-32 sm:h-36 sm:w-36"
      aria-hidden
    >
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <defs>
          <path
            id="badgeCircle"
            d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
          />
        </defs>
        <text
          className="fill-muted font-mono"
          style={{ fontSize: 15, letterSpacing: 4 }}
        >
          <textPath href="#badgeCircle">
            SENIOR SOFTWARE ENGINEER • URIEEL.DEV •
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 m-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-2 font-mono text-xl font-bold text-white shadow-lg">
        U
      </span>
    </motion.div>
  );
}

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const colA = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const colB = useTransform(scrollYProgress, [0, 1], [-20, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const columns = [
    stats.filter((_, i) => i % 2 === 0),
    stats.filter((_, i) => i % 2 === 1),
  ];

  return (
    <section ref={ref} id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-start justify-between gap-8">
          <SectionHeading
            index="05"
            eyebrow="Sobre mí"
            title="Frontend como fortaleza. Full-stack por alcance."
            highlight={["fortaleza.", "alcance."]}
            description="Construyo soluciones completas sin perder de vista lo que más importa: la experiencia de las personas y el resultado del producto."
          />
          <div className="hidden shrink-0 md:block">
            <SpinningBadge rotate={rotate} />
          </div>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed text-muted">
            <Reveal as="p">{about.summary}</Reveal>
            <Reveal as="p" delay={0.1}>
              {about.detail}
            </Reveal>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="grid gap-3 pt-2 sm:grid-cols-2"
            >
              {about.highlights.map((h) => (
                <motion.li
                  key={h}
                  variants={staggerItem}
                  className="flex items-start gap-3 rounded-2xl border border-border-soft bg-card p-4 text-base text-foreground backdrop-blur"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-accent"
                    aria-hidden
                  />
                  <span>{h}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="grid grid-cols-2 gap-4 self-start">
            {columns.map((col, c) => (
              <motion.div
                key={c}
                style={{ y: c === 0 ? colA : colB }}
                className="flex flex-col gap-4"
              >
                {col.map((stat) => (
                  <Reveal
                    key={stat.label}
                    className="glass glow-ring group relative overflow-hidden rounded-3xl p-6 sm:p-7"
                  >
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/15 blur-2xl transition-transform duration-700 group-hover:scale-150" />
                    <CountUp
                      value={stat.value}
                      className="relative block text-4xl font-bold text-gradient sm:text-5xl"
                    />
                    <div className="relative mt-3 text-sm text-muted">
                      {stat.label}
                    </div>
                  </Reveal>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
