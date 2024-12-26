<script lang="ts">
import { defineComponent, onBeforeMount, computed, ref } from 'vue';
import ButtonDefault from './button-default.vue';
import Dropdown from './drop-down.vue';
import {
  RaspberryPiModel,
  raspberryPiModels,
} from '../resources/raspberry-pi-models';
import { useBoardStore } from '../stores/board-store';
import Board from '../pages/board.vue';

export default defineComponent({
  components: { Dropdown, ButtonDefault },
  emits: ['boardAdded', 'cancel'],
  props: {
    boardId: { type: String, default: null },
  },
  setup(props, { emit }) {
    const boardStore = useBoardStore();
    const name = ref<string>('');
    const selectedModel = ref<RaspberryPiModel>(null);
    const existingBoard = ref<Board>(null);

    onBeforeMount(() => {
      if (props.boardId) {
        existingBoard.value = boardStore.boards.find(
          b => b.id === props.boardId
        );
      }

      if (existingBoard.value) {
        name.value = existingBoard.value.name;
        selectedModel.value = raspberryPiModels.find(
          model => model.value === existingBoard.value.model
        );
      } else {
        clear();
      }
    });

    const canSave = computed<boolean>(() => {
      if (
        props.boardId &&
        existingBoard.value.name === name.value.trim() &&
        existingBoard.value.model === selectedModel.value.value
      ) {
        return false;
      }

      return name.value && name.value.length > 1 && selectedModel.value;
    });

    function clear(): void {
      name.value = '';
      selectedModel.value = null;
    }

    function isChecked(model: RaspberryPiModel): boolean {
      return (
        model &&
        selectedModel.value &&
        model.value === selectedModel.value.value
      );
    }

    function selectModel(model: RaspberryPiModel): void {
      if (!model) {
        return;
      }

      selectedModel.value = model;
    }

    async function onAdd() {
      if (!canSave.value) {
        return;
      }

      try {
        const model = selectedModel.value.value;
        const numPins = selectedModel.value.numGpioPins;
        if (existingBoard.value) {
          await boardStore.updateBoard(existingBoard.value.id, name.value);
        } else {
          await boardStore.addBoardWithPins(name.value, model, numPins);
        }

        clear();
        emit('boardAdded');
      } catch (error) {
        errorMessage.value = 'Failed to add the board. Please try again.';
      }
    }

    function onCancel(): void {
      clear();
      emit('cancel');
    }

    return {
      name,
      selectedModel,
      canSave,
      raspberryPiModels,
      isChecked,
      selectModel,
      onAdd,
      onCancel,
    };
  },
});
</script>

<template>
  <div class="popup-add-board">
    <div class="popup">
      <h3>{{ $props.boardId ? 'Edit Board' : 'Add New Board' }}</h3>
      <label for="name">Name:</label>
      <input v-model="name" type="text" placeholder="Enter board name" />
      <label v-if="!$props.boardId">Model:</label>
      <div v-if="!$props.boardId" class="options">
        <div
          class="option"
          v-for="piModel in raspberryPiModels"
          v-bind:key="piModel.value"
        >
          <div
            class="option-text"
            v-bind:class="{
              'is-checked': isChecked(piModel),
            }"
            v-on:click="selectModel(piModel)"
          >
            {{ piModel.value }}
          </div>
        </div>
      </div>
      <div class="buttons">
        <button-default
          v-bind:class="{ 'can-save': canSave }"
          v-bind:text="$props.boardId ? 'Save' : 'Add'"
          v-on:click="onAdd"
        />
        <button-default v-bind:text="'Cancel'" v-on:click="onCancel" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup-add-board {
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
  --size: 50px;

  .popup {
    background: #fff;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    width: 320px;
    text-align: center;
    font-family: Arial, sans-serif;
    color: #333;
    overflow-y: auto;

    h3 {
      font-size: 20px;
      margin-bottom: 20px;
      font-weight: bold;
      color: #333;
    }

    label {
      display: block;
      text-align: left;
      font-weight: bold;
      margin-top: 35px;
      margin-bottom: 10px;
    }

    input {
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

    .options {
      width: 100%;
      max-height: 250px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;

      .option {
        --size: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 4px;
        border: 1px solid lightgray;
        margin: 7px;

        .option-text {
          color: black;
          height: var(--size);
          flex-grow: 1;
          align-content: center;

          &.is-checked {
            background-color: lightgray;
            border-radius: 4px;
          }
        }
      }
    }

    .buttons {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;

      .button-default {
        padding: 8px 12px;
        border: 1px solid black;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        color: black;
        transition: background 0.3s;

        &:first-child {
          margin-right: 5px;
        }

        &:last-child {
          margin-left: 5px;
        }
      }

      .can-save {
        cursor: pointer;
        background-color: green;
        color: white;
      }
    }
  }
}
</style>
