<script lang="ts">
import ButtonDefault from './button-default.vue';
import { defineComponent, ref } from 'vue';
import { useRelayStore } from '../stores/relay-store.ts';

export default defineComponent({
  components: { ButtonDefault },
  emits: ['isDone'],
  props: {
    allowAdvancedSettings: { type: Boolean, default: false },
  },
  setup(props, context) {
    const relayStore = useRelayStore();
    const newRelayName = ref('');
    const newMaxOnTime = ref('');
    const errors = ref('');

    async function saveRelay(): Promise<void> {
      if (!(await validateName()) || !validateMaxOnTime()) {
        return;
      }

      const totalSeconds = timeStringToSeconds();
      await relayStore.addRelay({
        name: newRelayName.value.trim(),
        state: false,
        maxOnTime_s: totalSeconds,
      });
      newRelayName.value = '';
      context.emit('isDone');
    }

    function abortChanges(): void {
      context.emit('isDone');
    }

    async function validateName(): Promise<boolean> {
      if (newRelayName.value.trim().length < 2) {
        errors.value = 'Relay name must be at least 2 characters long.';
        return false;
      }

      const isNameUnique = await relayStore.isRelayNameUnique(
        newRelayName.value.trim()
      );

      if (!isNameUnique) {
        errors.value = 'Relay name already exists.';
        return false;
      }

      errors.value = '';
      return true;
    }

    function validateMaxOnTime(): boolean {
      if (!props.allowAdvancedSettings) {
        return true;
      }

      const time = newMaxOnTime.value.trim();

      if (time === '') {
        return true;
      }

      const timeFormatRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;

      return timeFormatRegex.test(time);
    }

    function timeStringToSeconds(): number {
      if (!props.allowAdvancedSettings) {
        return 0;
      }

      const time = newMaxOnTime.value.trim();
      const [hours, minutes, seconds] = time.split(':').map(Number);
      return hours * 3600 + minutes * 60 + seconds;
    }

    return {
      newRelayName,
      newMaxOnTime,
      nameError: errors,
      saveRelay,
      abortChanges,
    };
  },
});
</script>

<template>
  <div class="relay-editable">
    <div v-if="$props.allowAdvancedSettings" class="header">Name</div>
    <input
      v-model="newRelayName"
      type="text"
      placeholder="Relay name"
      class="relay-input"
    />
    <div v-if="$props.allowAdvancedSettings" class="max-on-time">
      <div class="header">Max On Time</div>
      <input
        v-model="newMaxOnTime"
        type="text"
        placeholder="HH:MM:SS or keep empty"
        class="max-on-time-input"
      />
    </div>
    <div class="action-buttons">
      <button-default
        class="button-save"
        v-bind:text="'Save'"
        v-on:click="saveRelay"
      />
      <button-default
        class="button-cancel"
        v-bind:text="'Cancel'"
        v-on:click="abortChanges"
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

  .header {
    display: flex;
    margin: 10px 10px 2px 10px;
    font-size: 28px;
  }

  .relay-input {
    display: flex;
    margin: 10px;
    font-size: 28px;
  }

  .max-on-time {
    display: flex;
    flex-direction: column;

    .max-on-time-input {
      display: flex;
      margin: 10px;
      font-size: 28px;
    }
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
