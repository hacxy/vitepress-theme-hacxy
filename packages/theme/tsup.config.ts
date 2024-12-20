import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/node.ts'],
  minify: true,
  outDir: 'dist',
  dts: true,
  format: ['esm'],
  clean: true,
  external: ['vitepress']
  // silent: true,
});
