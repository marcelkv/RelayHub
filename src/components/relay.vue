<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Relay } from '../types/relay';
import ToggleButton from './toggle-button.vue';
import { useRelayStore } from '../stores/relay-store.ts';

export default defineComponent({
  components: { ToggleButton },
  props: {
    relay: { type: Object as PropType<Relay>, required: true },
  },
  setup(props) {
    const relayStore = useRelayStore();

    const handleToggle = (newState: boolean) => {
      relayStore.updateRelayState(props.relay.id, newState);
    };

    return { handleToggle };
  },
});
</script>

<template>
  <div class="relay">
    <div class="name">{{ $props.relay.name }}</div>
    <toggle-button
      v-bind:modelValue="$props.relay.state"
      v-on:update:modelValue="handleToggle"
    />
  </div>
</template>

<style scoped>
.relay {
  height: 40px;
  border: 1px solid lightblue;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 5px;
  padding: 10px 0;

  .name {
    margin: 0 10px;
  }

  .toggle-switch {
    margin: 0 10px;
  }
}
</style>
