import { SiteConfig, RawConfigExports, DefaultTheme } from 'vitepress';
import { SearchConfig, PagefindOption } from 'vitepress-plugin-pagefind';

type PagefindPluginConfig = SearchConfig & PagefindOption;
interface ThemePlugin {
    pagefindPlugin?: PagefindPluginConfig | false;
}
declare function getPageRoute(filepath: string, srcDir: string): string;
declare function getTextSummary(text: string, count?: number): string;
declare function getArticles(vpConfig: SiteConfig): Promise<{
    title: string;
    path: string;
    summary: string;
}[]>;
declare const loadThemePlugin: (themePlugin?: ThemePlugin) => RawConfigExports<DefaultTheme.Config>;

export { getArticles, getPageRoute, getTextSummary, loadThemePlugin };
