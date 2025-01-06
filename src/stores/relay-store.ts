import { defineStore } from 'pinia';
import { onUnmounted, ref } from 'vue';
import { Relay } from '../types/relay';
import {
  addRelayToDB,
  deleteRelayFromDB,
  fetchRelays,
  isRelayNameUniqueInDB,
  updateRelayStateFromDB,
  updateRelayConfigFromDB,
  onRelayStateChange,
} from '../services/relay-service';

export const useRelayStore = defineStore('relay', () => {
  const relays = ref<Relay[]>([]);
  const selectedRelay = ref<Relay>();
  const loading = ref(false);
  const error = ref<string | null>(null);
  const listeners = ref<Record<string, () => void>>({});

  const loadRelays = async () => {
    loading.value = true;
    error.value = null;
    try {
      relays.value = await fetchRelays();
      relays.value.forEach(relay => {
        setupRelayListener(relay.id);
      });
    } catch (err) {
      error.value = 'Failed to load relays';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const updateRelayConfig = async (
    id: string,
    newName: string,
    newMaxOnTime: number
  ) => {
    try {
      await updateRelayConfigFromDB(id, newName, newMaxOnTime);
      const relay = relays.value.find(relay => relay.id === id);
      if (relay) {
        relay.name = newName;
        relay.maxOnTime_s = newMaxOnTime;

        if (selectedRelay.value.id === relay.id) {
          selectedRelay.value = relay;
        }
      }
    } catch (err) {
      console.error('Failed to update relay config:', err);
    }
  };

  const updateRelayState = async (id: string, newState: boolean) => {
    try {
      await updateRelayStateFromDB(id, newState);
      const relay = relays.value.find(relay => relay.id === id);
      if (relay) {
        relay.state = newState;
      }
    } catch (err) {
      console.error('Failed to update relay state:', err);
    }
  };

  const addRelay = async (newRelay: Partial<Relay>): Promise<Relay> => {
    try {
      const addedRelay = await addRelayToDB(newRelay);
      relays.value.push(addedRelay);
      setupRelayListener(addedRelay.id);
      return addedRelay;
    } catch (err) {
      console.error('Failed to add relay:', err);
    }
  };

  const deleteRelay = async (id: string) => {
    try {
      unsubscribeRelayListener(id);
      await deleteRelayFromDB(id);
      relays.value = relays.value.filter(relay => relay.id !== id);
      if (selectedRelay.value.id === id) {
        selectedRelay.value = null;
      }
    } catch (err) {
      console.error('Failed to delete relay:', err);
    }
  };

  const isRelayNameUnique = async (name: string): Promise<boolean> => {
    try {
      return await isRelayNameUniqueInDB(name);
    } catch (err) {
      console.error('Failed to check relay name uniqueness:', err);
      return false;
    }
  };

  function getMaxOnTime(relay: Relay): string {
    return secondsToHHMMSS(relay.maxOnTime_s ? relay.maxOnTime_s : 0);
  }

  function secondsToHHMMSS(totalSeconds: number): string {
    if (isNaN(totalSeconds) || totalSeconds < 0) {
      return '00:00:00';
    }

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }

  const setupRelayListener = (id: string) => {
    unsubscribeRelayListener(id);
    listeners.value[id] = onRelayStateChange(id, updatedRelay => {
      const relayIndex = relays.value.findIndex(relay => relay.id === id);
      if (relayIndex !== -1) {
        relays.value[relayIndex] = updatedRelay;
      }
    });
  };

  const unsubscribeRelayListener = (id: string) => {
    if (listeners.value[id]) {
      listeners.value[id]();
      delete listeners.value[id];
    }
  };

  onUnmounted(() => {
    Object.keys(listeners.value).forEach(id => {
      unsubscribeRelayListener(id);
    });
  });

  return {
    relays,
    selectedRelay,
    loading,
    error,
    loadRelays,
    updateRelayConfig,
    updateRelayState,
    addRelay,
    isRelayNameUnique,
    deleteRelay,
    getMaxOnTime,
    secondsToHHMMSS,
  };
});
