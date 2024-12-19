<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useBoardStore } from '../stores/board-store';
import Spinner from '../components/spinner.vue';
import ButtonDefault from '../components/button-default.vue';
import Dropdown from '../components/drop-down.vue';
import { useRouter } from 'vue-router';
import { Board } from '../types/board.ts';
import { usePageStore } from '../stores/page-store.ts';

export default defineComponent({
  components: { ButtonDefault, Spinner, Dropdown },
  setup() {
    const router = useRouter();
    const pageStore = usePageStore();
    const boardStore = useBoardStore();
    const requestAddNewBoard = ref<boolean>(false);
    const name = ref<string>('');
    const selectedModel = ref<string | null>(null);
    const errorMessage = ref<string | null>(null);

    const raspberryPiModels = [
      {
        value: 'Raspberry Pi Model B+ V1.2',
        label: 'Raspberry Pi Model B+ V1.2',
      },
      {
        value: 'Raspberry Pi 2 Model B V1.1',
        label: 'Raspberry Pi 2 Model B V1.1',
      },
      { value: 'Raspberry Pi 3 Model B', label: 'Raspberry Pi 3 Model B' },
      { value: 'Raspberry Pi 4 Model B', label: 'Raspberry Pi 4 Model B' },
      { value: 'Raspberry Pi Zero', label: 'Raspberry Pi Zero' },
      { value: 'Raspberry Pi Zero W', label: 'Raspberry Pi Zero W' },
      { value: 'Raspberry Pi 400', label: 'Raspberry Pi 400' },
    ];

    onMounted(() => {
      boardStore.loadBoards();
      boardStore.clearSelectedBoard();
    });

    function requestAddNew() {
      errorMessage.value = null;
      name.value = '';
      selectedModel.value = null;
      requestAddNewBoard.value = true;
    }

    function requestBoard(board: Board): void {
      boardStore.selectedBoard = board;
      pageStore.setNavigateBackPage('boards');
      router.push({ name: 'board' });
    }

    async function addNewBoard() {
      if (!name.value || !selectedModel.value) {
        errorMessage.value = 'Please fill in all fields.';
        return;
      }

      try {
        errorMessage.value = null;
        await boardStore.addBoardWithPins(name.value, selectedModel.value, 27); // Default GPIO count
        requestAddNewBoard.value = false;
        name.value = '';
        selectedModel.value = null;
      } catch (error) {
        errorMessage.value = 'Failed to add the board. Please try again.';
      }
    }

    return {
      requestAddNewBoard,
      name,
      boardStore,
      selectedModel,
      raspberryPiModels,
      errorMessage,
      requestAddNew,
      requestBoard,
      addNewBoard,
    };
  },
});
</script>

<template>
  <div class="boards">
    <spinner
      v-if="boardStore.loadingBoards"
      v-bind:spinnerSize="'20px'"
      v-bind:withText="true"
    />
    <div v-else>
      <div
        class="board-name-wrapper"
        v-for="board in boardStore.boards"
        v-bind:key="board.id"
        v-on:click="requestBoard(board)"
      >
        {{ board.name }}
      </div>
      <button-default
        v-bind:text="'Add new board'"
        v-on:click="requestAddNew"
      />
    </div>
    <board-popup
      v-if="boardStore.selectedBoard"
      v-bind:board="boardStore.selectedBoard"
      v-bind:pinConfigs="boardStore.pinConfigs"
    />
    <div v-if="requestAddNewBoard" class="add-new-board">
      <div class="popup">
        <h3>Add New Board</h3>
        <div class="form">
          <label for="name">Name:</label>
          <input v-model="name" type="text" placeholder="Enter board name" />
          <label>Model:</label>
          <dropdown
            v-bind:options="raspberryPiModels"
            v-model="selectedModel"
            placeholder="Select a Raspberry Pi model"
          />
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
          <div class="buttons">
            <button-default v-bind:text="'Add'" v-on:click="addNewBoard" />
            <button-default
              v-bind:text="'Cancel'"
              v-on:click="requestAddNewBoard = false"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.boards {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .board-name-wrapper {
    height: 40px;
    border: 1px solid lightblue;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 5px;
    padding: 10px 20px;
  }
}

.add-new-board {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.popup {
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 320px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.popup h3 {
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

.form label {
  text-align: left;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.form input {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  color: #333;
  margin-bottom: 15px;
}

.buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.buttons .button-default {
  padding: 8px 12px;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: black;
  transition: background 0.3s;
}

.buttons .button-default:first-child {
  margin-right: 5px;
}

.buttons .button-default:last-child {
  margin-left: 5px;
}

.buttons .button-default:hover {
  background-color: lightgray;
}

.error {
  color: red;
  font-size: 14px;
  text-align: left;
}

.custom-dropdown {
  position: relative;
  width: 100%;
  text-align: left;
}

.custom-dropdown .dropdown-selected {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  transition: border-color 0.2s;
}

.custom-dropdown .dropdown-selected:hover {
  border-color: #888;
}

.custom-dropdown .arrow {
  transition: transform 0.3s;
}

.custom-dropdown .arrow.open {
  transform: rotate(180deg);
}

.custom-dropdown .dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-height: 150px;
  overflow-y: auto;
}

.custom-dropdown .dropdown-item {
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;
}

.custom-dropdown .dropdown-item:hover {
  background-color: #f0f0f0;
}

.custom-dropdown .dropdown-item.selected {
  font-weight: bold;
  background-color: #e0e0e0;
}
</style>
