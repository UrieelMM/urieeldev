"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { useLenis } from "./smooth-scroll";
import { EASE } from "./ui/reveal";

const sectionIds = ["hero", ...navLinks.map((l) => l.href.slice(1))];

function useActiveSection() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.4;
      let current = "hero";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return active;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const active = useActiveSection();
  const lenis = useLenis();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 20);
    setHidden(y > 600 && y > prev + 4);
    if (y < prev - 4) setHidden(false);
  });

  useEffect(() => {
    if (lenis) {
      if (open) lenis.stop();
      else lenis.start();
    } else {
      // Touch devices use native scrolling (no Lenis): lock it while the menu is open.
      document.documentElement.style.overflow = open ? "hidden" : "";
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (!lenis) document.documentElement.style.overflow = "";
    };
  }, [open, lenis]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden && !open ? "-120%" : "0%" }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <motion.div
          className="h-0.5 origin-left bg-gradient-to-r from-accent via-accent-2 to-accent-3"
          style={{ scaleX: progress }}
        />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.nav
            aria-label="Principal"
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className={`relative z-10 mt-3 flex items-center justify-between rounded-2xl px-4 py-3 transition-[background-color,border-color,box-shadow] duration-500 ${
              scrolled || open
                ? "border border-border-soft bg-background/75 shadow-lg shadow-black/5 backdrop-blur-xl"
                : "border border-transparent bg-transparent"
            }`}
          >
            <a
              href="#hero"
              className="group flex items-center gap-2 font-mono text-lg font-bold tracking-tight"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-white shadow-lg transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                U
              </span>
              <span>
                {site.brand.split(".")[0]}
                <span className="text-accent">.dev</span>
              </span>
            </a>

            <ul className="hidden items-center gap-0.5 md:flex">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <li key={link.href} className="relative">
                    {isActive ? (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg border border-border-soft bg-card"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                        aria-hidden
                      />
                    ) : null}
                    <a
                      href={link.href}
                      aria-current={isActive ? "location" : undefined}
                      className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-foreground"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="group hidden items-center gap-1 rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-105 sm:inline-flex"
              >
                Hablemos
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-card text-foreground md:hidden"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={open ? "x" : "menu"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {open ? <X size={18} /> : <Menu size={18} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </motion.nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 40px)" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-background/95 px-6 pb-10 pt-28 backdrop-blur-2xl md:hidden"
          >
            <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-accent/25 blur-[90px]" />
            <div className="pointer-events-none absolute -left-24 bottom-24 h-72 w-72 rounded-full bg-accent-2/20 blur-[90px]" />
            <ul className="relative flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <li key={link.href} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "110%", transition: { duration: 0.25 } }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + i * 0.06,
                      ease: EASE,
                    }}
                    className="flex items-baseline gap-4 py-2 text-4xl font-bold tracking-tight"
                  >
                    <span className="font-mono text-xs text-accent">
                      0{i + 1}
                    </span>
                    <span
                      className={
                        active === link.href.slice(1) ? "text-gradient" : ""
                      }
                    >
                      {link.label}
                    </span>
                  </motion.a>
                </li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
              className="relative mt-auto flex flex-col gap-4"
            >
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-foreground px-5 py-4 text-center text-base font-semibold text-background"
              >
                Hablemos
              </a>
              <p className="text-center font-mono text-xs text-muted">
                {site.email}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
