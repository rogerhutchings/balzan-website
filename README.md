# balzan-website
A website for the Centre for Cosmological Studies at New College, Oxford - [link](http://balzan.new.ox.ac.uk/)

### Instructions

1. Check out the repo.
2. Install required dependencies by running `npm install`.
3. Start the Harp development server with `gulp dev`. This includes BrowserSync, and will reload on changes.
4. Compile a static version with `gulp compile`.
5. Deploy with `gulp deploy` - requires SSH access.

### Deploying to Heroku

`npm run start` has been defined in the `package.json`, so theoretically it should all just work if you want to push to Heroku. This is currently untested though, as it's being deployed statically elsewhere.

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
