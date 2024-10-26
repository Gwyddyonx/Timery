<template>
  <div class="main-container">

    <Toolbar ref="toolbar"/>

    <HomeTimer @new-scramble="newScramble"/>

    <Footer />

  </div>

</template>

<script>
export default {
  name: 'index',
  methods: {
    newScramble(){
      this.$refs.toolbar.newScramble()
    }
  }
}

</script>


<style>
body,
html {
  overflow: hidden;
  height: 100vh;
}

.main-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
</style>
