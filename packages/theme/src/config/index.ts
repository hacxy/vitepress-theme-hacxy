import type { DefaultTheme, RawConfigExports } from 'vitepress';

export interface ThemeConfig {

}

export function defineThemeConfig(): RawConfigExports<DefaultTheme.Config> {
  return {
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            api: 'modern',
          },
        },
      },
    },
  };
}
