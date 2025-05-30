<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SwipeableListItem',
  emits: ['left-action', 'right-action'],
  props: { blockSwipe: { type: Boolean, default: false } },
  setup(props, { emit }) {
    const startX = ref(0);
    const startY = ref(0);
    const translateX = ref(0);
    const startTime = ref(0);
    const thresholdOneHit = ref(false);
    const thresholdTwoHit = ref(false);
    let swipeThreshold = 100;
    let isSwipingHorizontally = ref(false);
    let isDirectionLocked = ref(false);

    const onTouchStart = (e: TouchEvent) => {
      if (props.blockSwipe) {
        return;
      }
      startX.value = e.touches[0].clientX;
      startY.value = e.touches[0].clientY;
      swipeThreshold = (e.currentTarget as HTMLDivElement).clientWidth / 4;
      startTime.value = Date.now();
      isSwipingHorizontally.value = false;
      isDirectionLocked.value = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (props.blockSwipe) {
        return;
      }

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;

      const deltaX = currentX - startX.value;
      const deltaY = currentY - startY.value;

      if (isDirectionLocked.value && isSwipingHorizontally.value) {
        handleHorizontalSwipe(deltaX);
        return;
      }

      if (!isDirectionLocked.value) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          isSwipingHorizontally.value = true;
          isDirectionLocked.value = true;
          handleHorizontalSwipe(deltaX);
        } else {
          isSwipingHorizontally.value = false;
          isDirectionLocked.value = true;
        }
      }
    };

    const handleHorizontalSwipe = (deltaX: number) => {
      translateX.value = deltaX;
      if (Math.abs(translateX.value) > swipeThreshold * 2) {
        thresholdTwoHit.value = true;
      } else if (Math.abs(translateX.value) > swipeThreshold) {
        thresholdTwoHit.value = false;
        thresholdOneHit.value = true;
      } else {
        thresholdTwoHit.value = false;
        thresholdOneHit.value = false;
      }
    };

    const onTouchEnd = () => {
      if (props.blockSwipe || !isSwipingHorizontally.value) {
        return;
      }
      const elapsedTime = Date.now() - startTime.value;
      if (thresholdTwoHit.value && elapsedTime > 1000) {
        if (translateX.value < 0) {
          onRightAction();
        } else {
          onLeftAction();
        }
      }
      translateX.value = 0;
      thresholdTwoHit.value = false;
      thresholdOneHit.value = false;
    };

    const onLeftAction = () => {
      emit('left-action');
    };

    const onRightAction = () => {
      emit('right-action');
    };

    return {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onLeftAction,
      onRightAction,
      translateX,
      thresholdOneHit,
    };
  },
});
</script>

<template>
  <div
    class="swipeable-list-item"
    v-on:touchstart="onTouchStart"
    v-on:touchmove="onTouchMove"
    v-on:touchend="onTouchEnd"
  >
    <div
      class="buttons"
      v-bind:class="{
        'direction-left': translateX > 0,
        'direction-right': translateX < 0,
        'threshold-one-hit': thresholdOneHit,
      }"
    >
      <div class="actions actions-left">
        <slot name="left-action">Edit</slot>
      </div>
      <div class="actions actions-right">
        <slot name="right-action">Delete</slot>
      </div>
    </div>
    <div class="content" :style="{ transform: `translateX(${translateX}px)` }">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.swipeable-list-item {
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.buttons {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  z-index: 0;
  width: 100%;
  --transparency: 0.3;

  &.direction-left {
    --actionColor: rgba(0, 0, 255, var(--transparency));

    &.threshold-one-hit {
      --actionColor: blue;
    }
  }

  &.direction-right {
    --actionColor: rgba(255, 0, 0, var(--transparency));

    &.threshold-one-hit {
      --actionColor: red;
    }
  }

  .actions {
    width: 100%;
    color: white;
    background-color: var(--actionColor);
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 20px;
  }

  .actions-left {
    left: 0;
    margin: 20px 0 20px 5px;
    justify-content: flex-start;
  }

  .actions-right {
    right: 0;
    margin: 20px 5px 20px 0;
    justify-content: flex-end;
  }
}

.content {
  transition: transform 0.3s ease;
  width: 100%;
  background-color: black;
  z-index: 1;
}
</style>
