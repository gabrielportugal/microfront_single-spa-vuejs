const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    output: {
      libraryTarget: 'system'
    }
  },
  devServer: {
    port: 8800
  },
  transpileDependencies: true
})
