import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "a3f4-2404-8000-1095-657-c9e0-127f-f2c0-32a2.ngrok-free.app",
    ],
    host: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
