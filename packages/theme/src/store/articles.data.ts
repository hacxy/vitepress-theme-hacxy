import dayjs from 'dayjs';
import matter from 'gray-matter';
import { createContentLoader } from 'vitepress';

function getTextDescription(text: string, count = 100) {
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
    ?.filter(v => !!v)
    ?.join('\n')
    ?.replace(/>(.*)/, '')
    ?.replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    ?.trim()
    ?.slice(0, count);

  return finalText;
}

export default createContentLoader('./**/*.md', {
  includeSrc: true,
  render: true,
  excerpt: true,
  transform(rawData) {
    const finalRawData = rawData.filter(item => !['/', '/README.html'].includes(item.url));
    const data = finalRawData.map(item => {
      const content = matter(item.src || '').content;
      const match = content.match(/^(#+)\s+(.+)/m);
      const title = match?.[2] || '';
      const description = getTextDescription(content);
      item.frontmatter.date = dayjs(item.frontmatter.date).format('YYYY-MM-DD');
      return {
        path: item.url,
        description,
        title,
        ...item.frontmatter
      };
    });
    return data;
  }
});

export interface ArticlesData {
  title: string
  path: string
  description: string
  date: string
  tags: string[]
}
declare const data: ArticlesData[];
export { data };
