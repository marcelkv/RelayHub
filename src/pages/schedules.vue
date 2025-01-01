<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useScheduleStore } from '../stores/schedule-store';
import Spinner from '../components/spinner.vue';
import Schedule from '../components/schedule.vue';

export default defineComponent({
  components: { Schedule, Spinner },
  setup() {
    const scheduleStore = useScheduleStore();

    onMounted(async () => {
      await scheduleStore.loadSchedules();
    });

    return {
      scheduleStore,
    };
  },
});
</script>

<template>
  <div class="schedules">
    <spinner
      v-if="scheduleStore.loading"
      v-bind:spinner-size="'20px'"
      v-bind:with-text="true"
    />
    <div v-if="!scheduleStore.loading && !scheduleStore.error">
      <div v-if="scheduleStore.schedules.length">
        <Schedule
          v-for="schedule in scheduleStore.schedules"
          v-bind:key="schedule.id"
          v-bind:schedule="schedule"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.schedules {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
