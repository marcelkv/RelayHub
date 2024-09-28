import { defineStore } from 'pinia';
import { ref } from 'vue';

type User = {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL?: string | null;
};

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);

  const setUser = (newUser: User | null) => {
    user.value = newUser;
  };

  return { user, setUser };
});
