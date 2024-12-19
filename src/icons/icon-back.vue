<script lang="ts">
import { computed, CSSProperties, defineComponent } from 'vue';

export default defineComponent({
  props: {
    color: { type: String, default: 'white' },
  },
  setup(props) {
    const iconBackStyle = computed<CSSProperties>(() => {
      return {
        '--icon-color': props.color,
      };
    });

    return { iconBackStyle };
  },
});
</script>

<template>
  <div class="icon-back" v-bind:style="iconBackStyle">
    <svg
      viewBox="0 0 24 24"
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m 16.962167,22.810082 c 0.297374,0.270339 0.75695,0.243306 1.027288,-0.05406 0.270339,-0.297374 0.243307,-0.75695 -0.05406,-1.027288 L 7.4732599,12.266854 c -0.2703387,-0.243306 -0.2703387,-0.594746 0,-0.83805 L 17.935388,2.2913399 c 0.297374,-0.2703387 0.324406,-0.729915 0.0811,-1.0272884 C 17.746147,0.96667721 17.286569,0.93964454 16.989198,1.1829535 L 6.5270732,10.347447 c -0.9191536,0.811018 -0.9461886,2.162712 -0.027033,3.000764 z"
        style="stroke-width: 0.0337924"
      />
    </svg>
  </div>
</template>

<style scoped>
.icon-back {
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    fill: var(--icon-color);
    height: 100%;
  }
}
</style>
