import path from "node:path";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/node.ts"],
  outDir: path.resolve(__dirname, "./"),
  dts: true,
  external: ["vitepress"],
  // silent: true,
});
