<script setup lang="ts">
// import { HaxyTheme } from "../types";
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Footer from "./Footer.vue";
import { useLayout } from "../hooks";
import { nextTick, provide } from "vue";
const { isDark, theme } = useData();
const { layout } = useLayout();

const enableTransitions = () =>
  "startViewTransition" in document &&
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

provide("toggle-appearance", async () => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    return;
  }

  await (document as any).startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  }).ready;
});
</script>

<template>
  <DefaultTheme.Layout>
    <!-- footer -->
    <template #layout-bottom>
      <Footer v-if="layout === 'home'" />
      <slot name="layout-bottom" />
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped></style>
