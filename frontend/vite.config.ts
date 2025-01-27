import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../dist/frontend", // Output Vite build files to the dist directory
  },
  base: "./", // the electron app will be able to find the assets
});
