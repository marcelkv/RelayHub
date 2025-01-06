<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import relay from '../components/relay.vue';
import { PinConfig } from '../types/pin-config';
import { useRouter } from 'vue-router';
import { usePageStore } from '../stores/page-store';
import { useBoardStore } from '../stores/board-store';
import { useRelayStore } from '../stores/relay-store';
import PopupYesNo from '../components/popup-yes-no.vue';
import PopupAddRelay from '../components/popup-add-relay.vue';

export default defineComponent({
  components: { PopupAddRelay, PopupYesNo },
  computed: {
    relay() {
      return relay;
    },
  },
  props: {},
  emits: [],
  setup() {
    const router = useRouter();
    const pageStore = usePageStore();
    const relayStore = useRelayStore();
    const boardStore = useBoardStore();
    const pinConfig = ref<PinConfig>();
    const maxOnTime = ref<string>();
    const boardName = ref<string>();
    const requestEditRelay = ref<boolean>();
    const requestDeleteRelay = ref<boolean>();

    onMounted(async () => {
      if (!relayStore.selectedRelay) {
        await router.push({ name: pageStore.navigateBackPage });
        return;
      }

      pageStore.setNavigateBackPage('relays');
      maxOnTime.value = relayStore.getMaxOnTime(relayStore.selectedRelay);
      await boardStore.loadBoards();
      boardStore.selectedBoard = boardStore.boards.find(
        board => board.id === relayStore.selectedRelay.boardId
      );
      boardName.value = boardStore.selectedBoard?.name;
      await boardStore.loadBoardDetails();
      pinConfig.value = boardStore.pinConfigs.find(
        pinConfig => pinConfig.relayId === relayStore.selectedRelay.id
      );
    });

    async function deleteRelay(): Promise<void> {
      await relayStore.deleteRelay(relayStore.selectedRelay.id);
      await router.push({ name: pageStore.navigateBackPage });
    }

    function goToBoard(): void {
      if (boardStore.selectedBoard) {
        pageStore.setNavigateBackPage('relay');
        router.push({ name: 'board' });
      } else {
        router.push({ name: 'boards' });
      }
    }

    function onRelayUpdated(): void {
      requestEditRelay.value = false;
      maxOnTime.value = relayStore.getMaxOnTime(relayStore.selectedRelay);
    }

    return {
      maxOnTime,
      boardName,
      pinConfig,
      relayStore,
      requestDeleteRelay,
      requestEditRelay,
      deleteRelay,
      onRelayUpdated,
      goToBoard,
    };
  },
});
</script>

<template>
  <div class="relay" v-if="relayStore.selectedRelay">
    <div class="relay-header">
      <h3 v-on:click="requestEditRelay = true">
        {{ relayStore.selectedRelay.name }}
      </h3>
      <p v-on:click="requestEditRelay = true">
        <strong>Max on time:</strong> {{ maxOnTime }}
      </p>
      <p v-on:click="goToBoard"><strong>Board:</strong> {{ boardName }}</p>
      <p v-on:click="goToBoard">
        <strong>Pin:</strong> {{ pinConfig?.pinNumber }}
      </p>
      <p v-on:click="goToBoard">
        <strong>Pin mode:</strong>
        {{ pinConfig ? (pinConfig.mode === 'input' ? 'Input' : 'Output') : '' }}
      </p>
      <p>
        <strong>Status:</strong>
        {{ relayStore.selectedRelay.state ? 'On' : 'Off' }}
      </p>
    </div>
    <div class="delete-button" v-on:click="requestDeleteRelay = true">
      Delete
    </div>
    <popup-yes-no
      v-if="requestDeleteRelay"
      v-bind:text="`Are you sure you want to delete '${relayStore.selectedRelay.name}'?`"
      v-on:yes="deleteRelay"
      v-on:no="requestDeleteRelay = false"
    />
    <popup-add-relay
      v-if="requestEditRelay"
      v-bind:relay="relayStore.selectedRelay"
      v-on:relayAdded="onRelayUpdated"
      v-on:cancel="requestEditRelay = false"
    />
  </div>
</template>

<style scoped>
.relay {
  display: flex;
  flex-direction: column;
  flex: 1;

  .relay-header {
    padding: 16px;
  }

  .delete-button {
    color: red;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    margin: 20px;
    width: auto;
    text-align: center;
  }

  .delete-button:hover {
    background-color: darkred;
  }
}
</style>
