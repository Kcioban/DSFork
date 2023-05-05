## Dependências
```cmd
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
yarn add react-native-safe-area-context

```

./babel.config.js
```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
```