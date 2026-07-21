"use client";

import { motion } from "framer-motion";

const CENTER = 200;

function polar(r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: CENTER + r * Math.cos(rad), y: CENTER + r * Math.sin(rad) };
}

type Shape = "circle" | "square" | "triangle" | "hex" | "plus";

const orbits: {
  r: number;
  dur: number;
  dir: 1 | -1;
  nodes: { a: number; s: Shape }[];
}[] = [
  {
    r: 150,
    dur: 42,
    dir: 1,
    nodes: [
      { a: 15, s: "square" },
      { a: 120, s: "circle" },
      { a: 235, s: "triangle" },
    ],
  },
  {
    r: 188,
    dur: 58,
    dir: -1,
    nodes: [
      { a: 60, s: "hex" },
      { a: 175, s: "plus" },
      { a: 300, s: "circle" },
    ],
  },
];

function Node({ x, y, s }: { x: number; y: number; s: Shape }) {
  const c = "url(#hvStroke)";
  if (s === "square")
    return <rect x={x - 5} y={y - 5} width={10} height={10} rx={2} fill={c} />;
  if (s === "triangle")
    return (
      <polygon
        points={`${x},${y - 6} ${x + 6},${y + 5} ${x - 6},${y + 5}`}
        fill={c}
      />
    );
  if (s === "hex")
    return (
      <polygon
        points={`${x + 6},${y} ${x + 3},${y + 5} ${x - 3},${y + 5} ${x - 6},${y} ${x - 3},${y - 5} ${x + 3},${y - 5}`}
        fill={c}
      />
    );
  if (s === "plus")
    return (
      <g stroke={c} strokeWidth={2.5} strokeLinecap="round">
        <line x1={x - 5} y1={y} x2={x + 5} y2={y} />
        <line x1={x} y1={y - 5} x2={x} y2={y + 5} />
      </g>
    );
  return <circle cx={x} cy={y} r={5} fill={c} />;
}

