module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './.eleventy.js',
    './src/_includes/**/*.njk',
    './src/pages/**/*.njk',
    './src/index.njk',
  ],
  theme: {
    extend: {
      colors: {
        teal: '#7db4b5',
      },
    },
  },
  variants: {},
  plugins: [],
}
