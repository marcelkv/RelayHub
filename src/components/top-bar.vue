<script lang="ts">
import { defineComponent } from 'vue';
import { usePageStore } from '../stores/page-store.ts';
import PageTitle from '../components/page-title.vue';

export default defineComponent({
  components: {
    PageTitle,
  },
  setup() {
    const pageStore = usePageStore();

    return { pageStore };
  },
});
</script>

<template>
  <div class="top-bar">
    <PageTitle v-bind:title="pageStore.currentPageTitle" />
  </div>
</template>

<style scoped>
.top-bar {
  position: relative;
  min-height: var(--topBarHeight);
  max-height: var(--topBarHeight);
  background-color: var(--topBarColor);
  display: flex;
  font-weight: 400;
}
</style>
