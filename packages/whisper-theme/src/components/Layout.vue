<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
const data = useData();
console.log(data);
</script>

<template>
  <Layout> asd </Layout>
</template>

<style scoped></style>
