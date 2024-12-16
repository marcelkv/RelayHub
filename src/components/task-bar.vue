<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import IconHome from '../icons/icon-home.vue';
import IconLightSwitch from '../icons/icon-light-switch.vue';
import IconSchedule from '../icons/icon-schedule.vue';

export default defineComponent({
  name: 'task-bar',
  components: { IconSchedule, IconLightSwitch, IconHome },
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
    <router-link to="/home" class="task"
      ><icon-home v-bind:text="'Home'"></icon-home
    ></router-link>
    <router-link to="/relays" class="task">
      <icon-light-switch v-bind:text="'Relays'"></icon-light-switch>
    </router-link>
    <router-link to="/schedules" class="task"
      ><icon-schedule v-bind:text="'Schedules'"
    /></router-link>
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
    --size: 50px;
    height: var(--size);
    width: var(--size);
  }

  a {
    text-decoration: none;
  }
}
</style>
