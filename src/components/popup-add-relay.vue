<script lang="ts">
import { defineComponent, computed, ref, onMounted, watch } from 'vue';
import ButtonDefault from './button-default.vue';
import { useBoardStore } from '../stores/board-store';
import { useRelayStore } from '../stores/relay-store';
import { Board } from '../types/board';
import { PinConfig } from '../types/pin-config';

export default defineComponent({
  components: { ButtonDefault },
  emits: ['relayAdded', 'cancel'],
  props: {},
  setup(_props, { emit }) {
    const boardStore = useBoardStore();
    const relayStore = useRelayStore();
    const isNameValid = ref<boolean>(false);
    const name = ref<string>('');
    const maxOnTime = ref<string>('');
    const selectedBoard = ref<Board>(null);
    const selectedPin = ref<PinConfig>(null);
    const availableBoards = ref<{ value: Board; label: string }[]>([]);
    const availablePins = ref<{ value: PinConfig; label: number }[]>([]);
    const showAdvancedSettings = ref<boolean>(false);
    const showMoreAdvancedSettings = ref<boolean>(false);

    onMounted(() => {
      availableBoards.value = getAvailableBoards();
    });

    const canSave = computed<boolean>(() => {
      if (!isNameValid.value || !validateMaxOnTime()) {
        return false;
      }

      if (selectedBoard.value) {
        return !!selectedPin.value;
      }
      return true;
    });

    function clear(): void {}

    async function onAdd(): Promise<void> {
      if (!canSave.value) {
        return;
      }

      const totalSeconds = timeStringToSeconds();
      try {
        const newRelay = await relayStore.addRelay({
          name: name.value.trim(),
          state: false,
          maxOnTime_s: totalSeconds,
        });

        if (selectedBoard.value) {
          newRelay.boardId = selectedBoard.value.id;
          selectedPin.value.relayId = newRelay.id;
          selectedPin.value.relayName = newRelay.name;
          await boardStore.updatePinConfigAndRelays(selectedPin.value, [
            newRelay,
          ]);
        }
      } finally {
        emit('relayAdded');
      }
    }

    function timeStringToSeconds(): number {
      if (maxOnTime.value.trim() === '') {
        return 0;
      }

      const time = maxOnTime.value.trim();
      const [hours, minutes, seconds] = time.split(':').map(Number);
      return hours * 3600 + minutes * 60 + seconds;
    }

    function onCancel(): void {
      clear();
      emit('cancel');
    }

    function getAvailableBoards(): { value: Board; label: string }[] {
      const all = [{ value: null, label: 'None' }];
      all.push(
        ...boardStore.boards
          .map(board => ({ value: board, label: board.name }))
          .sort((a, b) => a.value.name.localeCompare(b.value.name))
      );
      return all;
    }

    function onShowAdvancedSettings(): void {
      showAdvancedSettings.value = true;
      showMoreAdvancedSettings.value = false;
    }

    async function onShowMoreAdvancedSettings(): Promise<void> {
      await boardStore.loadBoards();
      showMoreAdvancedSettings.value = true;
    }

    async function onSelectBoard(board: Board): Promise<void> {
      selectedBoard.value = board;
      selectedPin.value = null;

      if (selectedBoard.value === null) {
        boardStore.clearSelectedBoard();
        return;
      }

      boardStore.selectedBoard = selectedBoard.value;
      await boardStore.loadBoardDetails();
      availablePins.value = boardStore.pinConfigs
        .filter(pinConfig => !pinConfig.relayId)
        .map(p => ({ value: p, label: p.pinNumber }));
    }

    async function onNameChanged(): Promise<void> {
      isNameValid.value = await validateName();
    }

    async function validateName(): Promise<boolean> {
      if (name.value.trim().length < 2) {
        return false;
      }

      return await relayStore.isRelayNameUnique(name.value.trim());
    }

    function validateMaxOnTime(): boolean {
      const time = maxOnTime.value.trim();

      if (time === '') {
        return true;
      }

      const timeFormatRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
      return timeFormatRegex.test(time);
    }

    watch(() => name.value, onNameChanged);

    return {
      name,
      maxOnTime,
      selectedBoard,
      selectedPin,
      canSave,
      showAdvancedSettings,
      showMoreAdvancedSettings,
      availableBoards,
      availablePins,
      onSelectBoard,
      onShowAdvancedSettings,
      onShowMoreAdvancedSettings,
      onAdd,
      onCancel,
    };
  },
});
</script>

<template>
  <div class="popup-add-relay">
    <div class="popup">
      <h3>Add New Relay</h3>
      <label for="name">Name:</label>
      <input v-model="name" type="text" placeholder="Enter relay name" />
      <label
        class="settings-toggle"
        v-if="showAdvancedSettings"
        v-on:click="showAdvancedSettings = false"
        >Hide advanced settings</label
      >
      <label class="settings-toggle" v-else v-on:click="onShowAdvancedSettings"
        >Show advanced settings</label
      >
      <div v-if="showAdvancedSettings">
        <label>Max on time:</label>
        <input
          v-model="maxOnTime"
          type="text"
          placeholder="HH:MM:SS or keep empty"
        />
        <label
          class="settings-toggle"
          v-if="showAdvancedSettings && showMoreAdvancedSettings"
          v-on:click="showMoreAdvancedSettings = false"
          >Hide more advanced settings</label
        >
        <label
          class="settings-toggle"
          v-else-if="showAdvancedSettings"
          v-on:click="onShowMoreAdvancedSettings"
          >Show more advanced settings</label
        >
        <div v-if="showMoreAdvancedSettings">
          <label>Board:</label>
          <div class="options">
            <div
              class="option"
              v-for="board in availableBoards"
              v-bind:key="board.value?.id"
            >
              <div
                class="option-text"
                v-bind:class="{ 'is-checked': selectedBoard === board.value }"
                v-on:click="onSelectBoard(board.value)"
              >
                {{ board.label }}
              </div>
            </div>
          </div>
          <div v-if="selectedBoard">
            <label>Pin:</label>
            <div class="options">
              <div
                class="option"
                v-for="pin in availablePins"
                v-bind:key="pin.value?.id"
              >
                <div
                  class="option-text"
                  v-bind:class="{ 'is-checked': selectedPin === pin.value }"
                  v-on:click="selectedPin = pin.value"
                >
                  {{ pin.value.pinNumber }}
                </div>
              </div>
            </div>
            <label v-if="selectedPin">Pin mode:</label>
            <div v-if="selectedPin" class="options">
              <div class="option" v-bind:key="selectedPin.id + 'in'">
                <div
                  class="option-text"
                  v-bind:class="{ 'is-checked': selectedPin.mode === 'input' }"
                  v-on:click="selectedPin.mode = 'input'"
                >
                  Input
                </div>
              </div>
              <div class="option" v-bind:key="selectedPin.id + 'out'">
                <div
                  class="option-text"
                  v-bind:class="{ 'is-checked': selectedPin.mode === 'output' }"
                  v-on:click="selectedPin.mode = 'output'"
                >
                  Output
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button-default
          v-bind:class="{ 'can-save': canSave }"
          v-bind:text="'Save'"
          v-on:click="onAdd"
        />
        <button-default v-bind:text="'Cancel'" v-on:click="onCancel" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup-add-relay {
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
    max-height: calc(100% - 200px);

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

      &.settings-toggle {
        color: lightgray;
        text-align: center;
      }
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
