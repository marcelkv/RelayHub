<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useBoardStore } from '../stores/board-store';
import Spinner from '../components/spinner.vue';
import ButtonDefault from '../components/button-default.vue';
import Dropdown from '../components/drop-down.vue';
import { useRouter } from 'vue-router';
import { Board } from '../types/board';
import { usePageStore } from '../stores/page-store';
import PopupAddBoard from '../components/popup-add-board.vue';

export default defineComponent({
  components: { PopupAddBoard, ButtonDefault, Spinner, Dropdown },
  setup() {
    const router = useRouter();
    const pageStore = usePageStore();
    const boardStore = useBoardStore();
    const requestAddNewBoard = ref<boolean>(false);

    onMounted(() => {
      boardStore.loadBoards();
      boardStore.clearSelectedBoard();
    });

    function requestBoard(board: Board): void {
      boardStore.selectedBoard = board;
      pageStore.setNavigateBackPage('boards');
      router.push({ name: 'board' });
    }

    return {
      requestAddNewBoard,
      boardStore,
      requestBoard,
    };
  },
});
</script>

<template>
  <div class="boards">
    <spinner
      v-if="boardStore.loadingBoards"
      v-bind:spinnerSize="'20px'"
      v-bind:withText="true"
    />
    <div v-else>
      <div
        class="board-name-wrapper"
        v-for="board in boardStore.boards"
        v-bind:key="board.id"
        v-on:click="requestBoard(board)"
      >
        {{ board.name }}
      </div>
      <button-default
        v-bind:text="'Add new board'"
        v-on:click="requestAddNewBoard = true"
      />
    </div>
    <popup-add-board
      v-if="requestAddNewBoard"
      v-on:boardAdded="requestAddNewBoard = false"
      v-on:cancel="requestAddNewBoard = false"
    />
  </div>
</template>

<style scoped>
.boards {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .board-name-wrapper {
    height: 40px;
    border: 1px solid lightblue;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 5px;
    padding: 10px 20px;
  }
}
</style>
