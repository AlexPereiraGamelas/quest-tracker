import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',  // Allow access from Docker
      port: 3000,
      strictPort: true,  // Ensures Vite doesn't try a different port
      watch: {
        usePolling: true, // Fixes file change detection inside Docker
      },
      hmr: {
        clientPort: 3000, // Ensure HMR uses the correct port
      },
      proxy: {
        "/api": {
          target: "http://host.docker.internal:5000",
          changeOrigin: true,
          secure: false,
        }
      },
    }
  }})
