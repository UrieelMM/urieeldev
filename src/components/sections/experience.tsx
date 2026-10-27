"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, GraduationCap, Award, MapPin } from "lucide-react";
import { experiences, education, certifications } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { EASE, Reveal } from "@/components/ui/reveal";

function Timeline({ items }: { items: string[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <ol ref={ref} className="relative space-y-8 pl-10 sm:space-y-10">
      <span
        className="absolute bottom-2 left-[11px] top-2 w-px bg-border-soft"
        aria-hidden
      />
      <motion.span
        style={{ scaleY }}
        className="absolute bottom-2 left-[11px] top-2 w-px origin-top bg-gradient-to-b from-accent via-accent-2 to-accent-3"
        aria-hidden
      />
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -35% 0px" }}
          className="relative"
        >
          <motion.span
            aria-hidden
            variants={{
              hidden: { scale: 0.4, opacity: 0.4 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: { type: "spring", stiffness: 300, damping: 18 },
              },
            }}
            className="absolute -left-10 top-0.5 grid h-6 w-6 place-items-center rounded-full border border-accent/40 bg-background"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-accent to-accent-2 shadow-[0_0_12px_var(--accent)]" />
          </motion.span>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30, filter: "blur(6px)" },
              visible: {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: EASE },
              },
            }}
          >
            <span className="font-mono text-[11px] text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-1 text-base leading-relaxed text-foreground/90 sm:text-lg">
              {item}
            </p>
          </motion.div>
        </motion.li>
      ))}
    </ol>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative overflow-x-clip py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="03"
          eyebrow="Trayectoria"
          title="Experiencia entre producto, negocio e ingeniería"
          highlight={["ingeniería"]}
          description="Una trayectoria construyendo software para marcas y productos digitales de distintos sectores."
        />

        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="mt-16 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
          >
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal className="relative overflow-hidden rounded-3xl border border-border-soft bg-card p-6 backdrop-blur sm:p-8">
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent/15 blur-3xl" />
                <div className="relative flex items-start gap-4">
                  <motion.span
                    initial={{ rotate: -30, scale: 0.6 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 14,
                      delay: 0.3,
                    }}
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-white shadow-lg"
                  >
                    <Briefcase size={22} />
                  </motion.span>
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <p className="text-accent">{exp.company}</p>
                      {exp.status ? (
                        <span className="rounded-full border border-border-soft bg-background px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted">
                          {exp.status}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                      <MapPin size={14} /> {exp.location}
                    </p>
                  </div>
                </div>

                <p className="relative mt-6 w-fit rounded-full border border-border-soft bg-background px-3 py-1.5 font-mono text-xs text-muted">
                  {exp.period}
                </p>
                <p className="relative mt-5 leading-relaxed text-muted">
                  {exp.summary}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {exp.stack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4 + i * 0.05,
                        ease: EASE,
                      }}
                      className="rounded-lg border border-border-soft bg-background px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </Reveal>
            </div>

            <Timeline items={exp.achievements} />
          </div>
        ))}

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <Reveal
            direction="right"
            className="group rounded-3xl border border-border-soft bg-card p-6 backdrop-blur sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                <GraduationCap size={20} />
              </span>
              <h3 className="text-lg font-bold">Educación</h3>
            </div>
            <ul className="mt-5 space-y-4">
              {education.map((e) => (
                <li key={e.title}>
                  <p className="font-semibold">{e.title}</p>
                  <p className="text-sm text-muted">
                    {e.org} · {e.detail}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            direction="left"
            delay={0.1}
            className="group rounded-3xl border border-border-soft bg-card p-6 backdrop-blur sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-2/10 text-accent-2 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                <Award size={20} />
              </span>
              <h3 className="text-lg font-bold">Certificaciones</h3>
            </div>
            <ul className="mt-5 space-y-4">
              {certifications.map((c) => (
                <li key={c.title}>
                  <p className="font-semibold">{c.title}</p>
                  <p className="text-sm text-muted">
                    {c.org} · {c.detail}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
