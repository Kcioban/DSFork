## Dependências
```cmd
yarn add react-native-paper
yarn add react-native-safe-area-context
yarn add react-native-vector-icons
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