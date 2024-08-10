<template>
  <section id="app">
    <h1>Formulário de Cadastro</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Nome:</label>
        <input type="text" v-model="form.name" id="name" required />
      </div>
      <button type="submit">Enviar</button>
    </form>

    <!-- Componente Parcel para integração com Single-SPA -->
    <Parcel
      v-on:parcelMounted="parcelMounted()"
      v-on:parcelUpdated="parcelUpdated()"
      :config="parcelConfig"
      :mountParcel="mountParcel"
      :wrapWith="wrapWith"
      :wrapClass="wrapClass"
      :wrapStyle="wrapStyle"
      :parcelProps="getParcelProps()"
    />
  </section>
</template>

<script>
import Parcel from 'single-spa-vue/parcel'
import { mountRootParcel } from 'single-spa'

export default {
  name: 'RouteParcelApp',
  components: {
    Parcel
  },

  data() {
    return {
      parcelConfig: System.import('@gabrielPortugal/vue-parcel'), // Configuração do parcel
      mountParcel: mountRootParcel,
      wrapWith: 'div', // Elemento HTML para encapsular o parcel
      wrapClass: "parcel",
      wrapStyle: {
        outline: '1px solid #42b983'
      },
      //
      form: {
        id: '',
        name: '',
      },
    };
  },

  async mounted () {
    console.log('Mounted RouteParcelApp')
  },

  methods: {
    /**
     * Lida com o envio do formulário, emitindo um evento customizado.
     */
    async handleSubmit() {
      const utils = await System.import('@gp/utils');
      this.form.id = this.generateRandomNumbersAndLetters()
      const objDispatchEvent = Object.assign({}, this.form)
      console.log('Formulário enviado com os dados:', objDispatchEvent);

      utils.emitEvent('@gabrielPortugal/vue-route-parcel/add-item', objDispatchEvent)
      
      this.form.id = '';
      this.form.name = '';
    },

    /**
     * Gera uma string aleatória composta de números e letras.
     * @returns {string} String composta de 3 números e 3 letras.
     */
    generateRandomNumbersAndLetters () {
      const numbers = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)).join('');
      const letters = Array.from({ length: 3 }, () => {
        const charCode = Math.floor(Math.random() * 26) + 65; // Código ASCII para letras maiúsculas A-Z
        return String.fromCharCode(charCode);
      }).join('');
      return numbers + letters
    },

    /**
     * Retorna as propriedades a serem passadas para o parcel.
     * @returns {Object} Propriedades do parcel.
     */
    getParcelProps() {
      return {
        text: `Hello world`
      }
    },

    /**
     * Callback acionado quando o parcel é montado.
     */
    parcelMounted() {
      console.log("Mounted Parcel in RouteParcel");
    },

    /**
     * Callback acionado quando o parcel é atualizado.
     */
    parcelUpdated() {
      console.log("Parcel updated in RouteParcel");
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

/* Estilo para o container do parcel */
.parcel {
  margin-top: 1rem;
  padding: 1rem;
}

form {
  margin: 0 auto;
  max-width: 300px;
  display: flex;
  flex-direction: column;
}

div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #3a9e72;
}
</style>