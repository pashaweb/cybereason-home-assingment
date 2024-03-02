/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import * as fs from "fs";
import path from "path";

import { defineConfig } from "vite";
const buildDir = "dist";
const outputName = "grid-v_" + process.env.npm_package_version;

const cssInjector = async () => {
  const scriptPath = path.join(__dirname, buildDir, `${outputName}.es.js`);
  const stylePath = path.join(__dirname, buildDir, `${outputName}.css`);
  let scriptText = await fs.promises.readFile(scriptPath, "utf-8");
  let styleText = await fs.promises.readFile(stylePath, "utf-8");
  const scriptSplit = scriptText.split('"!styleMacroReplace!"');
  scriptText = scriptSplit[0] + "`" + styleText + "`" + scriptSplit[1];
  await fs.promises.writeFile(scriptPath, scriptText);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "css-injector", // the name of your custom plugin. Could be anything.
      closeBundle: async () => {
        await cssInjector(); // run during closeBundle hook. https://rollupjs.org/guide/en/#closebundle
      },
    },
  ],
  server: {
    port: 3001,
  },
  preview: {
    port: 5001,
  },
  build: {
    outDir: buildDir,
    rollupOptions: {
      input: "src/main-wc.ts",
      output: {
        entryFileNames: `${outputName}.[format].js`,
        chunkFileNames: `${outputName}.[format].js`,
        assetFileNames: `${outputName}.[ext]`,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setupTests.js",
  },
});
