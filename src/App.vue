<script lang="ts">
import { defineComponent } from 'vue';
import TaskBar from './components/task-bar.vue';

export default defineComponent({
  name: 'App',
  components: { TaskBar },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="app">
    <div class="body"></div>
    <task-bar />
  </div>
</template>

<style scoped>
html,
body {
  overscroll-behavior: none;
  margin: 0;
  padding: 0;
  border: 0;
}

* {
  box-sizing: border-box;
}

.app {
  margin: 0;
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: black;
  --taskBarHeight: 70px;
  --taskBarColor: black;

  .body {
    z-index: 0;
    width: 100%;
    height: 100%;
    max-height: calc(100% - var(--taskBarHeight));
  }
}
</style>
