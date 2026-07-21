export const site = {
  name: "Uriel Mojica Mejía",
  brand: "urieel.dev",
  role: "Senior Software Engineer",
  specialty: "Frontend-first · Full-stack · E-commerce",
  tagline:
    "Desarrollo productos digitales de principio a fin: interfaces rápidas y accesibles, servicios backend e integraciones en la nube.",
  location: "México",
  email: "urieel.dev@gmail.com",
  phone: "+52 55 3113 9560",
  phoneHref: "+525531139560",
  linkedin: "https://www.linkedin.com/in/uriel-mm",
  url: "https://urieel.dev",
  availability: "Disponible para nuevos retos",
  cv: "/CV-Uriel-Mojica-Mejia.pdf",
} as const;

export const about = {
  summary:
    "Soy Senior Software Engineer con más de 7 años de experiencia desarrollando productos digitales. Trabajo tanto en frontend como en backend, con una especialidad profunda en experiencias web y e-commerce de alto rendimiento.",
  detail:
    "Mi mayor fortaleza está en React, TypeScript, Next.js y VTEX IO, pero también diseño servicios e integraciones con Node.js y NestJS, y trabajo con Google Cloud, Firebase y Supabase. Además, he desarrollado productos independientes por alcance, asumiendo ownership de frontend, backend, datos e integraciones.",
  highlights: [
    "Arquitectura frontend, sistemas de componentes y experiencia de usuario",
    "APIs, middlewares y servicios backend con Node.js y NestJS",
    "Cloud, datos e integraciones con plataformas externas",
    "Colaboración con producto, diseño, marketing y negocio",
  ],
};

export const stats = [
  { value: "7+", label: "Años de experiencia" },
  { value: "+20%", label: "Incremento en ventas" },
  { value: "+50%", label: "Aumento de tráfico" },
  { value: "15+", label: "Marcas y proyectos" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  status?: string;
  location: string;
  summary: string;
  achievements: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Corebiz México",
    role: "Software Engineer",
    period: "Nov 2020 — 2026",
    status: "Etapa concluida",
    location: "México",
    summary:
      "Desarrollé, mantuve y optimicé plataformas de e-commerce para marcas nacionales e internacionales, colaborando con equipos multidisciplinarios y participando en la definición técnica de distintas soluciones.",
    achievements: [
      "Desarrollé componentes en React para Walmart e integré campañas y anuncios dinámicos de Google Ads en sitios de comercio electrónico.",
      "Rediseñé y optimicé el checkout de HEB, mejorando la interfaz, la navegación y la experiencia durante el proceso de compra.",
      "Construí componentes complejos y adaptables para Miniso México, Colombia, Chile y Perú.",
      "Implementé mejoras de UX y automatización que contribuyeron a incrementar las ventas hasta en un 20%.",
      "Integré Google Tag Manager y Meta Pixel mediante componentes personalizados, contribuyendo a aumentar el tráfico hasta en un 50%.",
      "Desarrollé módulos de facturación, middlewares y servicios con Node.js para conectar VTEX IO con sistemas internos y plataformas externas.",
      "Colaboré con diseño, producto, backend, marketing y negocio en consultorías, estimaciones y planificación técnica.",
    ],
    stack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "VTEX IO",
      "Sass",
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  url: string;
  metric?: string;
};

export const estateAdmin = {
  title: "EstateAdmin",
  category: "Desarrollo por proyecto",
  description:
    "Plataforma full-stack para digitalizar la gestión financiera, operativa y de comunicación de condominios. Participé en el desarrollo end-to-end del producto: frontend, backend, datos, automatizaciones e integraciones externas.",
  url: "https://estate-admin.com",
  tags: ["Full-stack", "SaaS", "PropTech", "Automatización"],
  capabilities: [
    "Pagos, gastos, presupuestos, morosidad y reportes financieros",
    "Tickets de mantenimiento, proyectos, tareas y reservaciones",
    "Notificaciones automáticas mediante WhatsApp y correo electrónico",
    "Exportaciones PDF y Excel, roles y flujos operativos integrados",
  ],
  modules: [
    { title: "Finanzas", detail: "Pagos · Gastos · Reportes" },
    { title: "Operación", detail: "Tickets · Proyectos · Reservas" },
    { title: "Comunicación", detail: "WhatsApp · Email" },
    { title: "Datos", detail: "PDF · Excel · Métricas" },
  ],
} as const;

export const projects: Project[] = [
  {
    title: "Walmart Multi-país",
    category: "Retail Media",
    description:
      "Componentes en React para integrar los sitios de e-commerce con campañas y anuncios dinámicos de Google Ads.",
    tags: ["React", "Google Ads", "VTEX IO"],
    url: "https://www.walmart.co.cr/",
    metric: "Retail media a escala",
  },
  {
    title: "Checkout HEB",
    category: "E-commerce UX",
    description:
      "Rediseño y optimización del proceso de checkout: mejor interfaz, navegación y experiencia durante la compra.",
    tags: ["UX", "React", "Performance"],
    url: "https://www.heb.com.mx/",
    metric: "Experiencia de compra optimizada",
  },
  {
    title: "Miniso Multi-país",
    category: "Componentes escalables",
    description:
      "Componentes de alta complejidad para Miniso México, Colombia, Chile y Perú, adaptables a cada mercado.",
    tags: ["React", "TypeScript", "i18n"],
    url: "https://miniso.com.mx/",
    metric: "4 países",
  },
  {
    title: "La Colonia",
    category: "E-commerce regional",
    description:
      "Desarrollo y evolución de funcionalidades para una experiencia de compra digital adaptada al mercado regional.",
    tags: ["E-commerce", "Frontend", "UX"],
    url: "https://www.lacolonia.com/",
    metric: "Experiencia de compra",
  },
  {
    title: "Óptima",
    category: "E-commerce",
    description:
      "Personalización y mejora de funcionalidades para una plataforma de comercio electrónico enfocada en la experiencia del usuario.",
    tags: ["Frontend", "VTEX IO", "UX"],
    url: "https://www.tiendasoptima.com/",
    metric: "Funcionalidades a medida",
  },
];

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend & UX Engineering",
    description:
      "Interfaces accesibles, rápidas y mantenibles, desde componentes hasta experiencias completas.",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Sass"],
  },
  {
    title: "Backend & APIs",
    description:
      "Servicios, middlewares e integraciones que conectan productos con sistemas internos y externos.",
    skills: ["Node.js", "NestJS", "REST APIs", "Firebase", "Supabase", "Python"],
  },
  {
    title: "Cloud & Data",
    description:
      "Infraestructura y servicios administrados para desplegar, conectar y operar soluciones digitales.",
    skills: ["Google Cloud", "Docker", "Firebase", "Supabase", "GTM", "Meta Pixel"],
  },
  {
    title: "E-commerce & Delivery",
    description:
      "Experiencia de compra, checkout, facturación, analítica y entrega multidisciplinaria.",
    skills: ["VTEX IO", "Checkout", "Performance", "Analytics", "Git", "Agile"],
  },
];

