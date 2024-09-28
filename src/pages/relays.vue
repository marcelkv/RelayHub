<script lang="ts">
import { defineComponent } from 'vue';
import PageTitle from '../components/page-title.vue';

export default defineComponent({
  components: { PageTitle },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="relays">
    <page-title v-bind:title="'Relays'" />
  </div>
</template>

<style scoped>
.relays {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
