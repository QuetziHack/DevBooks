import cname from 'vite-plugin-cname';

export default defineConfig({
  site: 'https://devbooks.n8nintegration.online',
  base: '/',
  integrations: [tailwind()],
  vite: {
    plugins: [cname({ domain: 'devbooks.n8nintegration.online' })]
  }
});