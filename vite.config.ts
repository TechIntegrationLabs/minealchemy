import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      onwarn(warning, warn) {
        // Log build warnings
        console.log('Build warning:', warning);
        warn(warning);
      }
    }
  },
  server: {
    // Add detailed error overlay
    hmr: {
      overlay: true
    }
  }
});