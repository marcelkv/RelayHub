import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Schedule } from '../types/schedule';
import {
  fetchSchedules,
  addScheduleToDB,
  updateScheduleInDB,
  deleteScheduleFromDB,
} from '../services/schedule-service';

export const useScheduleStore = defineStore('schedule', () => {
  const schedules = ref<Schedule[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const loadSchedules = async () => {
    loading.value = true;
    error.value = null;
    try {
      schedules.value = await fetchSchedules();
    } catch (err) {
      error.value = 'Failed to load schedules';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const addSchedule = async (newSchedule: Partial<Schedule>) => {
    try {
      const addedSchedule = await addScheduleToDB(newSchedule);
      schedules.value.push(addedSchedule);
    } catch (err) {
      console.error('Failed to add schedule:', err);
    }
  };

  const updateSchedule = async (
    id: string,
    updatedSchedule: Partial<Schedule>
  ) => {
    try {
      await updateScheduleInDB(id, updatedSchedule);
      const schedule = schedules.value.find(s => s.id === id);
      if (schedule) {
        Object.assign(schedule, updatedSchedule); // Update the local store
      }
    } catch (err) {
      console.error('Failed to update schedule:', err);
    }
  };

  const deleteSchedule = async (id: string) => {
    try {
      await deleteScheduleFromDB(id);
      schedules.value = schedules.value.filter(schedule => schedule.id !== id);
    } catch (err) {
      console.error('Failed to delete schedule:', err);
    }
  };

  return {
    schedules,
    loading,
    error,
    loadSchedules,
    addSchedule,
    updateSchedule,
    deleteSchedule,
  };
});
