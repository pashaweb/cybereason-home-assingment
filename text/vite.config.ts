
import { defineConfig } from 'vite';

const buildDir = "dist";
const outputName = "text-v_" + process.env.npm_package_version;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  server: {
    port: 3004,
  },
  preview: {
    port: 5004,
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
