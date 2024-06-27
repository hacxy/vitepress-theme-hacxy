import { DefaultTheme, RawConfigExports } from 'vitepress';
import { PagefindOption, SearchConfig, pagefindPlugin } from 'vitepress-plugin-pagefind';

type PagefindPluginConfig = SearchConfig & PagefindOption;

interface ThemePlugin {
  pagefindPlugin?: PagefindPluginConfig | false;
}

export const loadThemePlugin = (themePlugin?: ThemePlugin): RawConfigExports<DefaultTheme.Config> => {
  return {
    vite: {
      plugins: [
        {
          name: 'handlePageData',
          config: (cfg) => {
            console.log((cfg as any).vitepress);
          }
        },
        themePlugin?.pagefindPlugin !== false && pagefindPlugin(themePlugin?.pagefindPlugin)
      ]
    }
  };
};
