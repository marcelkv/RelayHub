<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useBoardStore } from '../stores/board-store';
import Spinner from '../components/spinner.vue';
import Board from '../components/board.vue';

export default defineComponent({
  components: { Board, Spinner },
  setup() {
    const boardStore = useBoardStore();

    onMounted(() => {
      boardStore.loadBoards();
      boardStore.clearSelectedBoard();
    });

    return {
      boardStore,
    };
  },
});
</script>

<template>
  <div class="boards">
    <spinner
      v-if="boardStore.loadingBoards"
      :spinner-size="'20px'"
      :with-text="true"
    />
    <div v-else>
      <board
        v-for="board in boardStore.boards"
        v-bind:key="board.id"
        v-bind:board="board"
        v-bind:pinConfigs="boardStore.pinConfigs"
        v-bind:isSelected="
          !!boardStore.selectedBoard && !boardStore.loadingBoards
        "
      />
    </div>
  </div>
</template>

<style scoped>
.boards {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
