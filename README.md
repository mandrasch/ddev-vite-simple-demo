# ddev-vite-simple-demo

Simple Vite demo for blog article https://ddev.com/blog/working-with-vite-in-ddev/

## Local setup

```bash
ddev start

# install dependencies
ddev npm install

# start Vite dev server
ddev npm run dev
```

Then open https://test-vite.ddev.site/ in your browser (Or you can use `ddev launch` in another terminal)

(Second site for additional hostname: https://test-vite-second-page.ddev.site/)

## Troubleshooting

Vite dev server won't work with http://. HTTPS/SSL certificates must be properly setup beforehand and work on your laptop with DDEV. Check `ddev describe` and see DDEV installation docs regarding mkcert (https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/). 

Run `ddev exec 'echo $DDEV_PRIMARY_URL'` => the output must be `https://test-vite.ddev.site` - not http://.
