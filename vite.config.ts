import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import lightningcss from 'vite-plugin-lightningcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    lightningcss({
      browserslist: ['>0.5%', 'last 2 versions'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    minify: 'oxc',
    cssCodeSplit: true
  },
  base: process.env.NODE_ENV === 'production' ? '/danya-lapka.github.io/lapka-ui/' : '/'
})
