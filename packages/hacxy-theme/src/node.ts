import { DefaultTheme, RawConfigExports, SiteConfig } from 'vitepress';
import { PagefindOption, SearchConfig, pagefindPlugin } from 'vitepress-plugin-pagefind';
import { glob } from 'fast-glob';
import matter from 'gray-matter';
import path from 'node:path';
import fs from 'node:fs';

type PagefindPluginConfig = SearchConfig & PagefindOption;

interface ThemePlugin {
  pagefindPlugin?: PagefindPluginConfig | false;
}

export function getPageRoute(filepath: string, srcDir: string) {
  const route = path.normalize(path.relative(srcDir, filepath)).replace(/\.md$/, '');
  return `/${route}`;
}

export function getTextSummary(text: string, count = 100) {
  const finalText = text
    // 首个标题
    ?.replace(/^(#+)(.*)/m, '')
    // 除去标题
    ?.replace(/#/g, '')
    // 除去图片
    ?.replace(/!\[.*?\]\(.*?\)/g, '')
    // 除去链接
    ?.replace(/\[(.*?)\]\(.*?\)/g, '$1')
    // 除去加粗
    ?.replace(/\*\*(.*?)\*\*/g, '$1')
    ?.split('\n')
    ?.filter((v) => !!v)
    ?.join('\n')
    ?.replace(/>(.*)/, '')
    ?.replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    ?.trim()
    ?.slice(0, count);

  console.log(finalText);
  return finalText;
}

export async function getArticles(vpConfig: SiteConfig) {
  const srcDir = vpConfig.srcDir.replace(vpConfig.root, '').replace(/^\//, '') || process.argv.slice(2)?.[1] || '.';
  const files = glob.sync(`${srcDir}/**/*.md`, { ignore: ['node_modules'], absolute: true });

  const articleData = files.map((item) => {
    const fileContent = fs.readFileSync(item, { encoding: 'utf8' });
    const match = fileContent.match(/^(#+)\s+(.+)/m);
    const title = match?.[2] || '';

    const content = matter(fileContent).content;

    return {
      title,
      path: getPageRoute(item, srcDir),
      summary: getTextSummary(content)
    };
  });

  return articleData;
}

export const loadThemePlugin = (themePlugin?: ThemePlugin): RawConfigExports<DefaultTheme.Config> => {
  return {
    vite: {
      plugins: [
        {
          name: 'vitepress-plugin-article',
          config: async (cfg) => {
            (cfg as any).vitepress.site.themeConfig.pagesData = await getArticles((cfg as any).vitepress);
          }
        },
        themePlugin?.pagefindPlugin !== false && pagefindPlugin(themePlugin?.pagefindPlugin)
      ]
    }
  };
};
