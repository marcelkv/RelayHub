import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
  addBoardWithPinsToDB,
  fetchBoard,
  fetchBoards,
  fetchPinConfigsForBoard,
  updatePinConfigModeInDB,
} from '../services/board-service';

import { Board } from '../types/board.ts';
import { PinConfig } from '../types/pin-config.ts';
import { useRelayStore } from './relay-store.ts';

export const useBoardStore = defineStore('board', () => {
  const boards = ref<Board[]>([]);
  const selectedBoard = ref<Board>(null);
  const pinConfigs = ref<PinConfig[]>([]);
  const loadingBoards = ref(false);
  const loadingPinConfigs = ref(false);
  const error = ref<string>(null);
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

  const addBoardWithPins = async (
    name: string,
    model: string,
    numberPins: number
  ) => {
    try {
      if (numberPins <= 0) {
        console.error('Number of pins must be greater than 0');
      }

      const board = await addBoardWithPinsToDB(name, model, numberPins);
      boards.value.push(board);
      console.log('Board added successfully with pins:', board);
    } catch (err) {
      console.error('Failed to add new board:', err);
      error.value = 'Unable to add new board.';
    }
  };

  const loadBoardDetails = async () => {
    try {
      if (!selectedBoard.value) {
        return;
      }

      loadingPinConfigs.value = true;
      const boardId = selectedBoard.value.id;
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

  const updatePinConfigMode = async (pinConfig: PinConfig): Promise<void> => {
    try {
      pinConfig.mode = pinConfig.mode === 'input' ? 'output' : 'input';
      await updatePinConfigModeInDB(pinConfig);
      const index = pinConfigs.value.findIndex(p => p.id === pinConfig.id);
      if (index !== -1) {
        pinConfigs.value[index] = { ...pinConfig };
      }

      const boardIndex = boards.value.findIndex(
        b => b.id === pinConfig.boardId
      );
      if (boardIndex !== -1) {
        const updatedBoard = await fetchBoard(pinConfig.boardId);
        boards.value[boardIndex] = { ...updatedBoard };

        if (selectedBoard.value?.id === pinConfig.boardId) {
          selectedBoard.value = { ...updatedBoard };
        }
      }
    } catch (err) {
      console.error('Failed to update PinConfig mode:', err);
      error.value = 'Unable to update PinConfig.';
    }
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
    addBoardWithPins,
    updatePinConfigMode,
    clearSelectedBoard,
  };
});
