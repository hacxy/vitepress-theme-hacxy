import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/config/index.ts'],
  outDir: 'src/config',
  format: ['esm'],
  target: 'node18',
  platform: 'node',
  bundle: true,
  minify: true,
  // dts: true,
  // watch: true,
  // treeshake: true,
});
