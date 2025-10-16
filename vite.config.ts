import {defineConfig, UserConfigExport} from 'vite'
import type { UserConfig as VitestUserConfigInterface } from "vitest/config"
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import dts from "vite-plugin-dts";

let __dirname = path.resolve();

const vitestConfig : VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'happy-dom'
  }
}
export default defineConfig({
  ...vitestConfig,
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "src/main.ts",
      name: 'VireoXlibrary',
      formats: ["es", "cjs", "umd"],
      fileName: format => `vireoxlibrary.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that should not be bundled
      // into your library
      input: {
        main: path.resolve(__dirname, "src/main.ts")
      },
      external: ['vue', "vuedraggable"],
      sourcemap: true,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
} as UserConfigExport)
