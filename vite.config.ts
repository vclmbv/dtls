import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import * as pkg from "./package.json";

const NODE_ENV = process.argv.mode || "development";
const VERSION = pkg.version;

export default defineConfig({
  /* shared */
  define: {
    NODE_ENV: JSON.stringify(NODE_ENV),
    VERSION: JSON.stringify(VERSION),
  },
  plugins: [dts({ outDir: "dist/types" })],

  /* build */
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src", "/index.ts"),
      name: "Dtls",
      fileName: "dtls",
    },
    rollupOptions: {
      external: ["@vclmbv/utls"],
      output: {
        globals: {
          "@vclmbv/utls": "_",
        },
        dir: "./dist",
      },
      input: "src/index.ts",
    },
  },
});

/*
 lib: {
      entry: "./lib/main.ts",
      name: "Counter",
      fileName: "counter",
    },
*/
