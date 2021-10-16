<template>
  <div id="app">
    <h1>DASHBOARD</h1>
    <LineChartContainer />
  </div>
</template>

<script>
import LineChartContainer from './components/ChartContainer'

export default {
  name: 'App',
  components: {
    LineChartContainer
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
