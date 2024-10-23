<template>

  <div class="content-container" color="primary">

    <div class="timer-container">

      <Timer ref="timer" @new-scramble="newScramble" />

    </div>

    <div class="records-container">

      <Records :times="times" @delete-time="deleteTime" @clear-times="clearTimes" />
    </div>

  </div>
</template>

<script>
import Timer from './Timer.vue';
import Utils from '../services/Utils';
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
      times: [],
      toggle_theme: 0
    };
  },
  mounted() {
    this.newScramble();
    this.times = this.$refs.timer ? this.$refs.timer.times : [];
  },
  methods: {
    newScramble() {
      const util = new Utils();
      this.scramble = util.getScramble();
    },
    resetTimer() {
      this.$refs.timer.restartTimer();
    },
    clearTimes() {
      localStorage.removeItem('times');
      this.$refs.timer.times = [];
      this.times = this.$refs.timer.times;
      this.resetTimer()
    },
    deleteTime(index) {
      console.log("deleteTime", this.$refs.timer.times)
      this.$refs.timer.times.splice(index, 1)
    }
  }
};
</script>

<style scoped>
.content-container {
  display: flex;
  height: 80vh;
  width: 100%;
  align-items: center;
  justify-content: center;
}

h1 {
  font-family: monospace;
  font-size: 50px;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: default;
}

.scramble {
  font-size: 26px;
  cursor: default;
}

.clock {
  width: 50px;
  height: 50px;
  fill: #fff;
}

.timer-container {
  width: 45%;
}

.card-main {
  padding: 20px;
  display: flex;
  width: 80%;
}

.records-container {
  height: 80%;
}
</style>
