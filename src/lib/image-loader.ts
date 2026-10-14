"use client";

import type { ImageLoaderProps } from "next/image";

/**
 * Netlify's Image CDN. `/_next/image` responds 400 on this deployment, and
 * `/.netlify/images` only exists on Netlify, so dev serves the raw file.
 */
export default function netlifyImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  if (process.env.NODE_ENV === "development" || src.endsWith(".svg")) {
    return `${src}?w=${width}`;
  }

  const params = new URLSearchParams({
    url: src,
    w: String(width),
    q: String(quality ?? 75),
  });
  return `/.netlify/images?${params}`;
}
