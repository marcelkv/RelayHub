<script lang="ts">
import { ComponentPublicInstance, defineComponent, onMounted, ref } from 'vue';
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
  },
  emits: ['requestScrollToBottom'],
  setup(_props, context) {
    const relayStore = useRelayStore();
    const isAddingNewRelay = ref(false);
    const editableRelayId = ref('');
    const isVerticallySwiped = ref(false);
    const ref_relayItems = ref<(ComponentPublicInstance | null)[]>([]);
    let startY = 0;
    let startX = 0;

    onMounted(() => {
      relayStore.loadRelays();
    });

    const onTouchStart = (e: TouchEvent) => {
      if (isVerticallySwiped.value) {
        return;
      }

      const touch = e.touches[0];
      startY = touch.clientY;
      startX = touch.clientX;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isVerticallySwiped.value) {
        return;
      }

      const touch = e.touches[0];
      const deltaX = Math.abs(touch.clientX - startX);
      const deltaY = Math.abs(touch.clientY - startY);

      if (deltaY <= deltaX || deltaY <= 40) {
        return;
      }

      isVerticallySwiped.value = true;
      setTimeout(() => context.emit('requestScrollToBottom'));
    };

    function startAddingRelay(): void {
      isAddingNewRelay.value = true;
      setTimeout(() => context.emit('requestScrollToBottom'));
    }

    function requestEdit(id: string): void {
      editableRelayId.value = id;
      const index = relayStore.relays.findIndex(relay => relay.id === id);

      if (!ref_relayItems.value || !ref_relayItems.value[index]) {
        return;
      }

      setTimeout(() =>
        context.emit('requestScrollToBottom', ref_relayItems.value[index]?.$el)
      );
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
      ref_relayItems,
      relayStore,
      isAddingNewRelay,
      editableRelayId,
      isVerticallySwiped,
      startAddingRelay,
      requestEdit,
      requestDelete,
      onEditArrayDone,
      onAddNewArrayDone,
      onTouchStart,
      onTouchMove,
    };
  },
});
</script>

<template>
  <div
    class="relays"
    v-on:touchstart="onTouchStart"
    v-on:touchmove="onTouchMove"
  >
    <spinner
      v-if="relayStore.loading"
      v-bind:spinner-size="'20px'"
      v-bind:with-text="true"
    />
    <div v-if="!relayStore.loading && !relayStore.error">
      <swipeable-list-item
        v-for="relay in relayStore.relays"
        ref="ref_relayItems"
        v-bind:key="relay.id"
        v-bind:blockSwipe="
          editableRelayId.length > 0 || relay.state || isAddingNewRelay
        "
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
      v-if="
        !isAddingNewRelay && isVerticallySwiped && editableRelayId.length === 0
      "
      v-bind:text="'Add new Relay'"
      v-on:onButtonClicked="startAddingRelay"
    />
    <relay-editable
      v-if="
        isAddingNewRelay && isVerticallySwiped && editableRelayId.length === 0
      "
      v-on:isDone="onAddNewArrayDone"
    />
  </div>
</template>

<style scoped>
.relays {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .button-default {
    width: auto;
    min-height: 62px;
    background-color: blueviolet;
  }
}
</style>
