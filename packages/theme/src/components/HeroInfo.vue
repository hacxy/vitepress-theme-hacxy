<script setup lang="ts">
import Typed from 'typed.js';
import { useData } from 'vitepress';
import { onMounted, onUnmounted, ref } from 'vue';

const { frontmatter } = useData();
const heroInfo = frontmatter.value.hero;
const taglineRef = ref(null);

let typed: Typed;

onMounted(() => {
  typed = new Typed(taglineRef.value, {
    strings: [heroInfo.tagline],
    typeSpeed: 80
  });
});

onUnmounted(() => {
  typed.destroy();
});
</script>

<template>
  <div class="hero-info">
    <h1 class="hero-info-title">
      {{ heroInfo.name }}
    </h1>
    <span ref="taglineRef" class="hero-info-tagline" />
  </div>
</template>

<style lang="scss" scoped>
.hero-info {
  text-align: center;
  margin-top: 15px;
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
