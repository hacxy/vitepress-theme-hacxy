<script setup lang="ts">
// import Footer from './Footer.vue';
// import HeroAvatar from './HeroAvatar.vue';
// import HeroInfo from './HeroInfo.vue';
import DefaultTheme from 'vitepress/theme';
import { useTransition } from '../hooks/transition';
import ArticlesList from './ArticlesList.vue';

const { Layout } = DefaultTheme;
// 过渡动画
useTransition();
</script>

<template>
  <layout class="blog-page">
    <template #home-hero-info>
      <articles-list />
    </template>
  </layout>
</template>

<style lang="scss" scoped>
.blog-page {
  :deep(.VPHero) {
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 10px) 64px 0px;
    display: flex;
    .container {
      text-align: left;
      .image {
        display: none;
      }
      .actions {
        display: none;
      }
    }
  }
  :deep(.VPFeatures) {
    display: none;
  }

  :deep(.VPFooter) {
    padding: 10px 32px 10px;
    .copyright {
      color: #888;
      text-align: center;
      font-size: 0.75rem;
      width: 100%;
      padding: 15px 0;
      overflow: auto;
      a {
        color: var(--vp-c-text-1);
        font-weight: 700;
      }
    }
  }
}
</style>
