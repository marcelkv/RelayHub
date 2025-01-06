<script lang="ts">
import { ComponentPublicInstance, defineComponent, onMounted, ref } from 'vue';
import Spinner from '../components/spinner.vue';
import Relay from '../components/relay.vue';
import ButtonDefault from '../components/button-default.vue';
import { useRelayStore } from '../stores/relay-store';
import RelayEditable from '../components/relay-editable.vue';
import PopupAddRelay from '../components/popup-add-relay.vue';

export default defineComponent({
  components: {
    PopupAddRelay,
    RelayEditable,
    ButtonDefault,
    Relay,
    Spinner,
  },
  emits: ['requestScrollToBottom'],
  setup(_props, _context) {
    const relayStore = useRelayStore();
    const isAddingNewRelay = ref(false);
    const editableRelayId = ref('');
    const ref_relayItems = ref<(ComponentPublicInstance | null)[]>([]);
    const requestAddNewRelay = ref<boolean>(false);

    onMounted(() => {
      requestAddNewRelay.value = false;
      relayStore.loadRelays();
    });

    return {
      ref_relayItems,
      relayStore,
      requestAddNewRelay,
      isAddingNewRelay,
      editableRelayId,
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
      <relay
        v-for="relay in relayStore.relays"
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
      v-on:relayAdded="requestAddNewRelay = false"
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
}
</style>
