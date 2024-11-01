import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // You can specify the port here
  },
  build: {
    outDir: 'dist', // This specifies the output directory for the build
  },
});