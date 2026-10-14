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
  whatsappNumber: "+52 56 2805 1962",
  whatsapp:
    "https://wa.me/525628051962?text=Hola%20Uriel%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20platicar%20sobre%20un%20proyecto.",
  seoTitle: "Uriel Mojica | Desarrollador Web Senior, E-commerce y VTEX IO",
  seoDescription:
    "Senior Software Engineer en México: e-commerce en VTEX IO, sitios con Next.js y plataformas web a medida para marcas como Walmart, HEB, Miniso y Chanel. Cotiza tu proyecto.",
  cv: "https://firebasestorage.googleapis.com/v0/b/cehfv3.firebasestorage.app/o/institutions%2Fcehf-primaria%2Fassets%2FCV%20Uriel%20Mojica%20Meji%CC%81a.pdf?alt=media&token=a5058a7f-29a1-495c-8a7a-7d8fba72ae18",
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
  logo?: string;
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

export const cehf = {
  title: "Campus CEHF",
  category: "Plataforma educativa · EdTech",
  description:
    "Plataforma escolar que reúne a estudiantes, maestros y familias en un solo espacio: tareas, avances, avisos y comunidad. Desarrollo end-to-end del producto, desde la experiencia por rol hasta el backend, los datos y la infraestructura.",
  url: "https://cehf.com.mx/",
  tags: ["Full-stack", "EdTech", "PWA", "Multi-rol"],
  capabilities: [
    "Experiencias dedicadas para estudiantes, maestros y familias",
    "Tareas con archivos, fechas de entrega y seguimiento",
    "Calendario escolar, eventos, avisos y recordatorios",
    "Progreso académico visible semana a semana",
  ],
  roles: [
    { title: "Estudiantes", detail: "Tareas · Progreso · Recursos" },
    { title: "Maestros", detail: "Actividades · Avisos · Seguimiento" },
    { title: "Familias", detail: "Avances · Calendario · Comunidad" },
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
    logo: "/brands/walmart.svg",
    metric: "Retail media a escala",
  },
  {
    title: "HEB",
    category: "E-commerce UX",
    description:
      "Rediseño y optimización del proceso de checkout: mejor interfaz, navegación y experiencia durante la compra.",
    tags: ["UX", "React", "Performance"],
    url: "https://www.heb.com.mx/",
    logo: "/brands/heb.svg",
    metric: "Experiencia de compra optimizada",
  },
  {
    title: "Miniso Multi-país",
    category: "Componentes escalables",
    description:
      "Componentes de alta complejidad para Miniso México, Colombia, Chile y Perú, adaptables a cada mercado.",
    tags: ["React", "TypeScript", "i18n"],
    url: "https://miniso.com.mx/",
    logo: "/brands/miniso.svg",
    metric: "4 países",
  },
  {
    title: "La Colonia",
    category: "E-commerce regional",
    description:
      "Desarrollo y evolución de funcionalidades para una experiencia de compra digital adaptada al mercado regional.",
    tags: ["E-commerce", "Frontend", "UX"],
    url: "https://www.lacolonia.com/",
    logo: "/brands/la-colonia.png",
    metric: "Experiencia de compra",
  },
  {
    title: "Óptima",
    category: "E-commerce",
    description:
      "Personalización y mejora de funcionalidades para una plataforma de comercio electrónico enfocada en la experiencia del usuario.",
    tags: ["Frontend", "VTEX IO", "UX"],
    url: "https://www.tiendasoptima.com/",
    logo: "/brands/optima-logo.webp",
    metric: "Funcionalidades a medida",
  },
  {
    title: "Chanel México",
    category: "Retail de lujo",
    description:
      "Desarrollo frontend para la experiencia de compra en línea de Chanel México, cuidando el detalle visual y la consistencia de una marca de lujo.",
    tags: ["Frontend", "UX", "E-commerce"],
    url: "https://www.chanel.com/mx/",
    logo: "/brands/chanel.svg",
    metric: "Experiencia premium",
  },
  {
    title: "Vianney",
    category: "Moda · México",
    description:
      "Componentes y funcionalidades en VTEX IO para la tienda en línea de Vianney, marca mexicana de moda.",
    tags: ["VTEX IO", "React", "E-commerce"],
    url: "https://www.mivianney.com/",
    logo: "/brands/vianney-logo.png",
    metric: "Moda en línea",
  },
  {
    title: "Maxi Palí",
    category: "Supermercado · Costa Rica",
    description:
      "Funcionalidades para el supermercado en línea de Maxi Palí: catálogo, ofertas y compra con recolección en tienda.",
    tags: ["VTEX IO", "React", "Retail"],
    url: "https://www.maxipali.co.cr/",
    logo: "/brands/maxipali.svg",
    metric: "Costa Rica",
  },
  {
    title: "La Torre",
    category: "Supermercado · Guatemala",
    description:
      "Desarrollo de funcionalidades para el supermercado en línea de La Torre, enfocado en una compra ágil y clara.",
    tags: ["VTEX IO", "React", "UX"],
    url: "https://www.latorre.com.gt/",
    logo: "/brands/latorre-logo.png",
    metric: "Guatemala",
  },
  {
    title: "Avante",
    category: "Llantas y autopartes",
    description:
      "Tienda en línea de llantas con envío o instalación en sucursal: componentes y mejoras de experiencia de compra.",
    tags: ["VTEX IO", "React", "E-commerce"],
    url: "https://www.grupoavante.org/",
    logo: "/brands/avante-logo.svg",
    metric: "Compra + instalación",
  },
  {
    title: "Plaforama",
    category: "Construcción y acabados",
    description:
      "E-commerce de materiales de construcción y acabados: componentes y funcionalidades para catálogos técnicos y compra en línea.",
    tags: ["VTEX IO", "Frontend", "Catálogo"],
    url: "https://www.plaforama.com/",
    logo: "/brands/plaforama-logo.png",
    metric: "Catálogo técnico",
  },
];

