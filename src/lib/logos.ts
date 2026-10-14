type LogoMeta = {
  /** Width / height of the trimmed file. */
  ratio: number;
  /** >1 shrinks heavy, solid marks; <1 enlarges thin or light ones. */
  density?: number;
};

const logos: Record<string, LogoMeta> = {
  "/brands/walmart.svg": { ratio: 5.32, density: 1.1 },
  "/brands/heb.svg": { ratio: 3.22, density: 1.1 },
  "/brands/miniso.svg": { ratio: 0.81, density: 1.3 },
  "/brands/la-colonia.png": { ratio: 1.68, density: 0.7 },
  "/brands/optima-logo.webp": { ratio: 5.21 },
  "/brands/chanel.svg": { ratio: 1.51, density: 1.1 },
  "/brands/vianney-logo.png": { ratio: 3.44 },
  "/brands/maxipali.svg": { ratio: 2.75, density: 0.85 },
  "/brands/latorre-logo.png": { ratio: 0.84, density: 1.2 },
  "/brands/avante-logo.svg": { ratio: 3.67, density: 0.85 },
  "/brands/devlyn.svg": { ratio: 5.86 },
  "/brands/plaforama-logo.png": { ratio: 3.72, density: 0.8 },
};

/** Width / height of the box logos are placed in. */
export const LOGO_BOX_RATIO = 2.5;

const FILL = 0.4;
const MAX_WIDTH = 0.9;

/** Sizes logos by optical area so wide and tall marks feel equally weighted. */
export function logoSizing(src: string) {
  const { ratio, density = 1 } = logos[src] ?? { ratio: LOGO_BOX_RATIO };
  const area = (FILL * LOGO_BOX_RATIO) / density;
  const width = Math.min(
    Math.sqrt(area * ratio),
    ratio,
    LOGO_BOX_RATIO * MAX_WIDTH,
  );

  return {
    width: 240,
    height: Math.round(240 / ratio),
    style: { width: `${(width / LOGO_BOX_RATIO) * 100}%` },
  };
}
