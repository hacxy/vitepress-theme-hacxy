import { defineBuildConfig } from "unbuild";
import path from "path";
console.log(path.resolve(__dirname, "./src/index"));
export default defineBuildConfig({
  entries: [
    path.resolve(__dirname, "./src/index"),
    {
      builder: "mkdist",
      input: "./src/components/",
      outDir: "./dist/components",
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
});
