<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'task-bar',
  setup() {
    const router = useRouter();

    onMounted(() => {
      navigateToPage('relays');
    });

    function navigateToPage(page: string): void {
      router.push({ name: page });
    }

    return {};
  },
});
</script>

<template>
  <div class="task-bar">
    <router-link class="task" to="/schedules">Schedules</router-link>
    <router-link class="task" to="/relays">Relays</router-link>
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
