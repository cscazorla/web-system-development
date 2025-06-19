// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    open: '/index.html',
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
  },
});
