"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Copy, Check, Loader2 } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");

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
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contacto"
          title="¿Hablamos de tu próximo reto?"
          description="Estoy disponible para oportunidades profesionales y proyectos donde pueda aportar en frontend, backend o e-commerce."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal direction="left" className="flex flex-col gap-4">
            {contactItems.map((c) => {
              const Icon = c.icon;
              const inner = (
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
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
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rounded-2xl border border-border-soft bg-card p-4 transition-colors hover:border-accent/50"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={c.label}
                  className="rounded-2xl border border-border-soft bg-card p-4"
                >
                  {inner}
                </div>
              );
            })}

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border-soft bg-card p-4 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "¡Correo copiado!" : "Copiar correo"}
            </button>
          </Reveal>

          <Reveal
            direction="right"
            className="glass glow-ring rounded-3xl p-6 sm:p-8"
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
