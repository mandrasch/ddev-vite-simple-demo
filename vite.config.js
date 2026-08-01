import { defineConfig } from 'vite'
import path from 'path'

console.log('Output of process.env.DDEV_PRIMARY_URL_WITHOUT_PORT:', process.env.DDEV_PRIMARY_URL_WITHOUT_PORT);

// https://vitejs.dev/config/
export default defineConfig({

  // Add entrypoint
  build: {
    // our entry
    rollupOptions: {
      input: path.resolve(import.meta.dirname, 'src/main.js'),
    },

    // manifest
    manifest: true
  },

  // Adjust vites dev server for DDEV
  // https://vitejs.dev/config/server-options.html
  server: {
    // Respond to all network requests
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    // Defines the origin of the generated asset URLs during development, this must be set to the
    // Vite dev server URL and selected Vite port.
    origin: `${process.env.DDEV_PRIMARY_URL_WITHOUT_PORT}:5173`,
    // Configure CORS securely for the Vite dev server to allow requests from *.ddev.site domains,
    // supports additional hostnames (via regex). If you use another `project_tld`, adjust this.
    cors: {
      origin: /https?:\/\/([A-Za-z0-9\-\.]+)?(\.ddev\.site)(?::\d+)?$/,
    },
  },

})