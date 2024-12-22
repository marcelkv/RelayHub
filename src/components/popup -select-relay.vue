<script lang="ts">
import ButtonDefault from './button-default.vue';
import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import { useRelayStore } from '../stores/relay-store';
import Relay from './relay.vue';

export default defineComponent({
  components: { ButtonDefault },
  props: {
    relayName: { type: String, required: true },
    pinNumber: { type: Number, required: true },
    initialMode: { type: String, required: true },
    initialRelayId: { type: String, default: 'none' },
  },
  emits: ['save', 'cancel'],
  setup(props, { emit }) {
    const relayStore = useRelayStore();
    const mode = ref<string>(props.initialMode);
    const relayId = ref<string>(props.initialRelayId);
    const availableRelays = ref<Relay[]>([]);

    onMounted(() => {
      availableRelays.value = getAvailableRelays();
    });

    const changed = computed<boolean>(
      () =>
        props.initialMode !== mode.value ||
        props.initialRelayId !== relayId.value
    );

    function getAvailableRelays(): { value: string; label: string }[] {
      const relays = relayStore.relays
        .filter(({ boardId }) => !boardId)
        .map(({ id, name }) => ({ value: id, label: name }))
        .sort((a, b) => a.value.localeCompare(b.value));

      const firstElement = { value: 'none', label: 'None' };

      if (relayId.value !== 'none') {
        const relay = relayStore.relays.find(
          relay => relay.id === relayId.value
        );
        if (relay) {
          return [
            { value: relay.id, label: relay.name },
            firstElement,
            ...relays,
          ];
        }
      }

      return [firstElement, ...relays];
    }

    function setInput(): void {
      mode.value = 'input';
    }

    function setOutput(): void {
      mode.value = 'output';
    }

    function setRelay(newRelayId): void {
      relayId.value = newRelayId;
    }

    function onSave(): void {
      if (!changed.value) {
        return;
      }

      emit('save', mode.value, relayId.value);
    }

    function onCancel(): void {
      emit('cancel');
    }

    watch(
      () => relayId.value,
      () => {
        console.log('RelayId: ' + relayId.value);
      }
    );

    return {
      mode,
      changed,
      relayId,
      availableRelays,
      setInput,
      setOutput,
      setRelay,
      onSave,
      onCancel,
    };
  },
});
</script>

<template>
  <div class="popup-select-relay">
    <div class="popup">
      <h3>{{ $props.relayName }}</h3>
      <h3>Pin {{ $props.pinNumber }}</h3>
      <label for="name">Mode:</label>
      <div class="options">
        <div class="option">
          <div
            class="option-text"
            v-bind:class="{ 'is-checked': mode === 'input' }"
            v-on:click="setInput"
          >
            IN
          </div>
        </div>
        <div class="option">
          <div
            class="option-text"
            v-bind:class="{ 'is-checked': mode === 'output' }"
            v-on:click="setOutput"
          >
            OUT
          </div>
        </div>
      </div>
      <label for="name">Relay:</label>
      <div class="options">
        <div
          class="option"
          v-for="relay in availableRelays"
          v-bind:key="relay.value"
        >
          <div
            class="option-text"
            v-bind:class="{ 'is-checked': relayId === relay.value }"
            v-on:click="setRelay(relay.value)"
          >
            {{ relay.label }}
          </div>
        </div>
      </div>
      <div class="buttons">
        <button-default
          v-bind:class="{ 'can-save': changed }"
          v-bind:text="'Save'"
          v-on:click="onSave"
        />
        <button-default v-bind:text="'Cancel'" v-on:click="onCancel" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup-select-relay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  --size: 50px;

  .popup {
    background: #fff;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    width: 320px;
    text-align: center;
    font-family: Arial, sans-serif;
    color: #333;
    overflow-y: auto;
    max-height: calc(100% - 200px);

    h3 {
      font-size: 20px;
      margin-bottom: 20px;
      font-weight: bold;
    }

    label {
      display: block;
      text-align: left;
      font-weight: bold;
      margin-top: 35px;
      margin-bottom: 10px;
    }

    .options {
      width: 100%;
      max-height: 250px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;

      .option {
        --size: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 4px;
        border: 1px solid lightgray;
        margin: 7px;

        .option-text {
          color: black;
          height: var(--size);
          flex-grow: 1;
          align-content: center;

          &.is-checked {
            background-color: lightgray;
            border-radius: 4px;
          }
        }
      }
    }

    .buttons {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;

      .button-default {
        padding: 8px 12px;
        border: 1px solid black;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        color: black;
        transition: background 0.3s;

        &:first-child {
          margin-right: 5px;
        }

        &:last-child {
          margin-left: 5px;
        }
      }

      .can-save {
        cursor: pointer;
        background-color: green;
        color: white;
      }
    }
  }
}
</style>
