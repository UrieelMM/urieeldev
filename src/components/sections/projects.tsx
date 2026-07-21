"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Building2, CheckCircle2, Sparkles } from "lucide-react";
import { estateAdmin, independentProjects, projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, staggerItem } from "@/components/ui/reveal";

export function Projects() {
  const additionalIndependentProjects = independentProjects.filter(
    (project) => project.title !== estateAdmin.title,
  );

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-background-subtle py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Trabajo seleccionado"
          title="Productos completos y experiencias a escala"
          description="Plataformas y productos digitales desarrollados para clientes y proyectos personales, con enfoque en la experiencia de usuario y la calidad del código."
        />

        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mt-12 overflow-hidden rounded-3xl border border-accent/30 bg-card"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-2/10" />
          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-accent">
                <Building2 size={14} aria-hidden />
                {estateAdmin.category}
              </span>

              <h3 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                {estateAdmin.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {estateAdmin.description}
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {estateAdmin.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-accent-2"
                      aria-hidden
                    />
                    {capability}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {estateAdmin.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-border-soft bg-background/70 px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={estateAdmin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
              >
                Visitar estate-admin.com
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
            </div>

            <div className="glass glow-ring self-center rounded-2xl p-4 sm:p-5">
              <div className="flex items-center justify-between border-b border-border-soft pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>
                <span className="font-mono text-[11px] text-muted">
                  estate-admin.com
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {estateAdmin.modules.map((module, index) => (
                  <div
                    key={module.title}
                    className="rounded-xl border border-border-soft bg-background/70 p-4"
                  >
                    <span className="font-mono text-[10px] text-accent">
                      0{index + 1}
                    </span>
                    <p className="mt-2 text-sm font-semibold">{module.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {module.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-xl border border-accent/20 bg-accent/10 p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  Alcance técnico
                </p>
                <p className="mt-2 text-sm font-medium">
                  Frontend · Backend · Datos · Integraciones
                </p>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="mt-8 rounded-2xl border border-border-soft bg-card p-5 sm:p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
            Más productos por proyecto
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {additionalIndependentProjects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-4 rounded-xl border border-border-soft bg-background p-4 transition-colors hover:border-accent-2/60"
              >
                <div>
                  <p className="font-semibold">{project.title}</p>
                  <p className="mt-1 font-mono text-xs text-accent-2">
                    {project.category}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="mt-0.5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-2"
                  aria-hidden
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border-soft pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Experiencia profesional · Corebiz
            </p>
            <h3 className="mt-2 text-2xl font-bold">E-commerce para marcas líderes</h3>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted sm:text-right">
            Proyectos realizados como parte de mi puesto en Corebiz México.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar ${project.title}`}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border-soft bg-card p-6 transition-colors hover:border-accent/50"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent/0 to-accent/0 opacity-0 transition-opacity duration-500 group-hover:from-accent/10 group-hover:to-accent-2/5 group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                  <Sparkles size={12} aria-hidden />
                  {project.category}
                </span>
                <span className="font-mono text-xs text-muted" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h4 className="mt-5 text-xl font-bold">{project.title}</h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              {project.metric ? (
                <p className="mt-4 font-mono text-sm font-semibold text-gradient">
                  {project.metric}
                </p>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-2 border-t border-border-soft pt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-background px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
