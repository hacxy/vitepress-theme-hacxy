<script setup lang="ts">
import { HaxyTheme } from "../types";
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { onMounted } from "vue";
const { Layout } = DefaultTheme;
const data = useData<HaxyTheme>();

onMounted(async () => {
  const { loadOml2d } = await import("oh-my-live2d");
  loadOml2d(data.theme.value.oml2d || {});
});
</script>

<template>
  <Layout> </Layout>
</template>

<style scoped></style>
