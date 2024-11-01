import { defineConfig } from 'vite'; // Importing the function to define the config
import react from '@vitejs/plugin-react'; // Importing the React plugin

// Exporting the Vite configuration
export default defineConfig({ // Start of object
  plugins: [react()], // The plugins array with the React plugin
}); // End of object