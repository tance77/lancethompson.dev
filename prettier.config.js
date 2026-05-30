export default {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  printWidth: 250,
  singleQuote: true,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/styles/global.css',
  overrides: [
    {
      files: '*.vue',
      options: {
        bracketSameLine: true,
        vueIndentScriptAndStyle: true,
      },
    },
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
