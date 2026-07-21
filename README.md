# urieel.dev — Portfolio

Portfolio personal de **Uriel Mojica Mejía**, Senior Software Engineer. Sitio moderno, responsive, accesible y optimizado para SEO.

## Stack

- **Next.js 16** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (animaciones)
- **next-themes** (modo claro/oscuro)
- **lucide-react** (iconografía)

## Características

- Diseño UI/UX moderno con gradientes, glassmorphism y fondo animado (aurora).
- Animaciones profesionales de entrada y scroll (respetan `prefers-reduced-motion`).
- 100% responsive (mobile-first) con menú móvil accesible.
- Accesibilidad: HTML semántico, skip-link, `aria-label`, focus visible, contraste cuidado.
- SEO: metadata Open Graph/Twitter, JSON-LD (Schema.org Person), `sitemap.xml`, `robots.txt`, manifest y imagen OG dinámica.
- Modo claro/oscuro con persistencia.
- Descarga de CV en PDF.

## Secciones

Hero · Sobre mí · Experiencia · Skills · Proyectos · Contacto

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
```

## Producción

```bash
npm run build
npm run start
```

## Personalización

Todo el contenido está centralizado en [`src/lib/data.ts`](src/lib/data.ts): datos personales,
experiencia, proyectos, skills, educación y certificaciones. Los colores del tema se definen
como variables CSS en [`src/app/globals.css`](src/app/globals.css).

## Estructura

```
src/
├── app/
│   ├── layout.tsx           # Metadata, fuentes, theme provider, JSON-LD
│   ├── page.tsx             # Ensamblado de secciones
│   ├── globals.css          # Design system (Tailwind v4)
│   ├── sitemap.ts / robots.ts / manifest.ts
│   ├── icon.svg             # Favicon
│   └── opengraph-image.tsx  # Imagen OG dinámica
├── components/
│   ├── navbar.tsx / footer.tsx / background.tsx
│   ├── theme-toggle.tsx / theme-provider.tsx / icons.tsx
│   ├── sections/            # hero, about, experience, skills, projects, contact
│   └── ui/                  # reveal, section-heading
└── lib/
    └── data.ts              # Contenido del portfolio
```

## Antes de publicar

- Actualiza `site.url` en `src/lib/data.ts` con tu dominio real.
- Revisa el handle de Twitter/X en `src/app/layout.tsx` si aplica.
