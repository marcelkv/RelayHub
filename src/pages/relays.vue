<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import PageTitle from '../components/page-title.vue';
import Spinner from '../components/spinner.vue';
import Relay from '../components/relay.vue';
import ButtonDefault from '../components/button-default.vue';
import SwipeableListItem from '../components/swipeable-list-item.vue';
import { useRelayStore } from '../stores/relay-store.ts';

export default defineComponent({
  components: { SwipeableListItem, ButtonDefault, Relay, Spinner, PageTitle },
  setup() {
    const relayStore = useRelayStore();
    const isAddingNewRelay = ref(false);
    const newRelayName = ref('');
    const nameError = ref('');

    onMounted(() => {
      relayStore.loadRelays();
    });

    function startAddingRelay(): void {
      isAddingNewRelay.value = true;
      nameError.value = '';
    }

    function requestEdit(): void {}

    async function requestDelete(id: string): Promise<void> {
      await relayStore.deleteRelay(id);
    }

    async function saveNewRelay(): Promise<void> {
      if (!(await validateName())) {
        return;
      }

      await relayStore.addRelay({
        name: newRelayName.value.trim(),
        state: false,
      });
      newRelayName.value = '';
      isAddingNewRelay.value = false;
    }

    const cancelAddingRelay = () => {
      isAddingNewRelay.value = false;
      newRelayName.value = '';
    };

    async function validateName(): Promise<void> {
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

    return {
      relayStore,
      isAddingNewRelay,
      newRelayName,
      nameError,
      startAddingRelay,
      saveNewRelay,
      cancelAddingRelay,
      requestEdit,
      requestDelete,
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
        <relay v-bind:key="relay.id" v-bind:relay="relay" />
      </swipeable-list-item>
    </div>
    <button-default
      v-if="!isAddingNewRelay"
      v-bind:text="'Add new Relay'"
      v-on:onButtonClicked="startAddingRelay"
    />
    <div class="new-relay-form" v-if="isAddingNewRelay">
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
  </div>
</template>

<style scoped>
.relays {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .new-relay-form {
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
}
</style>
