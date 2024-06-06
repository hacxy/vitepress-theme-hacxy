import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./components/Layout.vue";
import "./style/index.scss";
import { ElButton } from "element-plus";
import "element-plus/dist/index.css";

const HacxyTheme: Theme = {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.use(ElButton);
  },
};

export * from "./types";
export default HacxyTheme;
