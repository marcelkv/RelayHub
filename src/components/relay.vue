<script lang="ts">
import { computed, defineComponent, onBeforeMount, PropType, ref } from 'vue';
import { Relay } from '../types/relay';
import ToggleButton from './toggle-button.vue';
import { useRelayStore } from '../stores/relay-store.ts';

export default defineComponent({
  components: { ToggleButton },
  props: {
    relay: { type: Object as PropType<Relay>, required: true },
  },
  setup(props) {
    const relayStore = useRelayStore();
    const countDownSeconds = ref(0);
    let timeoutId: NodeJS.Timeout;

    onBeforeMount(async () => {
      await applyArrayState();
    });

    const displayName = computed<string>(() => {
      let txt = props.relay.name;

      if (props.relay.maxOnTime_s) {
        if (props.relay.maxOnTime_s > 0 && countDownSeconds.value <= 0) {
          txt += ' - ' + relayStore.getMaxOnTime(props.relay);
        } else if (countDownSeconds.value > 0) {
          txt += ' - ' + relayStore.secondsToHHMMSS(countDownSeconds.value);
        }
      }

      return txt;
    });

    async function applyArrayState(): Promise<void> {
      if (props.relay.maxOnTime_s === 0) {
        return;
      }

      const remainingSeconds = calculateRemainingSeconds();
      if (remainingSeconds === 0) {
        if (props.relay.state) {
          await relayStore.updateRelayState(props.relay.id, false);
        }
      } else if (props.relay.state) {
        countDownSeconds.value = remainingSeconds;
        countDown();
      }
    }

    async function handleToggle(newState: boolean): Promise<void> {
      await relayStore.updateRelayState(props.relay.id, newState);

      if (!props.relay.maxOnTime_s || props.relay.maxOnTime_s === 0) {
        return;
      }

      if (newState) {
        countDownSeconds.value = props.relay.maxOnTime_s;
        countDown();
      } else {
        clearTimeout(timeoutId);
        countDownSeconds.value = 0;
      }
    }

    function calculateRemainingSeconds(): number {
      if (!props.relay.turnedOnAt || !props.relay.maxOnTime_s) {
        return 0;
      }

      const endTime =
        props.relay.turnedOnAt.getTime() + props.relay.maxOnTime_s * 1000;
      return Math.max(0, Math.floor((endTime - Date.now()) / 1000));
    }

    function countDown(): void {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(async () => {
        countDownSeconds.value--;

        if (countDownSeconds.value > 0) {
          countDown();
        } else {
          await relayStore.refreshRelay(props.relay.id);
          await applyArrayState();
        }
      }, 1000);
    }

    return { displayName, handleToggle };
  },
});
</script>

<template>
  <div class="relay">
    <div class="name">{{ displayName }}</div>
    <toggle-button
      v-bind:modelValue="$props.relay.state"
      v-on:update:modelValue="handleToggle"
    />
  </div>
</template>

<style scoped>
.relay {
  height: 40px;
  border: 1px solid lightblue;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 5px;
  padding: 10px 0;

  .name {
    margin: 0 10px;
  }

  .toggle-switch {
    margin: 0 10px;
  }
}
</style>
