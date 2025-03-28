import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
  addBoardWithPinsToDB,
  updateBoardInDB,
  deleteBoardFromDB,
  fetchBoard,
  fetchBoards,
  fetchPinConfigsForBoard,
  updatePinConfigModeAndRelayInDB,
} from '../services/board-service';

import { Board } from '../types/board';
import { PinConfig } from '../types/pin-config';
import { Relay } from '../types/relay';
import { useRelayStore } from './relay-store';

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

  const updateBoard = async (boardId: string, name: string): Promise<void> => {
    try {
      const boardIndex = boards.value.findIndex(b => b.id === boardId);
      if (boardIndex === -1) {
        return;
      }

      const existingBoard = boards.value[boardIndex];

      await updateBoardInDB(boardId, name);

      boards.value[boardIndex] = { ...existingBoard, name };
      selectedBoard.value = boards.value[boardIndex];
    } catch (err) {
      console.error('Failed to update board:', err);
      error.value = 'Unable to update board.';
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

  const updatePinConfigAndRelays = async (
    pinConfig: PinConfig,
    relays: Relay[]
  ): Promise<void> => {
    try {
      await updatePinConfigModeAndRelayInDB(pinConfig, relays);
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

  const deleteBoard = async (boardId: string): Promise<void> => {
    try {
      await deleteBoardFromDB(boardId);
      const boardIndex = boards.value.findIndex(board => board.id === boardId);

      if (boardIndex !== -1) {
        boards.value.splice(boardIndex, 1);
      }

      if (selectedBoard.value?.id === boardId) {
        clearSelectedBoard();
      }
    } catch (error) {
      console.error('Failed to delete board:', error);
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
    updatePinConfigAndRelays,
    clearSelectedBoard,
    updateBoard,
    deleteBoard,
  };
});
