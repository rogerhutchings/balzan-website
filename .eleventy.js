const automaticNoopener = require('eleventy-plugin-automatic-noopener')
const yaml = require('js-yaml')
const markdownIt = require('markdown-it')
const Image = require("@11ty/eleventy-img")

const md = new markdownIt({
  html: true,
})

async function imageShortcode(src, alt, cls, sizes) {
  let metadata = await Image(src, {
    widths: [200],
    formats: ["avif", "jpeg"],
    outputDir: "./_site/img/"
  });

  let imageAttributes = {
    alt,
    class: cls,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}

async function heroImageShortcode(src, alt, cls, sizes) {
  const metadata = await Image(src, {
    formats: ["jpeg"],
    outputDir: "./_site/img/"
  });
  const data = metadata.jpeg[metadata.jpeg.length - 1]
  return `background-image: url('${data.url}')`;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(automaticNoopener)
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode)
  eleventyConfig.addNunjucksAsyncShortcode("heroBg", heroImageShortcode)
  eleventyConfig.addPairedShortcode('markdown', (content) => md.render(content))
  eleventyConfig.addDataExtension('yml', (contents) => yaml.load(contents))

  return {
    dir: { input: 'src', output: '_site' },
  }
}
