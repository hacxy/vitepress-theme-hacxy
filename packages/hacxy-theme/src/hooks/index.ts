import { HaxyTheme } from "src";
import { useData } from "vitepress";

export const useLayout = () => {
  const { frontmatter } = useData();
  return {
    layout: frontmatter.value.layout,
  };
};

export const useRecordFiling = () => {
  const { theme } = useData<HaxyTheme>();
  return {
    recordFiling: theme.value.footer?.recordFiling,
  };
};
