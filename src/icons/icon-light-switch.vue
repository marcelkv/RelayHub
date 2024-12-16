<script lang="ts">
import { computed, CSSProperties, defineComponent } from 'vue';

export default defineComponent({
  props: {
    color: { type: String, default: 'white' },
    text: { type: String, default: '' },
    fontSize: { type: String, default: '11px' },
  },
  setup(props) {
    const iconLightSwitchStyle = computed<CSSProperties>(() => {
      return {
        '--icon-color': props.color,
        fontSize: props.fontSize,
      };
    });

    return { iconLightSwitchStyle: iconLightSwitchStyle };
  },
});
</script>

<template>
  <div class="icon-light-switch" v-bind:style="iconLightSwitchStyle">
    <svg
      fill="#000000"
      viewBox="0 0 64 64"
      xml:space="preserve"
      style="
        fill-rule: evenodd;
        clip-rule: evenodd;
        stroke-linejoin: round;
        stroke-miterlimit: 2;
      "
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke-width="0" />
      <g stroke-linecap="round" stroke-linejoin="round" />
      <g>
        <rect
          x="0"
          y="-320"
          width="1280"
          height="800"
          style="fill: none"
        />
        <g transform="matrix(1.3258707,0,0,1.3751367,-10.338119,-12.63741)">
          <path
            d="m 25.022,17.099 c 2.715,-0.012 12.015,0.058 13.952,0 22.08,-0.662 22.961,30.643 0,30.023 -3.488,0.015 -12.792,-0.064 -13.952,0 C 14.663,47.694 7.982,40.3 8.025,31.85 8.067,23.399 15.555,16.13 25.022,17.099 Z M 32.904,32.11 C 33.047,26.747 28.24,22.014 22.889,22.095 c -7.31,0.111 -10.482,6.7 -10.016,10.947 0.625,5.691 5.193,9.06 10.016,9.084 5.536,0.026 9.862,-4.308 10.015,-10.016 z"
            style="fill-rule: nonzero"
          />
        </g>
      </g>
    </svg>
    <div v-if="$props.text && $props.text.length > 0" class="text">
      {{ $props.text }}
    </div>
  </div>
</template>

<style scoped>
.icon-light-switch {
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    height: 80%;
    fill: var(--icon-color);
  }

  .text {
    height: 20%;
    color: var(--icon-color);
    font-family: Arial, sans-serif;
  }
}
</style>
