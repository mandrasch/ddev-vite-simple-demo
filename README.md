# ddev-vite-simple-demo
Simple demo for blog article https://ddev.com/blog/working-with-vite-in-ddev/

```
ddev start
# install dependencies
ddev npm install

# start Vite dev server
ddev npm run dev
```

Then open https://test-vite.ddev.site/ in your browser (Or you can use `ddev launch` in another terminal)

Vite dev server won't work with http://, https/ssl certificates must be properly setup (mkcert) beforehand. Check `ddev describe` and see DDEV installation docs regarding mkcert.
