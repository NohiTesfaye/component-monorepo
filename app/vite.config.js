import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Allow absolute imports from packages
      '@feature-x': path.resolve(__dirname, '../packages/feature-x'),
    },
  },
  root: '.',
}); 