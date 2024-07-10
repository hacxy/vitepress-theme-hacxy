<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import VPNav from 'vitepress/dist/client/theme-default/components/VPNav.vue';
// import VPFooter from 'vitepress/dist/client/theme-default/components/VPFooter.vue';
import Footer from './Footer.vue';
import HeroAvatar from './HeroAvatar.vue';
import HeroInfo from './HeroInfo.vue';
import ArticlesList from './ArticlesList.vue';

import { useLayoutType } from '../hooks';
import { useTransition } from '../hooks/transition';
const layoutType = useLayoutType();

// 过渡动画
useTransition();
</script>

<template>
  <DefaultTheme.Layout>
    <div class="blog-page-content">
      <HeroAvatar />
      <HeroInfo />
      <ArticlesList />
    </div>

    <!-- footer -->
    <template #layout-bottom>
      <Footer />
      <slot name="layout-bottom" />
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
.blog-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .blog-page-content {
    height: 100%;
    padding: 100px 0;
  }
}
</style>
