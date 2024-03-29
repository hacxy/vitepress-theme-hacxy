import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./components/Layout.vue";
import "./style/index.scss";
const WhisperTheme: Theme = {
  extends: DefaultTheme,
  Layout,
};

export * from "./types";
export default WhisperTheme;
