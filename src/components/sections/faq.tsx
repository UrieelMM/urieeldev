"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { EASE, staggerContainer, staggerItem } from "@/components/ui/reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div id="faq-heading" className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Antes de empezar tu proyecto"
            highlight={["proyecto"]}
            description="Lo que suelen preguntarme marcas y equipos antes de trabajar juntos."
          />
        </div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="flex flex-col gap-3"
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            return (
              <motion.li
                key={faq.question}
                variants={staggerItem}
                className={`rounded-2xl border bg-card backdrop-blur transition-colors duration-300 ${
                  isOpen ? "border-accent/40" : "border-border-soft"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-semibold sm:p-6 sm:text-lg"
                  >
                    {faq.question}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border ${
                        isOpen
                          ? "border-accent bg-accent text-white"
                          : "border-border-soft text-muted"
                      }`}
                      aria-hidden
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 leading-relaxed text-muted sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
