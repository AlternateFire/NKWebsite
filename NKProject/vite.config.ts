import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/NKWebsite/',   // Your GitHub repo name
  build: {
    outDir: '../docs'    // This builds to NKWebsite/docs
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});