import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref(null); // Reactive user state

  const setUser = newUser => {
    user.value = newUser;
  };

  return { user, setUser };
});
