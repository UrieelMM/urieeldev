import { Mail, ArrowUp } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { site, navLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border-soft bg-background-subtle">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a
              href="#hero"
              className="flex w-fit items-center gap-2 font-mono text-lg font-bold"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-white">
                U
              </span>
              {site.brand.split(".")[0]}
              <span className="text-accent">.dev</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.role} con especialidad frontend y experiencia construyendo
              soluciones backend, cloud y e-commerce.
            </p>
          </div>

          <nav aria-label="Pie de página" className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-muted">
              Navegación
            </span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-muted">
              Sígueme
            </span>
            <div className="flex gap-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-soft bg-card transition-colors hover:border-accent hover:text-accent"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-soft bg-card transition-colors hover:border-accent hover:text-accent"
              >
                <Mail size={18} />
              </a>
              <a
                href="#hero"
                aria-label="Volver arriba"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-soft bg-card transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowUp size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border-soft pt-6 text-sm text-muted sm:flex-row">
          <p>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <p className="font-mono text-xs">
            Hecho con Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
