import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/top-movies': 'http://localhost:5173/top-movies',
    },
  },
  plugins: [react()],
})
