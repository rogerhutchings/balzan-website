const automaticNoopener = require('eleventy-plugin-automatic-noopener')
const yaml = require('js-yaml')
const markdownIt = require('markdown-it')
const Image = require('@11ty/eleventy-img')

const md = new markdownIt({
  html: true,
})

/**
 * Shortcode for generating organisation profile photos
 */
async function imageShortcode(src, alt, cls, sizes) {
  const metadata = await Image(src, {
    widths: [200],
    formats: ['avif', 'jpeg'],
    outputDir: './_site/img/',
  })

  const imageAttributes = {
    alt,
    class: cls,
    sizes,
    loading: 'lazy',
    decoding: 'async',
  }

  return Image.generateHTML(metadata, imageAttributes)
}

/**
 * Shortcode for generating hero background image inline styles
 */
async function heroImageShortcode(src) {
  const metadata = await Image(src, {
    formats: ['jpeg'],
    outputDir: './_site/img/',
  })
  const { url } = metadata.jpeg[metadata.jpeg.length - 1]
  return `background-image: url('${url}')`
}

/**
 * Shortcode for generating OG image url
 */
async function ogImageShortcode(src) {
  const metadata = await Image(src, {
    formats: ['jpeg'],
    outputDir: './_site/img/',
  })
  const { url } = metadata.jpeg[metadata.jpeg.length - 1]
  return url
}

/**
 * Eleventy config object
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension('yml', (contents) => yaml.load(contents))
  eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode)
  eleventyConfig.addNunjucksAsyncShortcode('heroBg', heroImageShortcode)
  eleventyConfig.addNunjucksAsyncShortcode('ogImage', ogImageShortcode)
  eleventyConfig.addPairedShortcode('markdown', (content) => md.render(content))
  eleventyConfig.addPlugin(automaticNoopener)

  return {
    dir: { input: 'src', output: '_site' },
  }
}
