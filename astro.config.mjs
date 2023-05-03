import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import purgecss from "astro-purgecss";
import compress from "astro-compress";
import frontendistahtmlMinify from "@frontendista/astro-html-minify";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: "https://renovandosempre.site",
  scripts: {
    "text/javascript": ["**/*.js"],
  },
  integrations: [
    react(),
    compress(),
    frontendistahtmlMinify(),
    purgecss(),
    compressor(),
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "entry.[hash].js",
          chunkFileNames: "chunks/chunk.[hash].js",
          assetFileNames: "assets/asset.[hash][extname]",
        },
      },
    },
  },
});
