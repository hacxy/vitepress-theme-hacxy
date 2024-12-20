import { DefaultTheme, RawConfigExports, SiteConfig } from 'vitepress';
// import { PagefindOption, SearchConfig } from 'vitepress-plugin-pagefind';
import { glob } from 'glob';
import matter from 'gray-matter';
import path from 'node:path';
import fs from 'node:fs';
import dayjs from 'dayjs';
// type PagefindPluginConfig = SearchConfig & PagefindOption;

// interface ThemePlugin {
//   pagefindPlugin?: PagefindPluginConfig | false;
// }

export function getPageRoute(filepath: string, srcDir: string) {
  const route = path.normalize(path.relative(srcDir, filepath)).replace(/\.md$/, '');
  return `/${route}`;
}

export function getTextDescription(text: string, count = 100) {
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
  const files = glob.sync(`${srcDir}/**/*.md`, { ignore: ['node_modules/**/*'], absolute: true });
  const articleData = files.map((item) => {
    const fileContent = fs.readFileSync(item, { encoding: 'utf8' });
    const match = fileContent.match(/^(#+)\s+(.+)/m);
    const title = match?.[2] || '';

    const content = matter(fileContent).content;

    const frontmatter = matter(fileContent).data;
    const date = dayjs(frontmatter.date).format('YYYY-MM-DD');

    return {
      title,
      path: getPageRoute(item, srcDir),
      description: getTextDescription(content),
      ...frontmatter,
      date
    };
  });

  return articleData;
}
export const defineThemeConfig = (): RawConfigExports<DefaultTheme.Config> => {
  return {
    vite: {
      plugins: [
        {
          name: 'vitepress-plugin-article',
          config: async (cfg: any) => {
            cfg.vitepress.site.themeConfig.pagesData = await getArticles(cfg.vitepress);
          }
        }
      ]
    }
  };
};
