import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const usePageStore = defineStore('page', () => {
  const currentPage = ref<string>('relays');
  const navigateBackPage = ref<string | null>();

  const pageTitles: Record<string, string> = {
    home: 'Relay Hub',
    boards: 'Boards',
    board: 'Board',
    relays: 'Relay Control',
    schedules: 'Task Schedules',
  };

  const setPage = (newPage: string) => {
    currentPage.value = newPage;
  };

  const currentPageTitle = computed(() => {
    return pageTitles[currentPage.value] || 'Unknown Page';
  });

  const setNavigateBackPage = (value: string | null) => {
    navigateBackPage.value = value;
  };

  return {
    currentPage,
    currentPageTitle,
    navigateBackPage,
    setPage,
    setNavigateBackPage,
  };
});
