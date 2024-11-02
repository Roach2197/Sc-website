import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // Specify the path for the public directory
  build: {
    outDir: 'dist', // Output directory for the build
  },
  server: {
    port: 3000, // Optional: Define the port if needed
  },
});
