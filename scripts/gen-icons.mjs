// Generates favicon.ico, apple-icon.png and PWA PNG icons from src/app/icon.svg
// Usage: node scripts/gen-icons.mjs  (run from project root)
import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const require = createRequire(path.join(root, "package.json"));
const sharp = require("sharp");

const svg = readFileSync(path.join(root, "src/app/icon.svg"), "utf8");
// Full-bleed variant (no rounded corners) for iOS, which applies its own mask.
const squareSvg = svg
  .replace(/rx="15"/g, 'rx="0"')
  .replace(/<rect x="\.5"[^>]*\/>/, "");

const png = (source, size) =>
  sharp(Buffer.from(source), { density: (72 * size) / 64 * 4 })
    .resize(size, size)
    .png()
    .toBuffer();

// ICO with embedded PNGs (supported by all modern browsers).
async function ico(sizes) {
  const images = await Promise.all(sizes.map((s) => png(svg, s)));
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = 6 + 16 * images.length;
  const entries = images.map((img, i) => {
    const e = Buffer.alloc(16);
    const s = sizes[i] >= 256 ? 0 : sizes[i];
    e.writeUInt8(s, 0);
    e.writeUInt8(s, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(img.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += img.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...images]);
}

writeFileSync(path.join(root, "src/app/favicon.ico"), await ico([16, 32, 48]));
writeFileSync(path.join(root, "src/app/apple-icon.png"), await png(squareSvg, 180));
writeFileSync(path.join(root, "public/icon-192.png"), await png(svg, 192));
writeFileSync(path.join(root, "public/icon-512.png"), await png(svg, 512));
console.log("icons generated");
