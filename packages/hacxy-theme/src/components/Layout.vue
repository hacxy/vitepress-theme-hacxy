<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import VPNav from 'vitepress/dist/client/theme-default/components/VPNav.vue';
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
  <template v-if="layoutType === 'blog'">
    <div class="blog-page">
      <VPNav />

      <div class="blog-page-content">
        <HeroAvatar />
        <HeroInfo />
        <ArticlesList />
      </div>
    </div>
  </template>

  <DefaultTheme.Layout v-else>
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

  .blog-page-content {
    padding: 100px 0;
  }
}
</style>