export const manifesto = {
  text: "Más de 7 años convirtiendo necesidades de negocio en software. Interfaces rápidas y accesibles, servicios backend sólidos y experiencias de e-commerce que impulsan resultados reales.",
  highlight: [
    "software",
    "rápidas",
    "accesibles",
    "sólidos",
    "resultados",
    "reales",
  ],
};

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
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Sass",
    ],
  },
  {
    title: "Backend & APIs",
    description:
      "Servicios, middlewares e integraciones que conectan productos con sistemas internos y externos.",
    skills: [
      "Node.js",
      "NestJS",
      "REST APIs",
      "Firebase",
      "Supabase",
      "Python",
    ],
  },
  {
    title: "Cloud & Data",
    description:
      "Infraestructura y servicios administrados para desplegar, conectar y operar soluciones digitales.",
    skills: [
      "Google Cloud",
      "Docker",
      "Firebase",
      "Supabase",
      "GTM",
      "Meta Pixel",
    ],
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
  {
    name: "Walmart",
    url: "https://www.walmart.co.cr/",
    logo: "/brands/walmart.svg",
  },
  {
    name: "Chanel",
    url: "https://www.chanel.com/mx/",
    logo: "/brands/chanel.svg",
  },
  { name: "Miniso", url: "https://miniso.com.mx/", logo: "/brands/miniso.svg" },
  { name: "HEB", url: "https://www.heb.com.mx/", logo: "/brands/heb.svg" },
  {
    name: "Maxi Palí",
    url: "https://www.maxipali.co.cr/",
    logo: "/brands/maxipali.svg",
  },
  {
    name: "La Colonia",
    url: "https://www.lacolonia.com/",
    logo: "/brands/la-colonia.png",
  },
  {
    name: "Vianney",
    url: "https://www.mivianney.com/",
    logo: "/brands/vianney-logo.png",
  },
  {
    name: "Supermercados La Torre",
    url: "https://www.latorre.com.gt/",
    logo: "/brands/latorre-logo.png",
  },
  {
    name: "Óptima",
    url: "https://www.tiendasoptima.com/",
    logo: "/brands/optima-logo.webp",
  },
  {
    name: "Avante",
    url: "https://www.grupoavante.org/",
    logo: "/brands/avante-logo.svg",
  },
  {
    name: "Devlyn",
    url: "https://www.devlyn.com.mx/",
    logo: "/brands/devlyn.svg",
  },
  {
    name: "Plaforama",
    url: "https://www.plaforama.com/",
    logo: "/brands/plaforama-logo.png",
  },
  { name: "Mi Tienda del Ahorro", url: "https://www.mitienda.mx/" },
  { name: "Maxidespensa", url: "https://www.maxidespensa.com.gt/" },
];

