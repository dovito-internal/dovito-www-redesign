import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('framer-motion')) return 'motion'
          if (id.includes('react-router-dom') || id.includes('react-router')) return 'router'
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
})
