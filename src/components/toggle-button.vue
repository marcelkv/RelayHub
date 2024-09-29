<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'ToggleButton',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const isActive = ref(props.modelValue);

    watch(
      () => props.modelValue,
      newValue => {
        isActive.value = newValue;
      }
    );

    const toggleSwitch = () => {
      isActive.value = !isActive.value;
      emit('update:modelValue', isActive.value);
    };

    return { isActive, toggleSwitch };
  },
});
</script>

<template>
  <div
    class="toggle-switch"
    v-bind:class="{ active: isActive }"
    v-on:click="toggleSwitch"
  >
    <div class="switch"></div>
  </div>
</template>

<style scoped>
.toggle-switch {
  width: 50px;
  height: 25px;
  background-color: #ccc;
  border-radius: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 3px;
  transition: background-color 0.3s ease;
}

.toggle-switch.active {
  background-color: #028700;
}

.switch {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s ease;
  transform: translateX(0);
}

.toggle-switch.active .switch {
  transform: translateX(24px);
}
</style>
