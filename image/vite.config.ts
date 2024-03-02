
import { defineConfig } from 'vite';

const buildDir = "dist";
const outputName = "image-v_" + process.env.npm_package_version;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  server: {
    port: 3003,
  },
  preview: {
    port: 5003,
  },

  build: {
    outDir: buildDir,
    rollupOptions: {
      input: "src/main.ts",
      output: {
        entryFileNames: `${outputName}.[format].js`,
        chunkFileNames: `${outputName}.[format].js`,
        assetFileNames: `${outputName}.[ext]`,
      },
    },
  },

})
