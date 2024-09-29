<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import PageTitle from '../components/page-title.vue';
import Spinner from '../components/spinner.vue';
import Relay from '../components/relay.vue';
import { useRelayStore } from '../stores/relay-store.ts';

export default defineComponent({
  components: { Relay, Spinner, PageTitle },
  setup() {
    const relayStore = useRelayStore();

    onMounted(() => {
      relayStore.loadRelays(); // Fetch relays when the component is mounted
    });

    return { relayStore };
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
      <relay
        v-for="relay in relayStore.relays"
        v-bind:key="relay.id"
        v-bind:relay="relay"
      />
    </div>
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
