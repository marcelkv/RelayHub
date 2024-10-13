<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { Schedule } from '../types/schedule.ts';

export default defineComponent({
  props: {
    schedule: { type: Object as PropType<Schedule>, required: true },
  },
  setup(props) {
    const allDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    const endTime = computed(() => {
      const [startHours, startMinutes, startSeconds] = props.schedule.timeStart
        .split(':')
        .map(Number);
      const [durationHours, durationMinutes, durationSeconds] =
        props.schedule.duration.split(':').map(Number);

      const endDate = new Date();
      endDate.setHours(startHours + durationHours);
      endDate.setMinutes(startMinutes + durationMinutes);
      endDate.setSeconds(startSeconds + durationSeconds);

      return `${String(endDate.getHours()).padStart(2, '0')}:${String(endDate.getMinutes()).padStart(2, '0')}:${String(endDate.getSeconds()).padStart(2, '0')}`;
    });

    const selectedDays = computed(() => {
      return props.schedule.days.map(day => day.slice(0, 2)); // Taking the first 2 letters of each selected day
    });

    return { endTime, allDays, selectedDays };
  },
});
</script>

<template>
  <div class="schedule-item">
    <div class="schedule-name">{{ schedule.name }}</div>
    <div class="times">
      <div class="schedule-time">{{ schedule.timeStart }} - {{ endTime }}</div>
      <div class="duration">({{ schedule.duration }})</div>
    </div>
    <div class="schedule-days">
      <span
        v-for="day in allDays"
        :key="day"
        :class="{ selected: selectedDays.includes(day) }"
        class="day"
      >
        {{ day }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.schedule-item {
  padding: 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: Arial, sans-serif;
}

.schedule-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.times {
  width: 100%;
  display: flex;
  justify-content: space-between;

  .schedule-time {
    font-size: 16px;
    color: #666;
    margin-bottom: 10px;
  }

  .duration {
    font-size: 16px;
    color: #666;
    margin-bottom: 10px;
  }
}

.schedule-days {
  font-size: 14px;
  display: flex;
}

.day {
  margin-right: 10px;
  padding: 2px 4px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.selected {
  background-color: blueviolet;
  border-color: blueviolet;
}
</style>
