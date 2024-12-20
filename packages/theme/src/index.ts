import { type Theme } from 'vitepress';
import type { HacxyTheme } from './types';

import DefaultTheme from 'vitepress/theme';
import Layout from './components/Layout.vue';
import { MotionPlugin } from '@vueuse/motion';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVuetify } from 'vuetify';
const vuetify = createVuetify({
  components,
  directives
});
const HacxyTheme: Theme = {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    app.use(MotionPlugin);
    app.use(vuetify);
  }
};

export * from './types';
export default HacxyTheme;
