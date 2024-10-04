<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  PropType,
  ref,
} from 'vue';
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

    onBeforeUnmount(() => {
      clearTimeout(timeoutId);
    });

    const displayName = computed<string>(() => {
      let txt = props.relay.name;

      if (props.relay.maxOnTime_s && props.relay.maxOnTime_s > 0) {
        if (props.relay.state) {
          txt += ' - ' + relayStore.secondsToHHMMSS(countDownSeconds.value);
        } else {
          txt += ' - ' + relayStore.getMaxOnTime(props.relay);
        }
      }

      return txt;
    });

    async function applyArrayState(): Promise<void> {
      if (props.relay.maxOnTime_s === 0) {
        return;
      }

      countDownSeconds.value = calculateRemainingSeconds();

      if (countDownSeconds.value === 0) {
        return;
      }

      if (!props.relay.state) {
        return;
      }

      countDown();
    }

    async function handleToggle(newState: boolean): Promise<void> {
      if (newState && props.relay.maxOnTime_s) {
        countDownSeconds.value = props.relay.maxOnTime_s;
      }

      await relayStore.updateRelayState(props.relay.id, newState);

      if (!props.relay.maxOnTime_s || props.relay.maxOnTime_s === 0) {
        return;
      }

      if (newState) {
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

        if (countDownSeconds.value === 0) {
          return;
        }

        countDown();
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
