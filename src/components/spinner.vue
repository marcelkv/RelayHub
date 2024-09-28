<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    spinnerSize: {
      type: String,
      default: '30px',
    },
    withText: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="spinner">
    <div class="spinner-inner" :style="{ '--spinnerSize': spinnerSize }"></div>
    <div v-if="withText" class="text">Laden...</div>
  </div>
</template>

<style scoped>
.spinner {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
}

.spinner .spinner-inner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #028700;
  border-radius: 50%;
  width: var(--spinnerSize);
  height: var(--spinnerSize);
  animation: spin 1s linear infinite;
}

.spinner .text {
  margin-top: 10px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
