# Deployment

Build the site, then:

```sh
rsync --delete -e "ssh -i ./deploy_rsa" -azP  ./_site/ balzan@newc-web.new.ox.ac.uk:/var/www/html/balzan.new
```