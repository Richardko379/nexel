import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '../public/og-image.jpg');

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#020408" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#020408"/>
      <stop offset="50%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#020408"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#020408"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Top border line -->
  <rect x="0" y="0" width="1200" height="2" fill="url(#lineGrad)" opacity="0.5"/>
  <!-- Bottom border line -->
  <rect x="0" y="628" width="1200" height="2" fill="url(#lineGrad)" opacity="0.5"/>

  <!-- Left decorative vertical line -->
  <rect x="80" y="80" width="1" height="470" fill="#06b6d4" opacity="0.2"/>

  <!-- N logo shape (simplified) -->
  <text x="120" y="300" font-family="system-ui, Arial, sans-serif" font-size="160" font-weight="900" fill="#06b6d4" opacity="0.15">N</text>

  <!-- Company name -->
  <text x="120" y="240" font-family="system-ui, Arial, sans-serif" font-size="72" font-weight="700" fill="#ffffff" letter-spacing="-1">Nexel Systems</text>

  <!-- Cyan accent line under name -->
  <rect x="120" y="258" width="200" height="3" fill="#06b6d4" rx="2"/>

  <!-- Tagline -->
  <text x="120" y="330" font-family="system-ui, Arial, sans-serif" font-size="30" fill="#9ca3af">Elektroinštalácie · Dátové siete · Smart riešenia</text>

  <!-- Domain badge -->
  <rect x="120" y="390" width="130" height="44" rx="8" fill="#06b6d4" fill-opacity="0.1" stroke="#06b6d4" stroke-opacity="0.4" stroke-width="1"/>
  <text x="185" y="418" font-family="system-ui, Arial, sans-serif" font-size="22" fill="#06b6d4" text-anchor="middle" font-weight="600">nxl.sk</text>

  <!-- Right decorative element -->
  <circle cx="980" cy="315" r="180" fill="#06b6d4" fill-opacity="0.04" stroke="#06b6d4" stroke-opacity="0.08" stroke-width="1"/>
  <circle cx="980" cy="315" r="120" fill="#06b6d4" fill-opacity="0.04" stroke="#06b6d4" stroke-opacity="0.08" stroke-width="1"/>
  <circle cx="980" cy="315" r="60" fill="#06b6d4" fill-opacity="0.06" stroke="#06b6d4" stroke-opacity="0.15" stroke-width="1"/>

  <!-- Icon dots -->
  <circle cx="980" cy="315" r="8" fill="#06b6d4" opacity="0.6"/>
</svg>
`;

await sharp(Buffer.from(svg))
  .jpeg({ quality: 92 })
  .toFile(outPath);

console.log(`OG image generated: ${outPath}`);
