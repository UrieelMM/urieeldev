"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";

type VelocityMarqueeProps = {
  children: ReactNode;
  /** Base speed in % of a single copy per second. Negative reverses. */
  baseVelocity?: number;
  className?: string;
  copies?: number;
};

export function VelocityMarquee({
  children,
  baseVelocity = 3,
  className = "",
  copies = 4,
}: VelocityMarqueeProps) {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  // Skip per-frame work while the marquee is off-screen.
  const inView = useInView(containerRef, { margin: "100px 0px" });
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    [-1000, 0, 1000],
    [-4, 0, 4],
    {
      clamp: false,
    },
  );
  const skew = useTransform(smoothVelocity, [-2500, 0, 2500], [6, 0, -6]);

  const x = useTransform(baseX, (v) => `${wrap(-100 / copies, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce || !inView) return;
    let moveBy = direction.current * (baseVelocity / copies) * (delta / 1000);
    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;
    moveBy += direction.current * moveBy * factor;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.div className="flex w-max flex-nowrap" style={{ x, skewX: skew }}>
        {Array.from({ length: copies }).map((_, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center"
            aria-hidden={i > 0}
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
