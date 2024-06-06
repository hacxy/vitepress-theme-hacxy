<script setup lang="ts">
import { useRecordFiling } from "../hooks";
const { recordFiling } = useRecordFiling();
</script>

<script lang="ts">
export default { name: "Footer" };
</script>

<template>
  <div class="HYFooter">
    <a :href="recordFiling?.link">{{ recordFiling?.message }}</a>
  </div>
</template>

<style scoped lang="scss">
.HYFooter {
  padding: 0 32px;
  display: flex;
  justify-content: center;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  padding-bottom: 32px;
}
</style>
