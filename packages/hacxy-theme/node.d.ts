import { RawConfigExports, DefaultTheme } from 'vitepress';
import { SearchConfig, PagefindOption } from 'vitepress-plugin-pagefind';

type PagefindPluginConfig = SearchConfig & PagefindOption;
interface ThemePlugin {
    pagefindPlugin?: PagefindPluginConfig | false;
}
declare const loadThemePlugin: (themePlugin?: ThemePlugin) => RawConfigExports<DefaultTheme.Config>;

export { loadThemePlugin };
