# Single-SPA

Single-SPA (Single Single Page Application) é uma arquitetura para criar aplicações SPA (Single Page Application) compostas por vários micro frontends. 

Com Single-SPA, você pode dividir sua aplicação em vários projetos independentes, cada um com seu próprio ciclo de vida, e compô-los em uma única aplicação coesa.

## Funcionalidades

- **Micro Frontends**: Permite dividir uma aplicação em vários micro frontends que podem ser desenvolvidos e implantados separadamente.
- **Independência de Tecnologia**: Você pode usar diferentes frameworks e bibliotecas para diferentes micro frontends (por exemplo, React, Vue, Angular).
- **Gerenciamento de Estado**: Cada micro frontend pode ter seu próprio estado e lógica, facilitando a manutenção e escalabilidade.

## Estrutura do Projeto

O projeto é configurado para usar Single-SPA com vários micro frontends registrados. A configuração e a inicialização do Single-SPA são feitas no arquivo de configuração principal.

## Configuração

1. **Instalação das Dependências**

Certifique-se de que todas as dependências necessárias estão instaladas. Navegue para cada pasta de micro frontend e execute `npm install` para instalar as dependências.

2. **Inicie Cada Micro Frontend**

Em cada diretório de micro frontend, execute `npm start` para iniciar o servidor de desenvolvimento. Se estiver trabalhando com um micro frontend Vue.js, utilize `npm run serve:standalone` para iniciar o servidor de desenvolvimento específico para Vue.js.

3. **Iniciando Single SPA**

No projeto principal (single-spa), que contém a configuração do Single-SPA, execute `npm start` para iniciar o servidor de desenvolvimento. Isso iniciará a aplicação Single-SPA e integrará todos os micro frontends.