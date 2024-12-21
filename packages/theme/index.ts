import type { Theme } from 'vitepress';
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client';
import { MotionPlugin } from '@vueuse/motion';
import DefaultTheme from 'vitepress/theme';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import Layout from './src/components/Layout.vue';
import 'vuetify/styles';
import '@shikijs/vitepress-twoslash/style.css';

const vuetify = createVuetify({
  components,
  directives
});

const MildTheme: Theme = {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.use(MotionPlugin);
    app.use(vuetify);
    app.use(TwoslashFloatingVue);
  }
};

export default MildTheme;
