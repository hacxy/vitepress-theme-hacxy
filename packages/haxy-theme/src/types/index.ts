import { DefaultTheme } from "vitepress";
import { Options } from "oh-my-live2d";
export interface HaxyTheme extends DefaultTheme.Config {
  /**
   * oh-my-live2d 的配置选项
   */
  oml2d?: Options;
  footer?: DefaultTheme.Footer & {
    /**
     * 备案记录
     */
    recordFiling?: {
      message?: string;
      link?: string;
    };
  };
}
