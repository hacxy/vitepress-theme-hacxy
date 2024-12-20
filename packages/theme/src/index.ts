import { type Theme } from 'vitepress';
import type { HacxyTheme } from './types';

import DefaultTheme from 'vitepress/theme';
import Layout from './components/Layout.vue';

import './style/index.scss';
import { MotionPlugin } from '@vueuse/motion';

const HacxyTheme: Theme = {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    app.use(MotionPlugin);
    // app.component('ArticlesList', ArticlesList);
  }
};

export * from './types';
export default HacxyTheme;
