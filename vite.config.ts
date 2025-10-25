import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import purgeCSS from 'vite-plugin-purgecss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    purgeCSS({
      content: [
        '**/*.html',
        '**/*.vue',
        '**/*.ts',
        '**/*.tsx',
        '**/*.js',
        '**/*.jsx',
      ],
      safelist: {
        standard: [
          /^data-v-/,
          /^v-/,
          /^:/,
          /^::/,
        ],
        greedy: [
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^router-link/,
        ],
        deep: [
          /^token/,
          /^pre/,
          /^code/,
        ],
      },
      variables: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    minify: true
  },
  base: process.env.NODE_ENV === 'production' ? '/danya-lapka.github.io/lapka-ui/' : '/',
})
