<template>
  <div class="home">
    <h1>SingleSpa: {{ singleSpaName || 'Sem nome' }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  
  /**
   * Propriedades recebidas pelo componente.
   * @prop {String} singleSpaName - O nome da aplicação Single SPA.
   * @prop {Object} singleSpa - O objeto Single SPA, que pode conter diversas informações 
   * sobre o estado atual da aplicação.
   */
  props: {
    singleSpaName: String,
    singleSpa: [Object],
  },

  mounted () {
    console.log('Mounted Multiple Home')  // Exibe uma mensagem no console ao montar o componente.
    console.log('singleSpaName', this.singleSpaName)  // Exibe o nome da aplicação Single SPA no console.
    console.log('singleSpa', this.singleSpa)  // Exibe o objeto Single SPA no console.
  }
}
</script>

<style scoped>
</style>