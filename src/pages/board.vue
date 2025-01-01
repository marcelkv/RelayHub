<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useBoardStore } from '../stores/board-store';
import { PinConfig } from '../types/pin-config';
import { Relay } from '../types/relay';
import DropDown from '../components/drop-down.vue';
import PopupSelectRelay from '../components/popup -select-relay.vue';
import { useRelayStore } from '../stores/relay-store';
import { useRouter } from 'vue-router';
import PopupYesNo from '../components/popup-yes-no.vue';
import PopupAddBoard from '../components/popup-add-board.vue';

export default defineComponent({
  components: { PopupAddBoard, PopupYesNo, PopupSelectRelay, DropDown },
  props: {},
  emits: [],
  setup(_props, _context) {
    const router = useRouter();
    const boardStore = useBoardStore();
    const relayStore = useRelayStore();
    const selectedPinConfig = ref<PinConfig>(null);
    const requestDeleteBoard = ref<boolean>(false);
    const requestEditBoard = ref<boolean>(false);

    onMounted(async () => {
      selectedPinConfig.value = null;
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

    function deleteBoard() {
      boardStore.deleteBoard(boardStore.selectedBoard.id);
      router.push({ name: 'boards' });
      requestDeleteBoard.value = false;
    }

    function requestEditPinConfig(pinConfig: PinConfig): void {
      if (selectedPinConfig.value) {
        selectedPinConfig.value = null;
      }

      selectedPinConfig.value = pinConfig;
    }

    async function onSaveSelectRelay(
      mode: string,
      relayId: string
    ): Promise<void> {
      if (!selectedPinConfig.value) {
        return;
      }

      if (!mode) {
        onCancelSelectRelay();
        return;
      }

      const pinConfig = selectedPinConfig.value;
      const relaysToUpdate: Relay[] = [];
      pinConfig.mode = mode;

      // Case 1: No relay previously assigned, assigning a new relay
      if (!pinConfig.relayId && relayId) {
        const newRelay = relayStore.relays.find(relay => relay.id === relayId);
        if (newRelay) {
          pinConfig.relayId = newRelay.id;
          pinConfig.relayName = newRelay.name;
          newRelay.boardId = pinConfig.id; // Assign the pinConfig ID to the relay
          relaysToUpdate.push(newRelay);
        }
      }

      // Case 2: Relay assigned, switching to a new relay
      else if (pinConfig.relayId && relayId && pinConfig.relayId !== relayId) {
        const oldRelay = relayStore.relays.find(
          relay => relay.id === pinConfig.relayId
        );
        const newRelay = relayStore.relays.find(relay => relay.id === relayId);

        if (oldRelay) {
          oldRelay.boardId = null; // Unassign the old relay
          relaysToUpdate.push(oldRelay);
        }

        if (newRelay) {
          pinConfig.relayId = newRelay.id;
          pinConfig.relayName = newRelay.name;
          newRelay.boardId = pinConfig.id; // Assign the pinConfig ID to the new relay
          relaysToUpdate.push(newRelay);
        }
      }

      // Case 3: Relay assigned, now set to null
      else if (pinConfig.relayId && !relayId) {
        const oldRelay = relayStore.relays.find(
          relay => relay.id === pinConfig.relayId
        );

        if (oldRelay) {
          oldRelay.boardId = null; // Unassign the old relay
          relaysToUpdate.push(oldRelay);
        }

        pinConfig.relayId = null;
        pinConfig.relayName = null;
      }

      await boardStore.updatePinConfigAndRelays(pinConfig, relaysToUpdate);
      selectedPinConfig.value = null;
    }

    function onCancelSelectRelay(): void {
      selectedPinConfig.value = null;
    }

    return {
      boardStore,
      createdAt,
      modifiedAt,
      selectedPinConfig,
      requestDeleteBoard,
      requestEditBoard,
      requestEditPinConfig,
      deleteBoard,
      onSaveSelectRelay,
      onCancelSelectRelay,
    };
  },
});
</script>

<template>
  <div class="board">
    <div class="board-header">
      <h3 v-on:click="requestEditBoard = true">
        {{ boardStore.selectedBoard?.name }}
      </h3>
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
        <div class="table-cell">
          {{ config.mode === 'output' ? 'OUT' : 'IN' }}
        </div>
        <div
          class="table-cell relay-name"
          v-on:click="requestEditPinConfig(config)"
        >
          {{ config.relayName ? config.relayName : 'None' }}
        </div>
      </div>
      <div class="table-row">
        <div class="delete-button" v-on:click="requestDeleteBoard = true">
          Delete
        </div>
      </div>
    </div>
    <popup-select-relay
      v-if="selectedPinConfig"
      v-bind:relayName="boardStore.selectedBoard.name"
      v-bind:pinNumber="selectedPinConfig.pinNumber"
      v-bind:initialMode="selectedPinConfig.mode"
      v-bind:initialRelayId="selectedPinConfig.relayId"
      v-on:cancel="onCancelSelectRelay"
      v-on:save="onSaveSelectRelay"
    />
    <popup-yes-no
      v-if="requestDeleteBoard"
      v-bind:text="`Are you sure you want to delete '${boardStore.selectedBoard.name}'?`"
      v-on:yes="deleteBoard"
      v-on:no="requestDeleteBoard = false"
    />
    <popup-add-board
      v-if="requestEditBoard"
      v-bind:boardId="boardStore.selectedBoard.id"
      v-on:boardAdded="requestEditBoard = false"
      v-on:cancel="requestEditBoard = false"
    />
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
