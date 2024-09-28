import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePageStore = defineStore('page', () => {
  const currentPage = ref<string>('schedules'); // Default to "schedule" page

  const setPage = (newPage: string) => {
    currentPage.value = newPage;
  };

  return { currentPage, setPage };
});
