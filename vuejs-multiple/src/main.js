import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

/**
 * Cria os ciclos de vida do Single SPA para a aplicação Vue.js.
 * @type {Object} vueLifecycles - Objeto contendo os métodos de ciclo de vida bootstrap, mount e unmount.
 */
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    /**
     * Função render que é responsável por renderizar o componente principal da aplicação (App.vue).
     * @param {Function} h - Função de renderização (hyperscript) do Vue.js.
     * @returns {VNode} - Retorna o VNode para o componente App, passando as props.
     */
    render(h) {
      return h(App, {
        props: {
          singleSpa: this.singleSpa, // Propriedade singleSpa disponível como prop no App.vue.
          singleSpaName: this.name    // Nome da aplicação disponível como prop no App.vue.
        },
      });
    },
    router, // Adiciona o roteador Vue.js ao Single SPA.
    store,  // Adiciona o Vuex store ao Single SPA.
  },
});

/**
 * Método bootstrap do ciclo de vida do Single SPA.
 * Este método é chamado uma vez, quando a aplicação é inicializada.
 */
export const bootstrap = vueLifecycles.bootstrap;

/**
 * Método mount do ciclo de vida do Single SPA.
 * Este método é chamado toda vez que a aplicação é montada no DOM.
 */
export const mount = vueLifecycles.mount;

/**
 * Método unmount do ciclo de vida do Single SPA.
 * Este método é chamado toda vez que a aplicação é desmontada do DOM.
 */
export const unmount = vueLifecycles.unmount;