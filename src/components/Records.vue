<template>
  <div class="records-container">

    <div class="resume-container">
      <div class="resume">
        <div class="ao-container">
          <span class="tittle ao">Current</span>
          <span class="ao">&nbsp;Time: {{ getCurrentTime().time ?? '' }}</span>
          <span class="ao">&nbsp;&nbsp;Ao5: {{ getCurrentTime().ao5 ?? '' }}</span>
          <span class="ao">&nbsp;Ao12: {{ getCurrentTime().ao12 ?? '' }}</span>
          <span class="ao">Ao100: {{ getCurrentTime().ao100 ?? '' }}</span>
        </div>
        <div class="ao-best">
          <span class="tittle ao">Best</span>
          <span class="ao">&nbsp;&nbsp;Time: {{ getPB(5) }}</span>
          <span class="ao">&nbsp;&nbsp;&nbsp;Ao5: {{ getPBao(5) ?? '-' }}</span>
          <span class="ao">&nbsp;&nbsp;Ao12: {{ getPBao(12) ?? '-' }}</span>
          <span class="ao">&nbsp;Ao100: {{ getPBao(100) ?? '-' }}</span>
        </div>
      </div>
      <!--button v-on:click="clearTimes">Clear Times</button-->
      <v-btn rounded="lg" v-on:click="clearTimes" color="primary">Clear Times</v-btn>
    </div>

  </div>    

</template>

<script>
export default {
  name: 'RecordsTimes',
  props: {
    times: []
  },
  methods: {
    getCurrentTime() {
      if (this.times.length == 0) {
        return ''
      }

      return this.times[this.times.length - 1]
    },
    getPB() {
      console.log("records-times", this.times)
      let lastSolves = this.times
        .slice()
        .map(function (t) {
          return parseFloat(t.time)
        })
        .toSorted()
        .slice(0, 1)[0]

      return lastSolves
    },
    deleteTime(index) {
      this.$emit("deleteTime", index)
    },
    clearTimes() {
      this.$emit("clearTimes")
    },
    getPBao(howMany) {
      let bestAo = this.times
        .slice()
        .map(function (t) {
          return parseFloat(t["ao" + howMany])
        })
        .toSorted()
        .slice(0, 1)[0]
      return isNaN(bestAo) ? "-" : bestAo.toFixed(2);
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
  margin: 30px;
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

.records-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
}

.ao-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.ao-best {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

.ao {
  font-family: monospace;
  font-size: 20px;
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
.graphic-solves{
  width: 100%;
}
</style>
