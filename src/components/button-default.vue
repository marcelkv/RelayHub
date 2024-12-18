<script lang="ts">
import { defineComponent } from 'vue';
import Spinner from './spinner.vue';

export default defineComponent({
  components: { Spinner },
  props: {
    text: { type: String, required: true },
    isLoading: { type: Boolean, required: false, default: false },
  },
  emits: ['onButtonClicked'],
  setup(_props, context) {
    function onClicked(): void {
      context.emit('onButtonClicked');
    }

    return { onClicked };
  },
});
</script>

<template>
  <div
    class="button-default"
    v-bind:class="{ 'is-loading': isLoading }"
    tabindex="0"
    v-on:click="onClicked"
    v-on:keydown.enter="onClicked"
  >
    <spinner v-if="isLoading" v-bind:spinnerSize="'20px'" />
    <div v-else class="button-content">
      <slot name="icon" />
      {{ text }}
    </div>
  </div>
</template>

<style scoped>
.button-default {
  width: 100%;
  height: 40px;
  border: 1px solid var(--lineColor);
  border-radius: 2px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  outline: none;
  background-color: inherit;
  box-shadow: none;
  transition: background-color 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
    background-color: inherit;
  }

  &:focus-visible {
    outline: none;
  }

  &.is-loading {
    cursor: default;
    background-color: var(--lineColor);
  }
}

.button-default::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  pointer-events: none;
}

.button-default:active {
  background-color: inherit !important;
  box-shadow: none !important;
}
</style>
