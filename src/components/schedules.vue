<script lang="ts">
import { defineComponent } from 'vue';
import PageTitle from './page-title.vue';

export default defineComponent({
  components: { PageTitle },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="schedules">
    <page-title v-bind:title="'Schedules'" />
  </div>
</template>

<style scoped>
.schedules {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
