import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    cors: true,
    strictPort: true,
    hmr: {
      host: "localhost",
      clientPort: 8080,
    },
    fs: {
      allow: [".."],
    },
    // Add ngrok host to allowed hosts
    origin: "https://susana-pilgarlicky-whitley.ngrok-free.dev",
  },
  preview: {
    host: "::",
    port: 8080,
  },
  // Allow ngrok host
  base: "/",
  optimizeDeps: {
    exclude: [],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
