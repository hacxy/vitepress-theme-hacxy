<script setup lang="ts">
import { onMounted } from "vue";

import BlogTheme from "@sugarat/theme";
const Layout = BlogTheme.Layout;

onMounted(async () => {
  const { loadOml2d } = await import("oh-my-live2d");

  loadOml2d({
    models: [
      {
        path: "https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json",
      },
    ],
  });
});
</script>

<template>
  <!-- <div class="example"></div> -->
  <Layout />
</template>

<style scoped lang="scss"></style>
