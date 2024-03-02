import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

const buildDir = "dist";
const outputName = "list-v_" + process.env.npm_package_version;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,
  },
  preview: {
    port: 5002,
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

})
