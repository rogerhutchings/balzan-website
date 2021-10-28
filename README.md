# Balzan Centre for Cosmological Studies website

## Editing

All content that needs to be updated on a periodic basis is kept in YAML files in the `src/_data` directory.

### Application dates

These are stored in `src/_data/application_dates.yml`, and consist of:

- academic year (e.g. `2019/20`)
- final submission date (e.g. `June 7th 2019`)

### Contact details

Contact details for the administrator are stored in `src/_data/application_dates.yml`.

### Host scientist details

The list of host scientists is stored in `src/_data/host_scientists.yml`.

### Other content

Other content, such as "About the Project", is saved as markdown inside Nunjucks template files, due to the way Eleventy handles variable interpolation in templates. These are stored in the `src/_includes/components` directory.

## Deployment

On commits to the `master` branch, the site is rebuilt and pushed to the host at New College by a GitHub Action using `rsync`. This needs to have the following secrets set:

- `DEPLOY_PATH`
- `DEPLOY_HOST`
- `DEPLOY_USER`
- `DEPLOY_KEY`

## Development

```sh
npm install
npm run serve
```

### Notes

- JS and CSS is compiled with Webpack, and filenames inserted via the Webpack `manifest.json` stored in the `_data` dir, which gets picked up by Eleventy. This file shouldn't be committed to Git.
