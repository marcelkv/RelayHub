<script lang="ts" xmlns="http://www.w3.org/1999/html">
import { defineComponent } from 'vue';
import IconLightSwitch from '../icons/icon-light-switch.vue';
import IconSchedule from '../icons/icon-schedule.vue';
import IconRaspberry from '../icons/icon-raspberry.vue';

export default defineComponent({
  components: { IconRaspberry, IconSchedule, IconLightSwitch },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="home">
    <div class="tile boards">
      <router-link to="/schedules" class="task">
        <span
          ><icon-raspberry
            v-bind:text="'Boards'"
            v-bind:strokeColor="'deeppink'"
            v-bind:fontSize="'22px'" /></span
      ></router-link>
    </div>
    <div class="tile relays">
      <router-link to="/schedules" class="task">
        <span
          ><icon-light-switch
            v-bind:text="'Relays'"
            v-bind:fontSize="'22px'" /></span
      ></router-link>
    </div>
    <div v-if="false" class="tile groups"><span>Groups</span></div>
    <div class="tile schedules">
      <router-link to="/schedules" class="task">
        <span
          ><icon-schedule
            v-bind:strokeColor="'orange'"
            v-bind:text="'Schedules'"
            v-bind:fontSize="'22px'" /></span
      ></router-link>
    </div>
    <div v-if="false" class="tile more"><span>About</span></div>
  </div>
</template>

<style scoped>
.home {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
  padding: 10px;
  height: 100vh;
  overflow-y: auto;

  /* Hide scrollbar for WebKit browsers (Chrome, Safari, Edge) */
  scrollbar-width: none; /* Firefox */
}

.home::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}

.tile {
  background-color: gray;
  width: 100%;
  padding-bottom: 66.67%; /* Maintain 3:2 aspect ratio (Height = 2/3 of Width) */
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
  cursor: pointer;
}

.tile span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-align: center;
  width: 80px;
}

.boards {
  background-color: deeppink;
}

.relays {
  background-color: lightblue;
}

.groups {
  background-color: lightgreen;
}

.schedules {
  background-color: orange;
}

.more {
  background-color: gray;
}
</style>
