import { defineConfigWithTheme } from "vitepress";
import { HaxyTheme } from "vitepress-theme-haxy";
// import { getThemeConfig } from "vitepress-theme-whisper/dist/node";
// https://vitepress.dev/reference/site-config

export default defineConfigWithTheme<HaxyTheme>({
  title: "Hacxy Blog",
  description: "A hacxy blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "logo.png",
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
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
      message:
        'Copyright © 2023-present <a href="https://github.com/hacxy">Hacxy</a>',
      copyright: '<a href="https://beian.miit.gov.cn">鄂ICP备2021019656号</a>',
    },

    oml2d: {
      primaryColor: "pink",
      models: [
        {
          path: "https://model.oml2d.com/HK416-1-normal/model.json",
          position: [0, 60],
          scale: 0.075,
          stageStyle: {
            height: 400,
          },
        },
      ],
    },
  },
});
