import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Relay } from '../types/relay';
import { fetchRelays, updateRelayState } from '../services/relay-service.ts';

export const useRelayStore = defineStore('relay', () => {
  const relays = ref<Relay[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const loadRelays = async () => {
    loading.value = true;
    error.value = null;
    try {
      relays.value = await fetchRelays();
    } catch (err) {
      error.value = 'Failed to load relays';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const updateRelay = async (id: string, newState: boolean) => {
    try {
      await updateRelayState(id, newState);
      const relay = relays.value.find(relay => relay.id === id);
      if (relay) {
        relay.state = newState;
      }
    } catch (err) {
      console.error('Failed to update relay state:', err);
    }
  };

  return { relays, loading, error, loadRelays, updateRelay };
});
