"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { about, stats } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, staggerContainer, staggerItem } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Frontend como fortaleza. Full-stack por alcance."
          description="Construyo soluciones completas sin perder de vista lo que más importa: la experiencia de las personas y el resultado del producto."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="space-y-6 text-lg leading-relaxed text-muted">
            <p>{about.summary}</p>
            <p>{about.detail}</p>

            <ul className="grid gap-3 pt-2 sm:grid-cols-2">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-base text-foreground">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-accent"
                    aria-hidden
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-4 self-start"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="glass glow-ring group relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <CountUp
                  value={stat.value}
                  className="block text-3xl font-bold text-gradient sm:text-4xl"
                />
                <div className="mt-2 text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
