import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./components/Layout.vue";

const whisperTheme: Theme = {
  extends: DefaultTheme,
  Layout,
};

export const getThemeConfig = (): any => {
  return {};
};
export default whisperTheme;
