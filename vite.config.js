import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
<<<<<<< HEAD
export default defineConfig({
  server: {
    https: true,
    port: 8888,
    host: 'local.dev'
  },
  plugins: [mkcert()]
})
=======

export default defineConfig({
  server: {
    port: 8888,
    https: true,
    host: "local.dev",
  },
  plugins: [mkcert()],
});
>>>>>>> 75dc3d5dc7191c84b8b84dba369e5d2e30db03af
