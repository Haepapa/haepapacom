import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  site: 'https://haepapa.com',
  output: 'server', // Or 'hybrid'
  adapter: node({
    mode: 'standalone', // Or 'middleware', depending on your setup
  }),
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  // vite: {
  //   preview: {
  //     allowedHosts: ["test.haepapa.com", "haepapa.com"],
  //   },
  //   server: {
  //     allowedHosts: ["test.haepapa.com", "haepapa.com"],
  //   },
  // },  
  // security: {
  //   allowedDomains: ["test.haepapa.com", "haepapa.com"],
  // },
});
