<template>
  <v-footer class="text-center d-flex flex-column cursor-default" id="footer" color="primary">
    <div>
      <v-btn icon="mdi-github" class="mx-4" variant="text" v-on:click="openGithub"></v-btn>
    </div>

    <div class="pt-0">
      Timery is a free No-ads timer for speedcubers!
      <br>
      Enjoy!
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Timery</strong>
    </div>
  </v-footer>
</template>

<script>

export default {
  data() {
    return {
      theme: 0,
      usetheme: null
    }
  },
  mounted() {
  },
  methods: {
    openGithub() {
      window.location = "https://github.com/Gwyddyonx";
    }
  }
}
</script>
<style>
#footer {
  bottom: 0px;
  position: relative;
  width: 100%;
}

.toggle-theme {
  margin-top: 20px;
  margin-right: 20px;
}
</style>
