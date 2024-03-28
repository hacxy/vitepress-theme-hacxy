import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./components/Layout.vue";

const WhisperTheme: Theme = {
  extends: DefaultTheme,
  Layout,
};
export default WhisperTheme;
// export const foo = () => {};
