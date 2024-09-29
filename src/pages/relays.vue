<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import PageTitle from '../components/page-title.vue';
import Spinner from '../components/spinner.vue';
import Relay from '../components/relay.vue';
import ButtonDefault from '../components/button-default.vue';
import SwipeableListItem from '../components/swipeable-list-item.vue';
import { useRelayStore } from '../stores/relay-store.ts';
import RelayEditable from '../components/relay-editable.vue';

export default defineComponent({
  components: {
    RelayEditable,
    SwipeableListItem,
    ButtonDefault,
    Relay,
    Spinner,
    PageTitle,
  },
  setup() {
    const relayStore = useRelayStore();
    const isAddingNewRelay = ref(false);
    const editableRelayId = ref('');

    onMounted(() => {
      relayStore.loadRelays();
    });

    function startAddingRelay(): void {
      isAddingNewRelay.value = true;
    }

    function requestEdit(id: string): void {
      editableRelayId.value = id;
    }

    async function requestDelete(id: string): Promise<void> {
      await relayStore.deleteRelay(id);
    }

    function onEditArrayDone(): void {
      editableRelayId.value = '';
    }

    function onAddNewArrayDone(): void {
      isAddingNewRelay.value = false;
    }

    return {
      relayStore,
      isAddingNewRelay,
      editableRelayId,
      startAddingRelay,
      requestEdit,
      requestDelete,
      onEditArrayDone,
      onAddNewArrayDone,
    };
  },
});
</script>

<template>
  <div class="relays">
    <page-title v-bind:title="'Relays'" />
    <spinner
      v-if="relayStore.loading"
      v-bind:spinner-size="'20px'"
      v-bind:with-text="true"
    />
    <div v-if="!relayStore.loading && !relayStore.error">
      <swipeable-list-item
        v-for="relay in relayStore.relays"
        v-on:leftAction="requestEdit(relay.id)"
        v-on:rightAction="requestDelete(relay.id)"
      >
        <relay-editable
          v-if="editableRelayId && editableRelayId === relay.id"
          v-bind:key="relay.id"
          v-bind:allowAdvancedSettings="true"
          v-bind:existingRelay="relay"
          v-on:isDone="onEditArrayDone"
        />
        <relay v-else v-bind:key="relay.id" v-bind:relay="relay" />
      </swipeable-list-item>
    </div>
    <button-default
      v-if="!isAddingNewRelay"
      v-bind:text="'Add new Relay'"
      v-on:onButtonClicked="startAddingRelay"
    />
    <relay-editable v-if="isAddingNewRelay" v-on:isDone="onAddNewArrayDone" />
  </div>
</template>

<style scoped>
.relays {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
