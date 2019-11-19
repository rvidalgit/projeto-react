Projeto criado com [Create React App](https://github.com/facebook/create-react-app).

## Scripts

No diretório do projeto você pode executar:

### `yarn start`

Executar a aplicação em modo dev.<br />
Abra [http://localhost:3000](http://localhost:3000) no seu browser.

### `yarn test`

Executar os testes.<br />

### `yarn build`

Executar build da aplicação para o ambiente de produção.<br />

### `yarn deploy`

Executar deploy da aplicação no git hub pages.<br />

## Dependências
* "@material-ui/core": "^4.6.1"
* "@material-ui/icons": "^4.5.1"
* "gh-pages": "^2.1.1"
* "react": "^16.12.0"
* "react-dom": "^16.12.0"
* "react-redux": "^7.1.3"
* "react-scripts": "3.2.0"
* "redux": "^4.0.4"
* "redux-saga"
     
 ## Dev. Dependências
* "flow-bin": "^0.112.0"
* "jest": "^24.9.0"
* "jest-cli": "^24.9.0"
* "puppeteer": "^2.0.0" 

# Estrutura

## Imagens e dados
Se escontram na pasta `public`.
## Componentes
Na pasta components se encontra o componentes/módulos do projeto.
## Componentes Compartilhados
Encontram-se na pasta `shared`.
## Store da aplicação
Se encontra na pasta `reducer`. Nesta pasta se encontra o mainReducer 
onde devem ser registrados os reducers de cada componente.
## Saga
Os sagas do componentes devem ser registrados na pasta `saga` no mainSaga.
