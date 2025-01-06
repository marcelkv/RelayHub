<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import TaskBar from './components/task-bar.vue';
import SignIn from './components/sign-in.vue';
import Relays from './pages/relays.vue';
import Schedules from './pages/schedules.vue';
import { useUserStore } from './stores/user-store';
import { usePageStore } from './stores/page-store';
import TopBar from './components/top-bar.vue';
import Home from './pages/home.vue';
import Boards from './pages/boards.vue';
import Board from './pages/board.vue';
import Relay from './pages/relay.vue';

export default defineComponent({
  name: 'App',
  components: {
    Board,
    Boards,
    Home,
    TopBar,
    Schedules,
    Relays,
    Relay,
    TaskBar,
    SignIn,
  },
  setup() {
    const userStore = useUserStore();
    const pageStore = usePageStore();
    const ref_body = ref<HTMLElement | null>(null);

    const signedIn = computed<boolean>(() => !!userStore.user);

    function scrollToBottom(element?: HTMLElement): void {
      if (!ref_body.value) {
        return;
      }

      if (element instanceof HTMLElement) {
        element.scrollIntoView({ behavior: 'smooth', block: 'end' });
      } else {
        ref_body.value.scroll({
          top: ref_body.value.scrollHeight,
          behavior: 'smooth',
        });
      }
    }

    return { signedIn, pageStore, ref_body, scrollToBottom };
  },
});
</script>

<template>
  <div class="app">
    <div v-if="signedIn" class="signed-in">
      <top-bar />
      <div class="body" ref="ref_body">
        <home v-if="pageStore.currentPage === 'home'" />
        <boards v-if="pageStore.currentPage === 'boards'" />
        <board v-if="pageStore.currentPage === 'board'" />
        <relays
          v-if="pageStore.currentPage === 'relays'"
          v-on:requestScrollToBottom="scrollToBottom"
        />
        <relay v-if="pageStore.currentPage === 'relay'" />
        <schedules
          v-else-if="pageStore.currentPage === 'schedules'"
          v-on:requestScrollToBottom="scrollToBottom"
        />
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
  --topBarHeight: 70px;
  --topBarColor: black;
  --taskBarHeight: 70px;
  --taskBarColor: black;

  .signed-in {
    height: 100%;
    width: 100%;

    .top-bar,
    .task-bar {
      z-index: 1;
    }

    .body {
      position: relative;
      z-index: 0;
      width: 100%;
      height: 100%;
      max-height: calc(100% - var(--topBarHeight) - var(--taskBarHeight));
      overflow: auto;
    }
  }

  .sign-in {
    color: black;
  }
}
</style>
