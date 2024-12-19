<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { useBoardStore } from '../stores/board-store.ts';
import { PinConfig } from '../types/pin-config';

export default defineComponent({
  props: {},
  emits: [],
  setup(_props, _context) {
    const boardStore = useBoardStore();
    onMounted(async () => {
      await boardStore.loadBoardDetails();
    });

    const createdAt = computed<string>(() =>
      getFormatedDate(boardStore.selectedBoard?.createdAt)
    );

    const modifiedAt = computed<string>(() =>
      getFormatedDate(boardStore.selectedBoard?.updatedAt)
    );

    function getFormatedDate(date: Date): string {
      if (!date) {
        return '';
      }

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
        .replace(',', ' -')
        .replace(/\//g, '.');
    }

    async function switchMode(pinConfig: PinConfig): Promise<void> {
      await boardStore.updatePinConfigMode(pinConfig);
    }

    function deleteBoard() {}

    return { boardStore, createdAt, modifiedAt, switchMode, deleteBoard };
  },
});
</script>

<template>
  <div class="board">
    <div class="board-header">
      <h3>{{ boardStore.selectedBoard?.name }}</h3>
      <p><strong>Model:</strong> {{ boardStore.selectedBoard?.model }}</p>
      <p><strong>Created:</strong> {{ createdAt }}</p>
      <p><strong>Modified:</strong> {{ modifiedAt }}</p>
    </div>
    <div class="table-header">
      <div class="table-cell">Pin</div>
      <div class="table-cell">Mode</div>
      <div class="table-cell">Relay Name</div>
    </div>
    <div class="table-body">
      <div
        class="table-row"
        v-for="config in boardStore.pinConfigs"
        v-bind:key="config.pinNumber"
      >
        <div class="table-cell">{{ config.pinNumber }}</div>
        <div class="table-cell" v-on:click="switchMode(config)">
          {{ config.mode === 'output' ? 'OUT' : 'IN' }}
        </div>
        <div class="table-cell relay-name">
          {{ config.relayName }}
        </div>
      </div>
      <div class="table-row">
        <div class="delete-button" v-on:click="deleteBoard">Delete</div>
      </div>
    </div>
  </div>
</template>

<style>
.board {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.board-header {
  padding: 16px;
  border-bottom: 1px solid lightblue;
}

.table-header {
  display: flex;
  border-bottom: 1px solid lightblue;
  position: sticky;
  background-color: black;
  top: 0;
  z-index: 10;
}

.table-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  border: 1px solid lightblue;
}

.table-row {
  display: flex;
  border-bottom: 1px solid lightblue;
  height: 50px;
  align-items: center;
}

.table-cell {
  flex: 1;
  padding: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;

  &.relay-name {
    text-align: left;
  }
}

.table-cell:nth-child(1) {
  flex: 0 0 30px;
}

.table-cell:nth-child(2) {
  flex: 0 0 60px;
}

.table-cell:nth-child(3) {
  flex: 1;
}

.delete-button {
  color: red;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  margin: 20px;
  width: 100%;
  text-align: center;
}

.delete-button:hover {
  background-color: darkred;
}
</style>
