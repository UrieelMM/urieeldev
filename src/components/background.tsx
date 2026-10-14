"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export function Background() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const sx = useSpring(mx, { stiffness: 120, damping: 25 });
  const sy = useSpring(my, { stiffness: 120, damping: 25 });
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, var(--glow), transparent 70%)`;

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0">
        <motion.div
          style={{ y: y1 }}
          className="absolute -left-40 -top-40 h-[40rem] w-[40rem]"
        >
          <div className="animate-aurora h-full w-full rounded-full bg-accent/20 blur-[120px]" />
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="absolute -right-40 top-20 h-[36rem] w-[36rem]"
        >
          <div className="animate-aurora h-full w-full rounded-full bg-accent-2/15 blur-[120px] [animation-delay:-6s]" />
        </motion.div>
        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-0 left-1/3 h-[32rem] w-[32rem]"
        >
          <div className="animate-aurora h-full w-full rounded-full bg-accent-3/10 blur-[120px] [animation-delay:-12s]" />
        </motion.div>
      </div>
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{ background: spotlight }}
      />
      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.06]" />
    </div>
  );
}
