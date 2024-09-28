<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: { type: String, required: true },
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="page-tite">{{ $props.title }}</div>
</template>

<style scoped>
.page-tite {
  height: var(--taskBarHeight);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
