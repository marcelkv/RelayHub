<script lang="ts">
import { defineComponent } from 'vue';
import ButtonDefault from './button-default.vue';

export default defineComponent({
  components: { ButtonDefault },
  props: { text: { type: String, required: true } },
  emits: ['yes', 'no'],
  setup(_props, { emit }) {
    function onYes(): void {
      emit('yes');
    }

    function onNo(): void {
      emit('no');
    }

    return { onYes, onNo };
  },
});
</script>

<template>
  <div class="popup-yes-no">
    <div class="popup">
      <label for="name">{{ $props.text }}</label>
      <div class="buttons">
        <button-default v-bind:text="'Yes'" v-on:click="onYes" />
        <button-default v-bind:text="'No'" v-on:click="onNo" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup-yes-no {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  --size: 50px;

  .popup {
    background: #fff;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    width: 320px;
    text-align: center;
    font-family: Arial, sans-serif;
    color: #333;
    overflow-y: auto;
    max-height: calc(100% - 200px);

    label {
      display: block;
      text-align: left;
      font-weight: bold;
      margin-top: 35px;
      margin-bottom: 10px;
    }

    .buttons {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;

      .button-default {
        padding: 8px 12px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        color: white;
        transition: background 0.3s;

        &:first-child {
          margin-right: 5px;
          background-color: red;
        }

        &:last-child {
          margin-left: 5px;
          background-color: green;
        }
      }
    }
  }
}
</style>
