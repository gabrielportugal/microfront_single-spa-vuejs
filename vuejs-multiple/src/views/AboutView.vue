<template>
  <div class="about">
    <h1>About</h1>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
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
  components: {
  },

  mounted () {
    console.log('Mounted Multiple About')
    console.log('singleSpaName', this.singleSpaName)
    console.log('singleSpa', this.singleSpa)
  }
}
</script>
