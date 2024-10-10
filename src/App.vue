<template>
  <HomeTimer/>

</template>

<script>

import HomeTimer from './components/HomeTimer.vue'

export default {
  name: 'App',
  components: {
    HomeTimer
  }
}
</script>

<style>

body, html{
  overflow: hidden;
}
body{
  background-color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
</style>
