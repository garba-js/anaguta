import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          aboutUs: path.resolve(__dirname, 'about_us.html'),
          about: path.resolve(__dirname, 'about.html'),
          projects: path.resolve(__dirname, 'projects.html'),
          project: path.resolve(__dirname, 'project.html'),
          dictionary: path.resolve(__dirname, 'dictionary.html'),
          gallery: path.resolve(__dirname, 'gallery.html'),
          media: path.resolve(__dirname, 'media.html'),
          articles: path.resolve(__dirname, 'articles.html'),
          articleDetail: path.resolve(__dirname, 'article-detail.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          event: path.resolve(__dirname, 'event.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
