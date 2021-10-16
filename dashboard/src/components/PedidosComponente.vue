<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ produtos }}</h2>
    <canvas></canvas>
  </div>
</template>

<script>
import Pedido from '../services/pedidos';

export default {
  name: "PedidosComponente",
  props: {
    msg: String
  },

  data() {
    return {
      produtos: []
    }
  },

  mounted() {
    Pedido.listar().then(resposta => {
      console.log(resposta.data);
      this.produtos = resposta.data[1].pedidos;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
