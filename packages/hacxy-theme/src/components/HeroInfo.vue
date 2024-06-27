<script setup lang="ts">
import { useData } from 'vitepress';
const { frontmatter } = useData();
const heroInfo = frontmatter.value.hero;
</script>

<template>
  <div class="hero-info">
    <h1 class="hero-info-title">{{ heroInfo.name }}</h1>
    <div class="hero-info-tagline">{{ heroInfo.tagline }}</div>
  </div>
</template>

<style lang="scss" scoped>
.hero-info {
  margin-top: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .hero-info-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .hero-info-tagline {
    font-size: 16px;
  }
}
</style>
