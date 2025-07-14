#/bin/bash

cd "$(dirname "$0")"
cd ..

rm -rf _site

pnpm install
URL="https://balzan.new.ox.ac.uk" pnpm build
rsync --delete -e "ssh -i ./deploy_rsa" -azP ./_site/ balzan@newc-web.new.ox.ac.uk:/var/www/html/balzan.new