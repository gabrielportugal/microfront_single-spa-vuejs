import { registerApplication, start } from "single-spa";

/**
 * Registra uma aplicação Single-SPA.
 * @param {Object} config - Configurações para a aplicação.
 * @param {string} config.name - O nome da aplicação.
 * @param {Function} config.app - Função que importa o microfrontend.
 * @param {Array<string>|Function} config.activeWhen - Rota(s) onde a aplicação deve estar ativa. 
 * Pode ser uma string ou uma função que retorna um booleano indicando se a aplicação deve estar ativa.
 */
registerApplication({
  name: "@gabrielPortugal/vue-header", // Nome da aplicação
  app: () => System.import("@gabrielPortugal/vue-header"), // Função para importar o microfrontend
  activeWhen: ['/'] // Define que a aplicação será ativa na rota raiz ("/")
});

registerApplication({
  name: "@single-spa/welcome", // Nome da aplicação
  app: () => System.import("@single-spa/welcome"), // Função para importar o microfrontend
  activeWhen: (location) => location.pathname === '/' // Ativa a aplicação somente quando o pathname da URL for "/"
});

registerApplication({
  name: "@gabrielPortugal/vue-single", // Nome da aplicação
  app: () => System.import("@gabrielPortugal/vue-single"), // Função para importar o microfrontend
  activeWhen: (location) => location.pathname === '/single' // Ativa a aplicação somente quando o pathname da URL for "/single"
});

registerApplication({
  name: "@gabrielPortugal/vue-multiple", // Nome da aplicação
  app: () => System.import("@gabrielPortugal/vue-multiple"), // Função para importar o microfrontend
  activeWhen: ["/multiple"] // Define que a aplicação será ativa na rota "/multiple"
});

registerApplication({
  name: "@gabrielPortugal/vue-route-parcel", // Nome da aplicação
  app: () => System.import("@gabrielPortugal/vue-route-parcel"), // Função para importar o microfrontend
  activeWhen: (location) => location.pathname === '/route' // Ativa a aplicação somente quando o pathname da URL for "/route"
});

/**
 * Exemplo de código comentado para registrar outra aplicação:
 * registerApplication({
 *   name: "@owner/name", // Nome da aplicação Navbar
 *   app: () => System.import("@owner/name"), // Função para importar o microfrontend
 *   activeWhen: ["/"], // Ativa a aplicação sempre que a URL contiver "/"
 *   // Ou
 *   activeWhen: (location) => location.pathname === '/', // Ativa a aplicação somente quando o pathname da URL for "/"
 * });
 */

/**
 * Inicia o Single-SPA.
 * 
 * @param {Object} options - Opções de inicialização.
 * @param {boolean} options.urlRerouteOnly - Se `true`, o Single-SPA só reagirá a mudanças de URL, ignorando outras alterações de estado.
 */
start({
  urlRerouteOnly: true, // Garante que o Single-SPA só reagirá a mudanças de URL, ignorando outras alterações de estado
});