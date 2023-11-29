import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      'tailwind.config.cjs': path.resolve(__dirname, 'tailwind.config.cjs'),
    },
  },
  optimizeDeps: {
    include: [
      'tailwind.config.cjs',
    ]
  },
  build: {
    commonjsOptions: {
      include: ['tailwind.config.cjs', 'node_modules/**'],
    },
  },
})
