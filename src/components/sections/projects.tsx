"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Bell,
  Building2,
  CheckCircle2,
  GraduationCap,
  MessageCircle,
  Sparkles,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cehf, estateAdmin, independentProjects, projects } from "@/lib/data";
import { logoSizing } from "@/lib/logos";
import { SectionHeading } from "@/components/ui/section-heading";
import { EASE, staggerContainer, staggerItem } from "@/components/ui/reveal";

const bars = [42, 68, 54, 82, 61, 94, 76];

function Dashboard() {
  return (
    <div className="glass glow-ring relative rounded-2xl p-4 sm:p-5">
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

      <div className="mt-4 rounded-xl border border-border-soft bg-background/70 p-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Cobranza mensual
            </p>
            <p className="mt-1 text-2xl font-bold">
              <span className="text-gradient">94%</span>
            </p>
          </div>
          <span className="rounded-full bg-green-500/10 px-2 py-0.5 font-mono text-[10px] text-green-500">
            ▲ al día
          </span>
        </div>
        <div className="mt-4 flex h-24 items-end gap-2">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 + i * 0.07, ease: EASE }}
              style={{ height: `${h}%` }}
              className={`flex-1 origin-bottom rounded-t-md ${
                i === bars.length - 2
                  ? "bg-gradient-to-t from-accent to-accent-2"
                  : "bg-accent/25"
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-3 grid grid-cols-2 gap-3"
      >
        {estateAdmin.modules.map((module, index) => (
          <motion.div
            key={module.title}
            variants={staggerItem}
            className="rounded-xl border border-border-soft bg-background/70 p-3.5"
          >
            <span className="font-mono text-[10px] text-accent">
              0{index + 1}
            </span>
            <p className="mt-1.5 text-sm font-semibold">{module.title}</p>
            <p className="mt-0.5 text-xs leading-relaxed text-muted">
              {module.detail}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
        className="absolute -bottom-5 -right-2 flex items-center gap-2.5 rounded-xl border border-border-soft bg-background/95 px-3 py-2.5 shadow-xl sm:-right-6"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-green-500/15 text-green-500">
          <MessageCircle size={16} aria-hidden />
        </span>
        <div>
          <p className="text-xs font-semibold">Recordatorio enviado</p>
          <p className="font-mono text-[10px] text-muted">
            WhatsApp · hace 1 min
          </p>
        </div>
      </motion.div>
    </div>
  );
}

type Featured = {
  title: string;
  category: string;
  description: string;
  url: string;
  tags: readonly string[];
  capabilities: readonly string[];
};

const featuredThemes = {
  violet: {
    border: "border-accent/30",
    chip: "border-accent/25 bg-accent/10 text-accent",
    glow: "from-accent/15 via-transparent to-accent-2/10",
    orb: "bg-accent/20",
    check: "text-accent-2",
  },
  cyan: {
    border: "border-accent-2/30",
    chip: "border-accent-2/25 bg-accent-2/10 text-accent-2",
    glow: "from-accent-2/15 via-transparent to-accent-3/10",
    orb: "bg-accent-2/20",
    check: "text-accent-3",
  },
} as const;

function FeaturedShowcase({
  project,
  icon: Icon,
  visual,
  badge,
  theme = "violet",
  reverse = false,
}: {
  project: Featured;
  icon: LucideIcon;
  visual: ReactNode;
  badge?: string;
  theme?: keyof typeof featuredThemes;
  reverse?: boolean;
}) {
  const t = featuredThemes[theme];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  const rotateX = useTransform(progress, [0, 1], [24, 0]);
  const scale = useTransform(progress, [0, 1], [0.86, 1]);
  const y = useTransform(progress, [0, 1], [80, 0]);
  const glowOpacity = useTransform(progress, [0.4, 1], [0, 1]);
  const host = project.url
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/$/, "");

  return (
    <div ref={ref} className="mt-14 [perspective:1400px]">
      <motion.article
        style={{ rotateX, scale, y }}
        className={`relative origin-bottom overflow-hidden rounded-[2rem] border bg-card ${t.border}`}
      >
        <motion.div
          style={{ opacity: glowOpacity }}
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${t.glow}`}
        />
        <div
          className={`pointer-events-none absolute -top-20 h-64 w-64 rounded-full blur-[100px] ${t.orb} ${
            reverse ? "-right-20" : "-left-20"
          }`}
        />
        <div
          className={`relative grid gap-10 p-6 pb-12 sm:p-8 sm:pb-14 lg:p-12 ${
            reverse
              ? "lg:grid-cols-[0.95fr_1.05fr]"
              : "lg:grid-cols-[1.05fr_0.95fr]"
          }`}
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15% 0px" }}
            className={reverse ? "lg:order-2" : ""}
          >
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center gap-2"
            >
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider ${t.chip}`}
              >
                <Icon size={14} aria-hidden />
                {project.category}
              </span>
              {badge ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-background">
                  <Star size={12} aria-hidden className="fill-current" />
                  {badge}
                </span>
              ) : null}
            </motion.div>

            <motion.h3
              variants={staggerItem}
              className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl"
            >
              {project.title}
            </motion.h3>
            <motion.p
              variants={staggerItem}
              className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {project.description}
            </motion.p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {project.capabilities.map((capability) => (
                <motion.li
                  key={capability}
                  variants={staggerItem}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
                >
                  <CheckCircle2
                    size={17}
                    className={`mt-0.5 shrink-0 ${t.check}`}
                    aria-hidden
                  />
                  {capability}
                </motion.li>
              ))}
            </ul>

            <motion.div
              variants={staggerItem}
              className="mt-7 flex flex-wrap gap-2"
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-border-soft bg-background/70 px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.a
              variants={staggerItem}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent to-accent-2 transition-transform duration-500 ease-out group-hover:translate-x-0" />
              <span className="relative">Visitar {host}</span>
              <ArrowUpRight
                size={17}
                className="relative transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, rotate: reverse ? -3 : 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
            className={`self-center ${reverse ? "lg:order-1" : ""}`}
          >
            {visual}
          </motion.div>
        </div>
      </motion.article>
    </div>
  );
}

const campusTasks = [
  { subject: "Español", title: "Crónica de mi comunidad" },
  { subject: "Matemáticas", title: "Fracciones equivalentes" },
  { subject: "Ciencias", title: "Nuestro ecosistema" },
];

const campusDays = [14, 15, 16, 17, 18];

function CampusMockup() {
  const [role, setRole] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRole((r) => (r + 1) % cehf.roles.length),
      2600,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="glass glow-ring relative rounded-2xl p-4 sm:p-5">
      <div className="flex items-center justify-between border-b border-border-soft pb-4">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-accent-2 to-accent text-white">
            <GraduationCap size={15} aria-hidden />
          </span>
          <span className="text-sm font-semibold">Campus CEHF</span>
        </div>
        <span className="font-mono text-[11px] text-muted">cehf.com.mx</span>
      </div>

      <div
        className="mt-4 grid grid-cols-3 gap-1 rounded-xl border border-border-soft bg-background/70 p-1"
        aria-hidden
      >
        {cehf.roles.map((r, i) => (
          <span
            key={r.title}
            className={`relative rounded-lg px-2 py-1.5 text-center text-[11px] font-medium transition-colors duration-300 sm:text-xs ${
              role === i ? "text-background" : "text-muted"
            }`}
          >
            {role === i ? (
              <motion.span
                layoutId="campus-role"
                className="absolute inset-0 rounded-lg bg-foreground"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            ) : null}
            <span className="relative">{r.title}</span>
          </span>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-[1fr_auto] items-center gap-4 rounded-xl border border-border-soft bg-background/70 p-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
            Tu semana
          </p>
          <p className="mt-1 text-sm font-semibold sm:text-base">
            Hoy es un buen día para avanzar.
          </p>
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={role}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="mt-1 font-mono text-[10px] text-muted"
            >
              {cehf.roles[role].detail}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="relative h-16 w-16">
          <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="26"
              fill="none"
              stroke="var(--border)"
              strokeWidth="6"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="26"
              fill="none"
              stroke="var(--accent-2)"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 0.92 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.4, ease: EASE }}
            />
          </svg>
          <span className="absolute inset-0 grid place-items-center font-mono text-xs font-bold">
            92%
          </span>
        </div>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-[1.25fr_1fr]">
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-2"
        >
          {campusTasks.map((task, i) => (
            <motion.li
              key={task.title}
              variants={staggerItem}
              className="flex items-center gap-3 rounded-xl border border-border-soft bg-background/70 px-3 py-2.5"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: 0.9 + i * 0.25,
                }}
                className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green-500/15 text-green-500"
              >
                <CheckCircle2 size={13} aria-hidden />
              </motion.span>
              <span className="min-w-0">
                <span className="block font-mono text-[9px] uppercase tracking-wider text-accent-2">
                  {task.subject}
                </span>
                <span className="block truncate text-xs font-medium">
                  {task.title}
                </span>
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <div className="rounded-xl border border-border-soft bg-background/70 p-3">
          <p className="font-mono text-[9px] uppercase tracking-widest text-muted">
            Septiembre
          </p>
          <div className="mt-2 grid grid-cols-5 gap-1">
            {campusDays.map((d) => (
              <span
                key={d}
                className={`grid aspect-square place-items-center rounded-lg font-mono text-[11px] ${
                  d === 16
                    ? "bg-gradient-to-br from-accent-2 to-accent font-bold text-white"
                    : "text-muted"
                }`}
              >
                {d}
              </span>
            ))}
          </div>
          <p className="mt-3 rounded-lg bg-accent-2/10 px-2 py-1.5 text-[10px] leading-tight">
            <span className="font-semibold">Repaso de ciencias</span>{" "}
            <span className="font-mono text-muted">10:30</span>
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -30, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.4, ease: EASE }}
        className="absolute -bottom-5 -left-2 flex items-center gap-2.5 rounded-xl border border-border-soft bg-background/95 px-3 py-2.5 shadow-xl sm:-left-6"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-2/15 text-accent-2">
          <Bell size={16} aria-hidden />
        </span>
        <div>
          <p className="text-xs font-semibold">Nuevo aviso para familias</p>
          <p className="font-mono text-[10px] text-muted">Comunidad · ahora</p>
        </div>
      </motion.div>
    </div>
  );
}

function HorizontalProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [current, setCurrent] = useState(1);
  const distanceMV = useMotionValue(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const d = Math.max(0, track.scrollWidth - window.innerWidth);
      setDistance(d);
      distanceMV.set(d);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [distanceMV]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(() => -scrollYProgress.get() * distanceMV.get());
  const smoothX = useSpring(x, { stiffness: 200, damping: 40, mass: 0.4 });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setCurrent(Math.min(projects.length, Math.floor(v * projects.length) + 1));
  });

  return (
    <div
      ref={sectionRef}
      className="relative mt-24"
      style={{ height: `calc(100svh + ${distance}px)` }}
    >
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden pt-16">
        <div className="mx-auto flex w-full max-w-6xl items-end justify-between gap-6 px-4 sm:px-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Experiencia profesional · Corebiz
            </p>
            <h3 className="mt-2 text-2xl font-bold sm:text-4xl">
              E-commerce para marcas líderes
            </h3>
            <p className="mt-2 hidden max-w-md text-sm leading-relaxed text-muted sm:block">
              Proyectos realizados como parte de mi puesto en Corebiz México.
            </p>
          </div>
          <p className="shrink-0 font-mono text-sm text-muted" aria-hidden>
            <span className="text-2xl font-bold text-foreground">
              {String(current).padStart(2, "0")}
            </span>{" "}
            / {String(projects.length).padStart(2, "0")}
          </p>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x: smoothX }}
          className="mt-8 flex w-max gap-5 px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw_-_72rem)/2_+_1.5rem))]"
        >
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar ${project.title}`}
              className="group relative flex w-[82vw] shrink-0 flex-col overflow-hidden rounded-3xl border border-border-soft bg-card backdrop-blur transition-colors duration-500 hover:border-accent/50 sm:w-[420px]"
            >
              <div className="relative flex h-36 items-center justify-center overflow-hidden bg-white sm:h-44">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-accent-2/0 transition-colors duration-500 group-hover:from-accent/10 group-hover:to-accent-2/10" />
                {project.logo ? (
                  <span className="relative flex aspect-[5/2] w-[62%] items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
                    <Image
                      src={project.logo}
                      alt={`Logo de ${project.title}`}
                      {...logoSizing(project.logo)}
                      className="h-auto max-h-full object-contain"
                    />
                  </span>
                ) : null}
                <span className="absolute left-4 top-4 font-mono text-xs text-black/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-black/5 text-black/60 transition-all duration-500 group-hover:rotate-45 group-hover:bg-black group-hover:text-white">
                  <ArrowUpRight size={16} aria-hidden />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                  <Sparkles size={12} aria-hidden />
                  {project.category}
                </span>
                <h4 className="mt-4 text-2xl font-bold">{project.title}</h4>
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
              </div>
            </a>
          ))}
        </motion.div>

        <div className="mx-auto mt-8 w-full max-w-6xl px-4 sm:px-6">
          <div className="h-px w-full bg-border-soft">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-px origin-left bg-gradient-to-r from-accent via-accent-2 to-accent-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const additionalIndependentProjects = independentProjects.filter(
    (project) =>
      project.title !== estateAdmin.title && project.title !== cehf.title,
  );

  return (
    <section id="projects" className="relative pt-24 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="01"
          eyebrow="Proyectos"
          title="Productos completos y experiencias a escala"
          highlight={["completos", "escala"]}
          description="Plataformas y productos digitales desarrollados para clientes y proyectos personales, con enfoque en la experiencia de usuario y la calidad del código."
        />

        <FeaturedShowcase
          project={cehf}
          icon={GraduationCap}
          badge="Proyecto destacado"
          theme="cyan"
          visual={<CampusMockup />}
        />

        <FeaturedShowcase
          project={estateAdmin}
          icon={Building2}
          visual={<Dashboard />}
          reverse
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-8 rounded-3xl border border-border-soft bg-card p-5 backdrop-blur sm:p-6"
        >
          <motion.p
            variants={staggerItem}
            className="font-mono text-xs uppercase tracking-widest text-accent-2"
          >
            Más productos por proyecto
          </motion.p>
          <div
            className={`mt-4 grid gap-3 ${
              additionalIndependentProjects.length > 1 ? "sm:grid-cols-2" : ""
            }`}
          >
            {additionalIndependentProjects.map((project) => (
              <motion.a
                key={project.title}
                variants={staggerItem}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-4 rounded-2xl border border-border-soft bg-background p-5 transition-colors hover:border-accent-2/60"
              >
                <div>
                  <p className="text-lg font-semibold">{project.title}</p>
                  <p className="mt-1 font-mono text-xs text-accent-2">
                    {project.category}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border-soft text-muted transition-all duration-500 group-hover:rotate-45 group-hover:border-accent-2 group-hover:text-accent-2">
                  <ArrowUpRight size={16} aria-hidden />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <HorizontalProjects />
    </section>
  );
}
