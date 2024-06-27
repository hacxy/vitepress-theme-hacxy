import { defineConfigWithTheme } from "vitepress";
import themePluginExtends from "./theme.plugin";
import { HacxyTheme } from "vitepress-theme-hacxy";

export default defineConfigWithTheme<HacxyTheme>({
  title: "Hacxy Blog",
  description: "A hacxy blog",
  extends: themePluginExtends,
  themeConfig: {
    logo: "logo.png",
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 4],
      label: "目录",
    },
    sidebar: {
      src: [
        {
          text: "服务器相关",
          items: [
            {
              text: "",
            },
          ],
        },
        {
          text: "开发工具相关",
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/hacxy",
      },
    ],

    footer: {
      copyright:
        'Copyright © 2023-Present <a href="https://github.com/hacxy">Hacxy</a>',
      recordFiling: {
        message: "鄂ICP备2021019656号",
        link: "https://beian.miit.gov.cn",
      },
    },
  },
});
