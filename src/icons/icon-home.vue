<script lang="ts">
import { computed, CSSProperties, defineComponent } from 'vue';

export default defineComponent({
  props: {
    color: { type: String, default: 'white' },
    text: { type: String, default: '' },
  },
  setup(props) {
    const iconHomeStyle = computed<CSSProperties>(() => {
      return {
        '--icon-color': props.color,
      };
    });

    return { iconHomeStyle };
  },
});
</script>

<template>
  <div class="icon-home" v-bind:style="iconHomeStyle">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"
      />
    </svg>
    <div v-if="$props.text && $props.text.length > 0" class="text">
      {{ $props.text }}
    </div>
  </div>
</template>

<style scoped>
.icon-home {
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    fill: var(--icon-color);
    height: 80%;
  }
  .text {
    height: 20%;
    color: var(--icon-color);
    font-size: 11px;
    font-family: Arial, sans-serif;
  }
}
</style>
