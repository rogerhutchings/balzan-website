# balzan-website
A website for the Centre for Cosmological Studies at New College, Oxford - [link](http://balzan.new.ox.ac.uk/)

### Instructions

1. Check out the repo.
2. Install required dependencies by running `npm install`.
3. Start the Harp development server with `gulp dev`.
4. Compile a static version with `gulp compile` (eventually to be used with a deploy task).

### Deploying to Heroku

Running `npm run start` will start the production server, so pushing the whole thing to a Heroku app should just work. Note that the environment is already set to production by the run script - no need to set a Heroku environment variable.

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
