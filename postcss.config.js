import purgeCSS from '@fullhuman/postcss-purgecss'

/** @type {import('postcss').ProcessOptions} */
const config = {
  plugins: [
    purgeCSS({
      content: [
        './index.html',
        './src/**/*.vue',
        './src/**/*.ts',
        './src/**/*.js',
        './src/**/*.tsx',
        './src/**/*.jsx',
      ],
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(
          /<style[^]+?<\/style>/gi,
          ''
        )
        return (
          contentWithoutStyleBlocks.match(
            /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g
          ) || []
        )
      },
      safelist: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
        /data-v-.*/,
        /^\[.*\]$/,
        // Для TypeScript и Vue 3
        /^v-.*/,
        /^.*:deep.*$/,
        /^.*:slotted.*$/,
        /^.*:global.*$/,
      ],
      safelistPatternsChildren: [/^token/, /^pre/, /^code/],
    }),
  ],
}

export default config
