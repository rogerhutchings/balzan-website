[![Build Status](https://travis-ci.org/rogerhutchings/balzan-website.svg?branch=master)](https://travis-ci.org/rogerhutchings/balzan-website)

# balzan-website

A static website for the Centre for Cosmological Studies at New College, Oxford.

### Instructions

1. Check out the repo.
1. Install required dependencies by running `npm install`.
1. Start the Harp development server with `npm run start`. This includes BrowserSync, and will reload on changes.
1. Optionally, compile a static version with `gulp compile`.

## Deployment

Deploys happen automatically on commits to the `master` branch, via [Travis CI](https://travis-ci.org/rogerhutchings/balzan-website) and Rsync. Instructions on the process [via oncletom](https://oncletom.io/2016/travis-ssh-deploy/).

### Technologies

- [Harp](http://harpjs.com) (using EJS)
- [Stylus](https://learnboost.github.io/stylus/)
- [Bootstrap](http://getbootstrap.com/)
- [Grayscale](https://ironsummitmedia.github.io/startbootstrap-grayscale/)

### Conventions

- [RSCSS](https://github.com/rstacruz/rscss)
- [Semantic Versioning](http://semver.org)
- [Keep A Changelog](http://keepachangelog.com/)
- Use `js-` prefix for targeting classes with JS 
