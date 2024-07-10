"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/node.ts
var node_exports = {};
__export(node_exports, {
  getArticles: () => getArticles,
  getPageRoute: () => getPageRoute,
  getTextSummary: () => getTextSummary,
  loadThemePlugin: () => loadThemePlugin
});
module.exports = __toCommonJS(node_exports);
var import_vitepress_plugin_pagefind = require("vitepress-plugin-pagefind");
var import_fast_glob = require("fast-glob");
var import_gray_matter = __toESM(require("gray-matter"));
var import_node_path = __toESM(require("path"));
var import_node_fs = __toESM(require("fs"));
function getPageRoute(filepath, srcDir) {
  const route = import_node_path.default.normalize(import_node_path.default.relative(srcDir, filepath)).replace(/\.md$/, "");
  return `/${route}`;
}
function getTextSummary(text, count = 100) {
  const finalText = text?.replace(/^(#+)(.*)/m, "")?.replace(/#/g, "")?.replace(/!\[.*?\]\(.*?\)/g, "")?.replace(/\[(.*?)\]\(.*?\)/g, "$1")?.replace(/\*\*(.*?)\*\*/g, "$1")?.split("\n")?.filter((v) => !!v)?.join("\n")?.replace(/>(.*)/, "")?.replace(/</g, "&lt;").replace(/>/g, "&gt;")?.trim()?.slice(0, count);
  console.log(finalText);
  return finalText;
}
async function getArticles(vpConfig) {
  const srcDir = vpConfig.srcDir.replace(vpConfig.root, "").replace(/^\//, "") || process.argv.slice(2)?.[1] || ".";
  const files = import_fast_glob.glob.sync(`${srcDir}/**/*.md`, { ignore: ["node_modules"], absolute: true });
  const articleData = files.map((item) => {
    const fileContent = import_node_fs.default.readFileSync(item, { encoding: "utf8" });
    const match = fileContent.match(/^(#+)\s+(.+)/m);
    const title = match?.[2] || "";
    const content = (0, import_gray_matter.default)(fileContent).content;
    return {
      title,
      path: getPageRoute(item, srcDir),
      summary: getTextSummary(content)
    };
  });
  return articleData;
}
var loadThemePlugin = (themePlugin) => {
  return {
    vite: {
      plugins: [
        {
          name: "vitepress-plugin-article",
          config: async (cfg) => {
            cfg.vitepress.site.themeConfig.pagesData = await getArticles(cfg.vitepress);
          }
        },
        themePlugin?.pagefindPlugin !== false && (0, import_vitepress_plugin_pagefind.pagefindPlugin)(themePlugin?.pagefindPlugin)
      ]
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getArticles,
  getPageRoute,
  getTextSummary,
  loadThemePlugin
});
