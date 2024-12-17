import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
  fetchBoards,
  fetchPinConfigsForBoard,
} from '../services/board-service';

import { Board } from '../types/board.ts';
import { PinConfig } from '../types/pin-config.ts';
import { useRelayStore } from './relay-store.ts';

export const useBoardStore = defineStore('board', () => {
  const boards = ref<Board[]>([]);
  const selectedBoard = ref<Board | null>(null);
  const pinConfigs = ref<PinConfig[]>([]);
  const loadingBoards = ref(false);
  const loadingPinConfigs = ref(false);
  const error = ref<string | null>(null);
  const relayStore = useRelayStore();

  const loadBoards = async () => {
    try {
      loadingBoards.value = true;
      boards.value = await fetchBoards();
    } catch (err) {
      console.error('Failed to fetch boards:', err);
      error.value = 'Unable to load boards.';
    } finally {
      loadingBoards.value = false;
    }
  };

  const loadBoardDetails = async (boardId: string) => {
    try {
      loadingPinConfigs.value = true;
      const board = boards.value.find(b => b.id === boardId);
      selectedBoard.value = board || null;

      if (selectedBoard.value) {
        const result = await fetchPinConfigsForBoard(boardId);
        pinConfigs.value = result
          .map(p => {
            const relay = relayStore.relays.find(r => r.id === p.relayId);
            return {
              ...p,
              relayName: relay ? relay.name : '',
            };
          })
          .sort((a, b) => a.pinNumber - b.pinNumber);
      }
    } catch (err) {
      console.error('Failed to load board details:', err);
      error.value = 'Unable to load board details.';
    } finally {
      loadingPinConfigs.value = false;
    }
  };

  const clearSelectedBoard = () => {
    selectedBoard.value = null;
    pinConfigs.value = [];
  };

  return {
    boards,
    selectedBoard,
    pinConfigs,
    loadingBoards,
    loadingPinConfigs,
    error,
    loadBoards,
    loadBoardDetails,
    clearSelectedBoard,
  };
});
