import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// SOLUCIÓN PARA TAILWIND v3
export default defineConfig({

  base: 'https://devbooks.n8nintegration.online',
  integrations: [tailwind()]
});