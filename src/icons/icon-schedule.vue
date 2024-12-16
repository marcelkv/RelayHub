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
  <div class="icon-schedule" v-bind:style="iconHomeStyle">
    <svg
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke="#000000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 14.020182,21.685362 H 1.8335071 A 1.095136,1.0848345 0 0 1 0.74275167,20.622224 V 3.3169452 A 1.0907555,1.0804951 0 0 1 1.8335071,2.2364501 H 19.285596 a 1.0907555,1.0804951 0 0 1 1.090755,1.0804951 v 9.7201178"
        style="stroke-width: 1.30797"
      />
      <line
        x1="0.74275166"
        y1="7.0097213"
        x2="20.376347"
        y2="7.0097213"
        style="stroke-width: 1.30797"
      />
      <line
        x1="5.1714816"
        y1="2.2364504"
        x2="5.1714816"
        y2="0.066781186"
        style="stroke-width: 1.30797"
      />
      <line
        x1="15.667263"
        y1="2.2364504"
        x2="15.667263"
        y2="0.066781186"
        style="stroke-width: 1.30797"
      />
      <ellipse
        cx="17.769928"
        cy="17.775614"
        rx="5.4450164"
        ry="5.3937974"
        style="stroke-width: 1.30797"
      />
      <polyline
        points="45.22 36.7 45.22 45.82 49.57 49.16"
        transform="matrix(0.43805442,0,0,0.43393378,-2.0388941,-1.9423323)"
      />
    </svg>
    <div v-if="$props.text && $props.text.length > 0" class="text">
      {{ $props.text }}
    </div>
  </div>
</template>

<style scoped>
.icon-schedule {
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
