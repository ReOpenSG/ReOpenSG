import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import viteImagemin from '@vheemstra/vite-plugin-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      plugins: {
        png: imageminPngquant(),
        svg: imageminSvgo(),
      },
      makeWebp: {
        plugins: {
          png: imageminWebp(),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-helmet-async'],
          reactRouter: ['react-router-dom'],
          animations: ['framer-motion'],
          fbApp: ['@firebase/app'],
          fbAuth: ['@firebase/auth'],
          fbStore: ['@firebase/firestore'],
          fbStorage: ['@firebase/storage'],
          swiper: ['swiper'],
          recoil: ['recoil'],
        },
      },
    },
  },
});
