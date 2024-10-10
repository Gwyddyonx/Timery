<template>
  <div class="">
    <h1>Timery</h1>
    <button v-on:click="newScramble">New Scramble</button>
    <Timer ref="timer" />

    <h1>{{ scramble }}</h1>

    <button v-on:click="clearTimes">Clear Times</button>
    <!--div v-for="(time, index) in getTimerTimes()" :key="index">
      {{ time }}
    </div-->

    <Records :times="getTimerTimes()" />
  </div>
</template>

<script>
import Timer from './Timer.vue';
import Utils from '../Services/Utils';
import Records from './Records.vue';

export default {
  name: 'HomeTimer',
  components: {
    Timer,
    Records
  },
  data() {
    return {
      scramble: "",
      times: []
    };
  },
  mounted() {
    this.newScramble();
  },
  methods: {
    newScramble() {
      const util = new Utils();
      this.scramble = util.getScramble();
      this.$refs.timer.restartTimer();
    },
    clearTimes() {
      localStorage.removeItem('times');
      this.$refs.timer.times = [];
    },
    getTimerTimes() {
      return this.$refs.timer ? this.$refs.timer.times : [];
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: monospace;
  font-size: 5em;
}

button {
  width: 250px;
  height: 50px;
  border-radius: 5px;
  background: #d3d3d3;
  border: none;
  color: #2c3d50;
  font-size: 20px;
  font-family: monospace;
}

button:hover {
  background: #f3f3f3;
  color: #1d2936;
  cursor: pointer;
}
</style>
