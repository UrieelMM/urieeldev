"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Code2, Star } from "lucide-react";
import { corebizBrands, independentProjects } from "@/lib/data";
import { logoSizing } from "@/lib/logos";
import { VelocityMarquee } from "@/components/ui/velocity-marquee";
import { EASE, staggerContainer, staggerItem } from "@/components/ui/reveal";

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export function Brands() {
  const withLogo = corebizBrands.filter((b) => b.logo);

  return (
    <section
      aria-labelledby="brands-heading"
      className="relative scroll-mt-24 overflow-x-clip pb-20 pt-8 sm:py-28"
    >
      <motion.p
        id="brands-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1.2, ease: EASE }}
        className="px-4 text-center font-mono text-xs uppercase tracking-[0.22em] text-muted sm:tracking-[0.3em]"
      >
        Experiencia en marcas y productos
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mask-fade-x mt-10"
        aria-hidden
      >
        <VelocityMarquee baseVelocity={3} copies={4}>
          {withLogo.map((brand) => (
            <span
              key={brand.name}
              className="brand-chip mx-3 h-20 w-40 shrink-0 sm:mx-4 sm:h-24 sm:w-48"
            >
              <span className="flex aspect-[5/2] w-[80%] items-center justify-center">
                <Image
                  src={brand.logo!}
                  alt={`Logo de ${brand.name}`}
                  {...logoSizing(brand.logo!)}
                  className="h-auto max-h-full object-contain"
                />
              </span>
            </span>
          ))}
        </VelocityMarquee>
      </motion.div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-14 grid gap-5 lg:grid-cols-2"
        >
          <motion.article
            variants={staggerItem}
            className="group relative overflow-hidden rounded-3xl border border-border-soft bg-card p-6 backdrop-blur sm:p-7"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                <BriefcaseBusiness size={20} aria-hidden />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  Desde Agencia
                </p>
                <h2 className="mt-1 text-xl font-bold">
                  Experiencia profesional
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Proyectos realizados como parte de mi etapa profesional en
                  Corebiz México.
                </p>
              </div>
            </div>
            <motion.ul
              variants={{
                visible: {
                  transition: { staggerChildren: 0.04, delayChildren: 0.3 },
                },
              }}
              className="mt-6 flex flex-wrap gap-2.5"
            >
              {corebizBrands.map((brand) => (
                <motion.li key={brand.name} variants={chipVariants}>
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/chip inline-flex items-center gap-1 rounded-full border border-border-soft bg-background px-3.5 py-1.5 text-center text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {brand.name}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-opacity group-hover/chip:opacity-100"
                      aria-hidden
                    />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.article>

          <motion.article
            variants={staggerItem}
            className="group relative overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/10 via-card to-accent-2/5 p-6 backdrop-blur sm:p-7"
          >
            <motion.div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-2/15 blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-2/10 text-accent-2 transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110">
                <Code2 size={20} aria-hidden />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
                  Freelance
                </p>
                <h2 className="mt-1 text-xl font-bold">
                  Productos por proyecto
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Productos y colaboraciones desarrollados de forma
                  independiente y con un alcance definido.
                </p>
              </div>
            </div>
            <motion.ul
              variants={{
                visible: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.4 },
                },
              }}
              className="relative mt-6 flex flex-wrap gap-2.5"
            >
              {independentProjects.map((project) => (
                <motion.li key={project.title} variants={chipVariants}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/chip inline-flex items-center gap-1 rounded-full border border-accent/20 bg-background/70 px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-accent-2 hover:text-accent-2"
                  >
                    {project.title === "Campus CEHF" ? (
                      <Star
                        size={13}
                        className="fill-accent-2 text-accent-2"
                        aria-label="Proyecto destacado"
                      />
                    ) : null}
                    {project.title}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-opacity group-hover/chip:opacity-100"
                      aria-hidden
                    />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
