import type { VitePressPluginTwoslashOptions } from '@shikijs/vitepress-twoslash';
import type { DefaultTheme, RawConfigExports } from 'vitepress';
import { transformerTwoslash } from '@shikijs/vitepress-twoslash';

export interface ThemeConfig {
  /**
   * Typescript Twoslash
   * @default true
   */
  twoslash?: false | VitePressPluginTwoslashOptions
}

export function defineThemeConfig(config: ThemeConfig = {}): RawConfigExports<DefaultTheme.Config> {
  const { twoslash } = config;
  const codeTransformers = [];
  if (twoslash !== false) {
    codeTransformers.push(transformerTwoslash(twoslash));
  }
  return {
    markdown: {
      codeTransformers
    },
    vite: {
      build: {
        chunkSizeWarningLimit: 2000
      },
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
