import type { HacxyTheme } from '../types/index.ts';
import { useData } from 'vitepress';

export const useLayoutType = () => {
  const { frontmatter } = useData();
  return frontmatter.value.layout as 'blog' | 'home' | 'site';
};

// 备案信息
export const useRecordFiling = () => {
  const { theme } = useData<HacxyTheme>();
  return {
    recordFiling: theme.value.footer?.recordFiling
  };
};
