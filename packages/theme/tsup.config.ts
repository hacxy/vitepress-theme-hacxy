import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/config/index.ts'],
  format: ['esm'],
  target: 'node18',
  platform: 'node',
  bundle: true,
  minify: true,
  dts: true,
  clean: true,
  // watch: true,
  // treeshake: true,
});
