# Tutorial Tela de Login e Tela Principal
Passo a passo para criar um aplicativo React Native com Expo que apresenta uma tela de login e, se a entrada estiver correta, direciona para uma tela principal que contém uma lista de produtos do cardápio da cantina.

- 1. Crie um novo projeto Expo executando o seguinte comando no terminal:
```cmd
npx expo init cardapio
```
- 2. Navegue até a pasta do projeto, instale as dependências e inicie o servidor de desenvolvimento com o comando:
```cmd
cd cardapio
yarn add @react-navigation/native
yarn add react-native-safe-area-context
yarn add react-native-screens
yarn add react-native-svg
yarn add @react-navigation/native-stack
yarn add react-native-mask-input
```
- Execute o projeto no seu navegador web
```cmd
yarn web
```
- Caso solisite mais alguma dependência instale com npx, e novamente execute:
```cmd
npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1
yarn web
```
- Caso queira executar em um dispositivo virtual do Android, Abra seu dispositivo virtual, inicie o expo com o comando a seguir 
```cmd
expo start -a
```
-  3. Depois que o App estiver em execução no navegador, crie a seguinte estrutura de pastas:
```cmd
md source
md source\screens
md source\components
md source\mocks
```
    - 3.1 dentro da pasta  './source/components' crie os arquivos:
        - Login.js
        - Main.js
    - 3.2. dentro da pasta  './source/mocks' crie os arquivos:
        - produtosMock.js
        - userMock.js
    - 3.3. dentro da pasta  './source/screens' crie os arquivos:
        - LoginScreen.js
        - MainScreen.js
- 4. No arquivo **userMock.js** coloque o seguinte codigo
```javascript
const user = {
    username: 'admin',
    password: '1234',
};

export default user;
```
- 5. No arquivo **produtosMock.js** coloque o seguinte codigo
```javascript
import coxinha from '../../assets/imgs/coxinha.png'
import pqueijo from '../../assets/imgs/pqueijo.png'
import pbatata from '../../assets/imgs/pbatata.png'
import hamburgao from '../../assets/imgs/hamburgao.png'
import empada from '../../assets/imgs/empada.png'
import palmito from '../../assets/imgs/palmito.png'

const produtos = [
    {
        id: 1,
        nome: 'Coxinha',
        img: coxinha,
        preco: 7
    },
    {
        id: 2,
        nome: 'Pão de Queijo',
        img: pqueijo,
        preco: 4.5
    },
    {
        id: 3,
        nome: 'Pão de Batata',
        img: pbatata,
        preco: 7
    },
    {
        id: 4,
        nome: 'Hamburguer',
        img: hamburgao,
        preco: 7
    },
    {
        id: 5,
        nome: 'Empada',
        img: empada,
        preco: 7
    },
    {
        id: 6,
        nome: 'Assado de Palmito',
        img: palmito,
        preco: 7
    }
];

export default produtos;
```
- 6. No arquivo **Login.js** coloque o seguinte codigo
```javascript
```
- 7. No arquivo **Main.js** coloque o seguinte codigo
```javascript
```
- 8. No arquivo **navigation.js** coloque o seguinte codigo
```javascript
```
- 9. No arquivo **App.js** coloque o seguinte codigo
```javascript
```