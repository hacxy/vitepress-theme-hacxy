import { loadThemePlugin } from "vitepress-theme-hacxy/node";

export default loadThemePlugin({
  pagefindPlugin: {
    locales: {
      root: {
        btnPlaceholder: "Search",
        placeholder: "Search Docs...",
        emptyText: "No results",
        heading: "Total: {{searchResult}} search results.",
      },
      zh: {
        btnPlaceholder: "搜索",
        placeholder: "搜索文档",
        emptyText: "空空如也",
        heading: "共: {{searchResult}} 条结果",
        // 搜索结果不展示最后修改日期日期
        showDate: false,
      },
    },
  },
});
