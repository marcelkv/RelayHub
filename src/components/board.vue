<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { Board } from '../types/board.ts';
import { PinConfig } from '../types/pin-config.ts';
import { useBoardStore } from '../stores/board-store.ts';

export default defineComponent({
  props: {
    board: { type: Object as PropType<Board>, required: true },
    pinConfigs: { type: Array as PropType<PinConfig[]>, required: true },
    isSelected: { type: Boolean, default: false },
  },
  setup(props) {
    const boardStore = useBoardStore();

    const createdAt = computed<string>(() =>
      getFormatedDate(props.board.createdAt)
    );

    const modifiedAt = computed<string>(() =>
      getFormatedDate(props.board.updatedAt)
    );

    function getFormatedDate(date: Date): string {
      return date
        .toLocaleString('en-GB', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
        .replace(',', ' -');
    }

    async function toggleBoard(board: Board): Promise<void> {
      if (boardStore.selectedBoard === board) {
        boardStore.clearSelectedBoard();
      } else {
        boardStore.selectedBoard = board;
        await boardStore.loadBoardDetails(board.id);
      }
    }

    async function toggleMode(pinConfig: PinConfig): Promise<void> {
      if (!pinConfig) {
        return;
      }

      pinConfig.mode = pinConfig.mode === 'output' ? 'input' : 'output';
      await boardStore.savePinConfig(pinConfig);
    }

    return { createdAt, modifiedAt, boardStore, toggleBoard, toggleMode };
  },
});
</script>

<template>
  <div class="board">
    <div
      class="name-wrapper"
      v-bind:class="{ 'is-selected': $props.isSelected }"
      v-on:click="toggleBoard(board)"
    >
      <div class="name">{{ $props.board.name }}</div>
    </div>
    <div v-if="$props.isSelected" class="selected">
      <div class="group model">
        <div class="label">Model:</div>
        <div class="text">{{ $props.board.model }}</div>
      </div>
      <div class="group created-at">
        <div class="label">Created:</div>
        <div class="text">{{ createdAt }}</div>
      </div>
      <div class="group modified-at">
        <div class="label">Modified:</div>
        <div class="text">{{ modifiedAt }}</div>
      </div>
      <div class="pin-configs">
        <div class="pin-config header">
          <div class="label">Pin</div>
          <div class="label">Mode</div>
          <div class="label">Relay Name</div>
        </div>
        <div
          class="pin-config"
          v-for="pinConfig in boardStore.pinConfigs"
          v-bind:key="pinConfig.id"
        >
          <div class="val">{{ pinConfig.pinNumber }}</div>
          <div class="val" v-on:click="toggleMode(pinConfig)">
            {{ pinConfig.mode === 'output' ? 'OUT' : 'IN' }}
          </div>
          <div class="val">{{ pinConfig.relayName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  border: 1px solid lightblue;
  border-radius: 2px;
  align-items: flex-start;
  margin: 20px 5px;

  .group {
    display: flex;
    padding: 10px;

    .label {
      margin-right: 10px;
    }
  }

  .group:first-child {
    padding-top: 20px;
  }

  .group:last-child {
    padding-bottom: 20px;
  }
}

.name-wrapper {
  height: 40px;
  display: flex;
  align-items: center;
  padding: 10px 0;
  width: 100%;

  &.is-selected {
    border-bottom: 1px solid lightblue;
  }

  .name {
    padding: 0 10px;
  }
}

.selected {
  width: 100%;
}

.pin-configs {
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 10px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.pin-config {
  display: contents;
}

.pin-config.header {
  font-weight: bold;
  background-color: #f0f8ff;
}

.pin-config.header .label {
  text-align: center;
  padding: 5px 0;
  border-bottom: 2px solid lightblue;
}

.pin-config .val {
  text-align: center;
  padding: 5px 0;
  border-bottom: 1px solid #e0e0e0;
}

.pin-config:last-child .val {
  border-bottom: none;
}
</style>
