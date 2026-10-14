"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Download } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { HeroVisual } from "@/components/sections/hero-visual";
import { Magnetic } from "@/components/ui/magnetic";
import { VelocityMarquee } from "@/components/ui/velocity-marquee";
import { EASE } from "@/components/ui/reveal";
import { site, marqueeTech } from "@/lib/data";

const rotatingWords = [
  "interfaces",
  "APIs",
  "checkouts",
  "integraciones",
  "productos",
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease: EASE },
});

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % rotatingWords.length),
      2200,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={rotatingWords[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="inline-block text-foreground"
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
      <span className="animate-blink ml-0.5 text-accent" aria-hidden>
        _
      </span>
    </span>
  );
}

function MaskLine({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "110%", rotate: 3 }}
        animate={{ y: "0%", rotate: 0 }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.65], [0, 10]);
  const contentFilter = useMotionTemplate`blur(${blur}px)`;

  const visualY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const visualRotate = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const visualOpacity = useTransform(scrollYProgress, [0.2, 0.85], [1, 0]);

  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-svh flex-col overflow-clip"
    >
      <motion.div
        aria-hidden
        style={{ y: visualY, rotate: visualRotate, opacity: visualOpacity }}
        className="pointer-events-none absolute -right-44 top-16 w-[480px] max-w-[125vw] sm:-right-24 lg:hidden"
      >
        <div className="opacity-25">
          <HeroVisual />
        </div>
      </motion.div>

      <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-12 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          style={{
            y: contentY,
            scale: contentScale,
            opacity: contentOpacity,
            filter: contentFilter,
          }}
          className="relative flex origin-top-left flex-col items-start gap-6"
        >
          <motion.span
            {...fadeUp(0.05)}
            className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-card px-4 py-1.5 text-sm text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {site.availability}
          </motion.span>

          <motion.div
            {...fadeUp(0.1)}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm sm:text-base"
          >
            <span className="text-accent">Hola, soy Uriel Mejía 👋</span>
            <span
              className="hidden h-1 w-1 rounded-full bg-muted sm:block"
              aria-hidden
            />
            <span className="text-muted">{site.specialty}</span>
          </motion.div>

          <h1 className="text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[3.6rem] xl:text-7xl">
            <MaskLine delay={0.15} className="whitespace-nowrap">
              <span className="text-gradient-animated">Senior Software</span>
            </MaskLine>{" "}
            <MaskLine delay={0.25}>Engineer</MaskLine>
          </h1>

          <motion.p
            {...fadeUp(0.35)}
            className="font-mono text-base text-muted sm:text-lg"
          >
            <span className="text-accent-2">❯</span> Construyo <RotatingWord />
          </motion.p>

          <motion.p
            {...fadeUp(0.4)}
            className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            {site.tagline}{" "}
            <span className="text-foreground">
              +7 años convirtiendo necesidades de negocio en software.
            </span>
          </motion.p>

          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent to-accent-2 transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span className="relative">Ver proyectos</span>
                <ArrowUpRight
                  size={18}
                  className="relative transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={site.cv}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-border-soft bg-card px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:border-accent hover:text-accent"
              >
                <Download size={16} />
                Descargar CV
              </a>
            </Magnetic>
            <div className="ml-1 flex items-center gap-2">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Uriel"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-soft bg-card backdrop-blur transition-colors hover:border-accent hover:text-accent"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Enviar correo a Uriel"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-soft bg-card backdrop-blur transition-colors hover:border-accent hover:text-accent"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.6)}
            className="flex items-center gap-2 text-sm text-muted"
          >
            <MapPin size={16} className="text-accent" />
            {site.location} · Trabajo remoto
          </motion.div>
        </motion.div>

        <motion.div
          style={{
            y: visualY,
            rotate: visualRotate,
            scale: visualScale,
            opacity: visualOpacity,
          }}
          className="hidden justify-center lg:flex"
        >
          <HeroVisual interactive />
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 xl:block"
      >
        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted"
          aria-label="Desplázate para ver más"
        >
          <span className="relative flex h-9 w-5 justify-center rounded-full border border-border-soft">
            <motion.span
              className="mt-1.5 h-1.5 w-1 rounded-full bg-accent"
              animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
          Scroll
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mask-fade-x relative w-full border-y border-border-soft py-5"
        aria-hidden
      >
        <VelocityMarquee baseVelocity={-4}>
          {marqueeTech.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-10 pr-10 font-mono text-lg font-medium text-muted/70"
            >
              {tech}
              <span className="text-accent/60">✦</span>
            </span>
          ))}
        </VelocityMarquee>
      </motion.div>
    </section>
  );
}
