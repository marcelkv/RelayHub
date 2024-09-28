<script lang="ts">
import { defineComponent } from 'vue';
import ButtonGoogle from './button-google.vue';

export default defineComponent({
  name: 'sign-in',
  components: { ButtonGoogle },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="sign-in">
    <div class="relay-hub">RelayHub</div>
    <button-google />
  </div>
</template>

<style scoped>
.sign-in {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .relay-hub {
    color: white;
    font-size: 24px;
    margin: 22px 0;
  }

  .button-google {
    background-color: white;
    width: 220px;
    height: 48px;
  }
}
</style>
