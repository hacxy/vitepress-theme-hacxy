import { HacxyTheme } from "../types/index.ts";
import { useData } from "vitepress";

export const useLayout = () => {
  const { frontmatter } = useData();
  return {
    layout: frontmatter.value.layout as string,
  };
};

export const useRecordFiling = () => {
  const { theme } = useData<HacxyTheme>();
  return {
    recordFiling: theme.value.footer?.recordFiling,
  };
};
