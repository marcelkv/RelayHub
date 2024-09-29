<script lang="ts">
import { computed, defineComponent } from 'vue';
import TaskBar from './components/task-bar.vue';
import SignIn from './components/sign-in.vue';
import Relays from './pages/relays.vue';
import Schedules from './components/schedules.vue';
import { useUserStore } from './stores/user-store.ts';
import { usePageStore } from './stores/page-store.ts';

export default defineComponent({
  name: 'App',
  components: { Schedules, Relays, TaskBar, SignIn },
  setup() {
    const userStore = useUserStore();
    const pageStore = usePageStore();

    const signedIn = computed<boolean>(() => !!userStore.user);

    return { signedIn, pageStore };
  },
});
</script>

<template>
  <div class="app">
    <div v-if="signedIn" class="signed-in">
      <div class="body">
        <relays v-if="pageStore.currentPage === 'relays'" />
        <schedules v-else-if="pageStore.currentPage === 'schedules'" />
      </div>
      <task-bar />
    </div>
    <sign-in v-else />
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
  color: white;
  --taskBarHeight: 70px;
  --taskBarColor: black;

  .signed-in {
    height: 100%;
    width: 100%;

    .body {
      z-index: 0;
      width: 100%;
      height: 100%;
      max-height: calc(100% - var(--taskBarHeight));
    }
  }

  .sign-in {
    color: black;
  }
}
</style>
