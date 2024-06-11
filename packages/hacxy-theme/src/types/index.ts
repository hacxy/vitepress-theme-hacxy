import { DefaultTheme } from "vitepress";

export interface HacxyTheme extends DefaultTheme.Config {
  /**
   * oh-my-live2d 的配置选项
   */
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
