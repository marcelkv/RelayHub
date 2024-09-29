import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Relay } from '../types/relay';
import {
  addRelayToDB,
  deleteRelayFromDB,
  fetchRelays,
  isRelayNameUniqueInDB,
  updateRelayStateFromDB,
  updateRelayConfigFromDB,
  fetchRelay,
} from '../services/relay-service.ts';

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

  const refreshRelay = async (id: string) => {
    try {
      const updatedRelay = await fetchRelay(id);
      const relayIndex = relays.value.findIndex(relay => relay.id === id);
      if (relayIndex !== -1) {
        relays.value[relayIndex] = updatedRelay;
      } else {
        console.warn('Relay not found in local state:', id);
      }
    } catch (err) {
      console.error('Failed to refresh relay:', err);
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
      }
    } catch (err) {
      console.error('Failed to update relay config:', err);
    }
  };

  const updateRelayState = async (id: string, newState: boolean) => {
    try {
      await updateRelayStateFromDB(id, newState);
      if (newState) {
        await refreshRelay(id);
      } else {
        const relay = relays.value.find(relay => relay.id === id);
        if (relay) {
          relay.state = newState;
        }
      }
    } catch (err) {
      console.error('Failed to update relay state:', err);
    }
  };

  const addRelay = async (newRelay: Partial<Relay>) => {
    try {
      const addedRelay = await addRelayToDB(newRelay);
      relays.value.push(addedRelay);
    } catch (err) {
      console.error('Failed to add relay:', err);
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

  const deleteRelay = async (id: string) => {
    try {
      await deleteRelayFromDB(id);
      relays.value = relays.value.filter(relay => relay.id !== id); // Remove relay from local state
    } catch (err) {
      console.error('Failed to delete relay:', err);
    }
  };

  function getMaxOnTime(relay: Relay): string {
    return secondsToHHMMSS(relay.maxOnTime_s);
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

  return {
    relays,
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
    refreshRelay,
  };
});