export const marqueeTech = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Google Cloud",
  "VTEX IO",
  "Firebase",
  "Supabase",
  "Docker",
  "Python",
];

export type Brand = { name: string; url: string; logo?: string };

export const corebizBrands: Brand[] = [
  { name: "Walmart", url: "https://www.walmart.co.cr/", logo: "/brands/walmart.svg" },
  { name: "Miniso", url: "https://miniso.com.mx/", logo: "/brands/miniso.svg" },
  { name: "HEB", url: "https://www.heb.com.mx/", logo: "/brands/heb.svg" },
  { name: "La Colonia", url: "https://www.lacolonia.com/", logo: "/brands/lacolonia.png" },
  { name: "Vianney", url: "https://www.mivianney.com/", logo: "/brands/vianney.png" },
  { name: "Óptima", url: "https://www.tiendasoptima.com/", logo: "/brands/optima.webp" },
  { name: "Devlyn", url: "https://www.devlyn.com.mx/", logo: "/brands/devlyn.svg" },
  { name: "Mi Tienda del Ahorro", url: "https://www.mitienda.mx/" },
  { name: "Chanel", url: "https://www.chanel.com/mx/" },
  { name: "Avante", url: "https://www.grupoavante.org/" },
  { name: "Supermercados La Torre", url: "https://www.latorre.com.gt/" },
  { name: "Maxidespensa", url: "https://www.maxidespensa.com.gt/" },
  { name: "Plaforama", url: "https://www.plaforama.com/" },
];

export const independentProjects = [
  {
    title: "EstateAdmin",
    category: "Plataforma full-stack",
    description: "Sistema integral para la gestión financiera y operativa de condominios.",
    url: "https://estate-admin.com/",
  },
  {
    title: "YW Studio",
    category: "Programa de lealtad",
    description: "Sistema de lealtad para un estudio de baile y cafetería.",
    url: "https://admin.ywstudio.com.mx/",
  },
  {
    title: "CEHF",
    category: "Educación a distancia",
    description: "Plataforma digital para experiencias de educación a distancia.",
    url: "https://cehf.live/",
  },
] as const;

export const education = [
  {
    title: "Administración en Tecnologías de la Información",
    org: "Universidad Tecnológica de México",
    detail: "México",
  },
];

export const certifications = [
  {
    title: "VTEX IO Developer",
    org: "VTEX",
    detail: "Certificación oficial",
  },
];

export const navLinks = [
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#skills", label: "Capacidades" },
  { href: "#about", label: "Sobre mí" },
  { href: "#contact", label: "Contacto" },
];

export const socials = [
  { label: "LinkedIn", href: site.linkedin, icon: "linkedin" as const },
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" as const },
];
