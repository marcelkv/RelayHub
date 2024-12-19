<script lang="ts">
import { defineComponent } from 'vue';
import { usePageStore } from '../stores/page-store.ts';
import PageTitle from '../components/page-title.vue';
import IconBack from '../icons/icon-back.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    IconBack,
    PageTitle,
  },
  setup() {
    const pageStore = usePageStore();
    const router = useRouter();

    function onNavigateBack(): void {
      if (!pageStore.navigateBackPage) {
        return;
      }

      router.push({ name: pageStore.navigateBackPage });
      pageStore.setNavigateBackPage(null);
    }

    return { pageStore, onNavigateBack };
  },
});
</script>

<template>
  <div class="top-bar">
    <div class="icon-back-wrapper" v-on:click="onNavigateBack">
      <icon-back v-if="pageStore.navigateBackPage"> Back </icon-back>
    </div>
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

  .icon-back-wrapper {
    position: absolute;
    height: 100%;
    max-width: var(--topBarHeight);
    width: var(--topBarHeight);
    display: flex;
    align-items: center;

    .icon-back {
      height: 40px;
    }
  }
}
</style>
