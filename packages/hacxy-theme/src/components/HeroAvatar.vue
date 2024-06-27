<script setup lang="ts">
import { useData } from 'vitepress';

const { frontmatter } = useData();
const heroImage = frontmatter.value.hero.image;
</script>

<template>
  <div class="hero-avatar">
    <img class="hero-avatar-image" :src="heroImage.src" :alt="heroImage.alt" />
  </div>
</template>

<style lang="scss" scoped>
.hero-avatar {
  width: 100%;
  .hero-avatar-image {
    width: 130px;
    margin: 0 auto;
  }
}
</style>
