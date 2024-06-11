import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./components/Layout.vue";
import { ElButton } from "element-plus";
import "element-plus/dist/index.css";
import "./style/index.scss";

const HacxyTheme: Theme = {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.use(ElButton);
  },
};

export * from "./types";
export default HacxyTheme;
