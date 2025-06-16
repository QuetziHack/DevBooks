import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://devbooks.n8nintegration.online',
  base: '/',
  integrations: [tailwind()]
});