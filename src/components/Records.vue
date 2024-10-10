<template>
  <div class="records-container">

    <div>
      <div class="resume">
        <div class="ao-container">
          <span class="tittle ao">Current</span>
          <span class="ao">&nbsp;Time: {{ getCurrentTime(0) }}</span>
          <span class="ao">&nbsp;&nbsp;Ao5: {{ getAo(5) }}</span>
          <span class="ao">&nbsp;Ao12: {{ getAo(12) }}</span>
          <span class="ao">Ao100: {{ getAo(100) }}</span>
        </div>
        <div class="ao-best">
          <span class="tittle ao">Best</span>
          <span class="ao">&nbsp;&nbsp;Time: {{ getAo(5) }}</span>
          <span class="ao">&nbsp;&nbsp;&nbsp;Ao5: {{ getAo(5) }}</span>
          <span class="ao">&nbsp;&nbsp;Ao12: {{ getAo(12) }}</span>
          <span class="ao">&nbsp;Ao100: {{ getAo(100) }}</span>
        </div>
      </div>
      <button v-on:click="clearTimes">Clear Times</button>
    </div>



    <!--div class="history">
      <span id="history-title">Solves: {{ times.length }}</span>
      <span v-for="(time, index) in times.toReversed()" :key="index">{{ time }}</span>
    </div-->

    <div class="history">
      <span id="history-title">Solves: {{ times.length }}</span>
      <table class="table">
        <tbody>
          <tr>
            <th class="th1">#</th>
            <th class="th-time">Time</th>
            <th class="th-delete">Delete</th>
          </tr>
          <tr v-for="(time, index) in times.toReversed()" :key="index">
            <td>{{ index }}</td>
            <td>{{ time }}</td>
            <td>X</td>
          </tr>
        </tbody>
      </table>
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
      return this.times[this.times.length - 1]
    },
    getAo(count) {
      if (this.times.length < count) {
        return "N/A"
      }

      let lastSolves = this.times.toReversed().slice(0, count).map(function (t) { return parseFloat(t) })

      //remove de max and min values 
      let min = Math.min(...lastSolves);
      let max = Math.max(...lastSolves);
      lastSolves.splice(lastSolves.indexOf(min), 1);
      lastSolves.splice(lastSolves.indexOf(max), 1);

      console.log(lastSolves, count)
      let avg = lastSolves.reduce((accum, currnt) => {
        return parseFloat(accum) + parseFloat(currnt)
      }, 0) / (count - 2)

      return avg.toFixed(2);

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


button {
  width: 200px;
  height: 40px;
  border-radius: 5px;
  background: #d3d3d3;
  border: none;
  color: #2c3d50;
  font-size: 17px;
  font-family: monospace;
  margin: 20px;
}

button:hover {
  background: #f3f3f3;
  color: #1d2936;
  cursor: pointer;
}

.table {
  overflow-y: auto;
  display: block;
  height: 50vh;
}
</style>
