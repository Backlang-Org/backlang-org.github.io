import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import prismjsPlugin from "vite-plugin-prismjs";
import documentEntriesPlugin from "./documentEntriesPlugin.js";

export default defineConfig({
  base: "/",
  plugins: [
    documentEntriesPlugin(),
    solidPlugin(),
    prismjsPlugin({
      languages: ["bash"],
      plugins: [],
      theme: "default",
      css: true,
    }),
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
