import { DefaultTheme } from 'vitepress';

export interface HacxyTheme extends DefaultTheme.Config {
  /**
   * 作者名称
   */
  author?: string;

  /**
   * 首页底部展示信息
   */
  footer?: DefaultTheme.Footer & {
    /**
     * 备案记录
     */
    recordFiling?: {
      /**
       * 信息
       */
      message?: string;
      /**
       * 链接
       */
      link?: string;
    };
  };
}
