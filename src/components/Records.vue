<template>
  <div class="hello">
    <div v-for="(time, index) in times.toReversed()" :key="index">
      {{ time }}
    </div>

    Ao5: {{ getAo5() }}


  </div>
</template>

<script>
export default {
  name: 'RecordsTimes',
  props: {
    times: []
  },
  methods: {
    getAo5() {
      if (this.times.length < 5) {
        return "N/A"
      }

      let last5solves = this.times.toReversed().slice(0,5)

      //remove de max and min values 
      let min = Math.min(...last5solves);
      let max = Math.max(...last5solves);
      last5solves.splice(last5solves.indexOf(min), 1);
      last5solves.splice(last5solves.indexOf(max), 1);

      console.log(last5solves)
      let avg5 = last5solves.reduce((accum, currnt) => {
        return parseFloat(accum) +  parseFloat(currnt)
      }, 0) / 3

      return avg5.toFixed(2);

    }
  }
}
</script>

<style scoped></style>
