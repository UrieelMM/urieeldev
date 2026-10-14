"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Loader2,
} from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/data";
import { WordsReveal } from "@/components/ui/words-reveal";
import {
  EASE,
  Reveal,
  staggerContainer,
  staggerItem,
} from "@/components/ui/reveal";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 20%"],
  });
  const titleScale = useTransform(scrollYProgress, [0, 1], [0.55, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const letterSpacing = useTransform(
    scrollYProgress,
    [0, 1],
    ["0.12em", "-0.04em"],
  );
  const orbScale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const orbOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");

    setStatus("loading");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
          _subject: `Nuevo mensaje de ${name} — Portfolio`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = (await res.json()) as { success?: string | boolean };
      if (!res.ok || !(json.success === "true" || json.success === true)) {
        throw new Error("Request failed");
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: site.whatsappNumber,
      href: site.whatsapp,
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: site.phone,
      href: `tel:${site.phoneHref}`,
    },
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      value: "in/uriel-mm",
      href: site.linkedin,
    },
    { icon: MapPin, label: "Ubicación", value: site.location, href: undefined },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-clip py-24 sm:py-32"
    >
      <motion.div
        aria-hidden
        style={{ scale: orbScale, opacity: orbOpacity }}
        className="pointer-events-none absolute left-1/2 top-40 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-accent/25 via-accent-2/15 to-accent-3/20 blur-[120px]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent"
          >
            <span className="text-muted">06</span>
            <span className="h-px w-10 bg-gradient-to-r from-accent to-accent-2" />
            Contacto
          </motion.p>
          <motion.h2
            style={{ scale: titleScale, opacity: titleOpacity, letterSpacing }}
            className="mt-6 text-[3.2rem] font-extrabold leading-[0.95] sm:text-8xl lg:text-[8.5rem]"
          >
            <span className="block">¿Hablamos?</span>
          </motion.h2>
          <WordsReveal
            as="p"
            text="Cuéntame de tu próximo reto."
            highlight={["reto."]}
            delay={0.1}
            className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-4xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Estoy disponible para oportunidades profesionales y proyectos donde
            pueda aportar en frontend, backend o e-commerce.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="flex flex-col gap-4"
          >
            {contactItems.map((c) => {
              const Icon = c.icon;
              const inner = (
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-muted">
                      {c.label}
                    </p>
                    <p className="truncate font-medium">{c.value}</p>
                  </div>
                </div>
              );
              return c.href ? (
                <motion.a
                  variants={staggerItem}
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group rounded-2xl border border-border-soft bg-card p-4 backdrop-blur transition-all duration-300 hover:translate-x-1 hover:border-accent/50"
                >
                  {inner}
                </motion.a>
              ) : (
                <motion.div
                  variants={staggerItem}
                  key={c.label}
                  className="rounded-2xl border border-border-soft bg-card p-4 backdrop-blur"
                >
                  {inner}
                </motion.div>
              );
            })}

            <motion.button
              variants={staggerItem}
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border-soft bg-card p-4 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "¡Correo copiado!" : "Copiar correo"}
            </motion.button>
          </motion.div>

          <Reveal
            direction="left"
            delay={0.15}
            className="glass glow-ring conic-border rounded-3xl p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Tu nombre"
                    className="rounded-xl border border-border-soft bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="tu@correo.com"
                    className="rounded-xl border border-border-soft bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto…"
                  className="resize-none rounded-xl border border-border-soft bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Enviando…
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>

              <p
                aria-live="polite"
                role="status"
                className={`min-h-5 text-sm ${
                  status === "success"
                    ? "text-green-500"
                    : status === "error"
                      ? "text-red-500"
                      : "text-muted"
                }`}
              >
                {status === "success" &&
                  "¡Gracias! Tu mensaje fue enviado. Te responderé pronto."}
                {status === "error" &&
                  "Ocurrió un error al enviar. Intenta de nuevo o escríbeme directo a " +
                    site.email}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
