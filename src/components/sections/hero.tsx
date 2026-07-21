"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Download } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { HeroVisual } from "@/components/sections/hero-visual";
import { site, marqueeTech } from "@/lib/data";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-card px-4 py-1.5 text-sm text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {site.availability}
          </motion.span>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm sm:text-base"
          >
            <span className="text-accent">Hola, soy Uriel Mejía 👋</span>
            <span className="hidden h-1 w-1 rounded-full bg-muted sm:block" aria-hidden />
            <span className="text-muted">{site.specialty}</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[3.35rem] xl:text-7xl"
          >
            <span className="text-gradient-animated whitespace-nowrap">
              Senior Software
            </span>
            <br />
            Engineer
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            {site.tagline}{" "}
            <span className="text-foreground">
              +7 años convirtiendo necesidades de negocio en software.
            </span>
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              Ver trabajo seleccionado
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-border-soft bg-card px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={16} />
              Descargar CV
            </a>
            <div className="ml-1 flex items-center gap-2">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Uriel"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-soft bg-card transition-colors hover:border-accent hover:text-accent"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Enviar correo a Uriel"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-soft bg-card transition-colors hover:border-accent hover:text-accent"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center gap-2 text-sm text-muted"
          >
            <MapPin size={16} className="text-accent" />
            {site.location} · Trabajo remoto
          </motion.div>
        </motion.div>

        <div className="hidden justify-center lg:flex">
          <HeroVisual />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.45 }}
        className="relative mt-16 w-full overflow-hidden border-y border-border-soft py-5"
        aria-hidden
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-10">
          {[...marqueeTech, ...marqueeTech].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-mono text-lg font-medium text-muted/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
