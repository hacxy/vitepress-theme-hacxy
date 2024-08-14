import { type Theme } from 'vitepress';
import type { HacxyTheme } from './types';

import DefaultTheme from 'vitepress/theme';
import Layout from './components/Layout.vue';

import './style/index.scss';

const HacxyTheme: Theme = {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {}
};

export * from './types';
export default HacxyTheme;
