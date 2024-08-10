# MICROFRONTEND SINGLE SPA
Este é um projeto de microfrontend onde todas as micro aplicações são desenvolvidas em Vue.js.

## Executando o Single Spa
Para executar este projeto, você deve navegar até cada pasta do microfrontend, rodar ```npm install``` para instalar as dependências necessárias e, em seguida, iniciar os projetos usando o comando apropriado, como ```npm start``` ou ```npm run serve:standalone```, em cada pasta conforme necessário.

### Projetos importantes
Projetos essenciais para o funcionamento adequado do sistema:
- single-spa: Gerenciador de micro frontends.
- utils: Módulo utilitário compartilhado.
- vuejs-header: Cabeçalho para navegação entre aplicações.

## Executando o Single Spa
Para rodar o projeto SingleSpa:

```bash
npm start
```
OBS: A porta padrão está configurada para 9000

## Executando o Single Spa Utils
Para rodar o projeto Utils:

```bash
npm start
```
OBS: A porta padrão está configurada para 9001

## Executando o Projeto Vue.js
Para rodar o projeto Vue.js de forma autônoma durante o desenvolvimento:

```bash
npm run serve:standalone
```

## Rodando o Projeto SingleSPA
Após iniciar todos os projetos, abra o navegador e acesse a URL correspondente.
```bash
localhost:9000
```

## Criar Aplicação Single-SPA
Para criar uma aplicação do Single-SPA, utilize o comando:

```bash
npx create-single-spa
```

Escolha as opções:
- Root Config: para configurar o projeto raiz.
- In-Browser Utility Module: para utilidades do simple-spa
- Application/Parcel: para configurar as micro aplicações.

## Registrando uma Aplicação no Single-SPA
### Arquivo index.ejs
No arquivo index.ejs do projeto raiz, adicione a importação do seu microfrontend na seção de imports da tag <script type="systemjs-importmap">:

```html
<script type="systemjs-importmap">
{
  "imports": {
    "@owner/appName": "//url/js/app.js" // URL para o JavaScript compilado do microfrontend
  }
}
</script>
```

### Arquivo de Configuração do Root
No arquivo de configuração do root (@owner-root-config), registre a aplicação:

```javascript
registerApplication({
name: "@owner/appName", // Nome do microfrontend
app: () => System.import("@owner/appName"), // Importa o microfrontend via SystemJS
activeWhen: (location) => location.pathname === '/' // Define quando o microfrontend deve ser ativado
});
```


## Configuração do Vue.js
Para garantir que cada aplicação Vue.js seja compatível com o ambiente de microfrontends usando Single-SPA, é necessário configurar o arquivo `vue.config.js` de cada projeto Vue.js da seguinte maneira:

```javascript
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    output: {
      libraryTarget: 'system' // Configura o build para ser compatível com SystemJS
    }
  },
  devServer: {
    port: 8500 // Define a porta na qual o projeto Vue.js será servido
  },
  transpileDependencies: true, // Transpila dependências para compatibilidade
})
```

## Créditos
- Inspiração no projeto do Matheus Castiglioni
- [Github] https://github.com/mahenrique94/video-implementando-micro-front-end-react-single-spa
- [Youtube] https://www.youtube.com/watch?v=68LaXOWwxZI&t=3075s

# Licença
Este projeto está licenciado sob a Licença MIT.