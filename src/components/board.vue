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

    function toggleBoard(board: Board) {
      if (boardStore.selectedBoard === board) {
        boardStore.clearSelectedBoard();
      } else {
        boardStore.selectedBoard = board;
        boardStore.loadBoardDetails(board.id);
      }
    }

    return { createdAt, modifiedAt, toggleBoard };
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
    <div v-if="$props.isSelected">
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
</style>
