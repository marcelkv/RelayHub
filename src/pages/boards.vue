<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useBoardStore } from '../stores/board-store';
import Spinner from '../components/spinner.vue';
import Board from '../components/board.vue';
import ButtonDefault from '../components/button-default.vue';

export default defineComponent({
  components: { ButtonDefault, Board, Spinner },
  setup() {
    const boardStore = useBoardStore();
    const requestAddNewBoard = ref<boolean>(false);

    onMounted(() => {
      boardStore.loadBoards();
      boardStore.clearSelectedBoard();
    });

    async function requestAddNew(): Promise<void> {

    }

    async function addNewBoard(): Promise<void> {
      await boardStore.addBoardWithPins(name, model, numberPins);
    }

    return {
      boardStore,
      requestAddNewBoard,
      requestAddNew,
      addNewBoard,
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
      <button-default
        v-bind:text="'Add new board'"
        v-on:click="requestAddNew"
      />
    </div>
    <div v-if="requestAddNewBoard" class="add-new-board"></div>
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
