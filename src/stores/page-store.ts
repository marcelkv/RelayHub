import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const usePageStore = defineStore('page', () => {
  const currentPage = ref<string>('relays');

  const pageTitles: Record<string, string> = {
    relays: 'Relay Control',
    schedules: 'Task Schedules',
  };

  const setPage = (newPage: string) => {
    currentPage.value = newPage;
  };

  const currentPageTitle = computed(() => {
    return pageTitles[currentPage.value] || 'Unknown Page';
  });

  return { currentPage, setPage, currentPageTitle };
});
