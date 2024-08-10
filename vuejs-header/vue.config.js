const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    output: {
      libraryTarget: 'system' // Configura o build para ser compatível com SystemJS
    }
  },
  devServer: {
    port: 8900 // Define a porta na qual o projeto Vue.js será servido
  },
  transpileDependencies: true
})
