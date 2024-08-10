/**
 * Emite um evento personalizado com dados associados.
 * @param {string} name - O nome do evento a ser emitido. 
 * Este nome deve ser único para evitar conflitos com outros eventos.
 * @param {any} data - Os dados a serem enviados com o evento. 
 * Pode ser qualquer tipo de valor, como um objeto, string, número, etc.
 * @example
 * emitEvent('userLoggedIn', { userId: 123, userName: 'John Doe' });
 */
export function emitEvent(name, data) {
  // Cria um novo evento personalizado com os dados fornecidos
  dispatchEvent(new CustomEvent(name, {
    detail: data // Adiciona os dados ao evento
  }));
}

/**
 * Adiciona um ouvinte para um evento personalizado.
 * @param {string} name - O nome do evento para o qual você deseja ouvir. 
 * O nome deve corresponder ao nome do evento emitido.
 * @param {Function} cb - A função de callback que será chamada quando o evento for disparado.
 * Esta função receberá o evento como argumento.
 * @example
 * listenEvent('userLoggedIn', (event) => {
 *   console.log('Usuário logado:', event.detail);
 * });
 */
export function listenEvent(name, cb) {
  // Adiciona um ouvinte de evento que executa a função de callback quando o evento é disparado
  window.addEventListener(name, cb);
}