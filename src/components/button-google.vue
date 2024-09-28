<script lang="ts">
import { defineComponent, ref } from 'vue';
import ButtonDefault from './button-default.vue';
import { useUserStore } from '../stores/user-store.ts';
import { signInWithGoogle } from '../services/auth-service.ts';

export default defineComponent({
  components: { ButtonDefault },
  emits: ['onButtonClicked'],
  props: {},
  setup() {
    const userStore = useUserStore();
    const isLoading = ref(false);

    async function onButtonClicked(): Promise<void> {
      isLoading.value = true;
      try {
        const user = await signInWithGoogle();
        userStore.setUser(user);
      } catch (error) {
        userStore.setUser(null);
        console.error('Failed to sign in:', error);
      }
    }

    return {
      isLoading,
      onButtonClicked,
    };
  },
});
</script>

<template>
  <div class="button-google">
    <ButtonDefault
      text="Sign in mit Google"
      v-bind:isLoading="isLoading"
      v-on:onButtonClicked="onButtonClicked"
    >
      <template v-slot:icon>
        <div class="google-icon" />
      </template>
    </ButtonDefault>
  </div>
</template>

<style scoped>
.button-google {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .google-icon {
    background: url(https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg)
      center center no-repeat;
    width: 50px;
    height: 100%;
  }
}
</style>
