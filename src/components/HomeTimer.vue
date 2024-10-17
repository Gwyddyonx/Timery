<template>
  <div class="main-container">

    <div class="card-main">

      <div class="timer-container">

        <div class="title">
          <h1>Timery</h1>
          <svg xmlns="http://www.w3.org/2000/svg" class="clock" viewBox="0 0 512 512">
            <path
              d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
          </svg>
        </div>

        <Timer ref="timer" @new-scramble="newScramble" />

        <button v-on:click="newScramble()">New Scramble</button>
        <h1 class="scramble">{{ scramble }}</h1>

      </div>

      <div class="records-container">

        <Records :times="getTimerTimes()" @delete-time="deleteTime" @clear-times="clearTimes" />
      </div>
    </div>
    <!--button v-on:click="clearTimes">Clear Times</button-->
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
    },
    resetTimer() {
      this.$refs.timer.restartTimer();
    },
    clearTimes() {
      localStorage.removeItem('times');
      this.$refs.timer.times = [];
      this.resetTimer()
    },
    getTimerTimes() {
      return this.$refs.timer ? this.$refs.timer.times : [];
    },
    deleteTime(index) {
      console.log("deleteTime", this.$refs.timer.times)
      this.$refs.timer.times.splice(index, 1)
    }
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  height: 100vh;
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

button {
  width: 200px;
  height: 40px;
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

.timer-container {
  width: 45%;
}

.card-main {
  background-color: #31313C;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  width: 80%;
}

.records-container{
  height: 80%;
}
</style>
