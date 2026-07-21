"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Code2 } from "lucide-react";
import { corebizBrands, independentProjects } from "@/lib/data";

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function Brands() {
  return (
    <section
      aria-labelledby="brands-heading"
      className="scroll-mt-24 border-y border-border-soft py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.p
          id="brands-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-center font-mono text-xs uppercase tracking-widest text-muted"
        >
          Experiencia en marcas y productos
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-5 lg:grid-cols-2"
        >
          <motion.article
            variants={cardVariants}
            className="rounded-3xl border border-border-soft bg-card p-6 sm:p-7"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                <BriefcaseBusiness size={20} aria-hidden />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  Desde Agencia
                </p>
                <h2 className="mt-1 text-xl font-bold">Experiencia profesional</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Proyectos realizados como parte de mi etapa profesional en
                  Corebiz México.
                </p>
              </div>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {corebizBrands.map((brand) => (
                <li
                  key={brand.name}
                >
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-center inline-flex items-center gap-1 rounded-full border border-border-soft bg-background px-3.5 py-1.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {brand.name}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            variants={cardVariants}
            className="relative overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/10 via-card to-accent-2/5 p-6 sm:p-7"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-2/10 blur-3xl" />
            <div className="relative flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-2/10 text-accent-2">
                <Code2 size={20} aria-hidden />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
                  Trabajo independiente
                </p>
                <h2 className="mt-1 text-xl font-bold">Productos por proyecto</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Productos y colaboraciones desarrollados de forma independiente
                  y con un alcance definido.
                </p>
              </div>
            </div>
            <ul className="relative mt-6 flex flex-wrap gap-2.5">
              {independentProjects.map((project) => (
                <li
                  key={project.title}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 rounded-full border border-accent/20 bg-background/70 px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-accent-2 hover:text-accent-2"
                  >
                    {project.title}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
