import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Adjust this to match the subdirectory on your server
  build: {
    outDir: 'dist', // Output directory for the build
  },
});
