<template>
  <div id="app">
    <h1>Vuejs Multiple Router</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Sobre</router-link> |
      <router-link to="/contact">Contato</router-link>
    </nav>
    <router-view
      :singleSpaName="singleSpaName" :singleSpa="singleSpa"
    />
  </div>
</template>

<script>
export default {
  name: 'AppVue',
  props: {
    singleSpaName: String,
    singleSpa: [Object],
  },
  components: {
  },

  mounted () {
    console.log('MultipleApp mounted')
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
