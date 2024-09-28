<script lang="ts">
import { defineComponent } from 'vue';
import { usePageStore } from '../stores/page-store.ts';

export default defineComponent({
  name: 'task-bar',
  setup() {
    const pageStore = usePageStore();

    function selectPage(page: string): void {
      pageStore.setPage(page);
    }

    return { selectPage };
  },
});
</script>

<template>
  <div class="task-bar">
    <div class="task" v-on:click="selectPage('schedules')">Schedules</div>
    <div class="task" v-on:click="selectPage('relays')">Relays</div>
  </div>
</template>

<style scoped>
.task-bar {
  position: relative;
  z-index: 1;
  min-height: var(--taskBarHeight);
  max-height: var(--taskBarHeight);
  background-color: var(--taskBarColor);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid dimgrey;
  outline: none;

  .task {
    color: white;
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    box-sizing: border-box;

    &:hover {
      border-color: rgba(255, 255, 255, 0.3);
      background-color: rgba(255, 255, 255, 0.1);
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
