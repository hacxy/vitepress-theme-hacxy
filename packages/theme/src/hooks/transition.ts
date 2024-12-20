import { useData } from 'vitepress';
import { nextTick, provide } from 'vue';

export const useTransition = () => {
  const { isDark } = useData();
  const enableTransitions = () =>
    'startViewTransition' in document && window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

  provide('toggle-appearance', async () => {
    if (!enableTransitions()) {
      isDark.value = !isDark.value;
      return;
    }

    await (document as any).startViewTransition(async () => {
      isDark.value = !isDark.value;
      await nextTick();
    }).ready;
  });
};
