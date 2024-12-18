<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    options: {
      type: Array as () => { value: string; label: string }[],
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Select an option',
    },
    modelValue: {
      type: String,
      default: null,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const isOpen = ref(false);
    const selectedOption = ref<string | null>(props.modelValue);

    function toggleDropdown() {
      isOpen.value = !isOpen.value;
    }

    function selectOption(option: { value: string; label: string }) {
      selectedOption.value = option.value;
      emit('update:modelValue', option.value);
      isOpen.value = false;
    }

    return {
      isOpen,
      selectedOption,
      toggleDropdown,
      selectOption,
    };
  },
});
</script>

<template>
  <div class="custom-dropdown">
    <div class="dropdown-selected" @click="toggleDropdown">
      {{ selectedOption || placeholder }}
      <span class="arrow" :class="{ open: isOpen }">▼</span>
    </div>
    <div v-if="isOpen" class="dropdown-list">
      <div
        v-for="option in options"
        v-bind:key="option.value"
        class="dropdown-item"
        v-bind:class="{ selected: option.value === selectedOption }"
        v-on:click="selectOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-dropdown {
  position: relative;
  width: 100%;
  font-family: Arial, sans-serif;
}

.dropdown-selected {
  box-sizing: border-box;
  color: black;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background: #fff;
}

.arrow {
  transition: transform 0.3s;
}

.arrow.open {
  transform: rotate(180deg);
}

.dropdown-list {
  color: black;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-height: 150px;
  overflow-y: auto;
}

.dropdown-item {
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.2s;
}

.dropdown-item:hover {
  background: #f0f0f0;
}

.dropdown-item.selected {
  font-weight: bold;
  background: #e0e0e0;
}
</style>