export const independentProjects = [
  {
    title: "EstateAdmin",
    category: "Plataforma full-stack",
    description:
      "Sistema integral para la gestión financiera y operativa de condominios.",
    url: "https://estate-admin.com/",
  },
  {
    title: "YW Studio",
    category: "Programa de lealtad",
    description: "Sistema de lealtad para un estudio de baile y cafetería.",
    url: "https://admin.ywstudio.com.mx/",
  },
  {
    title: "Campus CEHF",
    category: "Plataforma educativa",
    description:
      "Plataforma escolar para estudiantes, maestros y familias: tareas, avances, avisos y comunidad.",
    url: "https://cehf.com.mx/",
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

export const services = [
  {
    title: "Tiendas en línea con VTEX IO",
    description:
      "E-commerce a medida: componentes, checkout, catálogo, facturación y analítica para vender más.",
  },
  {
    title: "Sitios y landing pages con Next.js",
    description:
      "Sitios rápidos, accesibles y optimizados para SEO que convierten visitas en clientes.",
  },
  {
    title: "Plataformas web y SaaS",
    description:
      "Productos completos con paneles, roles, pagos, notificaciones y automatizaciones.",
  },
  {
    title: "APIs e integraciones",
    description:
      "Servicios con Node.js y NestJS para conectar tu negocio con ERPs, pasarelas de pago, WhatsApp y más.",
  },
  {
    title: "Rendimiento y SEO técnico",
    description:
      "Mejoras de Core Web Vitals, indexación, datos estructurados y medición con GTM y Meta Pixel.",
  },
  {
    title: "Consultoría técnica",
    description:
      "Estimaciones, arquitectura y acompañamiento a equipos de producto, diseño y negocio.",
  },
] as const;

export const faqs = [
  {
    question: "¿Qué tipo de proyectos desarrollas?",
    answer:
      "Tiendas en línea, sitios y landing pages, plataformas web y SaaS, e integraciones entre sistemas. Me especializo en frontend con React y Next.js, y también desarrollo backend con Node.js y NestJS.",
  },
  {
    question: "¿Trabajas de forma remota o freelance?",
    answer:
      "Sí. Trabajo de forma remota desde México con empresas y marcas de México y Latinoamérica, ya sea por proyecto o integrándome a tu equipo.",
  },
  {
    question: "¿Tienes experiencia con VTEX IO?",
    answer:
      "Sí. Soy VTEX IO Developer certificado y he desarrollado para marcas como Walmart, HEB, Miniso, Chanel, Maxi Palí y La Torre: componentes, checkout, facturación e integraciones.",
  },
  {
    question: "¿Puedes encargarte del frontend y del backend?",
    answer:
      "Sí. En productos como Campus CEHF y EstateAdmin me encargué del desarrollo end-to-end: interfaz, servicios, datos, automatizaciones e integraciones con plataformas externas.",
  },
  {
    question: "¿Cómo empezamos a trabajar?",
    answer:
      "Escríbeme por el formulario, por correo o por WhatsApp. Platicamos sobre tu proyecto y te propongo alcance, tiempos y una estimación.",
  },
] as const;

export const navLinks = [
  { href: "#projects", label: "Proyectos" },
  { href: "#services", label: "Servicios" },
  { href: "#experience", label: "Experiencia" },
  { href: "#skills", label: "Capacidades" },
  { href: "#about", label: "Sobre mí" },
  { href: "#contact", label: "Contacto" },
];

export const socials = [
  { label: "LinkedIn", href: site.linkedin, icon: "linkedin" as const },
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" as const },
];
