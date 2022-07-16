import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import prismjsPlugin from "vite-plugin-prismjs";

export default defineConfig({
  base: "/",
  plugins: [
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
