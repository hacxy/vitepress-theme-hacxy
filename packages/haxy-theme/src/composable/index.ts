import { useData, resolveConfig, Theme } from "vitepress";
import { Component, defineComponent, computed, provide, ref, h } from "vue";

export function withConfigProvider(App: Component) {
  return defineComponent({
    name: "ConfigProvider",
    setup(_, { slots }) {
      const { theme } = useData();
      const config = computed(() => resolveConfig(theme.value));
      // provide(homeFooter, config.value.blog?.footer);
      // provide(configSymbol, config);
      // provide(
      //   userWorks,
      //   ref(
      //     config.value.blog?.works || {
      //       title: "",
      //       description: "",
      //       list: [],
      //     }
      //   )
      // );

      // const activeTag = ref<Theme.activeTag>({
      //   label: "",
      //   type: "",
      // });
      // provide(activeTagSymbol, activeTag);

      // const pageNum = ref(1);
      // provide(currentPageNum, pageNum);

      // const mode = useColorMode({
      //   attribute: "theme",
      //   modes: {
      //     // 内置的颜色主题
      //     "vp-default": "vp-default",
      //     "vp-green": "vp-green",
      //     "vp-yellow": "vp-yellow",
      //     "vp-red": "vp-red",
      //     "el-blue": "el-blue",
      //     "el-yellow": "el-yellow",
      //     "el-green": "el-green",
      //     "el-red": "el-red",
      //   },
      // });
      // mode.value = config.value.blog?.themeColor ?? "vp-default";
      return () => h(App, null, slots);
    },
  });
}
