<template>
  <div class="contact">
    <h1>Contact</h1>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
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
    console.log('Mounted Multiple Contact')
    console.log('singleSpaName', this.singleSpaName)
    console.log('singleSpa', this.singleSpa)
  }
}
</script>
