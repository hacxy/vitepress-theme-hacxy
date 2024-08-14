<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import Footer from './Footer.vue';
import HeroAvatar from './HeroAvatar.vue';
import HeroInfo from './HeroInfo.vue';

import { useTransition } from '../hooks/transition';
// 过渡动画
useTransition();
</script>

<template>
  <DefaultTheme.Layout class="blog-page">
    <template #home-hero-info>
      <HeroInfo />
    </template>

    <template #home-hero-image>
      <HeroAvatar />
    </template>

    <!-- footer -->
    <template #layout-bottom>
      <Footer />
      <slot name="layout-bottom" />
    </template>
  </DefaultTheme.Layout>
</template>

<style lang="scss" scoped>
.blog-page {
  :deep(.VPHero) {
    .container {
      @media (min-width: 640px) {
        .image {
          margin: 0;
          .image-container {
            transform: none;
            width: 100%;
            height: 100%;
          }
        }
      }
      .image {
        margin: 0 auto;
        .image-container {
          transform: none;
          width: 100%;
          height: 100%;
        }
        height: 130px;
        width: 130px;
        .image-bg {
          display: flex;
        }
      }
    }
    @media (min-width: 960px) {
      .container {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        .image {
          .image-container {
            transform: none;
          }
        }
        .main {
          .actions {
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>
