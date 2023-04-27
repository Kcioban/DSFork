# Navegando entre telas - Aula03

- Login
- Mokups
- Navigation (Telas e Componentes)

## Login
O tutorial a seguir apresenta um App com uma tela de login que se autenticado acessa uma segunta tela com um cardápio dos produtos da cantina da escola.

## Mockups
![Mockup](./mockup.jpg)
O mockup é uma representação gráfica que simula o tamanho, formato, perspectiva, textura, cor e diversos outros detalhes no desenvolvimento de um projeto. Ele é a melhor forma de visualizar o design de maneira clara e realista, sem que ele entre em produção.
<br> Em programação Front-End ou Mobile utilizamos o mesmo conceito para representar dados que futuramente serão recebidos de uma API, ex:
<br>userMock.js
```javascript
const user = {
  username: 'admin',
  password: '1234',
};

export default user;
```
## Navigation (Telas e Componentes)
Para uma aplicação navegar entre telas de forma simples podemos utilizar o componente **Navigation**, para isso instalamos as seguintes dependências.
```cmd
npm install @react-navigation/native
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```