import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    "src/index",
    {
      builder: "mkdist",
      input: "./src/components/",
      outDir: "./dist/components",
    },
    {
      builder: "rollup",
      input: "./src/node",
    },
  ],

  clean: false,

  // Generates .d.ts declaration file
  declaration: true,

  // Change outDir, default is 'dist'
  outDir: "dist",
  externals: [
    "vitepress",
    new RegExp("vitepress/*"),
    new RegExp("components/.*"),
  ],
  rollup: {
    inlineDependencies: true,
    esbuild: {
      target: "es6",
      minify: true,
    },
  },
  alias: {
    // components: "../src/components",
    // we can always use non-transpiled code since we support node 18+
  },
});
