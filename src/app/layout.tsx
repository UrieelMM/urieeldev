import type { Metadata, Viewport } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import {
  certifications,
  cehf,
  education,
  estateAdmin,
  faqs,
  projects,
  services,
  site,
} from "@/lib/data";

const sora = Sora({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const keywords = [
  "Uriel Mojica",
  "Uriel Mojica Mejía",
  "urieel.dev",
  "desarrollador web México",
  "desarrollador web freelance",
  "programador freelance México",
  "desarrollador VTEX IO",
  "desarrollador VTEX México",
  "desarrollo de tiendas en línea",
  "desarrollo de e-commerce",
  "desarrollador Next.js",
  "desarrollador React",
  "desarrollo de landing pages",
  "desarrollo de software a la medida",
  "desarrollo de plataformas SaaS",
  "integraciones API Node.js",
  "Senior Software Engineer",
  "Frontend Developer",
  "Full Stack Developer",
  "TypeScript",
  "NestJS",
  "Google Cloud",
];

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seoTitle,
    template: `%s | ${site.brand}`,
  },
  description: site.seoDescription,
  keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  applicationName: site.brand,
  alternates: {
    canonical: "/",
    languages: { "es-MX": "/" },
  },
  formatDetection: { telephone: true, email: true, address: false },
  openGraph: {
    type: "profile",
    locale: "es_MX",
    url: site.url,
    siteName: site.brand,
    title: site.seoTitle,
    description: site.seoDescription,
    firstName: "Uriel",
    lastName: "Mojica Mejía",
    username: "urieel_dev",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seoTitle,
    description: site.seoDescription,
    creator: "@urieel_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#07070c" },
  ],
  width: "device-width",
  initialScale: 1,
};

const personId = `${site.url}/#person`;
const businessId = `${site.url}/#business`;
const websiteId = `${site.url}/#website`;
const ogImage = `${site.url}/opengraph-image`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: site.url,
      name: site.brand,
      description: site.seoDescription,
      inLanguage: "es-MX",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: site.url,
      name: site.seoTitle,
      inLanguage: "es-MX",
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      alternateName: "Uriel Mojica",
      jobTitle: site.role,
      description: site.tagline,
      email: `mailto:${site.email}`,
      telephone: site.phone,
      url: site.url,
      image: ogImage,
      address: { "@type": "PostalAddress", addressCountry: "MX" },
      nationality: { "@type": "Country", name: "México" },
      sameAs: [site.linkedin],
      knowsLanguage: ["es"],
      alumniOf: education.map((e) => ({
        "@type": "CollegeOrUniversity",
        name: e.org,
      })),
      hasCredential: certifications.map((c) => ({
        "@type": "EducationalOccupationalCredential",
        name: c.title,
        credentialCategory: "certification",
        recognizedBy: { "@type": "Organization", name: c.org },
      })),
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "NestJS",
        "Google Cloud",
        "Firebase",
        "Supabase",
        "VTEX IO",
        "E-commerce",
        "SaaS",
        "SEO técnico",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": businessId,
      name: `${site.brand} — Desarrollo web y e-commerce`,
      url: site.url,
      image: ogImage,
      description: site.seoDescription,
      email: site.email,
      telephone: site.phone,
      founder: { "@id": personId },
      address: { "@type": "PostalAddress", addressCountry: "MX" },
      areaServed: [
        { "@type": "Country", name: "México" },
        { "@type": "Place", name: "Latinoamérica" },
      ],
      availableLanguage: ["es"],
      knowsAbout: ["VTEX IO", "Next.js", "React", "Node.js", "E-commerce"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de desarrollo web",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: { "@id": personId },
          },
        })),
      },
    },
    {
      "@type": "ItemList",
      "@id": `${site.url}/#projects`,
      name: "Proyectos destacados",
      itemListElement: [cehf, estateAdmin, ...projects].map((project, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          url: project.url,
          creator: { "@id": personId },
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
          >
            Saltar al contenido
          </a>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
