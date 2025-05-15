import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react', 'googleapis', 'google-auth-library'],
  },
  resolve: {
    alias: {
      'googleapis': 'googleapis/build/src/index.js',
    },
  },
});