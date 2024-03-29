<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useData } from "vitepress";
import type { HaxyTheme } from "../types";

const { theme } = useData<HaxyTheme>();
const oml2dRef = ref();

onMounted(async () => {
  if (theme.value.oml2d) {
    const { loadOml2d } = await import("oh-my-live2d");
    loadOml2d({
      ...theme.value.oml2d,
      parentElement: oml2dRef.value,
    });
  }
});
</script>

<template>
  <div class="Oml2d" ref="oml2dRef" />
</template>

<style scoped></style>
