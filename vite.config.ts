
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { lovableTagger } from 'lovable-tagger'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    lovableTagger()
  ],
  base: './', // This ensures assets are loaded correctly on GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
