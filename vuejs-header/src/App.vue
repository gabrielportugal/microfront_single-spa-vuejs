<template>
  <section id="app">
    <section class="btns">
      <div class="route-btn" @click="navigateTo('/')">Single SPA</div>
      <div class="route-btn" @click="navigateTo('/single')">VueJS Single</div>
      <div class="route-btn" @click="navigateTo('/multiple')">Multiple</div>
      <div class="route-btn" @click="navigateTo('/route')">Route Parcel</div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'HeaderApp',
  
  mounted () {
    console.log('HeaderApp montado');
  },

  methods: {
    /**
     * Navega para uma rota específica se não estiver já na rota atual.
     * @param {string} route - O caminho da rota para a qual navegar.
     */
    navigateTo(route) {
      if (this.$router.currentRoute.path !== route) {
        this.$router.push(route);
      }
    },
  },
};
</script>

<style>
/* Estilos gerais para o aplicativo */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Estilos para a seção de botões */
.btns {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* Estilos para os botões de rota */
.route-btn {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #42b983;
  margin: 0.5rem 0;
  border-radius: 8px;
  transition: all 0.5s ease;
}

/* Efeito ao passar o mouse sobre os botões de rota */
.route-btn:hover {
  background-color: #3a9e72;
}
</style>