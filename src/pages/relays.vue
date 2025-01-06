<script lang="ts">
import {
  ComponentPublicInstance,
  defineComponent,
  onMounted,
  ref,
  watch,
} from 'vue';
import Spinner from '../components/spinner.vue';
import RelayComponent from '../components/relay.vue';
import ButtonDefault from '../components/button-default.vue';
import { useRelayStore } from '../stores/relay-store';
import RelayEditable from '../components/relay-editable.vue';
import PopupAddRelay from '../components/popup-add-relay.vue';
import { Relay } from '../types/relay';

export default defineComponent({
  components: {
    PopupAddRelay,
    RelayEditable,
    ButtonDefault,
    Relay: RelayComponent,
    Spinner,
  },
  emits: ['requestScrollToBottom'],
  setup(_props, _context) {
    const relayStore = useRelayStore();
    const isAddingNewRelay = ref(false);
    const editableRelayId = ref('');
    const ref_relayItems = ref<(ComponentPublicInstance | null)[]>([]);
    const requestAddNewRelay = ref<boolean>(false);
    const filterText = ref<string>('');
    const currentRelays = ref<Relay[]>([]);

    onMounted(() => {
      requestAddNewRelay.value = false;
      relayStore.loadRelays();
      currentRelays.value = relayStore.relays;
      filterText.value = '';
    });

    function onFilterChanged(): void {
      const filter = filterText.value.trim().toLowerCase();

      if (filter.length === 0) {
        currentRelays.value = relayStore.relays;
      } else {
        currentRelays.value = relayStore.relays.filter(relay =>
          relay.name.toLowerCase().includes(filter)
        );
      }
    }

    function onRelayAdded(): void {
      filterText.value = '';
      onFilterChanged();
      requestAddNewRelay.value = false;
    }

    watch(() => filterText.value, onFilterChanged);

    return {
      ref_relayItems,
      relayStore,
      requestAddNewRelay,
      isAddingNewRelay,
      editableRelayId,
      filterText,
      currentRelays,
      onRelayAdded,
    };
  },
});
</script>

<template>
  <div class="relays">
    <spinner
      v-if="relayStore.loading"
      v-bind:spinner-size="'20px'"
      v-bind:with-text="true"
    />
    <div v-if="!relayStore.loading && !relayStore.error">
      <input
        v-model="filterText"
        type="text"
        placeholder="Filter"
        class="filter"
      />
      <relay
        v-for="relay in currentRelays"
        v-bind:key="relay.id"
        v-bind:relay="relay"
      />
      <button-default
        v-bind:text="'Add new relay'"
        v-on:click="requestAddNewRelay = true"
      />
    </div>
    <popup-add-relay
      v-if="requestAddNewRelay"
      v-on:relayAdded="onRelayAdded"
      v-on:cancel="requestAddNewRelay = false"
    />
  </div>
</template>

<style scoped>
.relays {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    border: 1px solid lightblue;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 5px;
    padding: 10px;
    background-color: black;
    color: white;
    width: calc(100% - 32px);
  }
}
</style>
