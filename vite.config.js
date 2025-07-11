import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), svgr()],
  server: { port: 3000 },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@routes', replacement: '/src/routes' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@db', replacement: '/src/db' },
      { find: '@activity', replacement: '/src/routes/activity' },
      { find: '@business', replacement: '/src/routes/business' },
      { find: '@center', replacement: '/src/routes/center' },
      { find: '@data', replacement: '/src/routes/community/data' },
      { find: '@info', replacement: '/src/routes/community/info' },
      { find: '@main', replacement: '/src/routes/main' },
      { find: '@news', replacement: '/src/routes/community/news' },
      { find: '@error', replacement: '/src/routes/error' },
    ],
  },
});
