<template>
  <div class="hello">
    <h1 :class="timerRunning || isPrepared ? 'green' : ''">{{ time }}</h1>
  </div>
</template>

<script>

export default {
  name: 'TimerComponent',
  data: function () {
    return {
      isPrepared: false,
      timerRunning: false,
      time: 0.00,
      initialTime: new Date(),
      finalTime: new Date(),
      bufferKey: '',
      timesBuffer: 1,
      times: []
    }

  },
  methods: {
    setBlinds() {
      document.addEventListener('keydown', e => {
        if (this.timerRunning) {
          // Stop timer
          this.finalTimer = new Date()
          this.time = ((this.finalTime - this.initialTime) / 1000).toFixed(2)
          this.timerRunning = false

          this.times.push(this.time);
          localStorage.setItem('times',this.times.join('|'))
          return
        }


        if (e.code == "Space" && this.bufferKey == "Space") {
          e.preventDefault();
          this.timesBuffer++
          // Starting timer
        } else {
          this.timesBuffer = 0
        }

        if (this.timesBuffer == 15) {
          this.isPrepared = true
        }

        this.bufferKey = e.code
      })

      document.addEventListener('keyup', e => {
        if (e.code == "Space") {
          e.preventDefault();
          // Starting timer
          if (this.isPrepared) {
            this.initialTime = new Date()
            this.timerRunning = true
            this.isPrepared = false
          }
        }
        this.timesBuffer = 0
      })


      window.setInterval(() => {
        if (this.timerRunning) {
          this.finalTime = new Date()
          //console.log(this.finalTime - this.initialTime,Math.round((this.finalTime - this.initialTime) / 1000, 2))
          this.time = ((this.finalTime - this.initialTime) / 1000).toFixed(2)
        }

      }, 10);

    },
    restartTimer() {
      this.isPrepared = false
      this.timerRunning = false
      this.time = 0.00
      this.initialTime = new Date()
      this.finalTime = new Date()
    }
  },
  mounted() {
    this.setBlinds()
    this.times = localStorage.getItem("times") != undefined ? localStorage.getItem("times").split("|") : [] 
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: digi;
  src: url('@/assets/DS-DIGIT.TTF');
}

@font-face {
  font-family: digi2;
  src: url('@/assets/digital.mono.ttf');
}

h1 {
  /*font-family: digi;*/
  font-family: monospace;
  font-size: 100px;
}

.green {
  color: #28a138;
}
</style>
