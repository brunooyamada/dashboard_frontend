<template>
  <div class="container">
    <line-chart v-if="loaded" :chartdata="chartdata" :options="options" />
  </div>
</template>

<script>
  import LineChart from "./Chart";
  import Pedido from '../services/pedidos';

  export default {
    name: "LineChartContainer",
    components: { LineChart },
    data: () => ({
      loaded: false,
      chartdata: null,
      options: null
    }),
    async mounted() {
      this.loaded = false;
      try {
        Pedido.listar().then(resposta => {
          console.log(resposta.data[1]);
          this.options = { responsive: true };
          this.chartdata = resposta.data[1];
        });
        
        this.loaded = true;
      } catch (e) {
        console.error(e);
      }
    }
  };
</script>
