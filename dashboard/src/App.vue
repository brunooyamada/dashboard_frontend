<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <PedidosComponente msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import PedidosComponente from './components/PedidosComponente.vue'

export default {
  name: 'App',
  components: {
    PedidosComponente
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
