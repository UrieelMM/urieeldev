"use client";

import Lenis from "lenis";
import { MotionConfig } from "framer-motion";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(LenisContext);

const NAV_OFFSET = -76;

const easeInOutExpo = (t: number) =>
  t === 0
    ? 0
    : t === 1
      ? 1
      : t < 0.5
        ? Math.pow(2, 20 * t - 10) / 2
        : (2 - Math.pow(2, -20 * t + 10)) / 2;

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      autoRaf: true,
      lerp: 0.09,
      wheelMultiplier: 0.95,
      respectReducedMotion: true,
    });
    // Lenis must be created on the client; expose it to consumers once ready.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLenis(instance);

    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;

      const anchor = (event.target as Element | null)?.closest?.(
        'a[href^="#"]',
      );
      const hash = anchor?.getAttribute("href");
      if (!hash || hash === "#" || hash === "#main") return;

      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;

      event.preventDefault();
      instance.start();

      const isTop = hash === "#hero";
      const distance = isTop
        ? window.scrollY
        : Math.abs(target.getBoundingClientRect().top + NAV_OFFSET);
      const duration = Math.min(2.2, Math.max(1, distance / 2600));

      instance.scrollTo(isTop ? 0 : target, {
        offset: isTop ? 0 : NAV_OFFSET,
        duration,
        easing: easeInOutExpo,
        force: true,
        onComplete: () => {
          if (!target.hasAttribute("tabindex")) {
            target.setAttribute("tabindex", "-1");
          }
          target.focus({ preventScroll: true });
        },
      });
      history.replaceState(
        null,
        "",
        isTop ? window.location.pathname + window.location.search : hash,
      );
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LenisContext.Provider>
  );
}
