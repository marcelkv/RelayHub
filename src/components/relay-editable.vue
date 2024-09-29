<script lang="ts">
import ButtonDefault from './button-default.vue';
import { defineComponent, ref } from 'vue';
import { useRelayStore } from '../stores/relay-store.ts';

export default defineComponent({
  components: { ButtonDefault },
  emits: ['isDone'],
  setup(_props, context) {
    const relayStore = useRelayStore();
    const newRelayName = ref('');
    const nameError = ref('');

    async function saveNewRelay(): Promise<void> {
      if (!(await validateName())) {
        return;
      }

      await relayStore.addRelay({
        name: newRelayName.value.trim(),
        state: false,
      });
      newRelayName.value = '';
      context.emit('isDone');
    }

    function cancelAddingRelay(): void {
      context.emit('isDone');
    }

    async function validateName(): Promise<boolean> {
      if (newRelayName.value.trim().length < 2) {
        nameError.value = 'Relay name must be at least 2 characters long.';
        return false;
      }

      const isNameUnique = await relayStore.isRelayNameUnique(
        newRelayName.value.trim()
      );
      if (!isNameUnique) {
        nameError.value = 'Relay name already exists.';
        return false;
      }

      nameError.value = '';
      return true;
    }

    return { newRelayName, nameError, saveNewRelay, cancelAddingRelay };
  },
});
</script>

<template>
  <div class="relay-editable">
    <input
      v-model="newRelayName"
      type="text"
      placeholder="Enter relay name"
      class="relay-input"
    />
    <div class="action-buttons">
      <button-default
        class="button-save"
        v-bind:text="'Save'"
        v-on:click="saveNewRelay"
      />
      <button-default
        class="button-cancel"
        v-bind:text="'Cancel'"
        v-on:click="cancelAddingRelay"
      />
    </div>
    <div v-if="nameError" class="name-error">{{ nameError }}</div>
  </div>
</template>

<style scoped>
.relay-editable {
  border: 1px solid lightblue;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  margin: 5px;

  .relay-input {
    display: flex;
    margin: 10px;
    font-size: 28px;
  }

  .action-buttons {
    display: flex;

    .button-save {
      background-color: #028700;
      margin: 10px;
    }

    .button-cancel {
      background-color: orangered;
      margin: 10px;
    }
  }

  .name-error {
    margin: 10px;
    color: red;
    font-size: 22px;
  }
}
</style>
