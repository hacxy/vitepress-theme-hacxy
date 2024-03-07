import BlogTheme from "@sugarat/theme";

// 自定义样式重载
// import './style.scss'

// 自定义主题色
// import './user-theme.css'
export default {
  ...BlogTheme,
  async enhanceApp() {
    if (!(import.meta as any).env.SSR) {
      const { loadOml2d } = await import("oh-my-live2d");
      loadOml2d({
        models: [
          {
            path: "https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json",
          },
        ],
      });
    }
  },
};
