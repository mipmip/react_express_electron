import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../dist/frontend", // Output Vite build files to the dist directory
  },
  base: "./", // the electron app will be able to find the assets
  server: {
    // port: 4000,
    // host: "0.0.0.0", // Expose the server to your local network
    // strictPort: true, // Fail if the specified port is unavailable
    proxy: {
      "/api": {
        target: "http://localhost:5150", // Your backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
