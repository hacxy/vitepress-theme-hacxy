import { DefaultTheme } from "vitepress";
import { Options } from "oh-my-live2d";
export interface HaxyTheme extends DefaultTheme.Config {
  oml2d?: Options;
}
