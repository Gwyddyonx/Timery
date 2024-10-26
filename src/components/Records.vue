<template>
  <div class="resume-container">
    <div class="resume">
      <div class="ao-container">
        <span class="tittle ao">Current</span>
        <div class="ao-field">
          <div class="ao">Time:</div>
          <div class="ao">{{ getCurrentTime().time ?? '' }}</div>
        </div>
        <div class="ao-field">
          <div class="ao">Ao5:</div>
          <div class="ao">{{ getCurrentTime().ao5 ?? '' }}</div>
        </div>
        <div class="ao-field">
          <div class="ao">Ao12:</div>
          <div class="ao">{{ getCurrentTime().ao12 ?? '' }}</div>
        </div>
        <div class="ao-field">
          <div class="ao">Ao100:</div>
          <div class="ao">{{ getCurrentTime().ao100 ?? '' }}</div>
        </div>
      </div>
      <div class="ao-container">
        <span class="tittle ao">Best</span>
        <div class="ao-field">
          <div class="ao">Time:</div>
          <div class="ao">{{ getPB() }}</div>
        </div>
        <div class="ao-field">
          <div class="ao">Ao5:</div>
          <div class="ao">{{ getPBao(5) ?? '-' }}</div>
        </div>
        <div class="ao-field">
          <div class="ao">Ao12:</div>
          <div class="ao">{{ getPBao(12) ?? '-' }}</div>
        </div>
        <div class="ao-field">
          <div class="ao">Ao100:</div>
          <div class="ao">{{ getPBao(100) ?? '-' }}</div>
        </div>

      </div>
    </div>
    <!--button v-on:click="clearTimes">Clear Times</button-->
    <v-btn rounded="lg" v-on:click="clearTimes" color="primary" class="clear-times">Clear Times</v-btn>
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
.resume-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
}

.resume {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
  justify-content: center;
}

.ao-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45%;

}

.ao-field {
  width: 100%;
  display: flex;
}

.ao {
  width: 50%;
  font-size: 20px;
  text-align: end;
}

.ao2 {
  width: 50%;
  font-size: 20px;
  text-align: start;
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


.graphic-solves {
  width: 100%;
}

.clear-times{
  margin-top: 30px;
}
</style>
