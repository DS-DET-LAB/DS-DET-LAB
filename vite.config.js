import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@routes", replacement: "/src/routes" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@activity", replacement: "/src/routes/activity" },
      { find: "@business", replacement: "/src/routes/business" },
      { find: "@center", replacement: "/src/routes/center" },
      { find: "@data", replacement: "/src/routes/data" },
      { find: "@faq", replacement: "/src/routes/faq" },
      { find: "@info", replacement: "/src/routes/info" },
      { find: "@main", replacement: "/src/routes/main" },
      { find: "@news", replacement: "/src/routes/news" },
    ],
  },
});