const glyphs = [
  { t: "</>", x: 40, y: 70 },
  { t: "{ }", x: 360, y: 88 },
  { t: "( )", x: 372, y: 300 },
  { t: "=>", x: 36, y: 250 },
  { t: "[ ]", x: 320, y: 360 },
  { t: "#", x: 70, y: 350 },
  { t: "1010", x: 300, y: 44 },
  { t: "*", x: 200, y: 30 },
];

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative aspect-square w-full max-w-[460px]"
      aria-hidden="true"
    >
      <div className="animate-float absolute inset-10 rounded-full bg-accent/20 blur-[90px]" />

      <svg viewBox="0 0 400 400" fill="none" className="relative h-full w-full">
        <defs>
          <linearGradient id="hvStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" style={{ stopColor: "var(--accent)" }} />
            <stop offset="100%" style={{ stopColor: "var(--accent-3)" }} />
          </linearGradient>
          <linearGradient id="hvStroke2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" style={{ stopColor: "var(--accent-2)" }} />
            <stop offset="100%" style={{ stopColor: "var(--accent)" }} />
          </linearGradient>
        </defs>

        {/* Faint dashed rings */}
        {orbits.map((o) => (
          <circle
            key={`ring-${o.r}`}
            cx={CENTER}
            cy={CENTER}
            r={o.r}
            stroke="url(#hvStroke)"
            strokeWidth={1}
            strokeDasharray="2 9"
            opacity={0.3}
          />
        ))}

        {/* Rotating orbits with shaped component-nodes */}
        {orbits.map((o) => (
          <motion.g
            key={`orbit-${o.r}`}
            style={{ transformOrigin: "200px 200px", transformBox: "view-box" }}
            animate={{ rotate: o.dir * 360 }}
            transition={{ duration: o.dur, repeat: Infinity, ease: "linear" }}
          >
            {o.nodes.map((n, i) => {
              const p = polar(o.r, n.a);
              return (
                <g key={i}>
                  <line
                    x1={CENTER}
                    y1={CENTER}
                    x2={p.x}
                    y2={p.y}
                    stroke="url(#hvStroke)"
                    strokeWidth={1}
                    opacity={0.14}
                  />
                  <Node x={p.x} y={p.y} s={n.s} />
                </g>
              );
            })}
          </motion.g>
        ))}

        {/* Bezier design curve with anchor points (pen tool / design) */}
        <motion.g
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M40 330 C 120 250, 130 380, 210 320"
            stroke="url(#hvStroke2)"
            strokeWidth={1.5}
            strokeDasharray="4 4"
            fill="none"
            opacity={0.7}
          />
          <rect x={37} y={327} width={6} height={6} fill="url(#hvStroke2)" />
          <rect x={207} y={317} width={6} height={6} fill="url(#hvStroke2)" />
          <circle cx={120} cy={250} r={2.5} fill="url(#hvStroke2)" />
          <circle cx={130} cy={380} r={2.5} fill="url(#hvStroke2)" />
        </motion.g>

        {/* Database cylinder (data) */}
        <motion.g
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          opacity={0.75}
        >
          <g
            transform="translate(300 250)"
            stroke="url(#hvStroke)"
            strokeWidth={1.6}
            fill="none"
          >
            <ellipse cx={0} cy={0} rx={14} ry={5} />
            <path d="M-14 0 V16 A14 5 0 0 0 14 16 V0" />
            <path d="M-14 8 A14 5 0 0 0 14 8" />
          </g>
        </motion.g>

        {/* Git branch / merge motif */}
        <motion.g
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          opacity={0.8}
        >
          <g
            transform="translate(96 120)"
            stroke="url(#hvStroke2)"
            strokeWidth={1.6}
            fill="none"
          >
            <line x1={0} y1={-2} x2={0} y2={34} />
            <path d="M0 8 C 0 20, 22 14, 22 26" />
            <circle cx={0} cy={-4} r={4} fill="var(--accent-2)" stroke="none" />
            <circle cx={0} cy={36} r={4} fill="var(--accent-2)" stroke="none" />
            <circle cx={22} cy={28} r={4} fill="var(--accent)" stroke="none" />
          </g>
        </motion.g>

        {/* Floating code glyphs */}
        {glyphs.map((g, i) => (
          <motion.text
            key={g.t + i}
            x={g.x}
            y={g.y}
            textAnchor="middle"
            className="fill-muted font-mono"
            style={{ fontSize: g.t.length > 2 ? 11 : 15 }}
            animate={{ y: [g.y, g.y - 9, g.y], opacity: [0.3, 0.65, 0.3] }}
            transition={{
              duration: 5 + (i % 3),
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {g.t}
          </motion.text>
        ))}
      </svg>

      {/* Central code editor window */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.7 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="glass glow-ring absolute left-1/2 top-1/2 w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-2xl p-3.5"
      >
        <div className="mb-2.5 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400/80" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
          <span className="h-2 w-2 rounded-full bg-green-400/80" />
          <span className="ml-1 font-mono text-[8px] text-muted">product.ts</span>
        </div>
        <div className="space-y-1.5 font-mono text-[9px] leading-none">
          <p>
            <span className="text-accent-3">const</span>{" "}
            <span className="text-foreground">focus</span> ={" "}
            <span className="text-accent-2">&apos;end-to-end&apos;</span>
          </p>
          <p className="pl-3">
            <span className="text-accent">build</span>
            <span className="text-muted">(</span>
            <span className="text-accent-2">frontend, backend</span>
            <span className="text-muted">)</span>
          </p>
          <p className="pl-3">
            <span className="text-accent-3">return</span>{" "}
            <span className="text-accent-2">&lt;Impact /&gt;</span>
          </p>
          <div className="flex gap-1.5 pt-0.5">
            <span className="h-1 w-8 rounded-full bg-accent/40" />
            <span className="h-1 w-5 rounded-full bg-accent-2/40" />
            <span className="h-1 w-10 rounded-full bg-accent-3/30" />
          </div>
        </div>
      </motion.div>

      {/* Terminal chip */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 1 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="glass absolute -bottom-1 left-1 rounded-xl px-2.5 py-1.5 font-mono text-[8px]"
      >
        <span className="text-accent-2">❯</span>{" "}
        <span className="text-muted">npm run</span>{" "}
        <span className="text-foreground">build</span>{" "}
        <span className="text-green-400">✓</span>
      </motion.div>

      {/* Design swatch chip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 1.15 },
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="glass absolute -top-1 right-2 flex items-center gap-1.5 rounded-xl px-2.5 py-1.5"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-2" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-3" />
      </motion.div>
    </motion.div>
  );
}
