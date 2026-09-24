// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Set this in Step 6, once the domain is bought. It's used for link previews.
  // site: 'https://priyanshchaurasia.com',

  // Fonts are stored in src/assets/fonts, so the site never calls Google Fonts.
  // Astro adds matching fallback fonts so the page doesn't jump while they load.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Syne',
      cssVariable: '--font-syne',
      fallbacks: ['Segoe UI', 'system-ui', 'sans-serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/syne-latin-wght-normal.woff2'], weight: '400 800', style: 'normal' },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-plex',
      fallbacks: ['Segoe UI', 'system-ui', 'sans-serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/ibm-plex-sans-latin-wght-normal.woff2'], weight: '100 700', style: 'normal' },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      fallbacks: ['Consolas', 'ui-monospace', 'monospace'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/jetbrains-mono-latin-wght-normal.woff2'], weight: '100 800', style: 'normal' },
        ],
      },
    },
  ],
});
