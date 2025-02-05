import { defineConfig } from 'vite'
import path from 'path'

const port = 5173;
const origin = `${process.env.DDEV_PRIMARY_URL}:${port}`;

// https://vitejs.dev/config/
export default defineConfig({

  // Add entrypoint
  build: {
    // our entry
    rollupOptions: {
      input: path.resolve(__dirname, 'src/main.js'),
    },

    // manifest
    manifest: true
  },

  // Adjust vites dev server for DDEV
  // https://vitejs.dev/config/server-options.html
  server: {
    // Respond to all network requests
    host: '0.0.0.0',
    port: port,
    strictPort: true,
    // Defines the origin of the generated asset URLs during development
    origin: origin,
    // Configure CORS securely for the Vite dev server to allow requests
    // from *.ddev.site domains, supports additional hostnames (via regex)
    cors: { origin: /https?:\/\/([A-Za-z0-9\-\.]+)?(\.site)(?::\d+)?$/ },
  },

})