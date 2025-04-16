// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'slides', // Serve from the slides directory
  server: {
    open: '/index.html', // Automatically open the presentation
  },
  build: {
    outDir: '../dist', // Optional: output location when building
    emptyOutDir: true
  }
})
