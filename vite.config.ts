import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginFile: false, // Keep original files
      threshold: 10240, // Only compress files larger than 10kb
      compressionOptions: {
        level: 11, // Maximum compression level
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
