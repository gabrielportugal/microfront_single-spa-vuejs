<template>
  <div id="app">
    <h1>Lista de Itens</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ParcelApp',
  data() {
    return {
      items: [] // Array para armazenar os itens adicionados
    };
  },

  async mounted () {
    // Importa o módulo utils
    const utils = await System.import('@gp/utils');
    
    console.log('Mounted ParcelApp');
    
    // Adiciona um ouvinte para o evento
    utils.listenEvent('@gabrielPortugal/vue-route-parcel/add-item', evt => {
      console.log('ParcelApp', 'evt', evt.detail);
      this.items.push(evt.detail);
    });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

table {
  margin: 0 auto;
  border-collapse: collapse;
  width: 50%;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

tbody tr:hover {
  background-color: #f5f5f5;
}
</style>