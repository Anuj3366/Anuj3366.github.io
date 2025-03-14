
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Get the repository name from the package.json or environment variable
const getBase = () => {
  // For local development, use '/'
  if (process.env.NODE_ENV === 'development') return '/';
  // For GitHub Pages deployment, use the repository name
  // If the project is deployed at the root domain, use '/'
  return '/';
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  base: getBase(),
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  server: {
    port: 8080,
    open: true,
  },
});
