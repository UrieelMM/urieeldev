"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Cloud, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillGroups } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, staggerItem } from "@/components/ui/reveal";

const icons: LucideIcon[] = [Code2, Layers, Cloud, Wrench];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Capacidades"
          title="Del producto visible a la lógica que lo sostiene"
          description="Combino especialización frontend con experiencia backend, cloud e integraciones para desarrollar soluciones completas."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-5 md:grid-cols-2"
        >
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={group.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="glass glow-ring group flex flex-col gap-4 rounded-2xl p-6 sm:p-7"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent transition-transform group-hover:scale-110">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{group.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {group.description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-border-soft bg-background px-2.5 py-1 font-mono text-xs text-muted transition-colors group-hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
