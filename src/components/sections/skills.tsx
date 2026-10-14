"use client";

import { useRef, type CSSProperties } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Code2, Layers, Cloud, ShoppingCart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillGroups, type SkillGroup } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { EASE } from "@/components/ui/reveal";

const icons: LucideIcon[] = [Code2, Layers, Cloud, ShoppingCart];

function FrontendArt() {
  const blocks = [
    "col-span-6 h-5",
    "col-span-4 h-16",
    "col-span-2 h-16",
    "col-span-2 h-10",
    "col-span-2 h-10",
    "col-span-2 h-10",
  ];
  return (
    <div className="h-full rounded-2xl border border-border-soft bg-background/70 p-3">
      <div className="mb-3 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
        <span className="h-2 w-2 rounded-full bg-green-400/70" />
      </div>
      <div className="grid grid-cols-6 gap-2">
        {blocks.map((cls, i) => (
          <motion.span
            key={i}
            className={`${cls} rounded-lg bg-gradient-to-br from-accent/30 to-accent-2/15`}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: EASE }}
          />
        ))}
      </div>
      <motion.div
        className="mt-3 h-2 rounded-full bg-gradient-to-r from-accent to-accent-2"
        animate={{ width: ["20%", "85%", "20%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function BackendArt() {
  const nodes = [
    { x: 40, y: 50, l: "API" },
    { x: 160, y: 30, l: "DB" },
    { x: 160, y: 120, l: "ERP" },
    { x: 270, y: 75, l: "UI" },
  ];
  const links = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
  ];
  return (
    <svg viewBox="0 0 310 150" className="h-full w-full" fill="none">
      {links.map(([a, b], i) => (
        <path
          key={i}
          d={`M${nodes[a].x} ${nodes[a].y} C ${(nodes[a].x + nodes[b].x) / 2} ${nodes[a].y}, ${(nodes[a].x + nodes[b].x) / 2} ${nodes[b].y}, ${nodes[b].x} ${nodes[b].y}`}
          stroke="var(--accent-2)"
          strokeOpacity={0.6}
          strokeWidth={1.5}
          strokeDasharray="4 6"
          className="animate-dash"
        />
      ))}
      {nodes.map((n, i) => (
        <motion.g
          key={n.l}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 16,
            delay: 0.2 + i * 0.1,
          }}
          style={{
            transformOrigin: `${n.x}px ${n.y}px`,
            transformBox: "view-box",
          }}
        >
          <rect
            x={n.x - 24}
            y={n.y - 15}
            width={48}
            height={30}
            rx={9}
            fill="var(--background)"
            stroke="var(--accent)"
            strokeOpacity={0.6}
          />
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            className="fill-foreground font-mono"
            style={{ fontSize: 11 }}
          >
            {n.l}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

function CloudArt() {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: EASE }}
          className="flex items-center gap-3 rounded-xl border border-border-soft bg-background/70 px-4 py-3"
        >
          <span className="flex gap-1">
            {[0, 1, 2].map((d) => (
              <motion.span
                key={d}
                className="h-1.5 w-1.5 rounded-full bg-green-400"
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: (i * 3 + d) * 0.15,
                }}
              />
            ))}
          </span>
          <span className="h-1.5 flex-1 rounded-full bg-border-soft">
            <motion.span
              className="block h-full rounded-full bg-gradient-to-r from-accent-2 to-accent"
              animate={{ width: ["30%", `${60 + i * 12}%`, "30%"] }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
          <span className="font-mono text-[10px] text-muted">
            node-0{i + 1}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function CommerceArt() {
  const steps = ["Carrito", "Envío", "Pago", "✓"];
  return (
    <div className="flex h-full flex-col justify-center gap-5 rounded-2xl border border-border-soft bg-background/70 p-5">
      <div className="flex items-center justify-between">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center last:flex-none">
            <motion.span
              initial={{ scale: 0.5, opacity: 0.3 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3 + i * 0.35,
                type: "spring",
                stiffness: 260,
                damping: 15,
              }}
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-2 font-mono text-[10px] font-bold text-white"
            >
              {i + 1}
            </motion.span>
            {i < steps.length - 1 ? (
              <span className="mx-1 h-0.5 flex-1 overflow-hidden rounded-full bg-border-soft">
                <motion.span
                  className="block h-full origin-left bg-gradient-to-r from-accent to-accent-2"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.45 + i * 0.35 }}
                />
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex justify-between font-mono text-[10px] text-muted">
        {steps.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.8, duration: 0.6, ease: EASE }}
        className="flex items-center justify-between rounded-xl bg-accent/10 px-4 py-3"
      >
        <span className="text-xs font-medium">Conversión</span>
        <span className="font-mono text-sm font-bold text-gradient">+20%</span>
      </motion.div>
    </div>
  );
}

const arts = [FrontendArt, BackendArt, CloudArt, CommerceArt];

function SkillCard({
  group,
  index,
  total,
  progress,
}: {
  group: SkillGroup;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const Icon = icons[index % icons.length];
  const Art = arts[index % arts.length];
  const targetScale = 1 - (total - 1 - index) * 0.05;
  const steps = Math.max(1, total - 1);
  const start = Math.min(index / steps, 1);
  const covered = Math.min((index + 1) / steps, 1);
  const isLast = index === total - 1;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);
  const dim = useTransform(progress, [start, covered], [0, isLast ? 0 : 0.5]);

  return (
    <div
      style={{ "--i": index } as CSSProperties}
      className="sticky top-0 flex h-svh items-center justify-center pb-6 pt-16"
    >
      <motion.article
        style={{ scale }}
        className="relative top-[calc(var(--i)_*_1rem_-_1.5rem)] w-full origin-top overflow-hidden md:top-[calc(var(--i)_*_1.75rem_-_2.5rem)] md:min-h-[26rem] rounded-[2rem] border border-border-soft bg-background-subtle shadow-2xl shadow-black/20"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-[90px]" />
        <div className="relative grid gap-6 p-6 sm:p-10 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-2/20 text-accent">
                <Icon size={22} />
              </span>
              <span
                className="text-outline font-mono text-5xl font-bold sm:text-7xl"
                aria-hidden
              >
                0{index + 1}
              </span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {group.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              {group.description}
            </p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-2">
              {group.skills.map((skill, i) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.05,
                    ease: EASE,
                  }}
                  className="rounded-lg border border-border-soft bg-background px-2.5 py-1 font-mono text-xs text-foreground/80"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="h-40 sm:h-52 md:h-auto md:min-h-60" aria-hidden>
            <Art />
          </div>
        </div>
        <motion.div
          style={{ opacity: dim }}
          className="pointer-events-none absolute inset-0 bg-background"
        />
      </motion.article>
    </div>
  );
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="skills" className="relative pt-24 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="04"
          eyebrow="Capacidades"
          title="Del producto visible a la lógica que lo sostiene"
          highlight={["visible", "sostiene"]}
          description="Combino especialización frontend con experiencia backend, cloud e integraciones para desarrollar soluciones completas."
        />
        <div ref={ref} className="relative -mt-8 pb-[10vh]">
          {skillGroups.map((group, i) => (
            <SkillCard
              key={group.title}
              group={group}
              index={i}
              total={skillGroups.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
