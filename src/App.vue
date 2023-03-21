<template>
  <header />
  <router-view />
</template>

<script>
// @ is an alias to /src
import header from '@/components/Header.vue'

export default {
  name: 'HomeView',
  components: {
    header
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #fff8e3;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
