"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Gauge,
  LayoutTemplate,
  MessagesSquare,
  Plug,
  ShoppingBag,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services, site } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Magnetic } from "@/components/ui/magnetic";
import { EASE, staggerContainer, staggerItem } from "@/components/ui/reveal";

const icons: LucideIcon[] = [
  ShoppingBag,
  LayoutTemplate,
  Code2,
  Plug,
  Gauge,
  MessagesSquare,
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative pt-32 sm:pt-40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div id="services-heading">
          <SectionHeading
            index="02"
            eyebrow="Servicios"
            title="Lo que puedo construir para tu negocio"
            highlight={["construir", "negocio"]}
            description="Desarrollo web a medida para marcas, startups y equipos de producto: desde una landing que convierte hasta un e-commerce o una plataforma completa."
          />
        </div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.li
                key={service.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-3xl border border-border-soft bg-card p-6 backdrop-blur transition-colors duration-500 hover:border-accent/50 sm:p-7"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-colors duration-700 group-hover:bg-accent/20" />
                <div className="relative flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/15 text-accent transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon size={22} aria-hidden />
                  </span>
                  <span className="font-mono text-xs text-muted" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="relative mt-6 text-xl font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <motion.span
                  aria-hidden
                  className="relative mt-6 block h-px origin-left bg-gradient-to-r from-accent via-accent-2 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.1,
                    delay: 0.3 + i * 0.08,
                    ease: EASE,
                  }}
                />
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/10 via-card to-accent-2/10 p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <p className="text-xl font-bold tracking-tight sm:text-2xl">
              ¿Tienes un proyecto en mente?
            </p>
            <p className="mt-1 text-sm text-muted sm:text-base">
              Cuéntame qué necesitas y te propongo alcance, tiempos y una
              estimación.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Magnetic>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent to-accent-2 transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span className="relative">Cotiza tu proyecto</span>
                <ArrowUpRight
                  size={17}
                  className="relative transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border-soft bg-card px-5 py-3 text-sm font-semibold transition-colors hover:border-green-500 hover:text-green-500"
              >
                WhatsApp
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
