"use client";

import { Briefcase, GraduationCap, Award, MapPin } from "lucide-react";
import { experiences, education, certifications } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-background-subtle py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Trayectoria"
          title="Experiencia entre producto, negocio e ingeniería"
          description="Una trayectoria construyendo software para marcas y productos digitales de distintos sectores."
        />

        <div className="mt-14 space-y-8">
          {experiences.map((exp, i) => (
            <Reveal
              key={exp.company}
              delay={i * 0.1}
              className="relative rounded-3xl border border-border-soft bg-card p-6 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-white">
                    <Briefcase size={22} />
                  </span>
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
                <span className="w-fit rounded-full border border-border-soft bg-background px-3 py-1.5 font-mono text-xs text-muted">
                  {exp.period}
                </span>
              </div>

              <p className="mt-6 leading-relaxed text-muted">{exp.summary}</p>

              <ul className="mt-6 grid gap-3">
                {exp.achievements.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span className="text-foreground/90">{a}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border-soft bg-background px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Reveal
            direction="left"
            className="rounded-3xl border border-border-soft bg-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
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
            direction="right"
            className="rounded-3xl border border-border-soft bg-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-2/10 text-accent-2">
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
