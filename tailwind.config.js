module.exports = {
  content: [
    './.eleventy.js',
    './src/_includes/**/*.njk',
    './src/pages/**/*.njk',
    './src/index.njk',
    './src/scripts/*.js',
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
