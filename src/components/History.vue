<template>
  <div class="graphic-solves">
    <h3>
      Performance of the last 10 solves
    </h3>
    <v-sheet color="background">
      <v-sparkline color="secondary" line-width="3" :model-value="getLastSolves()" padding="20" smooth="false" auto-draw
        stroke-linecap="round" :labels="getLastSolves()"></v-sparkline>
    </v-sheet>
  </div>
  <div class="history">
    <span id="history-title">Solves: {{ times.length }}</span>
    <table class="table">
      <tbody>
        <tr>
          <th class="th1">#</th>
          <th class="th-time">Time</th>
          <th class="th-time">Ao5</th>
          <th class="th-time">Ao12</th>
          <th class="th-delete">Delete</th>
        </tr>
        <tr v-for="(time, index) in times.toReversed()" :key="index">
          <td>{{ Math.abs(index - times.length) }}</td>
          <td>{{ time.time ?? '' }}</td>
          <td>{{ time.ao5 ?? '' }}</td>
          <td>{{ time.ao12 ?? '' }}</td>
          <td v-on:click="deleteTime(Math.abs(index - times.length) - 1)"><svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512" class="delete-btn">
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg></td>
        </tr>
      </tbody>
    </table>

  </div>

</template>

<script>
export default {
  name: 'RecordsTimes',
  props: {
    times: []
  },
  methods: {
    deleteTime(index) {
      this.$emit("deleteTime", index)
    },
    clearTimes() {
      this.$emit("clearTimes")
    },
    getLastSolves() {
      // Get the last 10 solves to render the graphic
      let lastSolves = this.times
        .slice(-10)
        .map(function (t) {
          return parseFloat(t.time)
        })

      console.log(lastSolves)
      return lastSolves
    }
  }
} 
</script>


<style scoped>
.resume {
  display: flex;
  flex-direction: row;
}

.history {
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow-y: scroll;
  scrollbar-width: none;
}

.history::-webkit-scrollbar {
  display: none;
}

#history-title {
  font-size: 20px;
  margin: 20px;
}

.th1 {
  width: 30px;
}

.th-time {
  width: 70px;
}

.th-delete {
  width: 50px;
}

.tittle {
  font-size: 24px;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
}

.table {
  display: block;
  height: auto;
  max-height: 80%;
}

.delete-btn {
  width: 15px;
  height: 15px;
  fill: #cacaca;
}

.delete-btn:hover {
  cursor: pointer;
  fill: #e4e4e4;
}

.resume-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.graphic-solves {
  width: 100%;
}
</style>
